"use client";
import React from "react";
import Slide from "../Slide";
import Card from "../Card";
import { ChevronDown } from "lucide-react"; // Install lucide-react if not already

export default function Decryption() {
  return (
    <section className="my-10 flex flex-col items-start justify-center gap-3">
      <Slide className="my-10 flex w-full flex-col gap-5">
        <div className="w-full justify-between gap-10 md:flex md:p-10">
          <div className="flex flex-col gap-5 md:w-1/2"></div>
          <div className="flex flex-col items-end gap-5 md:w-1/2">
            <div className="font-title text-3xl font-bold">Decryption</div>
            <div className="text-md text-gray-300">
              Use your private key to crack the code and reveal the original
              message hidden inside the encrypted data.
            </div>
            <br />
            <Slide direction="up">
              <Card title="Input">
                <div className="flex flex-col gap-2">
                  <p>
                    🔑 <strong>Private Key:</strong> <code>{`{ d, n }`}</code>
                  </p>
                  <p>
                    🧩 <strong>Encrypted Message:</strong> Cipher text you
                    received
                  </p>
                </div>
              </Card>
            </Slide>

            <div className="flex justify-center text-gray-500">
              <ChevronDown className="h-8 w-8 animate-bounce" />
            </div>
            <Slide direction="up">
              <Card title="Decrypted Output">
                <div>✅ The original secret message — now readable again!</div>
              </Card>
            </Slide>
          </div>
        </div>
      </Slide>
    </section>
  );
}
