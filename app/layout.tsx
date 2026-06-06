"use client";
import "./globals.css";
import Header from "@/src/components/Header";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [headerOpen, setHeaderOpen] = React.useState<boolean>(false);

  return (
    <html lang="en">
      <body className={` antialiased bg-gray-50`}>
        <Header headerOpen={headerOpen} setHeaderOpen={setHeaderOpen} />
        {children}
      </body>
    </html>
  );
}
