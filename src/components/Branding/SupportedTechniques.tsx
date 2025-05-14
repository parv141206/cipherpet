"use client";
import React from "react";
import Card from "~/components/Cards/Card";
import { motion } from "motion/react";
import Link from "next/link";

const rawCards = [
  {
    label: "Caesar Cipher",
    description: "Shift it like it's hot 🔥",
    href: "/symmetric/substitutional/caesar-cipher",
  },
  {
    label: "Playfair Cipher",
    description: "Pairs that play together, stay together 🎲",
    href: "/symmetric/substitutional/playfair-cipher",
  },
  {
    label: "Hill Cipher",
    description: "Math + Encryption = 🧠💥",
    href: "/symmetric/substitutional/hill-cipher",
  },
  {
    label: "Vigenere Cipher",
    description: "Fancy Caesar with a twist 🎩",
    href: "/symmetric/substitutional/vigenere-cipher",
  },
  {
    label: "OTP Cipher",
    description: "Unbreakable… if you use it right 🕵️",
    href: "/symmetric/substitutional/otp-cipher",
  },
  {
    label: "Rail Fence Cipher",
    description: "️Zig zag encipherment 🎲",
    href: "/symmetric/substitutional/rail-fence",
  },
];

function calculateRectangularPositions(
  cards: typeof rawCards,
  p0: number,
  p1: number,
) {
  const positions = [
    { x: -250, y: -200 }, // Top-left
    { x: 220, y: -180 }, // Top-right (slightly lower)
    { x: 300, y: 50 }, // Right-middle
    { x: 150, y: 220 }, // Bottom-right
    { x: -350, y: 230 }, // Bottom-left (slightly lower)
    { x: -550, y: 50 }, // Left-middle
  ];

  return cards.map((card, index) => ({
    ...card,
    x: positions[index]!.x,
    y: positions[index]!.y,
  }));
}

export default function SupportedTechniques() {
  const cards = calculateRectangularPositions(rawCards, 600, 400);

  return (
    <section className="flex w-full flex-col items-start justify-center gap-8 overflow-x-hidden py-10">
      <div className="font-title text-start">Supported Techniques</div>
      <div
        className={
          "bg-accent-noise absolute left-0 h-screen w-[98vw] rotate-45"
        }
      ></div>
      <div className="relative hidden min-h-[80vh] w-full items-center justify-center md:flex">
        <Card className="absolute z-20 flex items-center justify-center md:h-40">
          <div className="font-title text-center">
            Symmetric <br /> Techniques
          </div>
        </Card>

        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              filter: "blur(10px)",
              x: 0,
              y: 0,
              scale: 0.1,
            }}
            whileInView={{
              opacity: 1,
              filter: "blur(0px)",
              x: card.x,
              y: card.y,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              delay: index * 0.1,
              type: "spring",
            }}
            viewport={{ once: true }}
            className="absolute z-0 w-40"
          >
            <Link href={card.href}>
              <Card className="cursor-pointer text-center drop-shadow-black/75 transition-transform hover:scale-[1.03] md:min-w-96">
                <div className="flex flex-col gap-3">
                  <div className="font-sub-title">{card.label}</div>
                  <div className="text-muted-foreground mt-1 text-sm">
                    {card.description}
                  </div>
                </div>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Mobile View */}
      <div className="flex w-full flex-col items-center justify-center gap-4 md:hidden">
        {rawCards.map((card, index) => (
          <Link key={index} href={card.href} className="w-full">
            <Card className="w-full cursor-pointer text-center transition-transform hover:scale-[1.01]">
              <div className="font-sub-title">{card.label}</div>
              <div className="text-muted-foreground mt-1 text-sm">
                {card.description}
              </div>
            </Card>
          </Link>
        ))}
      </div>
      <div className="font-sub-title text-center w-full">
        Experience real-world RSA and Digital Signatures in action!
      </div>
    </section>
  );
}
