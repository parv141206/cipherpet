"use client";
import React, { useState } from "react";
import { toast, Toaster } from "sonner";
import Modal from "~/components/Modal";
import { charToIndex, encodeNumbers, encrypt } from "~/lib/utils";

export default function Encrypt() {
  const [encryptedText, setEncryptedText] = useState("");
  const [showModal, setShowModal] = useState(false);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const rawInputText = (
      form.elements.namedItem("input-text") as HTMLInputElement
    ).value;
    const rawPublicKey = (
      form.elements.namedItem("public-key") as HTMLInputElement
    ).value;
    const publicKey = rawPublicKey
      .replaceAll("{", "")
      .replaceAll("}", "")
      .split(",")
      .map((val) => parseInt(val));
    const encryptedNumbers = rawInputText.split("").map((letter) => {
      const m = charToIndex(letter);
      return encrypt(m, {
        e: publicKey[0]!,
        n: publicKey[1]!,
      });
    });
    // const dec = encryptedText.map((letter) => {
    //   const m = letter;
    //   return indexToChar(
    //     decrypt(m, {
    //       d: 3,
    //       n: 253,
    //     }),
    //   );
    // });
    const encryptedText = encodeNumbers(encryptedNumbers);
    setEncryptedText(encryptedText);
    setShowModal(true);
  };

  return (
    <main className="mx-auto flex min-h-screen justify-between px-4 py-10 text-zinc-100 md:container">
      <div className="flex flex-col items-start justify-start">
        <h1 className="font-title mb-8 text-center text-4xl font-bold md:text-5xl">
          Encrypt
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex w-full flex-col gap-6 rounded-2xl border border-stone-800 bg-black p-6 shadow-xl md:w-auto md:max-w-md"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="p" className="text-sm font-semibold">
              Input Text
            </label>
            <textarea
              cols={50}
              rows={10}
              id="input-text"
              name="input-text"
              className="rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2 focus:ring-2 focus:ring-gray-500 focus:outline-none"
              placeholder="i use arch btw"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="q" className="text-sm font-semibold">
              Enter Prime Number (Q)
            </label>
            <input
              id="public-key"
              name="public-key"
              type="string"
              className="rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2 focus:ring-2 focus:ring-gray-500 focus:outline-none"
              placeholder="{17 , 33}"
              required
            />
          </div>
          <button
            type="submit"
            className="mt-4 rounded-xl bg-white/10 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-white/15"
          >
            Encrypt
          </button>
        </form>
      </div>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <div className="flex flex-col gap-5 text-zinc-100">
          <h2 className="text-xl font-bold">Encrypted Text:</h2>

          <div className="relative flex flex-col items-start justify-start gap-3 overflow-hidden rounded-md p-3 text-sm">
            <p className="overflow-hidden pr-10 text-ellipsis whitespace-nowrap">
              {encryptedText}
            </p>
            <button
              onClick={() => {
                void navigator.clipboard.writeText(encryptedText);
                toast("Copied!");
              }}
              className="cursor-pointer rounded border border-white/5 bg-stone-900 p-2 text-xl hover:bg-stone-800"
            >
              Copy
            </button>
          </div>
        </div>
      </Modal>
      <Toaster theme="dark" />
    </main>
  );
}
