import { BaseEntity } from "./base-entity";

export type OptionalId<T> = Omit<T, "id"> & {
  id?: number | string;
};

export interface QueryOptions<T> {
  where?: Partial<T>;
}

export interface UpdateOptions<T> extends QueryOptions<T> {
  object?: Omit<T, "id">;
}

export interface CountAndRows<T> {
  count: number;
  rows: T[];
}
