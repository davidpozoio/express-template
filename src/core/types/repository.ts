import Pagination from "../utils/pagination";

export type OptionalId<T> = Omit<T, "id"> & {
  id?: number | string;
};

export interface QueryOptions<T> {
  where?: Partial<T>;
}

export interface FindAllOptions<T> extends QueryOptions<T> {
  pagination: Pagination;
}

export interface UpdateOptions<T> extends QueryOptions<T> {
  object?: Omit<Partial<T>, "id">;
}

export interface CountAndRows<T> {
  count: number;
  rows: T[];
}
