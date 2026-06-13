"use client";
import React from "react";

import { res, timeForToday } from "../data";
import { BiBot } from "react-icons/bi";
type myProps = {
  message?: res;
};
const BotMessage = ({ message }: myProps) => {
  return (
    <>
      {" "}
      <div className=" items-start  flex w-11/12 my-0 mx-auto">
        {" "}
        <BiBot
          size={30}
          className=" rounded-full border  text-brown"
          fill="brown"
        />
      </div>
      <div className="grid justify-start  w-10/12 my-2 mx-auto ">
        <span className="bg-brown max-w-8/12 w-fit text-white font-bold p-2 rounded-2xl rounded-bl-none">
          {message?.message}
        </span>

        <span className="text-xs text-start  pr-1">
          {timeForToday(new Date(message?.time!))?.endsWith("M")
            ? `${timeForToday(new Date(message?.time!))
                ?.split(":")
                .slice(0, 2)
                .join(":")!} 
          
              ${timeForToday(new Date(message?.time!))
                ?.split(":")
                .slice(-1)
                .join(":")
                .split(" ")
                .at(-1)}`
            : timeForToday(new Date(message?.time!))}
        </span>
      </div>
    </>
  );
};

export default BotMessage;
