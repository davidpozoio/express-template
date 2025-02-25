import DATABASE_ENV from "@app/core/environment/database.env";
import { execa } from "execa";

async function loadPrismaCLI(params: string[]) {
  try {
    const response = await execa("npx", ["prisma", ...params], {
      env: {
        DATABASE_URL: DATABASE_ENV().URL,
      },
    });

    console.log(response.stdout);
    // biome-ignore lint/suspicious/noExplicitAny: <error for execa>
  } catch (error: any) {
    console.log(error.stdout);
    console.log(error.stderr);
  }
}

loadPrismaCLI(process.argv.slice(2));
