"use client";
import { Data } from "@/src/components/data";
import BackNavigationForSignUp from "@/src/components/FakeAtmComponent/BackNavigationForSignUp";
import Logo from "@/src/components/FakeAtmComponent/Logo";
import NumberFieldInForm from "@/src/components/FakeAtmComponent/NumberFieldInForm";
import PublicOnlyRoute from "@/src/components/FakeAtmComponent/PublicOnlyRoutes";
import UsernameFieldInForm from "@/src/components/FakeAtmComponent/userNameFieldInForm";

import React from "react";
import {
  BiFingerprint,
  BiPhone,
  BiSolidLeftArrow,
  BiSolidLeftArrowAlt,
  BiUser,
} from "react-icons/bi";
import { BsFillLockFill } from "react-icons/bs";

const LoginPage = () => {
  const [wantToLoginwithPhoneNumber, setWantToLoginwithPhoneNumber] =
    React.useState<boolean>(false);
  const [startedTypingNumber, setStartedTypingNumber] =
    React.useState<boolean>(true);
  const [numberVerified, setNumberVerified] = React.useState<boolean>(true);
  const [numberExist, setNumberExist] = React.useState<boolean>(true);
  const [numberValue, setNumberValue] = React.useState<string | undefined>();
  const login = (lamba: string | undefined = numberValue) => {
    const query = localStorage.getItem("AmosIdeaApp");
    const localData: Data = JSON.parse(query || "{}");
  };
  return (
    <PublicOnlyRoute>
      <div>
        {!numberVerified ? (
          <>
            <div className="flex justify-between relative ">
              <div className="absolute">
                <Logo />
              </div>
              <div className="flex flex-wrap flex-row justify-end absolute right-0 top-4">
                <span className="w-full text-right mr-10">
                  lost your phone?
                </span>{" "}
                <span className="text-blue-600 cursor-pointer hover:text-blue-800 w-full text-right mr-10">
                  <BsFillLockFill className="inline-block font-extrabold" />{" "}
                  Lock your account
                </span>
              </div>
            </div>
            <div className="absolute bottom-0  w-full">
              <h1 className="w-10/12  my-2 mx-auto uppercase font-extrabold">
                Log in to your account
              </h1>
              <div className="flex gap-4 w-10/12 my-2 mx-auto  ">
                <span>login with</span>
                <span
                  onClick={() => setWantToLoginwithPhoneNumber(true)}
                  className={`${wantToLoginwithPhoneNumber ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-300"} cursor-pointer rounded-3xl font-bold p-2 `}
                >
                  <BiPhone className="inline-block" /> Phone
                </span>
                <span
                  onClick={() => setWantToLoginwithPhoneNumber(false)}
                  className={`${wantToLoginwithPhoneNumber ? "bg-gray-100 text-gray-400" : "bg-blue-600 text-white"} p-2 rounded-3xl cursor-pointer font-bold`}
                >
                  {" "}
                  <BiUser className="inline-block " /> Username
                </span>{" "}
              </div>
              {wantToLoginwithPhoneNumber ? (
                <NumberFieldInForm
                  numberValue={numberValue}
                  setNumberValue={setNumberValue}
                />
              ) : (
                <UsernameFieldInForm
                  setStartedTypingNumber={setStartedTypingNumber}
                  startedTypingNumber={startedTypingNumber}
                />
              )}
              <div className="flex justify-between w-10/12 my-3 mx-auto">
                <span className="w-7/12 cursor-pointer bg-blue-600 p-3 text-center text-white font-bold rounded-xl pt-6 text-2xl">
                  Next
                </span>{" "}
                <span className="w-3/12  text-center ">
                  <BiFingerprint
                    size={60}
                    fill="blue"
                    className="my-0 mx-auto bg-blue-100 p-2 rounded-2xl  cursor-pointer"
                  />
                </span>
              </div>
              <div>
                <p className="capitalize text-center text-blue-600 cursor-pointer">
                  change my phone number
                </p>
              </div>
              <div className="w-10/12 my-3 mx-auto">
                <p className="text-center">
                  Licenased by the{" "}
                  <strong className="capitalize">sulaiman haladu yau</strong>{" "}
                  and insured by{" "}
                  <strong>the advice of Amospikin the tech popet</strong> read
                  my <strong>privacy policy</strong>
                </p>
              </div>
            </div>
          </>
        ) : (
          <>
            <div>
              <BiSolidLeftArrowAlt
                size={40}
                fill="blue"
                onClick={() => setNumberVerified(false)}
              />
              <h1 className="title">Passcode</h1>
              <form className="w-6/12 my-0 mx-auto">
                <input type="password" />
              </form>
            </div>
          </>
        )}
      </div>
    </PublicOnlyRoute>
  );
};

export default LoginPage;
