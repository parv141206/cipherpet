"use client";
import React from "react";
import { motion } from "motion/react";
import { CgCode, CgNotes, CgPen } from "react-icons/cg";

interface FeatureCardProps {
  title: string;
  description: React.ReactNode;
  icon: React.ReactNode;
  className?: string;
}

export function FeatureCard({
  title,
  description,
  icon,
  className = "",
}: FeatureCardProps) {
  return (
    <motion.section
      whileInView={{
        // borderBottom: "solid #c084fc 1px",
        borderLeft: "solid #c084fc 1px",
      }}
      initial={{}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ amount: 1 }}
      className={`relative min-h-[45vh] w-full border-l-4 border-neutral-800 p-6 transition-colors duration-300 ${className}`}
    >
      <div className="pointer-events-none absolute top-4 left-4 h-full w-full opacity-10">
        {icon}
      </div>

      <div className="relative z-10">
        <h3 className="font-sub-title mb-2 text-2xl text-white">{title}</h3>
        <p className="text-lg leading-relaxed text-neutral-300">
          {description}
        </p>
      </div>
    </motion.section>
  );
}

export default function Features() {
  return (
    <section className="my-10 flex w-full flex-col items-center justify-center gap-6 px-4 sm:px-8 md:px-16 lg:px-32">
      <FeatureCard
        title="Notes"
        description={
          <>
            Get crisp, exam-ready notes for every topic — yes, you can totally
            write them in your exams! <br />
            📝🎯 So clean, it&apos;s literally free marks!
          </>
        }
        icon={<CgPen className="h-28 w-28 text-yellow-400" />}
      />

      <FeatureCard
        title="Examples"
        description={
          <>
            Crystal-clear examples with every topic to make learning a breeze ✨
            <br />
            Theory&apos;s cool, but examples? That&apos;s where the real “aha!”
            moments happen!
          </>
        }
        icon={<CgNotes className="text-accent h-28 w-28" />}
      />

      <FeatureCard
        title="Code"
        description={
          <>
            Every concept backed by real code — because theory hits harder with
            practice. 🚀
          </>
        }
        icon={<CgCode className="text-accent h-28 w-28" />}
      />

      <FeatureCard
        title="Implementation"
        description={
          <>
            Click, type, boom — implement any cipher and see it in action! ⚙️✨
            <br />
            Your playground for crypto-magic.
          </>
        }
        icon={<CgPen className="text-accent h-28 w-28" />}
      />
    </section>
  );
}
