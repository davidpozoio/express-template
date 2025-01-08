import { ZodObject } from "zod";
import asyncErrorController from "../utils/async-error-controller";
import ValidationErrorException from "../exception/validation-error";

interface ValidateRequest<T extends {}> {
  type: "params" | "body" | "query";
  schema: ZodObject<T>;
}

const validate = <T extends {}>({ type, schema }: ValidateRequest<T>) => {
  return asyncErrorController(async (req, res, next) => {
    const typeSchema: { [key in ValidateRequest<T>["type"]]: () => any } = {
      body: () => schema.parse(req.body),
      params: () => schema.parse(req.params),
      query: () => schema.parse(req.query),
    };

    try {
      const parsedSchema = typeSchema[type]();
      (res as any)[type] = { ...parsedSchema };
      next();
    } catch (error) {
      throw new ValidationErrorException(error);
    }
  });
};

export default validate;
