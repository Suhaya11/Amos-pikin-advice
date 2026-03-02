"use client";
import { Data, wahala } from "@/src/components/data";
import React from "react";

const WahalTrackerHomePage = () => {
  const [wahalas, setWahalas] = React.useState<wahala[]>();
  React.useEffect(() => {
    const queryLocalStorage = localStorage.getItem("AmosIdeaApp");
    if (queryLocalStorage) {
      const localData: Data = JSON.parse(queryLocalStorage);
      if (localData?.daily_wahala) setWahalas(localData.daily_wahala);
    }
  }, []);

  return (
    <div>
      {wahalas?.map((wahala) => (
        <div
          key={wahala.id}
          className="flex flex-row flex-wrap gap-3 justify-center"
        >
          <span>couse {wahala.causer}</span>
          <span> decision{wahala.decision}</span>
          <span>Date {new Date(wahala.date).toDateString()}</span>
          <span>{wahala.decision}</span>
          <span>reason {wahala.rating}</span>
          <span>id {wahala.id}</span>
        </div>
      ))}
    </div>
  );
};

export default WahalTrackerHomePage;
