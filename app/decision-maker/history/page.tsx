"use client";

import {
  Data,
  decisionHistory,
  localstorageApi,
  refactorDate,
  samplingDataForStarting,
  timeForToday,
} from "@/src/components/data";
import { redirect, usePathname } from "next/navigation";
import React from "react";

const History = () => {
  const [history, setHistory] = React.useState<decisionHistory[] | undefined>();
  const pathname = usePathname();
  const [err, setErr] = React.useState<string | undefined>();
  React.useEffect(() => {
    const query = localStorage.getItem(localstorageApi);
    if (!query) {
      localStorage.setItem(
        localstorageApi,
        JSON.stringify(samplingDataForStarting),
      );
      setHistory(undefined);
      return;
    }
    const theData: Data = JSON.parse(query);
    if (theData.decisions?.history?.length) {
      setHistory(theData?.decisions?.history);
      return;
    }
  }, []);
  const deleteHistory = (type: "all" | string) => {
    if (type == "all") {
      const query = localStorage.getItem(localstorageApi);
      if (!query) {
        setErr("No history to delete !!!");
        return;
      }
      const theData: Data = JSON.parse(query);
      const newData: Data = {
        ...theData,
        decisions: { ...theData.decisions, history: [] },
      };
      if (confirm("Do you really want to delete all your Decisions history")) {
        localStorage.setItem(localstorageApi, JSON.stringify(newData));
        redirect(pathname);
      }
    }
  };
  return (
    <div>
      <button onClick={() => deleteHistory("all")}>Delete All </button>
      {history?.length ? (
        <>
          <div>
            <div className="flex justify-around border w-10/12 my-0 mx-auto">
              <span>Name</span> <span>Time</span> <span>Grade</span>
            </div>
            {history.map((decision) => (
              <div
                key={decision.id}
                className="flex justify-around border w-10/12 my-0 mx-auto"
              >
                <span>{decision.dicision?.todo}</span>{" "}
                <span>
                  {/* {refactorDate(decision?.time, "-")} or {refactorDate()} */}
                  {timeForToday(decision.time)}
                </span>{" "}
                <span>{decision.dicision?.rank}</span>
              </div>
            ))}
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default History;
