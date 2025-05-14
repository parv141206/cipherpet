import React from "react";

export default function Card({
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
      className={`flex ${className}  max-w-full flex-col gap-3 rounded-2xl bg-black text-[0.7rem] drop-shadow-2xl dark:text-gray-400 ${
        smaller ? "md:text-[0.9rem]" : "md:text-lg"
      }`}
    >
      <div className="p-5 break-words">{children}</div>
    </div>
  );
}
