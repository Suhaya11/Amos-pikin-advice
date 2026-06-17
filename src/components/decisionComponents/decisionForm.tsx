"use client";
import React from "react";
import { decision, myData, Data } from "../data";

import { CgClose } from "react-icons/cg";

import Decided_Modal from "./Decision-Modal";
import AddAction from "./AddAction";
import { BiEdit, BiTrash } from "react-icons/bi";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";

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
  const pathName = usePathname();
  const [selectPlaceHolder, setSelectPlaceHolder] = React.useState<"">();
  const [addActionOpen, setAddActionOpen] = React.useState<boolean>(false);
  const [choosed, setChoosed] = React.useState<decision[]>([]);
  const [decided, setDecided] = React.useState<decision | null>();
  const [emptyOptionMessage, setEmptyMessage] = React.useState<string>("");
  const addChoice = (action: decision) => {
    setChoosed([...choosed, action]);
  };
  React.useEffect(() => {
    const localData: Data = JSON.parse(
      localStorage.getItem("AmosIdeaApp") || "{}",
    );
    if (typeof localData == typeof myData) {
      setDecisions(localData.decisions?.decisions);
    }
  }, [addActionOpen]);
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
        <Decided_Modal setDecided={setDecided} decided={decided} />
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
          {/* <details className="absolute overflow-y-scroll">
            <summary> Choices </summary>{" "}
            {decisions?.map((decision) => (
              <li
                key={decision?.id}
                className="list-none cursor-pointer border p-1 my-1 flex justify-around"
                onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) => {
                  e.stopPropagation();
                  const alradyExisted = choosed?.some(
                    (addedDecision) => decision.id === addedDecision.id,
                  );
                  if (!alradyExisted) {
                    addChoice(decision);
                  }
                }}
              >
                {decision?.todo}{" "}
                <span>
                  <details
                    className="absolute bg-blend-darken bg-gray-6 details-content:
                  :bg-red-500"
                  >
                    <summary></summary>
                    <BiEdit />
                    <BiTrash />
                  </details>
                </span>
              </li>
            ))}
            <li
              className="list-none cursor-pointer border p-1 my-1 bg-blue-500 text-white font-bold text-center"
              onClick={() => setAddActionOpen(true)}
            >
              Add Action
            </li>
          </details> */}
          <h1>Choices</h1>
          <select
            className="absolute overflow-y-scroll"
            value={selectPlaceHolder}
            onChange={() => setSelectPlaceHolder("")}
          >
            <option></option>
            {decisions?.map((decision) => (
              <option
                key={decision?.id}
                className="list-none cursor-pointer border p-1 my-1 flex justify-around"
                onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) => {
                  e.stopPropagation();
                  const alradyExisted = choosed?.some(
                    (addedDecision) => decision.id === addedDecision.id,
                  );
                  if (!alradyExisted) {
                    addChoice(decision);
                  }
                }}
              >
                {decision?.todo}
              </option>
            ))}
            <option
              className="list-none cursor-pointer border p-1 my-1 bg-blue-500 text-white font-bold text-center"
              onClick={() => redirect(`${pathName}/new`)}
            >
              Add Action
            </option>
          </select>
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
      {/* {addActionOpen && <AddAction setAddActionOpen={setAddActionOpen} />} */}
      {/* <div className="pointer-events-none absolute bottom-0 w-full animate-pulse  left-0 text-center text-red-500 font-bold uppercase p-2">
        In the setting section I'll give user chance to a edit the range and
        increment system for grade and other setings that I might realize that
        they are important
      </div> */}
    </>
  );
};

export default decisionForm;
