"use client";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <header className="flex relative z-30 w-full items-center justify-center p-4 md:p-5">
      <footer className="flex w-full max-w-screen-xl flex-row items-center justify-between rounded-2xl bg-black p-4 shadow-2xl shadow-white/10">
        <div className="flex w-full items-center justify-between text-xl font-bold text-white md:mb-0 md:block md:w-auto">
          CipherPet
        </div>

        <Link
          href={"https://github.com/parv141206"}
          target="_blank"
          className="text-gray-300"
        >
          @parv141206
        </Link>
      </footer>
    </header>
  );
}
