import path from "node:path";
import express from "express";
import globalErrorHandler from "./core/middleware/global-error-handler";
import applicationConfig from "./core/environment/application.env";
import ENV from "./core/environment/environment";

const app = express();

app.use("/", express.static("public/dist"));

app.use(`${ENV.API_PREFIX}/health`, async (req, res) => {
  res.status(200).json({
    message: "success",
  });
});

app.get(`${ENV.API_PREFIX}/*`, (req, res) => {
  res.status(404).json({ message: "route not found" });
});

if (applicationConfig.spaMode) {
  app.get("/*", (req, res) => {
    res
      .status(200)
      .sendFile(path.join(__dirname, "../", "public/frontend/index.html"));
  });
}

app.use(globalErrorHandler);

export default app;
