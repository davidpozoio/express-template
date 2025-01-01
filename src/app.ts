import express from "express";
import globalErrorHandler from "./core/middleware/global-error-handler";

const app = express();

app.use(globalErrorHandler);

export default app;
