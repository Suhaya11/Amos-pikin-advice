import Link from "next/link";
import React from "react";

const DecisionHeader = () => {
  return (
    <div>
      <ul className="flex justify-end mr-3 gap-4 ">
        <li>
          <Link href={"/decision-maker"}>Home</Link>
        </li>
        <li>
          {" "}
          <Link href={"/decision-maker/new"}>New Action</Link>
        </li>

        <li>
          <Link href={"/decision-maker/history"}> History</Link>
        </li>
        <li>
          <Link href={"/decision-maker/about"}> About</Link>
        </li>
      </ul>
    </div>
  );
};

export default DecisionHeader;
