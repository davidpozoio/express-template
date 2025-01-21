import path from "node:path";
import express from "express";
import globalErrorHandler from "./core/middleware/global-error-handler";
import applicationConfig from "./core/environment/application.env";

const app = express();

app.use("/", express.static("public/dist"));

app.use("/health", async (req, res) => {
  res.status(200).json({
    message: "success",
  });
});

if (applicationConfig.spaMode) {
  app.get("*", (req, res) => {
    res
      .status(200)
      .sendFile(path.join(__dirname, "../", "public/frontend/index.html"));
  });
}

app.use(globalErrorHandler);

export default app;
