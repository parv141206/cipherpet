"use client"
import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

type CodeProps = {
  title?: string;
  smaller?: boolean;
  codeSnippets?: {
    ts?: string;
    cpp?: string;
  };
  children?: React.ReactNode;
};

const LANGUAGES = {
  ts: "TypeScript",
  cpp: "C++",
};

export default function Code({ title, smaller = false, codeSnippets, children }: CodeProps) {
  const [language, setLanguage] = useState<"ts" | "cpp">("ts");

  const hasMultiple = codeSnippets?.ts && codeSnippets.cpp;

  return (
    <div
      className={`flex w-full overflow-x-scroll max-w-full flex-col rounded-md black-and-shadow dark:text-gray-300 ${
        smaller ? "text-sm md:text-[0.9rem]" : "text-[0.7rem] md:text-lg"
      }`}
    >
      <div className="relative flex items-center justify-between px-4 py-2">
        <div className="flex gap-1">
          {/*{Array.from({ length: 3 }).map((_, index) => (*/}
            <div  className="h-3 w-3 rounded-full bg-red-500"></div>
            <div  className="h-3 w-3 rounded-full bg-yellow-500"></div>
            <div  className="h-3 w-3 rounded-full bg-green-500"></div>
          {/*))}*/}
        </div>
        {title && <div className="text-sm font-semibold text-center">{title}</div>}
        {hasMultiple && (
          <select
            className="rounded bg-gray-900 px-2 py-1 text-xs text-white"
            value={language}
            onChange={(e) => setLanguage(e.target.value as "ts" | "cpp")}
          >
            {Object.entries(LANGUAGES).map(([lang, label]) => (
              <option key={lang} value={lang}>
                {label}
              </option>
            ))}
          </select>
        )}
      </div>

      <hr className="border-gray-700" />

      <div className="p-4 overflow-x-auto">
        {codeSnippets ? (
          <SyntaxHighlighter
            language={language}
            style={materialDark}
            wrapLongLines
            showLineNumbers
            customStyle={{ backgroundColor: "transparent", padding: 0 }}
          >
            {codeSnippets[language] ?? ""}
          </SyntaxHighlighter>

        ) : (
          children
        )}
      </div>
    </div>
  );
}
