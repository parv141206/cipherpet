import React from "react";

export default function Button({
  onClick,
  scale = "medium",
  disabled = false,
  children,
                               }: {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  scale?: "small" | "medium" | "large";
  disabled?: boolean;
  children: React.ReactNode;
}) {
  return (
    <button
      className={`${scale === "small" ? "text-md" : scale === "medium" ? "text-lg" : "text-xl"} bg-accent w-fit hover:bg-accent-light disabled:bg-accent-dark relative flex cursor-pointer items-center justify-center rounded-md px-2 py-1 text-black disabled:cursor-not-allowed`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
