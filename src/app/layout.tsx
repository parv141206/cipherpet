import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";

export const metadata: Metadata = {
  title: "CipherPet | RSA Encryption Playground",
  description:
    "Generate RSA public and private keys and experiment with encryption and decryption in this interactive and educational tool.",
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    { rel: "apple-touch-icon", url: "/apple-touch-icon.png" },
  ],
  metadataBase: new URL("https://cipherpet.vercel.app/"),
  keywords: [
    "RSA",
    "encryption",
    "decryption",
    "public key",
    "private key",
    "cryptography",
    "CipherPet",
    "web encryption tool",
    "learn RSA",
  ],
  authors: [{ name: "Parv Shah", url: "https://github.com/parv141206" }],
  creator: "Parv Shah",

  openGraph: {
    title: "CipherPet | RSA Encryption Playground",
    description:
      "Explore public-key cryptography with CipherPet. Generate RSA key pairs and perform real-time encryption and decryption.",
    url: "https://cipherpet.vercel.app/",
    siteName: "CipherPet",
    // images: [
    //   {
    //     url: "/og-image.png",
    //     width: 1200,
    //     height: 630,
    //     alt: "CipherPet Preview",
    //   },
    // ],
    type: "website",
  },
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
