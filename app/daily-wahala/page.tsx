"use client";
import WahalaCard from "@/src/components/Daily-wahalaComponents/WahalaCard";
import { Data, myData, wahala } from "@/src/components/data";
import React from "react";

const WahalTrackerHomePage = () => {
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
  ]);
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
        <WahalaCard key={wahala.id} wahala={wahala} />
      ))}
    </div>
  );
};

export default WahalTrackerHomePage;
