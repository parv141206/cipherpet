"use client";
import React, { useState } from "react";
import { toast, Toaster } from "sonner";
import Modal from "~/components/Modal";
import { decodeString, decrypt, indexToChar } from "~/lib/utils";

export default function Decrypt() {
  const [decryptedText, setDecryptedText] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const encodedString = (
      form.elements.namedItem("input-text") as HTMLInputElement
    ).value;
    const rawPrivateKey = (
      form.elements.namedItem("private-key") as HTMLInputElement
    ).value;

    const privateKey = rawPrivateKey
      .replaceAll("{", "")
      .replaceAll("}", "")
      .split(",")
      .map((val) => parseInt(val.trim()));

    try {
      const encryptedNumbers = decodeString(encodedString);

      const decryptedNumbers = encryptedNumbers.map((num) =>
        decrypt(num, {
          d: privateKey[0]!,
          n: privateKey[1]!,
        }),
      );

      const decryptedText = decryptedNumbers.map(indexToChar).join("");

      setDecryptedText(decryptedText);
      setShowModal(true);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      toast.error("Decryption failed. Check input and key.");
    }
  };

  return (
    <main className="mx-auto flex min-h-screen justify-between px-4 py-10 text-zinc-100 md:container">
      <div className="flex flex-col items-start justify-start">
        <h1 className="font-title mb-8 text-center text-4xl font-bold md:text-5xl">
          Decrypt
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex w-full flex-col gap-6 rounded-2xl border border-stone-800 bg-black p-6 shadow-xl md:w-auto md:max-w-md"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="input-text" className="text-sm font-semibold">
              Encrypted Text (Encoded)
            </label>
            <textarea
              cols={50}
              rows={10}
              id="input-text"
              name="input-text"
              className="rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2 focus:ring-2 focus:ring-gray-500 focus:outline-none"
              placeholder="e.g. aWNsMWB..."
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="private-key" className="text-sm font-semibold">
              Enter Private Key {`{d , n}`}
            </label>
            <input
              id="private-key"
              name="private-key"
              type="text"
              className="rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2 focus:ring-2 focus:ring-gray-500 focus:outline-none"
              placeholder="{13, 33}"
              required
            />
          </div>
          <button
            type="submit"
            className="mt-4 rounded-xl bg-white/10 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-white/15"
          >
            Decrypt
          </button>
        </form>
      </div>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <div className="flex flex-col gap-5 text-zinc-100">
          <h2 className="text-xl font-bold">Decrypted Text:</h2>
          <div className="relative flex flex-col items-start justify-start gap-3 overflow-hidden rounded-md p-3 text-sm">
            <p className="overflow-hidden pr-10 text-ellipsis whitespace-nowrap">
              {decryptedText}
            </p>
            <button
              onClick={() => {
                void navigator.clipboard.writeText(decryptedText);
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
