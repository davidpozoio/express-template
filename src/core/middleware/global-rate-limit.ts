import setRateLimit from "express-rate-limit";
import ENV from "../environment/environment";

const globalRateLimit = setRateLimit({
  windowMs: 1000 * 60,
  max: ENV.RATE_LIMIT_MAX,
  message: `you exceeded the global ${ENV.RATE_LIMIT_MAX} per minute`,
  headers: true,
});

export default globalRateLimit;
