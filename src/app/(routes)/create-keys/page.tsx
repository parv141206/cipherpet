"use client";
import React, { useState } from "react";
import Info from "~/components/Info";
import Modal from "~/components/Modal";
import { generateRSAKeys, isRSAPossible } from "~/lib/utils";
import type { Keys } from "~/types/keys";

export default function CreateKeys() {
  const [keys, setKeys] = useState<Keys>({
    publicKey: null,
    privateKey: null,
  });

  const [showModal, setShowModal] = useState(false);
  const [isError, setIsError] = useState(false);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const p = parseInt(
      (form.elements.namedItem("p") as HTMLInputElement).value,
    );
    const q = parseInt(
      (form.elements.namedItem("q") as HTMLInputElement).value,
    );
    if (isRSAPossible(p, q)) {
      const keys: Keys = generateRSAKeys(p, q);

      console.log(keys);
      setKeys(keys);
    } else {
      setIsError(true);
    }
    setShowModal(true);
  };

  return (
    <main className="mx-auto flex min-h-screen justify-between px-4 py-10 text-zinc-100 md:container">
      <div className="flex flex-col items-start justify-start">
        <h1 className="font-title mb-8 text-center text-4xl font-bold md:text-5xl">
          Create Keys
        </h1>

        <form
          onSubmit={handleSubmit}
          className="flex w-full flex-col gap-6 rounded-2xl border border-stone-800 bg-black p-6 shadow-xl md:w-auto md:max-w-md"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="p" className="text-sm font-semibold">
              Enter Prime Number (P)
            </label>
            <input
              id="p"
              name="p"
              type="number"
              className="rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2 focus:ring-2 focus:ring-gray-500 focus:outline-none"
              placeholder="e.g. 23"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="q" className="text-sm font-semibold">
              Enter Prime Number (Q)
            </label>
            <input
              id="q"
              name="q"
              type="number"
              className="rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2 focus:ring-2 focus:ring-gray-500 focus:outline-none"
              placeholder="e.g. 17"
              required
            />
          </div>

          <button
            type="submit"
            className="mt-4 rounded-xl bg-white/10 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-white/15"
          >
            Generate Keys
          </button>
        </form>

        <div className="mt-8 space-y-4 rounded-xl border border-stone-800 bg-black p-6 text-zinc-200 shadow-lg">
          <h2 className="text-2xl font-semibold">
            How we calculate after P and Q
          </h2>
          <p>1. Multiply P and Q to get N. This becomes part of both keys.</p>
          <p>2. Calculate φ(N) = (P - 1) × (Q - 1).</p>
          <p>3. Choose a number E that has no common factors with φ(N).</p>
          <p>
            4. Find D such that D × E ≡ 1 mod φ(N). This is the private key
            part.
          </p>

          <div>
            <p className="font-medium">Final keys:</p>
            <p>Public key: (E, N)</p>
            <p>Private key: (D, N)</p>
          </div>
        </div>
      </div>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        {isError ? (
          <div className="flex flex-col gap-1">
            <div>Can&apos;t create keys.</div>
            <div>
              This can be due to the fact that there are no prime numbers
              between &apos;p&apos; and &apos;q&apos;.
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-5 text-zinc-100">
            <h2 className="text-xl font-bold">Generated Keys</h2>
            <div>
              <span className="font-medium">Public Key:</span>{" "}
              {`{${keys.publicKey?.e}, ${keys.publicKey?.n}}`}
            </div>
            <div>
              <span className="font-medium">Private Key:</span>{" "}
              {`{${keys.privateKey?.d}, ${keys.privateKey?.n}}`}
            </div>
            <Info message="Copy these keys and store them securely to avoid losing access." />
          </div>
        )}
      </Modal>
    </main>
  );
}
