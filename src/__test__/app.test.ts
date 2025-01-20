import { describe, test } from "@jest/globals";

import request from "supertest";
import app from "../app";

describe("App", () => {
  test("health", async () => {
    const res = await request(app).get("/health");

    expect(res.statusCode).toBe(200);
  });
});
