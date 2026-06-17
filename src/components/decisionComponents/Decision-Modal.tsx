"use client";
import { Data, decision, localstorageApi } from "@/src/components/data";

import { redirect } from "next/navigation";
import { BiX } from "react-icons/bi";

type myProps = {
  decided: decision;
  setDecided: React.Dispatch<React.SetStateAction<decision | undefined | null>>;
};
function Decided_Modal({ decided, setDecided }: myProps) {
  if (!decided) redirect("/decision-maker");
  const addToHistory = () => {
    const query = localStorage.getItem(localstorageApi);
    if (!query) redirect("/decision-maker/");
    const thedata: Data = JSON.parse(query);
    const newHistory = thedata.decisions?.history?.length
      ? [
          ...thedata.decisions?.history!,
          { dicision: decided, time: new Date(), id: crypto.randomUUID() },
        ]
      : [{ dicision: decided, time: new Date(), id: crypto.randomUUID() }];
    const newData: Data = {
      ...thedata,
      decisions: {
        ...thedata.decisions,
        history: newHistory,
      },
    };
    localStorage.setItem(localstorageApi, JSON.stringify(newData));
    setDecided(null);
  };
  return (
    <div className="absolute w-screen z-10 h-screen bg-purple-200 left-0 top-0">
      <BiX
        onClick={() => setDecided(null)}
        className="absolute top-20 right-10 bg-red-600 cursor-pointer text-white p-1 "
        size={30}
      />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="container border  bg-blue-800 text-white">
        <h1 className="title">Decided choice</h1>

        <br />
        <p>
          Based on some parameters you suppose choose{" "}
          <span className="font-bold">{decided?.todo} </span>
          {!decided?.todo?.startsWith("becouse") || "becouse"}
          {decided?.reason || " Ranks shows that you value it more.    "}
        </p>
      </div>
      <div className="flex justify-end mr-6 mt-4">
        <button
          onClick={addToHistory}
          className="border p-1 px-4 rounded-xl font-bold bg-blue-600 hover:bg-blue-800 cursor-pointer  text-white "
        >
          save
        </button>
      </div>
    </div>
  );
}

export default Decided_Modal;
