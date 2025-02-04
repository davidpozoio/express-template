import HttpError from "./http-error";

export default class MethodNotImplemented extends HttpError {
  message = "method not implemented";
}
