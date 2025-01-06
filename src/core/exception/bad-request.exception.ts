import HttpError from "./http-error.exception";

export default class BadRequestException extends HttpError {
  message: string = "bad request";
  code: string = "BR0000";
}
