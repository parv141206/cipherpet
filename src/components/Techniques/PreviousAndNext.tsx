"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
type FolderNode = {
  name: string;
  path: string;
  children?: FolderNode[];
};

type Route = {
  title: string;
  path: string;
};

function flattenFolderTree(
  nodes: FolderNode[],
  basePath = "/techniques",
): Route[] {
  let routes: Route[] = [];

  nodes.forEach((node) => {
    const routePath = `${basePath}/${node.name}`;
    routes.push({
      title: formatTitle(node.name),
      path: routePath,
    });

    if (node.children) {
      routes = routes.concat(flattenFolderTree(node.children, routePath));
    }
  });

  return routes;
}

function formatTitle(slug: string) {
  return slug.replace(/[-_]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

function getPriority(path: string) {
  if (path === "/techniques") return 0;
  const segment = path.split("/")[2];
  if (segment === "symmetric") return 1;
  if (segment === "asymmetric") return 2;
  return 3;
}

export function PreviousAndNext({ currentPath }: { currentPath: string }) {
  const [previous, setPrevious] = useState<Route | undefined>(undefined);
  const [next, setNext] = useState<Route | undefined>(undefined);

  useEffect(() => {
    async function fetchRoutes() {
      try {
        const res = await fetch("/api/sidebar-links/");
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const folderTree: FolderNode[] = await res.json();

        const baseRoute: Route = { title: "Techniques", path: "/techniques" };

        const routes = [baseRoute].concat(flattenFolderTree(folderTree));

        routes.sort((a, b) => {
          const p1 = getPriority(a.path);
          const p2 = getPriority(b.path);
          if (p1 !== p2) return p1 - p2;
          return a.path.localeCompare(b.path);
        });

        const currentIndex = routes.findIndex((r) => r.path === currentPath);

        if (currentIndex !== -1) {
          setPrevious(currentIndex > 0 ? routes[currentIndex - 1] : undefined);
          setNext(
            currentIndex < routes.length - 1
              ? routes[currentIndex + 1]
              : undefined,
          );
        }
      } catch (error) {
        console.error("Failed to fetch sidebar links:", error);
      }
    }

    void fetchRoutes();
  }, [currentPath]);

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex flex-col justify-between gap-5 p-10 md:flex-row">
      {previous ? (
        <Link href={previous.path} onClick={handleScrollToTop}>
          <PreviousAndNextCard title="Previous" content={previous.title} />
        </Link>
      ) : null}
      {next ? (
        <Link href={next.path} onClick={handleScrollToTop}>
          <PreviousAndNextCard title="Next" content={next.title} />
        </Link>
      ) : null}
    </div>
  );
}

export function PreviousAndNextCard({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <div className="bg-with-noise border-accent flex w-fit min-w-40 flex-col rounded-md border p-3 drop-shadow-2xl drop-shadow-black dark:text-gray-400">
      <div className="text-xl">{title}</div>
      <div className="text-md">{content}</div>
    </div>
  );
}


export function PreviousAndNextWrapper() {
  const pathname = usePathname();
  return <PreviousAndNext currentPath={pathname} />;
}