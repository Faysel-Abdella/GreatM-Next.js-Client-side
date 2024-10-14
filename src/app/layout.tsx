import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Great Meat",
  description: "Created by Nexacode - Great Meat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
