import app from "./app";
import sequelize from "./core/config/sequelize.config";
import ENV from "./core/environment/environment";

sequelize
  .authenticate({ retry: { max: 10, timeout: 5000 } })
  .catch(() => {
    console.log("trying to connect to the database...");
  })
  .then(() => {
    console.log("database connected!");
    app.listen(ENV.PORT, () => {
      console.log(`the server has started in ${ENV.PORT}`);
    });
  });
