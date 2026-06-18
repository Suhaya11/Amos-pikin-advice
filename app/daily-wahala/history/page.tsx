"use client";
import { Data, myData, wahala } from "@/src/components/data";
import React from "react";
import { BiPrinter } from "react-icons/bi";

const DailyWahalaTrackingComponent = () => {
  const [wahalas, setWahalas] = React.useState<wahala[]>([]);

  React.useEffect(() => {
    const queryLocalStorage = localStorage.getItem("AmosIdeaApp");
    if (queryLocalStorage) {
      const localData: Data = JSON.parse(queryLocalStorage);
      console.log("local Data", localData);
      if (localData?.daily_wahala?.length) setWahalas(localData.daily_wahala);
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
      <main className="from-violet-400 to-red-300 bg-linear-to-l py-4 ">
        <BiPrinter
          className="absolute right-10 text-3xl text-white hover:p-1  w-fit"
          onClick={() => window.print()}
        />
        <h2 className="title">Wahala History</h2>
        <div
          className="max-[400px]:w-full w-full my-2 mx-auto
         "
        >
          <table className="table-auto min-[400px]:w-10/12 w-11/12 my-2 mx-auto">
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
                  <td className="border-x border-y px-2 text-center cursor-pointer ">
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
