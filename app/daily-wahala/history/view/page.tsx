import { Data, wahala } from "@/src/components/data";
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

  React.useEffect(() => {
    const queryLocalStorage = localStorage.getItem("AmosIdeaApp");
    if (queryLocalStorage) {
      const localData: Data = JSON.parse(queryLocalStorage);
      console.log("local Data", localData);
      if (localData?.daily_wahala?.length) setWahalas(localData.daily_wahala);
    }
  }, []);

  const AnalyseWahala = (wahalas: wahala[]): string => {
    //let continue from here next time now I'm sleepy

    return "";
  };
  return <div></div>;
};

export default TodaysWahalaOverview;
