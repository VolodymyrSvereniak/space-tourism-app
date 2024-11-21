import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import BackgroundImage from "@/components/BackgroundImage";
import { Barlow_Condensed, Barlow, Bellefair } from "next/font/google";

export const metadata: Metadata = {
  title: "Space Tourism",
};

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-barlow-condensed",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-barlow",
});

const bellefair = Bellefair({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bellefair",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${barlowCondensed.variable} ${barlow.variable} ${bellefair.variable}`}
    >
      <body className="w-full h-full">
        <BackgroundImage />
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
