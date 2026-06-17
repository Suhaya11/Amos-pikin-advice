"use client";
import React from "react";
import { req, timeForToday } from "../data";
import { BiUser } from "react-icons/bi";
export type messageProps = {
  message: req;
};
const UserMessage = ({ message }: messageProps) => {
  return (
    <>
      {" "}
      <div className=" justify-end  flex w-11/12 my-0 mx-auto scroll-mb-96">
        {" "}
        <BiUser
          size={30}
          className=" rounded-full border  text-blue-800"
          fill="blue"
        />
      </div>
      <div className="flex justify-end  w-10/12 my-2 mx-auto ">
        <span className="bg-purple-700 max-w-8/12 w-fit text-white font-bold p-2 rounded-2xl rounded-br-none">
          {message.message}
        </span>
      </div>
      <div className="flex justify-end my-0 mx-auto w-10/12">
        {" "}
        <span className="text-xs text-start  pr-1">
          {timeForToday(new Date(message?.time!))?.endsWith("M")
            ? `${timeForToday(new Date(message.time!))
                ?.split(":")
                .slice(0, 2)
                .join(":")!} 
                    
                        ${timeForToday(new Date(message.time!))
                          ?.split(":")
                          .slice(-1)
                          .join(":")
                          .split(" ")
                          .at(-1)}`
            : timeForToday(new Date(message.time!))}
        </span>
      </div>
    </>
  );
};

export default UserMessage;
