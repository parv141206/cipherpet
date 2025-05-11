import React from "react";
import { FaExclamation } from "react-icons/fa";

export default function Info({ message }: { message: string }) {
  return (
    <div className="flex items-center gap-5 rounded-2xl border border-stone-800 p-3">
      <FaExclamation />
      <div>{message}</div>
    </div>
  );
}
