import React from "react";
import Sidebar from "~/components/Sidebar";

export default function TechniquesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className={"container mx-auto flex md:flex-row flex-col min-h-[100vh] "}>
      <Sidebar />
      <section className="p-10">{children}</section>
    </main>
  );
}
