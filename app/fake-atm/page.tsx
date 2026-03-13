"use client";
import React from "react";
import {
  BiBell,
  BiClipboard,
  BiCopy,
  BiHeadphone,
  BiHide,
  BiHistory,
  BiMoney,
  BiUser,
} from "react-icons/bi";

const FakeAtm = () => {
  return (
    <div className="bg-gray-50">
      <h1 className=" flex justify-between bg-white">
        <div>
          <BiUser className="text-4xl inline-block mr-3 border p-1 rounded-full" />
          <span>level 1</span>
        </div>
        <div className="mr-2">
          <BiHeadphone className="inline-block text-3xl" />
          <BiBell className="inline-block text-3xl" />
        </div>
      </h1>
      <div className="container border bg-blue-900 p">
        <div className="text-white w-10/12 my-2 mx-auto font-bold flex gap-2">
          <span> 9075898883</span> <span>|</span>{" "}
          <span>Sulaiman haladu yau</span>
          <span>
            <BiCopy className="inline-block" />
          </span>
        </div>
        <div>
          <h2 className="text-3xl text-gray-100 flex gap-2 font-bold">
            <span className="uppercase line-through">n</span> <span>1000</span>
            <span>
              <BiHide className="inline-block cursor-pointer active:p-1" />
            </span>
          </h2>
        </div>
        <div className="text-gray-100 flex gap-2 font-bold ">
          <span>Last updated</span>
          <span>{new Date().toLocaleString()}</span>
        </div>
        <div className="text-white flex gap-4">
          <span className="bg-blue-800 p-1 px-3 rounded-2xl">+ Add</span>
          <span className="bg-blue-800 p-1 px-3 rounded-2xl">
            <BiHistory className="inline" /> <span>history</span>
          </span>{" "}
        </div>
      </div>
    </div>
  );
};

export default FakeAtm;
