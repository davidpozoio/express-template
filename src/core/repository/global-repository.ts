import type {
  CountAndRows,
  FindAllOptions,
  OptionalId,
  QueryOptions,
  UpdateOptions,
} from "../types/repository";

export interface GlobalRepository<T> {
  findAll?(queryOptions: FindAllOptions<T>): Promise<T[]>;
  findOne?(queryOptions: QueryOptions<T>): Promise<T | undefined>;
  findById?(
    id: number | string,
    queryOptions?: QueryOptions<T>,
  ): Promise<T | undefined>;
  findAndCountAll?(queryOptions: FindAllOptions<T>): Promise<CountAndRows<T>>;
  delete?(queryOptions: QueryOptions<T>): Promise<number>;
  update?(queryOptions: UpdateOptions<T>): Promise<Partial<T>>;
  save?(object: OptionalId<T>): Promise<T>;
}
