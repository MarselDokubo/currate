import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const font = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Currate",
  description: "Manage your workflow across platforms",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${font.className} antialiased`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
