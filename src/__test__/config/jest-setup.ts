import applicationConfig from "@app/core/environment/application.env";
import { DATABASE_MODE } from "@app/core/environment/database.env";
import { databaseConnection } from "@app/db/dependencies";
import { beforeAll } from "@jest/globals";

beforeAll(async () => {
  console.log(
    `Enable default database: ${applicationConfig.test.enableDefaultDatabase}, Database mode ${DATABASE_MODE}`,
  );
  if (applicationConfig.test.enableDefaultDatabase)
    await databaseConnection.authenticate({
      maxRetries: 10,
      timeout: 5000,
      databaseMode: "test",
      logging: false,
    });
}, 1000 * 2);

afterAll(async () => {
  await databaseConnection.close();
});
