export default class HttpError extends Error {
  message = "there was an error in the server";
  code = "00000";
  statusCode = 500;
  errorObject: object = {};

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  constructor(errorObject: any = {}) {
    super();
    this.errorObject = errorObject;
  }
}
