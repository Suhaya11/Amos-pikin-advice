"use client";

import React from "react";

const Header = () => {
  const [viewprt, setVieport] = React.useState<number>();
  const [menuOpen, setMenuOpen] = React.useState<boolean | undefined>(false);
  React.useEffect(() => {
    setVieport(visualViewport?.width);
  });
  console.log(viewprt);
  if (viewprt && viewprt < 451)
    return (
      <header className="border flex justify-around p-4  w-full top-0">
        <summary
          className={
            menuOpen
              ? "min-w-[451px]:absolute right-10 bg-brown-400"
              : " relative text-right mr-19 absolute right-0 border"
          }
          onClick={(e) => console.log(e)}
          defaultChecked={true}
        >
          <details
            className="absolute text-right"
            onClick={() => (menuOpen ? setMenuOpen(false) : setMenuOpen(true))}
          >
            {" "}
            <ul className="flex  flex-row max-w-[500px]:gap-4 gap-2 flex-wrap justify-around font-black mr-3 border ">
              <li className="navLink">Home</li>
              <li className="navLink">Decition maker</li>
              <li className="navLink">Daily wahala tracker</li>{" "}
              <li className="navLink">Fake ATM simulations</li>
              <li className="navLink">Message translation</li>
              <li className="navLink">time base behaviour app</li>
              <li className="navLink">about me</li>
              <li className="navLink">contact me</li>{" "}
            </ul>
          </details>
        </summary>
      </header>
    );
  if (viewprt && viewprt < 601)
    return (
      <header>
        <ul className="flex flex-row max-w-[500px]:gap-4 gap-12 flex-wrap justify-start  font-black mr-3">
          <li className="navLink">Home</li>
          <li className="navLink">Decition maker</li>
          <li className="navLink">Daily wahala tracker</li>

          <summary
            className={menuOpen ? "absolute right-0 bg-brown-400" : ""}
            onClick={(e) => console.log(e)}
          >
            <details
              onClick={() =>
                menuOpen ? setMenuOpen(false) : setMenuOpen(true)
              }
            >
              {" "}
              <li className="navLink">Fake ATM simulations</li>
              <li className="navLink">Message translation</li>
              <li className="navLink">time base behaviour app</li>
              <li className="navLink">about me</li>
              <li className="navLink">contact me</li>
            </details>
          </summary>
        </ul>
      </header>
    );
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
