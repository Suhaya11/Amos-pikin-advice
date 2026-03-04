"use client";
import { Data, myData, wahala } from "@/src/components/data";
import React from "react";

const DailyWahalaTrackingComponent = () => {
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

  React.useEffect(() => {
    const queryLocalStorage = localStorage.getItem("AmosIdeaApp");
    if (queryLocalStorage) {
      const localData: Data = JSON.parse(queryLocalStorage);
      // if (localData?.daily_wahala) setWahalas(myData.daily_wahala as wahala[]);
    }
  }, []);
  const calculateDate = (date: Date) => {
    if (
      new Date(date).getDate() === new Date().getDate() &&
      new Date(date).getMonth() === new Date().getMonth() &&
      new Date(date).getFullYear() === new Date().getFullYear()
    )
      return "Today";
    else if (
      new Date(date).getDate() === new Date().getDate() - 1 &&
      new Date(date).getMonth() === new Date().getMonth() &&
      new Date(date).getFullYear() === new Date().getFullYear()
    )
      return "Yesterday";
    else return new Date(date).toLocaleDateString();
  };
  return (
    <>
      <main className="from-violet-400 to-red-300 bg-linear-to-l">
        <h2 className="title">Wahala Summary</h2>
        <div
          className="max-[400px]:w-full w-full my-2 mx-auto
         "
        >
          <table className="table-auto min-[400px]:w-10/12 w-10/12 my-2 mx-auto">
            <thead>
              <tr className="">
                <th className="border-x border-y px-2">Name</th>
                <th className="border-x border-y px-2">Level</th>
                <th className="border-x border-y px-2">Status</th>
                <th className="border-x border-y px-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {wahalas?.map((wahala) => (
                <tr key={wahala.id} className="">
                  <td className="border-x border-y px-2 text-center">
                    {" "}
                    {wahala.name}{" "}
                  </td>

                  <td className="border-x border-y px-2"> {wahala.rating} </td>
                  <td className="border-x border-y px-2"> {wahala.status} </td>
                  <td className="border-x border-y px-2">
                    {" "}
                    {calculateDate(wahala.date)}{" "}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
};

export default DailyWahalaTrackingComponent;
