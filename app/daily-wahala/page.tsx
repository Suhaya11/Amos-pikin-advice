"use client";
import WahalaCard from "@/src/components/Daily-wahalaComponents/WahalaCard";
import { Data, myData, wahala } from "@/src/components/data";
import Link from "next/link";
import React from "react";

const WahalTrackerHomePage = () => {
  const [wahalas, setWahalas] = React.useState<wahala[]>([]);
  React.useEffect(() => {
    const queryLocalStorage = localStorage.getItem("AmosIdeaApp");
    if (queryLocalStorage) {
      const localData: Data = JSON.parse(queryLocalStorage);
      if (localData?.daily_wahala) setWahalas(localData.daily_wahala);
    }
  }, []);

  return wahalas.length ? (
    <div>
      {wahalas?.map((wahala) => (
        <WahalaCard key={wahala.id} wahala={wahala} />
      ))}{" "}
    </div>
  ) : (
    <>
      <div className="relative top-60 ">
        <h2 className=" text-center">
          {" "}
          Not wahala recorded <br />
          <button className="border  p-1 px-2 rounded-2xl hover:bg-gray-200">
            <Link href={"/daily-wahala/new"}>Create</Link>
          </button>
        </h2>
      </div>
    </>
  );
};

export default WahalTrackerHomePage;
