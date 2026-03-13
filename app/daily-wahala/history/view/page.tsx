"use client";
import {
  CalculatedTodaysDate,
  CalculateSavedDate,
  Data,
  FindAllMeAsWahalaCouser,
  findAllNotMeAsWahalaCauser,
  rating,
  status,
  TodaysWahala,
  wahala,
} from "@/src/components/data";
import Link from "next/link";
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
  // const [pageToPring, setPageToPring] = React.useState<HTMLDocument>(
  //   window.document,
  // );
  // const AnalyseWahala = (
  //   wahalas: wahala[],
  //   field: "rating" | "status" | "causer",
  //   value: rating | status,
  // ): string | undefined => {
  //   //let continue from here next time now I'm sleepy

  //   if (
  //     (field === "rating" && value == "difficult") ||
  //     "very difficult" ||
  //     "modarate" ||
  //     "easy" ||
  //     "very easy" ||
  //     "no thing"
  //   ) {
  //     console.log(
  //       "filtered",
  //       wahalas.filter((wahala) => wahala.rating === value).slice(0, -1),
  //     );
  //     return (
  //       wahalas
  //         .filter((wahala) => wahala.rating === value)
  //         .map((w) => w.name)
  //         .slice(0, -1)
  //         .join(", ") +
  //       " and " +
  //       wahalas
  //         .filter((wahala) => wahala.rating === value)
  //         .map((w) => w.name)
  //         .slice(-1)
  //         .toString()
  //     );
  //   } else if (
  //     (field === "status" && value == "unsolved") ||
  //     "solved" ||
  //     "pending" ||
  //     "solving" ||
  //     "cannot solve"
  //   )
  //     return (
  //       wahalas
  //         .map((wahala) => (wahala.rating === value ? wahala : null))
  //         .slice(0, -2)
  //         .join(", ") +
  //       " and " +
  //       wahalas
  //         .map((wahala) => (wahala.rating === value ? wahala : null))
  //         .slice(-1)
  //         .toString()
  //     );
  // };
  // // const calculateNumberOfCauser = (
  //   array: wahala[],
  //   str: "me" | "Me" | string,
  // ): number => array?.filter((wahala) => wahala.causer == wahala.causer).length;
  // console.log(CalculatedTodaysDate(wahalas.at(-1)?.date!));
  // console.log(new Date(wahalas.at(-1)?.date!));
  // console.log(new Date());
  // console.error(
  //   "hhh",
  //   CalculatedTodaysDate(new Date()) ===
  //     CalculateSavedDate(new Date(wahalas.at(-1)?.date!)),
  // );
  // console.log(CalculatedTodaysDate(new Date()));
  // console.log(CalculateSavedDate(new Date(wahalas.at(-1)?.date!)));

  return (
    <div
      className="flex w-10/12 max-[400px]:w-11/12 shadow-md my-3 mx-auto shadow-fuchsia-700 rounded-2xl flex-wrap flex-row mb-6 pb-5 px-2"
      id="summary"
    >
      <h1 className="title">Wahala analysis</h1>
      {TodaysWahala(wahalas).length > 0 ? (
        <div className="w-full">
          <p className="w-full">
            {TodaysWahala(wahalas).length
              ? `
        Today you have encoutered ${
          TodaysWahala(wahalas).length == 1
            ? `${TodaysWahala(wahalas).length} wahala which is caused by ${TodaysWahala(wahalas).at(0)?.causer == "Me" || TodaysWahala(wahalas).at(0)?.causer == "me" ? "you" : TodaysWahala(wahalas).at(0)?.causer} and its in ${TodaysWahala(wahalas).at(0)?.status} state`
            : `${TodaysWahala(wahalas).length} wahala in which ${!TodaysWahala(wahalas).some((wahala) => wahala.causer != `me` && wahala.causer !== "Me" && wahala.causer !== "ME" && wahala.causer != "mE") ? "All" : FindAllMeAsWahalaCouser(wahalas).length}
         of them where caused by you ${
           FindAllMeAsWahalaCouser(wahalas).length ===
           TodaysWahala(wahalas).length
             ? "."
             : `and other ${findAllNotMeAsWahalaCauser(wahalas).length} caused by ${
                 findAllNotMeAsWahalaCauser(wahalas).length == 1
                   ? findAllNotMeAsWahalaCauser(wahalas).map(
                       (item) => item.causer,
                     )
                   : `${findAllNotMeAsWahalaCauser(wahalas).at(0)?.causer} and other ${findAllNotMeAsWahalaCauser(wahalas).length - 1}`
               }.`
         } `
        } `
              : "Today ther's no Wahala encountered"}{" "}
          </p>
          <div className="w-full flex flex-row flex-wrap gap-2">
            <h2 className="title w-full">summary</h2>
            <ul className="w-full my-3">
              <li>Caused by you: {FindAllMeAsWahalaCouser(wahalas).length}</li>
              <li>
                Caused by others: {findAllNotMeAsWahalaCauser(wahalas).length}
              </li>
            </ul>{" "}
            <ul className="w-5/12 my-2 mx-auto">
              <li className="font-bold capitalize"> state</li>
              <li>
                Solved:
                {
                  TodaysWahala(wahalas).filter(
                    (wahala) => wahala.status === "solved",
                  ).length
                }
              </li>
              <li>
                Solving:
                {
                  TodaysWahala(wahalas).filter(
                    (wahala) => wahala.status === "solving",
                  ).length
                }
              </li>
              <li>
                Cannot solve:
                {
                  TodaysWahala(wahalas).filter(
                    (wahala) => wahala.status === "cannot solve",
                  ).length
                }
              </li>
              <li>
                pending:
                {
                  TodaysWahala(wahalas).filter(
                    (wahala) => wahala.status === "pending",
                  ).length
                }
              </li>
              <li>
                Unsolved:
                {
                  TodaysWahala(wahalas).filter(
                    (wahala) => wahala.status === "unsolved",
                  ).length
                }
              </li>
            </ul>
            <ul className="w-5/12">
              <li className="font-bold capitalize"> Levels</li>
              <li className="list-disc">
                Very Difficult:{" "}
                {
                  TodaysWahala(wahalas).filter(
                    (wahala) => wahala.rating === "very difficult",
                  ).length
                }
              </li>{" "}
              <li className="list-disc">
                Difficult:{" "}
                {
                  TodaysWahala(wahalas).filter(
                    (wahala) => wahala.rating === "difficult",
                  ).length
                }
              </li>{" "}
              <li className="list-disc">
                Modarate:{" "}
                {
                  TodaysWahala(wahalas).filter(
                    (wahala) => wahala.rating === "modarate",
                  ).length
                }
              </li>{" "}
              <li className="list-disc">
                Easy:{" "}
                {
                  TodaysWahala(wahalas).filter(
                    (wahala) => wahala.rating === "easy",
                  ).length
                }
              </li>{" "}
              <li className="list-disc">
                Very easy:{" "}
                {
                  TodaysWahala(wahalas).filter(
                    (wahala) => wahala.rating === "very easy",
                  ).length
                }
              </li>
              <li className="list-disc">
                No Thing:{" "}
                {
                  TodaysWahala(wahalas).filter(
                    (wahala) => wahala.rating === "no thing",
                  ).length
                }
              </li>
            </ul>
          </div>
          <div className="w-full">
            <h3 className="title">view</h3>
            <nav className="flex flex-row flex-wrap gap-3">
              <Link className="viewUnderWahalaSummary" href={"/daily-wahala"}>
                Today's Wahala
              </Link>
              <Link
                className="viewUnderWahalaSummary"
                href={"/daily-wahala/history"}
              >
                History of wahalas
              </Link>
              <Link
                className="viewUnderWahalaSummary"
                href={"/daily-wahala/new"}
              >
                Add New Wahala
              </Link>
              <button
                className="viewUnderWahalaSummary"
                onClick={() => window.print()}
              >
                Pring The Summary
              </button>
            </nav>
          </div>
        </div>
      ) : (
        <div className="w-full h-60">
          <p className=" w-8/12 my-2 mx-auto">
            Today ther's no any wahala recorded if theres any feel free to{" "}
            <Link
              className="underline text-blue-500"
              href={"/daily-wahala/new"}
            >
              add now
            </Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default TodaysWahalaOverview;
