import type { GlobalRepository } from "@app/core/repository/global-repository";
import type User from "./user.entity";
import type { QueryOptions } from "@app/core/types/repository";
import MethodNotImplementedException from "@app/core/exception/method-not-implemented";

export default class UserRepository implements GlobalRepository<User> {
  findAll(queryOptions: QueryOptions<User>): Promise<User[]> {
    throw new MethodNotImplementedException();
  }
}
