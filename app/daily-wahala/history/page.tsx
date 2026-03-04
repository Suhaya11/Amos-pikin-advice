"use client";
import { Data, myData, wahala } from "@/src/components/data";
import React from "react";
import { BiPause, BiPlay, BiStop, BiVolumeFull } from "react-icons/bi";

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
  const [audioControlsOpen, setAudioControlsOpen] =
    React.useState<boolean>(true);
  const [loudReading, setLoudReading] = React.useState<true | false>(true);
  const [speechStarted, setSpeechStarted] = React.useState<boolean>(false);
  React.useEffect(() => {
    const queryLocalStorage = localStorage.getItem("AmosIdeaApp");
    if (queryLocalStorage) {
      const localData: Data = JSON.parse(queryLocalStorage);
      if (localData?.daily_wahala) setWahalas(myData.daily_wahala as wahala[]);
    }
  }, []);
  const sayLaud = (text: string) => {
    speechSynthesis.cancel();
    speechSynthesis.speak(new SpeechSynthesisUtterance(text));
    setSpeechStarted(false);
  };

  React.useEffect(
    () =>
      console.log(
        "speacking: ",
        speechSynthesis.speaking,
        "paused",
        speechSynthesis.paused,
      ),
    [speechStarted],
  );

  return (
    <div>
      {wahalas?.map((wahala) => (
        <div
          key={wahala.id}
          className="flex text-white relative flex-row flex-wrap gap-3 justify-center border my-2 mx-auto w-11/12 p-2 from-green-700 to-amber-500 cursor-default bg-linear-to-r rounded-xl "
        >
          <div className="absolute flex  right-4">
            {" "}
            <BiStop
              onClick={() => {
                speechSynthesis.cancel();

                setSpeechStarted(false);
              }}
            />
            {speechStarted ? (
              <BiPause
                onClick={() => {
                  speechSynthesis.pause();
                  setSpeechStarted(false);
                }}
              />
            ) : (
              <BiPlay
                className=" right-4"
                title="Read summary of this wahala laudly"
                onClick={() => {
                  if (speechSynthesis.paused) {
                    speechSynthesis.resume();
                    setSpeechStarted(true);
                  } else {
                    speechSynthesis.cancel();
                    speechSynthesis.speak(
                      new SpeechSynthesisUtterance(`
              Oh! user this here's breakdown of this wahala. Name. ${wahala.name} . which occured on ${new Date(wahala.date).toDateString()} .  discription of this wahala is. ${wahala.desctiption}

              
              Anyway thank God. the level of difficulty of this wahala as you specified is ${wahala.rating}.
              And your decision is ${wahala.decision}.
              currently this wahala is ${wahala.status}. finally this wahala was caused by ${wahala.causer === "Me" || wahala.causer === "me" ? "You" : wahala.causer}.
              
              By suhaya.
              
              
              
              `),
                    );

                    setSpeechStarted(true);
                  }
                }}
              />
            )}
          </div>

          <h1
            onClick={(e) => loudReading && sayLaud(e.currentTarget.textContent)}
            className="title text-white w-full"
          >
            {wahala.name}
          </h1>

          <h3 className=" right-2 text-right mr-3  top-14 font-bold w-full">
            {new Date(wahala.date).getDate() === new Date().getDate() &&
            new Date(wahala.date).getMonth() === new Date().getMonth() &&
            new Date(wahala.date).getFullYear() === new Date().getFullYear() ? (
              <span
                onClick={(e) =>
                  loudReading && sayLaud(e.currentTarget.textContent)
                }
                className="mask-b-from-80% mask-l-from-90 border-3  hover:p-2 p-1 rounded-md"
              >
                Today
              </span>
            ) : (
              <span
                onClick={(e) =>
                  loudReading && sayLaud(e.currentTarget.textContent)
                }
              >
                {new Date(wahala.date).getDate() === new Date().getDate() - 1 &&
                new Date(wahala.date).getMonth() === new Date().getMonth() &&
                new Date(wahala.date).getFullYear() ===
                  new Date().getFullYear() ? (
                  <span className="mask-b-from-80% mask-l-from-90 border-3 hover:p-2 p-1 rounded-md">
                    Yesterday
                  </span>
                ) : (
                  <span
                    onClick={(e) =>
                      loudReading && sayLaud(e.currentTarget.textContent)
                    }
                    className="mask-b-from-80% mask-l-from-90 border-3  hover:p-2 p-1 rounded-md"
                  >
                    {new Date(wahala?.date)?.getDate()}/
                    {new Date(wahala.date)?.getMonth()}/
                    {new Date(wahala.date).getFullYear()}
                  </span>
                )}
              </span>
            )}
          </h3>
          <p
            onClick={(e) => loudReading && sayLaud(e.currentTarget.textContent)}
          >
            {" "}
            {wahala.desctiption}
          </p>
          <div className="flex gap-1  text-white font-serif w-full">
            <h2 className="font-extrabold">Decision:</h2>
            <p
              onClick={(e) =>
                loudReading && sayLaud(e.currentTarget.textContent)
              }
              className="w-full inline-block "
            >
              {wahala.decision}
            </p>
          </div>
          <div className="w-full flex gap-1 text-gray-50 ">
            <h3 className="font-extrabold">Level:</h3>{" "}
            <span
              onClick={(e) =>
                loudReading && sayLaud(e.currentTarget.textContent)
              }
            >
              {wahala.rating}
            </span>
          </div>
          <div className="w-full text-amber-50 flex gap-2">
            <h3 className="font-extrabold">Status</h3>
            <span
              onClick={(e) =>
                loudReading && sayLaud(e.currentTarget.textContent)
              }
            >
              {wahala.status}
            </span>
          </div>
          <div className="w-full flex gap-2 text-blue-50">
            <h3 className="  font-extrabold">Caused by:</h3>
            <span
              onClick={(e) =>
                loudReading && sayLaud(e.currentTarget.textContent)
              }
            >
              {wahala.causer}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WahalTrackerHomePage;
