import { Model, ModelStatic } from "sequelize";
import { CountAndRows, QueryOptions, UpdateOptions } from "../types/repository";
import { GlobalRepository } from "./global-repository";

export default class SequelizeRepository<T extends {}>
  implements GlobalRepository<T>
{
  constructor(private readonly baseModel: ModelStatic<Model<T, T>>) {}
  async findOne(queryOptions: QueryOptions<T>): Promise<T | undefined> {
    const element = await this.baseModel.findOne({
      where: { ...queryOptions.where },
    });

    return element?.get();
  }

  async findAndCountAll(
    queryOptions: QueryOptions<T>,
  ): Promise<CountAndRows<T>> {
    const data = await this.baseModel.findAndCountAll({
      where: { ...queryOptions.where },
    });

    return { count: data.count, rows: data.rows.map((row) => row.get()) };
  }

  async findAll(queryOptions: QueryOptions<T>): Promise<T[]> {
    const elements = await this.baseModel.findAll({
      where: { ...queryOptions.where },
    });
    return elements.map((element) => element.get());
  }

  async update(queryOptions: UpdateOptions<T>): Promise<Partial<T>> {
    await this.baseModel.update(
      { ...queryOptions.object },
      { where: { ...queryOptions.where } },
    );

    return { ...queryOptions.object };
  }

  async delete(queryOptions: QueryOptions<T>): Promise<number> {
    const count = await this.baseModel.destroy({
      where: { ...queryOptions.where },
    });
    return count;
  }

  async findById(
    id: number | string,
    queryOptions?: QueryOptions<T> | undefined,
  ): Promise<T | undefined> {
    return this.findOne({
      where: { ...queryOptions?.where, id } as unknown as Partial<T>,
    });
  }
}
