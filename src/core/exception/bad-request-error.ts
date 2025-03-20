import HttpError from "./http-error";

export default class BadRequestException extends HttpError {
  message = "bad request";
  code = "BR0000";
  statusCode = 400;
}
