"use client";
import FourColumnMenu from "@/src/components/FakeAtmComponent/FourColumnMenu";
import React from "react";
import {
  BiBall,
  BiBell,
  BiBook,
  BiBookOpen,
  BiBox,
  BiClipboard,
  BiCopy,
  BiData,
  BiFile,
  BiFootball,
  BiHeadphone,
  BiHide,
  BiHistory,
  BiMenu,
  BiMobileAlt,
  BiMoney,
  BiPhone,
  BiPhoneOutgoing,
  BiSave,
  BiSolidBank,
  BiSolidTraffic,
  BiSolidUserAccount,
  BiTransfer,
  BiUser,
} from "react-icons/bi";
import { BsGrid, BsGridFill } from "react-icons/bs";
import { MdMenu, MdMenuOpen, MdOutlineMenu } from "react-icons/md";

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
        <div className="ml-2">
          <div className="text-white w-10/12 my-3 mx-auto font-bold flex gap-2">
            <span> 9075898883</span> <span>|</span>{" "}
            <span>Sulaiman haladu yau</span>
            <span>
              <BiCopy className="inline-block cursor-pointer" />
            </span>
          </div>
          <div className="my-3">
            <h2 className="text-3xl text-gray-100 flex gap-2 font-bold">
              <span className="uppercase line-through">n</span>{" "}
              <span>1000</span>
              <span>
                <BiHide className="inline-block cursor-pointer active:p-1" />
              </span>
            </h2>
          </div>
          <div className="text-gray-100 flex gap-2 font-bold my-3">
            <span>Last updated</span>
            <span>{new Date().toLocaleString().toString()}</span>
          </div>
          <div className="text-white flex gap-4 my-3">
            <span className="bg-blue-800 cursor-pointer p-1 px-3 rounded-2xl">
              <span className="text-2xl"> +</span> <span>Add</span>
            </span>
            <span className="bg-blue-800 p-1 px-3 rounded-2xl cursor-pointer">
              <BiHistory className="inline" /> <span>history</span>
            </span>{" "}
          </div>
        </div>
      </div>
      <div>
        <div className="w-10/12 flex justify-between my-3 mx-auto">
          <span>services</span>
          <span className="text-blue-600 cursor-pointer">Edit</span>
        </div>
        <div className="w-10/12 flex justify-around flex-row flex-wrap my-3 mx-auto">
          <span className=" servicesBoxUnderFakeAtmDashbord">
            <BiTransfer
              className="rotate-z-135  text-center my-0 mx-auto"
              size={40}
            />
            Transfer
          </span>
          <span className=" servicesBoxUnderFakeAtmDashbord">
            <BiPhoneOutgoing size={40} className="my-0 mx-auto" />
            Airtime
          </span>
          <span className=" servicesBoxUnderFakeAtmDashbord">
            <BiMobileAlt size={40} className="my-0 mx-auto" />
            Data
          </span>
          <span className="  servicesBoxUnderFakeAtmDashbord">
            <BiFootball size={40} className="my-0 mx-auto" />
            Betting
          </span>
        </div>
        <div className="w-10/12  flex justify-around my-2 mx-auto">
          <span className=" servicesBoxUnderFakeAtmDashbord">
            <BiMoney size={40} className="my-0 mx-auto" />
            Savings
          </span>
          <span className="servicesBoxUnderFakeAtmDashbord">
            <BiBookOpen size={40} className="my-0 mx-auto" />
            Education
          </span>
          <span className=" servicesBoxUnderFakeAtmDashbord">
            <BiFile size={40} className="my-0 mx-auto" />
            <span>statement</span>
          </span>

          <span className=" servicesBoxUnderFakeAtmDashbord">
            <BsGrid size={40} className="my-0 mx-auto" />
            menu
          </span>
        </div>
      </div>
    </div>
  );
};

export default FakeAtm;
