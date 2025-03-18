import { CountAndRows } from "../types/repository";

export default class Pagination {
  #page!: number;
  #limit!: number;
  #cursor!: number;

  constructor() {
    this.#page = 1;
    this.#limit = 10;
  }

  of(page: number, limit: number) {
    this.#page = page;
    this.#limit = limit;
  }

  getOffset() {
    return (this.#page - 1) * this.#limit;
  }

  validatePage({ currentRowsLength }: { currentRowsLength: number }): boolean {
    return currentRowsLength !== 0;
  }

  toResponse<T>({ data }: { data: CountAndRows<T> }) {
    return {
      totalRecords: data.count,
      totalPages: Math.ceil(data.count / this.#limit),
      currentPage: this.#page,
      limit: this.#limit,
    };
  }

  get limit() {
    return this.#limit;
  }

  get page() {
    return this.#page;
  }
}
