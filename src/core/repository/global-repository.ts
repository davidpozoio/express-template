import { QueryOptions } from "../types/repository";

export default class GlobalRepository<T> {
  async findAll(queryOptions: QueryOptions<T>): Promise<T[]> {
    throw new Error("method not implemented");
  }
}
