import https, { ServerOptions } from "https";
import express from "express";
import app from "./app";
import sequelize from "./core/config/sequelize.config";
import ENV from "./core/environment/environment";
import { readFileSync } from "fs";
import redirectHttpToHttps from "./core/middleware/redirect-http-to-https";

sequelize
  .authenticate({ retry: { max: 10, timeout: 5000 } })
  .catch(() => {
    console.log("trying to connect to the database...");
  })
  .then(() => {
    console.log("database connected!");

    /// cert options
    const options: ServerOptions = {
      cert: readFileSync(ENV.CERT_SSL_PATH || "", "utf-8"),
      key: readFileSync(ENV.KEY_SSL_PATH || "", "utf-8"),
    };

    const server = https.createServer(options, app);

    server.listen(ENV.HTTPS_PORT, () => {
      console.log(`https server has started in port ${ENV.HTTPS_PORT}`);
    });

    if (ENV.HTTPS_REDIRECT) {
      const httpServer = express();
      httpServer.get("*", redirectHttpToHttps);
      httpServer.listen(ENV.PORT, () => {
        console.log(`http server has started in port ${ENV.PORT}`);
      });
      return;
    }

    app.listen(ENV.PORT, () => {
      console.log(`the server has started in ${ENV.PORT}`);
    });
  });
