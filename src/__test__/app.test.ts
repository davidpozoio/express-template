import { describe, test, expect } from "vitest";
import ENV from "@app/core/environment/environment";
import appTest from "./config/app-test";

describe("App", () => {
  test("health", async () => {
    const app = await appTest({ overrideDatabase: { host: "new_database" } });

    const res = await app.get(`${ENV.API_PREFIX}/health`);

    expect(res.statusCode).toBe(200);
  });
});
