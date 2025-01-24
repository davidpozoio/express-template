import { describe, test } from "@jest/globals";

import request from "supertest";
import app from "../app";
import ENV from "@app/core/environment/environment";

describe("App", () => {
  test("health", async () => {
    const res = await request(app).get(`${ENV.API_PREFIX}/health`);

    expect(res.statusCode).toBe(200);
  });
});
