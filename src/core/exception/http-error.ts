export default class HttpError extends Error {
  message: string = "there was an error in the server";
  code: string = "00000";
  statusCode: number = 500;
  errorObject: object = {};

  constructor(errorObject: any = {}) {
    super();
    this.errorObject = errorObject;
  }
}
