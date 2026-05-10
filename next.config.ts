import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

/** Mutlak proje kökü — üst dizindeki başka lockfile yanlış kök seçmesin diye */
const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: {
    root: projectRoot,
  },
};

export default nextConfig;
