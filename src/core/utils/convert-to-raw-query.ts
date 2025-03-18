import type { QueryOptions } from "../types/repository";

const converToRawQuery = <T>(queryOptions: QueryOptions<T>) => {
  // and case where {userId: 1, name: "name"} -> (userId = 1 AND name = 'name')

  const and = andRawQuery(queryOptions.where);
  return and;
};

const andRawQuery = (obj: object | undefined) => {
  const andQuery: string[] = [];
  const orQuery: string[] = [];

  for (const [key, value] of Object.entries(obj || {})) {
    if (key === "OR") {
      for (const query of value) {
        orQuery.push(converToRawQuery(query));
      }
      continue;
    }

    if (Array.isArray(value) && value.length !== 0) {
      andQuery.push(
        `(${key} IN (${value
          .map((value) => {
            if (typeof value === "string") {
              return `'${value}'`;
            }
            if (value instanceof Date) {
              return `'${value.toLocaleDateString()}'`;
            }

            return value;
          })
          .join(",")}))`,
      );
      continue;
    }

    if (typeof value === "string") {
      andQuery.push(`(${key}='${value}')`);
      continue;
    }

    if (value instanceof Date) {
      return `'${value.toLocaleDateString()}'`;
    }

    if (typeof value === "object") {
      for (const [operator, range] of Object.entries(value)) {
        if (operator === "gt") {
          andQuery.push(`(${key} > ${range})`);
        }
        if (operator === "lt") {
          andQuery.push(`(${key} < ${range})`);
        }
        if (operator === "gte") {
          andQuery.push(`(${key} >= ${range})`);
        }

        if (operator === "lte") {
          andQuery.push(`(${key} <= ${range})`);
        }
      }
      continue;
    }

    andQuery.push(`${key}=${value}`);
  }

  return `(${andQuery.join(" AND ")})${orQuery.length !== 0 ? ` OR ${orQuery.join(" OR ")}` : ""}`;
};

const obj: QueryOptions<{ id: number; name: string; createdAt: Date }> = {
  where: {
    OR: [
      { where: { name: "Hello world" } },
      { where: { id: [1, 2, 3], name: "hello" } },
    ],
  },
};

console.log(converToRawQuery(obj));

`
SELECT * FROM user
WHERE id >= 1 AND id <= 10;
`;
