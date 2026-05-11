import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

process.env.ASTRO_TELEMETRY_DISABLED = "1";

const astroCli = fileURLToPath(new URL("../node_modules/astro/astro.js", import.meta.url));

for (const command of ["check", "build"]) {
  const result = spawnSync(process.execPath, [astroCli, command], {
    stdio: "inherit",
    env: process.env
  });

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}
