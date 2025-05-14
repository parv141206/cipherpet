import React from "react";

export default function MinimalCard({
  className,
  smaller = false,
  children,
}: {
  className?: string;
  smaller?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`relative ${className} max-w-full gap-3 rounded-2xl text-[0.7rem] dark:text-gray-400 ${
        smaller ? "md:text-[0.9rem]" : "md:text-lg"
      }`}
    >
      <div className="p-5 break-words">{children}</div>
    </div>
  );
}
