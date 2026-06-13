"use client";

import Link from "next/link";
import React from "react";
import { BiMenu, BiX } from "react-icons/bi";
type myprops = {
  headerOpen: boolean;
  setHeaderOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const Header = ({ headerOpen, setHeaderOpen }: myprops) => {
  const [viewprt, setVieport] = React.useState<number | undefined>();
  const [menuOpen, setMenuOpen] = React.useState<boolean | undefined>(false);
  React.useEffect(() => {
    setVieport(visualViewport?.width);
  }, []);

  if (viewprt && viewprt < 601)
    return (
      <header className="  z-150 sticky top-0">
        <div className={` flex justify-end `}>
          {headerOpen ? (
            <>
              <BiX
                onClick={() => setHeaderOpen(false)}
                size={30}
                className="z-100"
              />
              <ul
                className={`absolute ${headerOpen ? "bg-gray-200" : ""} z-90 right-0 p-5 top-5 capitalize`}
              >
                <li
                  onMouseOut={(e) => e.stopPropagation()}
                  onClick={() => setHeaderOpen(false)}
                >
                  <Link href={"/"}> Home</Link>
                </li>
                <li onClick={() => setHeaderOpen(false)}>
                  <Link href={"/fake-atm"}> fake Atm Simulation </Link>
                </li>
                <li onClick={() => setHeaderOpen(false)}>
                  {" "}
                  <Link href={"/daily-wahala"}>
                    {" "}
                    Daily wahala Tracker{" "}
                  </Link>{" "}
                </li>
                <li onClick={() => setHeaderOpen(false)}>
                  <Link href={"/decision-maker"}> Decision Maker </Link>
                </li>
                <li onClick={() => setHeaderOpen(false)}>
                  <Link href={"/message-trans"}> Message Translation </Link>
                </li>
              </ul>{" "}
            </>
          ) : (
            <BiMenu
              onClick={() => setHeaderOpen(true)}
              className=""
              size={30}
            />
          )}
        </div>{" "}
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
        <ul className="flex flex-row gap-3 flex-wrap justify-around  font-black mr-3">
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
