"use client";

import Link from "next/link";
import React from "react";

const Header = () => {
  const [viewprt, setVieport] = React.useState<number>();
  const [menuOpen, setMenuOpen] = React.useState<boolean | undefined>(false);
  React.useEffect(() => {
    setVieport(visualViewport?.width);
  });
  console.log(viewprt);
  if (viewprt && viewprt < 601)
    return (
      <header className="border z-20 flex justify-around p-4  w-full top-0">
        <details
          onToggle={() => {
            menuOpen ? setMenuOpen(false) : setMenuOpen(true);
          }}
          className={
            !menuOpen ? "w-full text-right" : "text-right absolute bg-gray-50"
          }
        >
          {" "}
          <summary
          // className={
          //   menuOpen
          //     ? "min-w-[451px]:absolute right-10 bg-brown-400"
          //     : " relative text-right mr-19  right-0 border"
          // }
          >
            Menu{" "}
          </summary>
          <ul className="flex  flex-row max-w-[500px]:gap-4 gap-2 flex-wrap justify-around font-black mr-3 border ">
            <li className="navLink">
              <Link href={"/"}>Home</Link>
            </li>
            <Link href={"/decision-maker"} className="navLink">
              Decition maker
            </Link>
            <li className="navLink">
              <Link href={"/daily-wahala"}>Daily wahala tracker</Link>
            </li>{" "}
            <li className="navLink">
              <Link href={"/fake-atm"}>Fake ATM simulations</Link>
            </li>
            <li className="navLink">
              <Link href={"/message-trans"}>Message translation</Link>
            </li>
            <li className="navLink">
              <Link href={"/time-greeting"}>time base behaviour app</Link>
            </li>
            <li className="navLink">about me</li>
            <li className="navLink">contact me</li>{" "}
          </ul>
        </details>
      </header>
    );
  //  if (viewprt && viewprt < 601)
  //    return (
  //      <header>
  //        <ul className="flex flex-row max-w-[500px]:gap-4 gap-12 flex-wrap justify-start  font-black mr-3">
  //          <li className="navLink">Home</li>
  //          <li className="navLink">Decition maker</li>
  //          <li className="navLink">Daily wahala tracker</li>
  //          <details
  //            onClick={() =>
  //              menuOpen ? setMenuOpen(false) : setMenuOpen(true)
  //            }
  //          >
  //            <summary
  //              className={menuOpen ? "absolute right-0 bg-brown-400" : ""}
  //              onClick={(e) => console.log(e)}
  //            ></summary>{" "}
  //            <li className="navLink">Fake ATM simulations</li>
  //            <li className="navLink">Message translation</li>
  //            <li className="navLink">time base behaviour app</li>
  //            <li className="navLink">about me</li>
  //            <li className="navLink">contact me</li>
  //          </details>
  //        </ul>
  //      </header>
  //    );
  else
    return (
      <header>
        <ul className="flex flex-row gap-3 flex-wrap justify-start  font-black mr-3">
          <li>Home</li>
          <li>Decition maker</li>
          <li>Daily wahala tracker</li> <li>Fake ATM simulations</li>{" "}
          <li>Message translation</li>
          <li>time base behaviour app</li>
          <li>about me</li>
          <li>contact me</li>
        </ul>
      </header>
    );
};
export default Header;
