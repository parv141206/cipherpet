"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CiMenuFries } from "react-icons/ci";

type FolderNode = {
  name: string;
  path: string;
  children: FolderNode[];
};

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [folders, setFolders] = useState<FolderNode[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/api/sidebar-links")
      .then((res) => res.json())
      .then((data) => setFolders(data));
  }, []);

  const prettify = (name: string) =>
    name
      .replace(/-/g, " ")
      .replace(/\b\w/g, (l) => l.toUpperCase());

  const renderTree = (nodes: FolderNode[]) => {
    return (
      <ul className="ml-2 space-y-1">
        {nodes.map((node) => {
          if (!node.name.toLowerCase().includes(search.toLowerCase())) return null;

          return (
            <li key={node.path}>
              <Link
                href={`/techniques/${node.path}`}
                className="block px-2 py-1 text-sm text-gray-300 hover:text-white"
              >
                {prettify(node.name)}
              </Link>
              {node.children && node.children.length > 0 && renderTree(node.children)}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:sticky md:left-0 md:top-30 rounded-2xl md:z-50 md:flex md:h-full md:w-64 md:flex-col md:bg-black md:p-4 md:shadow-2xl md:shadow-white/10">
        <div className="mb-4 flex items-center gap-3 text-xl font-bold text-white">
          Techniques
        </div>

        <input
          type="text"
          placeholder="Search techniques..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mb-3 rounded bg-white/10 px-3 py-2 text-md text-white placeholder:text-gray-400 focus:outline-none"
        />

        <div className="overflow-y-auto pr-2">
          {renderTree(folders)}
        </div>
      </aside>

      {/* Mobile Navbar */}
      <header className="sticky top-16 z-[200] flex w-full items-center justify-center p-4 md:hidden">
        <div className="flex w-full flex-col rounded-2xl  p-4 shadow-none shadow-white/10">
          <div className="flex items-center justify-between text-white">
            <Link href="/" className="flex items-center gap-3 text-xl font-bold">
              Techniques
            </Link>
            <CiMenuFries onClick={() => setIsOpen(!isOpen)} className="text-2xl cursor-pointer" />
          </div>

          {isOpen && (
            <div className="mt-4 space-y-3">
              <input
                type="text"
                placeholder="Search techniques..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded bg-white/10 px-3 py-2 text-sm text-white placeholder:text-gray-400 focus:outline-none"
              />
              <div className="max-h-[60vh] overflow-y-auto pr-2">{renderTree(folders)}</div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
