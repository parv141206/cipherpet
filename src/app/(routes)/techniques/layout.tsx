import React, { Suspense } from "react";
import Sidebar from "~/components/Sidebar";
import { PreviousAndNextWrapper } from "~/components/Techniques/PreviousAndNext";
import { Loader } from "~/components/Loader";

export default function TechniquesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className={"container mx-auto flex md:flex-row flex-col min-h-[100vh] "}>
      <Sidebar />
      <section className="md:p-10 p-3">{children}
        <Suspense fallback={<Loader/>}>
          <PreviousAndNextWrapper />
        </Suspense>
      </section>
    </main>
  );
}
