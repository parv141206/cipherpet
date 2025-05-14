import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

type FolderNode = {
  name: string;
  path: string;
  children?: FolderNode[];
};

function getFolderTree(dirPath: string, baseUrl = ""): FolderNode[] {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  return entries
    .filter(entry => entry.isDirectory())
    .map(entry => {
      const entryPath = path.join(dirPath, entry.name);
      const relativePath = path.join(baseUrl, entry.name);
      const children = getFolderTree(entryPath, relativePath);
      return {
        name: entry.name,
        path: relativePath.replace(/\\/g, "/"),
        children: children.length > 0 ? children : undefined,
      };
    });
}

export async function GET() {
  const baseDir = path.join(process.cwd(), "src", "app", "(routes)", "techniques");

  try {
    const tree = getFolderTree(baseDir);
    console.log(tree)
    return NextResponse.json(tree);
  } catch (err) {
    console.error("Error building folder tree:", err);
    return NextResponse.json([]);
  }
}
