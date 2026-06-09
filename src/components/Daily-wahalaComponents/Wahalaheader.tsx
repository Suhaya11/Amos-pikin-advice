import Link from "next/link";
import React from "react";

const Wahalaheader = () => {
  return (
    <div>
      <ul className="flex justify-end mr-3 gap-4 ">
        <li>
          <Link href={"/daily-wahala"}>Home</Link>
        </li>
        <li>
          {" "}
          <Link href={"/daily-wahala/new"}>Record New </Link>
        </li>

        <li>
          <Link href={"/daily-wahala/history"}> History</Link>
        </li>
        <li>About</li>
      </ul>
    </div>
  );
};

export default Wahalaheader;
