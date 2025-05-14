"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[200] flex w-full items-center justify-center p-4 md:p-5">
      <nav className="flex w-full max-w-screen-xl flex-col justify-center rounded-2xl bg-black p-4 shadow-2xl shadow-white/10 md:flex-row md:items-center md:justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold text-white"
        >
          <Image src="/favicon.ico" alt="logo" width={25} height={25} />
          CipherPet
        </Link>

        {/* Hamburger for mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            <CiMenuFries size={24} />
          </button>
        </div>

        {/* Main nav */}
        <ul
          className={`flex-col items-center gap-6 text-gray-300 md:flex md:flex-row ${isOpen ? "flex" : "hidden"} md:flex`}
        >
          {/* Techniques Dropdown */}
          <li className="relative">
            <Link href={"/techniques"} className="peer text-white hover:text-gray-200">
              Techniques
            </Link>
          </li>

          {/* About */}
          <li>
            <Link href="/about" className="hover:text-white">
              About
            </Link>
          </li>

          {/* GitHub */}
          <li>
            <a
              href="https://github.com/parv141206"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <FaGithub size={20} />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
