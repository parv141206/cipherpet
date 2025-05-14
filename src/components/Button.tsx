import React from "react";

export default function Button({
  onClick,
  scale = "medium"
}: {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  scale?: "small" | "medium" | "large";
}) {
  return (
    <button
      className={`${scale === "small" ? "text-md" : scale === "medium" ? "text-lg" : "text-xl"} relative bg-accent text-black rounded-md cursor-pointer flex items-center justify-center px-2 py-1`}
      onClick={onClick}
    >
      Click Me
    </button>
  );
}
