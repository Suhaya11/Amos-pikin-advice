"use client";
import {
  CalculatedTodaysDate,
  CalculateSavedDate,
  Data,
  rating,
  status,
  TodaysWahala,
  wahala,
} from "@/src/components/data";
import React from "react";

const TodaysWahalaOverview = () => {
  const [wahalas, setWahalas] = React.useState<wahala[]>([
    {
      id: "crypto.randomUUID()",
      date: new Date(),
      name: "machine spoiled",

      desctiption: "Our machine was spoiled",
      causer: "Natural",
      status: "unsolved",
      decision:
        "I'll make sure that my bycle were fine before the next data inshaAllah",
      rating: "difficult",
    },
    {
      id: "crypto.randomUUID()1",
      date: new Date(),
      name: "machine spoiled",

      desctiption: "Our machine was spoiled",
      causer: "me",
      status: "unsolved",
      decision:
        "I'll make sure that my bycle were fine before the next data inshaAllah",
      rating: "difficult",
    },
    {
      id: "crypto.randomUUID()2",
      date: new Date(),
      name: "second Trieal",

      desctiption: "Our machine was spoiled",
      causer: "me",
      status: "unsolved",
      decision:
        "I'll make sure that my bycle were fine before the next data inshaAllah",
      rating: "difficult",
    },
  ]);
  const [veryDifficultWahalas, setVeryDifficultWahalas] = React.useState<
    wahala[]
  >([]);
  const [difficultWahalas, setDifficultWahalas] = React.useState([]);
  React.useEffect(() => {
    const queryLocalStorage = localStorage.getItem("AmosIdeaApp");
    if (queryLocalStorage) {
      const localData: Data = JSON.parse(queryLocalStorage);
      console.log("local Data", localData);
      if (localData?.daily_wahala?.length) setWahalas(localData.daily_wahala);
    }
  }, []);

  const AnalyseWahala = (
    wahalas: wahala[],
    field: "rating" | "status" | "causer",
    value: rating | status,
  ): string | undefined => {
    //let continue from here next time now I'm sleepy

    if (
      (field === "rating" && value == "difficult") ||
      "very difficult" ||
      "modarate" ||
      "easy" ||
      "very easy" ||
      "no thing"
    ) {
      console.log(
        "filtered",
        wahalas.filter((wahala) => wahala.rating === value).slice(0, -1),
      );
      return (
        wahalas
          .filter((wahala) => wahala.rating === value)
          .map((w) => w.name)
          .slice(0, -1)
          .join(", ") +
        " and " +
        wahalas
          .filter((wahala) => wahala.rating === value)
          .map((w) => w.name)
          .slice(-1)
          .toString()
      );
    } else if (
      (field === "status" && value == "unsolved") ||
      "solved" ||
      "pending" ||
      "solving" ||
      "cannot solve"
    )
      return (
        wahalas
          .map((wahala) => (wahala.rating === value ? wahala : null))
          .slice(0, -2)
          .join(", ") +
        " and " +
        wahalas
          .map((wahala) => (wahala.rating === value ? wahala : null))
          .slice(-1)
          .toString()
      );
  };
  const calculateNumberOfCauser = (
    array: wahala[],
    str: "me" | "Me" | string,
  ): number => array?.filter((wahala) => wahala.causer == wahala.causer).length;
  console.log(CalculatedTodaysDate(wahalas.at(-1)?.date!));
  console.log(new Date(wahalas.at(-1)?.date!));
  console.log(new Date());
  console.error(
    "hhh",
    CalculatedTodaysDate(new Date()) ===
      CalculateSavedDate(new Date(wahalas.at(-1)?.date!)),
  );

  return (
    <div className="flex w-10/12 max-[400px]:w-11/12 shadow-md my-3 mx-auto shadow-fuchsia-700 rounded-2xl flex-wrap flex-row">
      <h1 className="title">Wahala analysis</h1>
      <p className="w-full">
        {TodaysWahala(wahalas).length
          ? `
        Today you have encoutered ${
          TodaysWahala(wahalas).length == 1
            ? `${TodaysWahala(wahalas).length} wahala which is caused by ${TodaysWahala(wahalas).at(0)?.causer == "Me" || TodaysWahala(wahalas).at(0)?.causer == "me" ? "you" : TodaysWahala(wahalas).at(0)?.causer} and its in ${TodaysWahala(wahalas).at(0)?.status} state`
            : `wahala in which
        2 of them where caused by you and the other one caused by wane`
        } `
          : "Today ther's no Wahala encountered"}{" "}
      </p>
      <p className="w-full">
        {TodaysWahala(wahalas).length > 1
          ? ` Out of today's wahala 1 is difficult and solved , the other one is easy
      but unsolved and the last one is modarete and its in sovling state `
          : `Today's single wahala which is ${TodaysWahala(wahalas).at(0)?.rating} and it's in 
      ${TodaysWahala(wahalas).at(0)?.status} state`}
      </p>
    </div>
  );
};

export default TodaysWahalaOverview;
