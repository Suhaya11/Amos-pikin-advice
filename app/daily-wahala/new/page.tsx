"use client";
import { Data } from "@/src/components/data";
import React from "react";

const DailyWahala = () => {
  const [name, setName] = React.useState<string>("");
  const [rating, setRating] = React.useState<
    | "difficult"
    | "very difficult"
    | "modarate"
    | "easy"
    | "very easy"
    | "no thing"
  >("modarate");
  const [problemStatus, setProblemStatus] = React.useState<
    "solved" | "unsolved" | "cannot solve" | "solving" | "pending"
  >("unsolved");
  const [decision, setDecision] = React.useState<string>("");
  const [description, setDiscription] = React.useState<string>("");
  const [causer, setCouser] = React.useState<string>("Me");
  const [localData, setLocalData] = React.useState<Data>();

  React.useEffect(() => {
    const localStora = localStorage.getItem("AmosIdeaApp");
    if (localStora) setLocalData(JSON.parse(localStora));
  }, []);
  const handleSubmit = (currentData: Data | undefined = localData) => {
    if (currentData) {
      currentData.daily_wahala?.push({
        id: crypto.randomUUID(),
        name,
        decision,
        desctiption: description,
        causer,
        date: new Date(),
        rating,
        status: problemStatus,
      });
      localStorage.setItem("AmosIdeaApp", JSON.stringify(currentData));
    }
  };
  return (
    <div>
      <h1 className="text-2xl uppercase title">daily wahala tracker </h1>

      <form
        onSubmit={() => {
          if (
            name &&
            description &&
            rating &&
            problemStatus &&
            decision &&
            causer
          )
            handleSubmit(localData);
        }}
        className="flex rounded-2xl flex-row flex-wrap gap-5 border h-8/12 w-8/12 my-2 mx-auto bg-gray-600 p-2 text-white font-bold"
      >
        <div className="flex flex-row flex-wrap justify-around my-3 w-full">
          <label className="p-1" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) =>
              e.currentTarget.value.length < 30 &&
              setName(e.currentTarget.value)
            }
            className="rounded-xl bg-white border-white border-2 p-1 text-black"
            placeholder="Name your wahala"
          />
        </div>{" "}
        <div className="flex flex-row flex-wrap justify-around my-3 w-full">
          <label className="p-1" htmlFor="name">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) =>
              e.currentTarget.value.length < 101 &&
              setDiscription(e.currentTarget.value)
            }
            name="name"
            id="name"
            className="rounded-xl bg-white border-white border-2 p-1 text-black resize-none"
            placeholder="Describe your wahala"
          />
        </div>
        <div className="flex flex-row flex-wrap justify-around my-3 w-full">
          <label className="p-1" htmlFor="name">
            Rating
          </label>
          <div className="inline-block w-8/12">
            <p className="rounded-xl rounded-r-none bg-white border-white border-2 p-1 text-black inline-block w-6/12">
              {rating}
            </p>
            <input
              min={0}
              max={5}
              type="number"
              defaultValue={3}
              name="name"
              id="name"
              className="rounded-xl  rounded-l-none bg-white border-white border-2 p-1 text-white select-none focus:p-1 outline-0"
              onChange={(e) => {
                if (e.currentTarget.valueAsNumber === 0) setRating("no thing");
                else if (e.currentTarget.valueAsNumber === 1)
                  setRating("very easy");
                else if (e.currentTarget.valueAsNumber === 2) setRating("easy");
                else if (e.currentTarget.valueAsNumber === 3)
                  setRating("modarate");
                else if (e.currentTarget.valueAsNumber === 4)
                  setRating("difficult");
                else setRating("very difficult");
              }}
            />
          </div>
        </div>
        <div className="flex flex-row flex-wrap justify-around my-3 w-full">
          <label className="p-1" htmlFor="problemStatus">
            Status
          </label>
          <div className="inline-block w-8/12">
            <p className="rounded-xl rounded-r-none bg-white border-white border-2 p-1 text-black inline-block w-6/12">
              {problemStatus}
            </p>
            <input
              min={0}
              max={4}
              type="number"
              name="problemStatus"
              id="problemStatus"
              className="rounded-xl select-none text-white rounded-l-none bg-white border-white border-2 p-1  focus:p-1 outline-0"
              onChange={(e) => {
                if (e.currentTarget.valueAsNumber === 0)
                  setProblemStatus("unsolved");
                else if (e.currentTarget.valueAsNumber === 1)
                  setProblemStatus("pending");
                else if (e.currentTarget.valueAsNumber === 2)
                  setProblemStatus("solving");
                else if (e.currentTarget.valueAsNumber === 3)
                  setProblemStatus("solved");
                else setProblemStatus("cannot solve");
              }}
            />
          </div>
          <div className="flex flex-row flex-wrap justify-around my-3 w-full">
            <label className="p-1" htmlFor="name">
              Decision
            </label>
            <textarea
              value={decision}
              onChange={(els) =>
                els.currentTarget.value.length < 101 &&
                setDecision(els.currentTarget.value)
              }
              name="name"
              id="name"
              className="rounded-xl bg-white border-white border-2 p-1 text-black resize-none"
              placeholder="What you decide to do in the feature ? max(100)"
            />
          </div>
        </div>
        <div className="flex flex-row flex-wrap justify-around my-3 w-full">
          <label className="p-1" htmlFor="causer">
            who couse it
          </label>
          <input
            onChange={(els) =>
              els.currentTarget.value.length < 101 &&
              setCouser(els.currentTarget.value)
            }
            onFocus={(e) =>
              e.currentTarget.value === "Me"
                ? setCouser("")
                : setCouser(e.currentTarget.value)
            }
            name="causer"
            value={causer}
            id="causer"
            className="rounded-xl bg-white border-white border-2 p-1 text-black resize-none w-8/12"
            placeholder="Who cause the problem"
          />
        </div>
        <div className="flex flex-row flex-wrap justify-end w-full">
          <input
            type="submit"
            name="name"
            id="name"
            className="rounded-xl border-2 p-2 mr-2 hover:bg-amber-50 hover:text-black"
          />
        </div>
      </form>
    </div>
  );
};

export default DailyWahala;
