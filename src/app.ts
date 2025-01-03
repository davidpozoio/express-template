import path from "path";
import express from "express";
import globalErrorHandler from "./core/middleware/global-error-handler";

const app = express();

app.use("/", express.static("public/dist"));

app.use("/health", async (req, res) => {
  res.status(200).json({
    message: "success",
  });
});

app.get("*", (req, res) => {
  res
    .status(200)
    .sendFile(path.join(__dirname, "../", "public/frontend/index.html"));
});

app.use(globalErrorHandler);

export default app;
