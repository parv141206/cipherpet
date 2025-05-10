import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";

export const metadata: Metadata = {
  title: "CipherPet",
  description: "CipherPet",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} dark`}>
      <body className="text-white dark:bg-[#111111]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
