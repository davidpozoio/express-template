import HttpError from "./http-error";

export default class NotFoundException extends HttpError {
  message = "resource not found";
  statusCode = 404;
  code = "NF00000";
}
