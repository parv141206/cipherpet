import React from "react";

export default function Code({
  title,
  smaller = false,
  children,
}: {
  title?: string;
  smaller?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`flex w-full max-w-full flex-col rounded-md bg-black text-[0.7rem] drop-shadow-2xl drop-shadow-white/10 dark:text-gray-400 ${
        smaller ? "md:text-[0.9rem]" : "md:text-lg"
      }`}
    >
      <div className="relative flex items-center">
        <div className="absolute m-3 flex gap-1">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="h-3 w-3 rounded-full bg-gray-800"></div>
          ))}
        </div>
        <div className="flex w-full items-center justify-center py-1 pt-1.5 text-sm">
          {title}
        </div>
      </div>

      <hr className="text-gray-800" />
      <div className="p-5 break-words">{children}</div>
    </div>
  );
}
