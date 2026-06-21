"use client";
import { BsFillExclamationCircleFill } from "react-icons/bs";
import { Data, decision, localstorageApi } from "@/src/components/data";

import React from "react";
import { redirect } from "next/navigation";
import ErrorMessage from "@/src/components/FakeAtmComponent/features/ErrorMessage";
import { BiLeftArrowAlt } from "react-icons/bi";
import Link from "next/link";
const AddAction = () => {
  const [grade, setGrade] = React.useState<number>(0);
  const [action, setAction] = React.useState<string>("");
  const [reason, setReason] = React.useState<string>("");
  const [currentData, setCurrentData] = React.useState<Data>();
  const [err, setErr] = React.useState<string | undefined>();
  React.useEffect(() => {
    const query = localStorage.getItem(localstorageApi);
    if (!query) {
      const mockedData: Data = {
        atm_simulations: {},
        daily_wahala: [],
        decisions: {},
        timeGreetings: [],
      };
      localStorage.setItem(localstorageApi, JSON.stringify(mockedData));
    }
    const localData = JSON.parse(localStorage.getItem("AmosIdeaApp") || "{}");
    setCurrentData(localData);
  }, []);

  const addActionToMMR = async () => {
    const newActiontodo: decision = {
      id: crypto.randomUUID(),
      todo: action,
      reason,
      rank: grade,
    };
    if (!action) {
      setErr("Action not specified");
      return;
    }
    if (!Number(grade) || isNaN(Number(grade))) {
      setErr("invalid Grade specified !!!");
      return;
    }
    const query = localStorage.getItem(localstorageApi);
    if (!query) {
      setErr("unable to fetch data from DB try refreshing the page ");
      return;
    }
    const thedata: Data = JSON.parse(query);
    const newDecisions: decision[] = thedata.decisions?.decisions?.length
      ? [...thedata.decisions?.decisions!, newActiontodo]
      : [newActiontodo];
    const newData: Data = {
      ...thedata,
      decisions: {
        ...thedata.decisions,
        decisions: newDecisions,
      },
    };
    localStorage.setItem("AmosIdeaApp", JSON.stringify(newData));
    redirect("/decision-maker");
  };

  const grades: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  for (let i = 11; i < 101; i++) grades.push(i);

  return (
    <div className="fixed top-0 w-screen  flex justify-between h-screen bg-emerald-700 left-0 opacity-100 ">
      <Link href={"/decision-maker/"}>
        <BiLeftArrowAlt
          className="absolute left-4 top-2"
          fill="white"
          size={40}
        />
      </Link>{" "}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addActionToMMR();
        }}
        className=" max-md:w-9/12 mx-auto my-30 h-70 bg-amber-100 p-2 flex flex-row flex-wrap   rounded-2xl border-amber-50 border-6 drop-shadow-purple-500"
      >
        <div className="flex justify-around w-full  h-fit">
          <label htmlFor="action">What to do:</label>{" "}
          <input
            value={action}
            onChange={(e) =>
              e.currentTarget.value.length < 30
                ? setAction(e.currentTarget.value)
                : null
            }
            type="text"
            name="action"
            id="action"
            placeholder="Name your action"
            className="border p-2 bg-white outline-0 rounded-2xl w-8/12 border-white h-10"
            required
          />
        </div>
        <div className="w-full h-fit relative">
          <label htmlFor="reason">Why to do: </label>
          <BsFillExclamationCircleFill
            className="absolute top-2 right-0 w-4"
            title="Adding reason help with clear explanation when decision is made"
          />
          <textarea
            placeholder="what's your reason"
            name="reason"
            className="p-2 h-10 resize-none border bg-white outline-0 rounded-2xl w-8/12 border-white"
            id="reason"
            value={reason}
            onChange={(e) =>
              e.currentTarget.value.length < 300
                ? setReason(e.currentTarget.value)
                : null
            }
          ></textarea>
        </div>
        <div className="w-full">
          <label htmlFor="grade">Grade: </label>
          <select
            value={grade}
            onChange={(e) => setGrade(Number(e.currentTarget.value))}
            name="grade"
            id="grade"
            className="inline h-10 border bg-white outline-0 rounded-2xl  px-3 border-white"
          >
            {grades.map((agrade) => (
              <option value={agrade} key={agrade}>
                {agrade}
              </option>
            ))}
          </select>
        </div>

        <div className="w-full flex justify-end ">
          <button
            type="submit"
            className="rounded-xl border px-3 h-fit py-1 bg-emerald-500 hover:bg-emerald-700 text-white font-bold transition-opacity "
          >
            Add action
          </button>
          {err && <ErrorMessage err={err} setErr={setErr} />}
        </div>
      </form>
    </div>
  );
};

export default AddAction;
