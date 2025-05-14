"use client";
import React from "react";
import Slide from "../Slide";
import Card from "../Cards/Card";
import { ChevronDown } from "lucide-react";

export default function Introduction() {
  return (
    <section className="my-10 flex flex-col items-start justify-center gap-3 md:w-1/2">
      <Slide className="my-10 flex flex-col gap-5">
        <div className="font-title">CipherPet</div>
        <div className="font-sub-title">What is this sorcery?! 🧙‍♂️✨</div>
        <div className="text-xl text-gray-300">
          Unlock the magic of ciphers — from classics to code, learn it all &
          craft your own spells! 🧙‍♂️✨
        </div>
        <div className="text-md text-xl text-gray-300">
          Whether you&apos;re just curious or a crypto nerd in the making,
          CipherPet guides you through symmetric, asymmetric, substitution, and
          transposition ciphers — with hands-on examples, code walkthroughs, and
          your own implementations. Scroll down and start decoding the world!
          ⬇️✨
        </div>
      </Slide>
    </section>
  );
}
