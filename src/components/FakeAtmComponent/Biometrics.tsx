"use client";
import React from "react";
import img from "../../components/FakeAtmComponent/images/img1.jpg";
import Image from "next/image";
import {
  BsFillExclamationCircleFill,
  BsFillFileLock2Fill,
} from "react-icons/bs";

import Link from "next/link";
import { BiX } from "react-icons/bi";
type myProps = {
  addUserFunction(): void;
};
const Biometrics = ({ addUserFunction }: myProps) => {
  const [userWantBiometrics, setUserWantBiometrics] =
    React.useState<boolean>(false);
  return (
    <div className="w-10/12 my-0 mx-auto">
      <Image src={img} alt="" placeholder="blur" className="my-2 mx-auto" />{" "}
      <h2 className="title text-3xl">
        <strong>enable biometrics</strong>
      </h2>
      <p className="text-center text-lg">
        Make your login and Transaction faster and more secure with biometrics
        enabled
      </p>
      <div className="bg-white my-4 flex justify-between">
        <div className="flex justify-center gap-2">
          <BsFillFileLock2Fill
            fill="blue"
            size={60}
            className="  p-4 bg-blue-100 rounded-full
            "
          />{" "}
          <span className="ml-3">
            <strong>Login</strong> <br />
            <span className="text-gray-800">Access to app</span>
          </span>
        </div>{" "}
        <span className="p-8 ">
          <span className=" resendOTP p-2  rounded-md font-bold text-neutral-600">
            Default{" "}
          </span>
        </span>
      </div>
      <div className="flex justify-between my-8 mx-auto">
        <button
          onClick={addUserFunction}
          className="p-5 rounded-xl  w-5/12 resendOTP cursor-pointer  text-blue-700 font-bold capitalize"
        >
          Not Now
        </button>
        <button
          onClick={() => setUserWantBiometrics(true)}
          type="submit"
          className="p-5 cursor-pointer rounded-xl  w-5/12 bg-blue-700 text-white font-bold capitalize"
        >
          Enable now
        </button>
      </div>
      {userWantBiometrics && (
        <div className="absolute w-10/12  top-30 bg-blue-600">
          <h3 className="text-center text-white mt-4 mb-10 relative">
            <BiX
              className="absolute right-5 border hover:p-1 cursor-pointer bg-red-600 rounded-2xl"
              onClick={() => setUserWantBiometrics(false)}
              size={29}
            />{" "}
            <BsFillExclamationCircleFill size={26} className="inline-block" />{" "}
            <span className="title">Information</span>
          </h3>
          <p className="text-center text-white p-3">
            Please Remember this is just a basic clone of{" "}
            <strong>MoniePoint Banking App </strong>
            done for educational purpose only so the biometrics funtionality is
            unavailable for now.
          </p>
          <div className="flex justify-end p-4">
            <button
              onClick={addUserFunction}
              className="p-2 border bg-white text-blue-700 font-bold capitalize rounded-2xl hover:bg-blue-100"
            >
              proceed
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Biometrics;
