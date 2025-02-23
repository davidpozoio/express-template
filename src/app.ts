import path from "node:path";
import express from "express";
import globalErrorHandler from "./core/middleware/global-error-handler";
import applicationConfig from "./core/environment/application.config";
import ENV from "./core/environment/environment";
import globalRateLimit from "./core/middleware/global-rate-limit";

const app = express();

app.use(express.json());
app.use(globalRateLimit);
app.use("/", express.static("public/dist"));

app.use(`${ENV.API_PREFIX}/health`, async (req, res) => {
  res.status(200).json({
    message: "success",
  });
});

app.get(`${ENV.API_PREFIX}/*`, (req, res) => {
  res.status(404).json({ message: "route not found" });
});

if (applicationConfig.spa.enable) {
  app.get("/*", (req, res) => {
    res.status(200).sendFile(path.resolve(applicationConfig.spa.index));
  });
}

app.use(globalErrorHandler);

export default app;
