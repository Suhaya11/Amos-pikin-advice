"use client";
import { Data, rating, status } from "@/src/components/data";
import React, { useEffect } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const DailyWahala = () => {
  const [name, setName] = React.useState<string>("");
  const [rating, setRating] = React.useState<rating>("modarate");
  const [problemStatus, setProblemStatus] = React.useState<status>("unsolved");
  const [decision, setDecision] = React.useState<string>("");
  const [description, setDiscription] = React.useState<string>("");
  const [date, setDate] = React.useState<Date>(new Date());
  const [causer, setCouser] = React.useState<string>("Me");
  const [localData, setLocalData] = React.useState<Data>();
  const [ratingNum, setRatingNum] = React.useState<number>(0);
  const [statusNum, setStatusNum] = React.useState<number>(0);

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
        date,
        rating,
        status: problemStatus,
      });
      localStorage.setItem("AmosIdeaApp", JSON.stringify(currentData));
    }
  };
  const speakInputLetters = (
    e: React.InputEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void => {
    speechSynthesis.cancel();
    speechSynthesis.speak(
      new SpeechSynthesisUtterance(
        e.currentTarget.value.toString().split("").at(-1)?.toString() || "",
      ),
    );
  };
  const decRating = () => {
    ratingNum > 0 ? setRatingNum(ratingNum - 1) : null;
  };
  const incRating = () => {
    ratingNum < 6 ? setRatingNum(ratingNum + 1) : null;
  };
  useEffect(() => {
    if (ratingNum === 0) setRating("no thing");
    else if (ratingNum === 1) setRating("very easy");
    else if (ratingNum === 2) setRating("easy");
    else if (ratingNum === 3) setRating("modarate");
    else if (ratingNum === 4) setRating("difficult");
    else if (ratingNum === 5) setRating("very difficult");
  }, [ratingNum]);
  const decStatus = () => {
    statusNum > 0 ? setStatusNum(statusNum - 1) : null;
  };
  const incStatus = () => {
    if (statusNum < 5) setStatusNum(statusNum + 1);
  };
  useEffect(() => {
    if (statusNum === 0) setProblemStatus("cannot solve");
    else if (statusNum === 1) setProblemStatus("unsolved");
    else if (statusNum === 2) setProblemStatus("pending");
    else if (statusNum === 3) setProblemStatus("solving");
    else if (statusNum === 4) setProblemStatus("solved");
  }, [statusNum]);
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
        className="flex rounded-2xl flex-row flex-wrap gap-5 border h-8/12 w-8/12 my-2 mx-auto bg-gray-600 p-2 text-white font-bold max-[400px]:w-11/12"
      >
        <div className="flex flex-row flex-wrap justify-center gap-2 my-3 w-full">
          <label className="p-1" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onInputCapture={(e) => speakInputLetters(e)}
            onChange={(e) => {
              e.currentTarget.value.length < 30 &&
                setName(e.currentTarget.value);
            }}
            className="Input rounded-xl"
            placeholder="Name your wahala"
          />
        </div>{" "}
        <div className="flex flex-row flex-wrap justify-center gap-2 my-3 w-full">
          <label className="p-1" htmlFor="name">
            Description
          </label>
          <textarea
            onInputCapture={(e) => speakInputLetters(e)}
            value={description}
            onChange={(e) =>
              e.currentTarget.value.length < 101 &&
              setDiscription(e.currentTarget.value)
            }
            name="name"
            id="name"
            className="Input rounded-xl resize-none"
            placeholder="Describe your wahala"
          />
        </div>
        <div className="flex flex-row flex-wrap justify-around my-3 w-full">
          <label className="p-1" htmlFor="name">
            Rating
          </label>
          <div className=" w-8/12 flex ">
            <p className="Input rounded-xl rounded-r-none">{rating}</p>
            <span
              id="name"
              className="rounded-xl bg-white border-white border-2 p-1 text-black rounded-l-none inline-block "
            >
              <BiChevronUp onClick={incRating} />
              <BiChevronDown onClick={decRating} />
            </span>
          </div>
        </div>
        <div className="flex flex-row flex-wrap justify-around my-3 w-full">
          <label className="p-1" htmlFor="problemStatus">
            Status
          </label>
          <div className="flex w-8/12">
            <p className="Input inline-block rounded-l-xl  w-10/12">
              {problemStatus}
            </p>
            <span
              id="name"
              className="rounded-xl rounded-l-none bg-white border-white border-2 p-1 text-black inline-block "
            >
              <BiChevronUp onClick={() => incStatus()} />
              <BiChevronDown onClick={() => decStatus()} />
            </span>
          </div>
          <div className="flex flex-row flex-wrap gap-4 my-2 mx-auto w-full">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              name="date"
              id="date"
              className=" bg-amber-50 text-black p-2 outline-0 rounded-2xl "
              onChange={(e) =>
                new Date(e.currentTarget.value)
                  ? setDate(new Date(e.currentTarget.value))
                  : null
              }
              contentEditable
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
              className="Input rounded-xl resize-none"
              placeholder="What you decide to do in the feature ? max(100)"
            />
          </div>
        </div>
        <div className="flex flex-row flex-wrap justify-around my-3 w-full">
          <label className="p-1" htmlFor="causer">
            who couse it
          </label>
          <input
            onInputCapture={(e) => speakInputLetters(e)}
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
            className="Input rounded-xl  resize-none w-8/12"
            placeholder="Who cause the problem"
          />
        </div>
        <div className="flex flex-row flex-wrap justify-end w-full">
          <input
            type="submit"
            name="name"
            id="name"
            value={"Record Wahala"}
            className="rounded-xl border-2 p-2 mr-2 hover:bg-amber-50 hover:text-black"
          />
        </div>
      </form>
    </div>
  );
};

export default DailyWahala;
