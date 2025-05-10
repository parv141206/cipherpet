"use client";
import React from "react";
import Slide from "../Slide";
import Card from "../Card";
import { ChevronDown } from "lucide-react"; // Install lucide-react if not already

export default function Encryption() {
  return (
    <section className="my-10 flex flex-col items-start justify-center gap-3 md:w-1/2">
      <Slide className="my-10 flex flex-col gap-5">
        <div className="font-title text-5xl font-bold">Behind the Magic</div>
        <div className="text-md text-gray-300">
          Dive into the wizardry of encryption! We harness the legendary RSA
          algorithm — the same math that secures banks, governments, and your
          favorite memes.
        </div>

        <div className="justify-between gap-10 md:flex md:p-10">
          <div className="flex flex-col gap-5">
            <div className="font-title text-3xl font-bold">Encryption</div>
            <div className="text-md text-gray-300">
              Generate your own public-private key pair, encrypt secret
              messages, and send them into the digital void — only to be
              unlocked by the chosen one (aka the private key).
            </div>
            <br />
            <Slide direction="up">
              <Card title="Input">
                <div className="flex flex-col gap-2">
                  <p>
                    🔑 <strong>Public Key:</strong> <code>{`{ e, n }`}</code>
                  </p>
                  <p>
                    ✉️ <strong>Message:</strong> Your secret text
                  </p>
                </div>
              </Card>
            </Slide>

            <div className="flex justify-center text-gray-500">
              <ChevronDown className="h-8 w-8 animate-bounce" />
            </div>
            <Slide direction="up">
              <Card title="Encrypted Output">
                <div>
                  🔐 Encrypted message — only your private key can unlock it!
                </div>
              </Card>
            </Slide>
          </div>
        </div>
      </Slide>
    </section>
  );
}
