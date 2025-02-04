export type DatabaseQueryOptions<T> =
  | { replacements: T; raw?: never }
  // biome-ignore lint/suspicious/noExplicitAny: <You can use any type like number, string, Date, etc>
  | { raw: any[]; replacements?: never };
