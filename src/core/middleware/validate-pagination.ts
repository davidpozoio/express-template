import { z } from "zod";
import validate, { ValidateRequestType } from "../validation/validate";

type PaginationType = "offset" | "cursor";

interface PaginationOptions {
  type: ValidateRequestType;
  paginateType: PaginationType;
}

const validatePagination = ({ type, paginateType }: PaginationOptions) => {
  if (paginateType === "offset") {
    return validate({
      type,
      schema: z.object({
        page: z.coerce.number().int().min(1).max(9999).default(1),
        limit: z.coerce.number().int().min(1).max(100).default(10),
      }),
    });
  }

  return validate({
    type,
    schema: z.object({
      cursor: z.string().max(200),
    }),
  });
};

export default validatePagination;
