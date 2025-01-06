import asyncErrorController from "core/utils/async-error-controller";

const redirectHttpToHttps = asyncErrorController(async (req, res, next) => {
  if (req.secure) {
    return next();
  }
  res.redirect(`https://${req.headers.host}${req.url}`);
});

export default redirectHttpToHttps;
