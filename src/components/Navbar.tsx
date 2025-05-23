"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { FaLock, FaKey, FaInfoCircle, FaUnlock } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[200] flex w-full items-center justify-center p-4 md:p-5">
      <nav className="flex w-full max-w-screen-xl flex-col justify-center rounded-2xl bg-black p-4 shadow-2xl shadow-white/10 md:flex-row md:items-center md:justify-between">
        <div className="flex w-full items-center justify-between text-xl font-bold text-white md:mb-0 md:block md:w-auto">
          <Link href={"/"} className="flex items-center justify-center gap-3">
            <Image src={"/favicon.ico"} alt="logo" width={25} height={25} />
            <div>CipherPet</div>
          </Link>
          <div className="md:hidden">
            <CiMenuFries
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer"
            />
          </div>
        </div>

        <ul
          className={`flex flex-col items-start gap-3 overflow-hidden transition-all duration-300 ease-in-out md:flex md:max-h-none md:flex-row md:items-center md:justify-center md:gap-8 md:opacity-100 ${
            isOpen ? "mt-4 max-h-60 opacity-100 md:mt-0" : "max-h-0 opacity-0"
          } flex-col items-center gap-4 text-gray-300`}
        >
          <Link
            href="/create-keys"
            className="flex items-center gap-2 transition-colors duration-200 hover:text-white"
          >
            <FaKey className="text-gray-500" />
            Create keys
          </Link>
          <Link
            href="/encrypt"
            className="flex items-center gap-2 transition-colors duration-200 hover:text-white"
          >
            <FaLock className="text-gray-500" />
            Encrypt
          </Link>

          <Link
            href="/decrypt"
            className="flex items-center gap-2 transition-colors duration-200 hover:text-white"
          >
            <FaUnlock className="text-gray-500" />
            Decrypt
          </Link>

          <Link
            href="/about"
            className="flex items-center gap-2 transition-colors duration-200 hover:text-white"
          >
            <FaInfoCircle className="text-gray-500" />
            About
          </Link>
        </ul>
      </nav>
    </header>
  );
}
