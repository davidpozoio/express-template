import BadRequestException from "./bad-request-error";

export default class ValidationErrorException extends BadRequestException {
  message = "incorrect values provided";
  code = "BR0001";
}
