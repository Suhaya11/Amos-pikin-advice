"use client";

import Header from "@/src/components/Header";
import Link from "next/link";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [headerOpen, setHeaderOpen] = React.useState<boolean>(false);

  return (
    <div>
      <div className="flex justify-end sticky top-2  bg-white p-5 ">
        <ul className=" flex gap-4 justify-end w-fit ">
          <li>
            {" "}
            <Link href={"/message-trans/"}>Chat </Link>
          </li>
          <li>
            {" "}
            <Link href={"/message-trans/req-res/"}>New keyword</Link>
          </li>
          <li>
            {" "}
            <Link href={"/message-trans/about/"}>About</Link>
          </li>
        </ul>
      </div>
      <div onScroll={() => setHeaderOpen(false)}>{children}</div>
    </div>
  );
}
