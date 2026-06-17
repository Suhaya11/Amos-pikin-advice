"use client";

import DecisionHeader from "@/src/components/decisionComponents/DecisionHeader";

import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <DecisionHeader />
      {children}
    </>
  );
}
