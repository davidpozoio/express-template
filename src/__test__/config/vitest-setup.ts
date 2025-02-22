import { afterAll } from "vitest";
import appTest from "./app-test";

afterAll(async () => {
  await appTest();
});
