import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const basePath = path.join(__dirname, "../app/(routes)/techniques");
const outPath = path.join(__dirname, "../data/techniqueRoutes.json");

function formatTitle(slug: string) {
  return slug
    .replace("page.tsx", "")
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function getTechniqueRoutes(dir: string, base = "/techniques"): { title: string; path: string }[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  let routes: { title: string; path: string }[] = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      routes.push(...getTechniqueRoutes(fullPath, `${base}/${entry.name}`));
    } else if (entry.name === "page.tsx") {
      const relativePath = base;
      const slug = path.basename(path.dirname(fullPath));
      routes.push({
        title: formatTitle(slug),
        path: relativePath,
      });
    }
  }

  return routes.sort((a, b) => {
    function getPriority(path: string) {
      if (path === "/techniques") return 0;

      const segment = path.split("/")[2];

      if (segment === "symmetric") return 1;
      if (segment === "asymmetric") return 2;
      return 3;
    }

    const p1 = getPriority(a.path);
    const p2 = getPriority(b.path);
    if (p1 !== p2) return p1 - p2;

    return a.path.localeCompare(b.path);
  });


}

const routes = getTechniqueRoutes(basePath);
fs.writeFileSync(outPath, JSON.stringify(routes, null, 2));

