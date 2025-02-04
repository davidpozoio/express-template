import HttpError from "./http-error";

export default class MethodNotImplementedException extends HttpError {
  message = "method not implemented";
}
