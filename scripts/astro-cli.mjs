import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

process.env.ASTRO_TELEMETRY_DISABLED = "1";

const astroCli = fileURLToPath(new URL("../node_modules/astro/astro.js", import.meta.url));
const result = spawnSync(process.execPath, [astroCli, ...process.argv.slice(2)], {
  stdio: "inherit",
  env: process.env
});

process.exit(result.status ?? 1);
