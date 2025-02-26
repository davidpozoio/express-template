import { execa } from "execa";

interface MigrationOptions {
  overrideUrl: string;
}

export default class MigrateFacade {
  private constructor() {}
  static async migrate({ overrideUrl }: MigrationOptions) {
    const { stdout } = await execa("npm", [
      "run",
      "prisma",
      "--",
      "db",
      "push",
      `--url=${overrideUrl}`,
    ]);

    return stdout;
  }
}
