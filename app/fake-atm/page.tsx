"use client";
import { alradyExist, Data, user } from "@/src/components/data";
import AncikaKaida from "@/src/components/FakeAtmComponent/AncikaKaida";
import BackNavigationForSignUp from "@/src/components/FakeAtmComponent/BackNavigationForSignUp";
import Biometrics from "@/src/components/FakeAtmComponent/Biometrics";
import ConfirmPasscode from "@/src/components/FakeAtmComponent/ConfirmPasscode";
// import GoToSignUp from "@/src/components/FakeAtmComponent/GoToSignUp";
import Logo from "@/src/components/FakeAtmComponent/Logo";

import OtpModal from "@/src/components/FakeAtmComponent/OtpModal";
import OTPVerify from "@/src/components/FakeAtmComponent/OTPVerify";
import PasscodeSetupPage from "@/src/components/FakeAtmComponent/PasscodeSetupPage";
import PhoneNumberVerifySignUp from "@/src/components/FakeAtmComponent/PhoneNumberVerifySignUp";
import PinCreationPage from "@/src/components/FakeAtmComponent/PinCreationPage";
import PublicOnlyRoute from "@/src/components/FakeAtmComponent/PublicOnlyRoutes";
import UserConsentPageOnSignUp from "@/src/components/FakeAtmComponent/UserConsentPageOnSignUp";
import VerifyEmail from "@/src/components/FakeAtmComponent/VerifyEmail";
import { Questrial } from "next/font/google";
import Link from "next/link";
import { redirect } from "next/navigation";

import React from "react";
import { BiWorld } from "react-icons/bi";

const HomePage = () => {
  // console.error("hhh", new Array(6).fill(Math.random()));
  return (
    <>
      {" "}
      <PublicOnlyRoute>
        <div className="reletive">
          {" "}
          <div className="absolute left-20 top-15">
            {" "}
            <Logo />
          </div>
          <div className="absolute w-8/12 my-3 mx-auto top-15 left-15">
            <span className="text-4xl font-extrabold left-30 top-2 absolute capitalize">
              SuhayaPoint
            </span>
            <span className=" fakeLearningBank">fake learning bank</span>
          </div>
          <div className="mt-30 bg-blend-darken rounded-2xl bg-blue-900 w-9/12 border mx-auto p-4">
            <BiWorld
              size={150}
              fillRule="evenodd"
              fill="lightblue"
              className="my-0 mx-auto"
            />
          </div>
          <div className="w-8/12 my-3 mx-auto">
            <h1 className="text-2xl text-center font-extrabold">
              {" "}
              Get a debit card <br />
              that always works
            </h1>
            <p className="text-center text-sm">
              Withdraw cash and make payments <br /> anywhere securely with your
              debit <br /> card
            </p>
          </div>
          <div className="flex justify-around w-10/12 my-0 mx-auto">
            <Link
              href={"/fake-atm/login"}
              className="loginHomePage rounded-2xl font-bold"
            >
              Login
            </Link>{" "}
            <Link
              href={"/fake-atm/signup"}
              className="signupHomePage font-bold rounded-2xl  text-white"
            >
              Sing Up
            </Link>
          </div>
          <p className="text-center text-xs w-9/12 my-2 mx-auto">
            SuhayaPoint FLB is licensed by{" "}
            <strong>Suhaya learning enviroment</strong>. All deposits are
            insured by <strong>Your Local strorage</strong>
          </p>
        </div>
      </PublicOnlyRoute>
    </>
  );
};

export default HomePage;
