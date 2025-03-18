import Pagination from "@app/core/utils/pagination";
import { describe, expect, test } from "vitest";

describe("Pagination class", () => {
  test("should set page and limit", () => {
    const pagination = new Pagination();

    pagination.of(1, 100);

    expect(pagination.page).toBe(1);
    expect(pagination.limit).toBe(100);
  });

  test("should getOffset", () => {
    const pagination = new Pagination();

    expect(pagination.getOffset()).toBe(0);
  });

  test("should convert to response", () => {
    const pagination = new Pagination();
    const limit = 10;
    const totalRecords = 10;
    const page = 1;

    pagination.of(page, limit);

    const response = pagination.toResponse({
      data: { count: totalRecords, rows: [] },
    });

    expect(response.totalRecords).toBe(totalRecords);
    expect(response.totalPages).toBe(Math.ceil(10 / limit));
    expect(response.currentPage).toBe(page);
  });
});
