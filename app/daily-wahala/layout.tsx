"use client";

import Wahalaheader from "@/src/components/Daily-wahalaComponents/Wahalaheader";
import Header from "@/src/components/Header";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [headerOpen, setHeaderOpen] = React.useState<boolean>(false);

  return (
    <div className={` antialiased bg-gray-50`}>
      <Wahalaheader />
      {children}
    </div>
  );
}
