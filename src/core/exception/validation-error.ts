import BadRequestException from "./bad-request-error";

export default class ValidationErrorException extends BadRequestException {
  message: string = "incorrect values provided";
  code: string = "BR0001";
}
