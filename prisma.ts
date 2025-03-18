import DATABASE_ENV from "@app/core/environment/database.env";
import { execa } from "execa";

async function loadPrismaCLI(params: string[]) {
  try {
    let url: string | undefined;

    const currentParams = params.filter((param) => {
      if (param.startsWith("--url=")) {
        url = param.split("=")[1];
      }
      return !param.startsWith("--url=");
    });

    const response = await execa("npx", ["prisma", ...currentParams], {
      env: {
        DATABASE_URL: url || DATABASE_ENV().URL,
      },
      shell: true,
      stdio: "inherit",
    });

    console.log(response.stdout);
    // biome-ignore lint/suspicious/noExplicitAny: <error for execa>
  } catch (error: any) {
    console.log(error.stdout);
    console.log(error.stderr);
  }
}

loadPrismaCLI(process.argv.slice(2));
