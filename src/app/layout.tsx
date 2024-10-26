import type { Metadata } from "next";
import "./globals.scss";
import Header from "@/components/Header/Header";
import BackgroundImage from "@/features/BackgroundImage";

export const metadata: Metadata = {
  title: "Space Tourism",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <BackgroundImage />
        <Header />
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
