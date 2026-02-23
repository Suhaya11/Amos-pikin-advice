"use client";
import React from "react";
import { decision, myData } from "../data";

import { CgClose } from "react-icons/cg";

const decisionForm = () => {
  const { decisions } = myData;
  const [choosed, setChoosed] = React.useState<decision[] | null>([
    {
      id: crypto.randomUUID(),
      todo: "call friend 2",
      rank: 10,
      reason: "becouse its very important to be contacting each other",
    },
    {
      id: crypto.randomUUID(),
      todo: "Going to sallah 3",
      rank: 100,
      reason: "becouse sallah is the biggest ibada to muslim",
    },
    {
      id: crypto.randomUUID(),
      todo: "call friend 3",
      rank: 10,
      reason: "becouse its very important to be contacting each other",
    },
  ]);
  const [decided, setDecided] = React.useState<decision | undefined>(undefined);
  const handleDecide = (anArray: decision[]) => {
    setDecided(
      anArray
        ?.slice()
        ?.sort((a, b) => b.rank - a.rank)
        ?.at(0),
    );
  };

  return (
    <>
      <div className="absolute w-screen z-10 h-screen bg-purple-200 top-15 left-0">
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="container border  bg-blue-800 text-white">
          <h1 className="title">Decided choice</h1>

          <br />
          <p>
            Based on some parameters you suppose to to {decided?.todo} becouse{" "}
            {decided?.reason ||
              " Ranks shows that you value it more but if that's not true let me know    "}
            {!decided?.reason && (
              <button className="border rounded-2xl bg-white text-black p-2 cursor-pointer underline">
                Checkout
              </button>
            )}{" "}
          </p>
        </div>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (choosed) handleDecide(choosed);
        }}
      >
        <label htmlFor="chooseAction" className="font-bold">
          your works:{" "}
        </label>
        {choosed?.length ? (
          <span className="flex gap-2 flex-wrap flex-row ">
            {choosed?.map((choice) => (
              <span
                key={choice?.id}
                className="border px-4"
                onClick={() => {
                  setChoosed(choosed?.filter((item) => item.id !== choice.id));
                }}
              >
                <CgClose className="inline cursor-pointer" /> {choice.todo}
              </span>
            ))}
          </span>
        ) : null}
        <summary>
          <details className="absolute overflow-y-scroll">
            {decisions?.map((decision) => (
              <li
                key={decision?.id}
                className="list-none cursor-pointer"
                onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) =>
                  decisions.map((decision) => {
                    if (e.currentTarget.innerText == decision.todo) {
                      if (choosed && !choosed.includes(decision))
                        setChoosed([...choosed, decision]);
                    }
                  })
                }
              >
                {decision.todo}
              </li>
            ))}
          </details>
        </summary>
        <div className="flex justify-end mr-8 ">
          <button
            type="submit"
            className="border px-2 p-1 rounded-md hover:bg-gray-200  hover:text-white"
          >
            Decide
          </button>
        </div>
      </form>
    </>
  );
};

export default decisionForm;
