"use client";
import React from "react";
import { decision, myData, Data } from "../data";

import { CgClose } from "react-icons/cg";

import Decided_Modal from "./Decision-Modal";
import AddAction from "./AddAction";

export const theData = [
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
];
const decisionForm = () => {
  const [decisions, setDecisions] = React.useState<
    decision[] | undefined | null
  >();

  const [choosed, setChoosed] = React.useState<decision[]>([]);
  const [decided, setDecided] = React.useState<decision>();
  const [emptyOptionMessage, setEmptyMessage] = React.useState<string>("");
  const addChoice = (action: decision) => {
    setChoosed([...choosed, action]);
  };
  React.useEffect(() => {
    const localData: Data = JSON.parse(
      localStorage.getItem("AmosIdeaApp") || "{}",
    );
    if (typeof localData == typeof myData) {
      setDecisions(localData.decisions);

      console.log("decisions", localData);
    }
  }, []);
  console.log("hhh", decisions);
  const removeChoice = (action: decision) =>
    setChoosed(choosed?.filter((item) => item.id !== action.id));
  const decidedFunc = (anArray: decision[]) => {
    setDecided(
      anArray
        ?.slice()
        ?.sort((a, b) => b.rank - a.rank)
        ?.at(0),
    );
  };

  return (
    <>
      {decided ? (
        <Decided_Modal decided={decided} />
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            decidedFunc(choosed);
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
                    removeChoice(choice);
                  }}
                >
                  <CgClose className="inline cursor-pointer" /> {choice.todo}
                </span>
              ))}
            </span>
          ) : (
            <span className="text-red-500 animate-pulse">
              {emptyOptionMessage}
            </span>
          )}

          <details className="absolute overflow-y-scroll">
            <summary> Choices </summary>{" "}
            {decisions?.map((decision) => (
              <li
                key={decision?.id}
                className="list-none cursor-pointer border p-1 my-1"
                onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) => {
                  const alradyExisted = choosed?.some(
                    (addedDecision) => decision.id === addedDecision.id,
                  );
                  if (!alradyExisted) addChoice(decision);
                }}
              >
                {decision.todo}
              </li>
            ))}
            <li>last todo</li>
          </details>

          <div className="flex justify-end mr-8 ">
            <button
              onClick={() =>
                !decided && setEmptyMessage("Please specify your options")
              }
              type="submit"
              className="border px-2 p-1 rounded-md hover:bg-gray-200  hover:text-white"
            >
              Decide
            </button>
          </div>
        </form>
      )}{" "}
      <AddAction />
    </>
  );
};

export default decisionForm;
