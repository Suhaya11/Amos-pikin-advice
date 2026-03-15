"use client";
import Logo from "@/src/components/FakeAtmComponent/Logo";
import NumberFieldInForm from "@/src/components/FakeAtmComponent/NumberFieldInForm";
import Link from "next/link";
import React from "react";
import {
  BiChevronDown,
  BiFile,
  BiGift,
  BiSolidFace,
  BiSolidLeftArrowAlt,
  BiSolidUser,
  BiWorld,
} from "react-icons/bi";

const HomePage = () => {
  const [goToSignup, setGotoSignup] = React.useState<boolean>(true);
  const [ancikaKaida, setAncikaKaida] = React.useState<boolean>(false);
  const [referralCodeExist, setReferralCodeExist] = React.useState(false);
  const [numberIsEnoughForSignUp, setNumberIsEnoughForSignUp] =
    React.useState<boolean>(false);
  const [numberValue, setNumberValue] = React.useState<number>();
  return (
    <>
      {!goToSignup ? (
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
            <button
              onClick={() => setGotoSignup(true)}
              className="signupHomePage font-bold rounded-2xl  text-white"
            >
              Sing Up
            </button>
          </div>
          <p className="text-center text-xs w-9/12 my-2 mx-auto">
            SuhayaPoint FLB is licensed by{" "}
            <strong>Suhaya learning enviroment</strong>. All deposits are
            insured by <strong>Your Local strorage</strong>
          </p>
        </div>
      ) : (
        <>
          {!ancikaKaida ? (
            <div>
              <BiSolidLeftArrowAlt
                size={40}
                onClick={() => setGotoSignup(false)}
              />

              <div className="w-11/12 my-2 mx-auto ">
                {" "}
                <h2 className="font-bold text-xl">Before you get started </h2>
                <p className="text-gray-500 text-xs">
                  {" "}
                  Confirm you meet these requirments
                </p>
              </div>
              <div className="w-8/12 my-2 mx-auto">
                <div className="flex my-4 gap-4">
                  <BiSolidUser size={40} className="inline-block" fill="blue" />{" "}
                  <div className="inline-block">
                    <h2 className="font-bold">You are 16 years and older</h2>
                    <p className="text-xs font-light text-gray-500">
                      You must be atlest 16 years old to <br />
                      open an account
                    </p>
                  </div>
                </div>{" "}
                <div className="flex my-4 gap-4">
                  <BiFile size={40} className="inline-block" fill="blue" />{" "}
                  <div className="inline-block">
                    <h2 className="font-bold">You have a valid NIN or BVN</h2>
                    <p className="text-xs font-light text-gray-500">
                      Use a valid NIN or BVN to help us <br />
                      verify your identity quickly
                    </p>
                  </div>
                </div>{" "}
                <div className="flex gap-4 my-4">
                  <BiSolidFace size={60} className="inline-block" fill="blue" />{" "}
                  <div className="inline-block">
                    <h2 className="font-bold">
                      You can complete face verification
                    </h2>
                    <p className="text-xs font-light text-gray-500">
                      Make sure your in a well-lit area and follow the onscreen
                      instruction for the best result
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-5 w-full">
                {" "}
                <p
                  className="text-white rounded-lg w-8/12 my-0 mx-auto text-center p-3 bg-blue-700"
                  onClick={() => setAncikaKaida(true)}
                >
                  <strong>get started</strong>
                </p>{" "}
              </div>
            </div>
          ) : (
            <>
              <div>
                {" "}
                <div className="flex justify-between text-blue-700">
                  <BiSolidLeftArrowAlt
                    size={40}
                    className="cursor-pointer"
                    onClick={() => setAncikaKaida(false)}
                  />
                  <span className="cursor-pointer">New Help?</span>
                </div>
                <div className=" border-gray-500 bg-gray-200">
                  <div className="w-4/12 border-blue-700 border-2"> </div>
                </div>
                <div className="my-3 mx-auto w-10/12">
                  <h2>
                    <strong>What's your phone number?</strong>
                  </h2>
                  <p className="text-gray-500 text-sm">
                    Enter the phone number you want use for this account
                  </p>
                </div>
                <div className="my-2 mx-auto w-10/12 p-2 bg-white rounded-2xl">
                  <NumberFieldInForm
                    setNumberValue={setNumberValue}
                    numberValue={numberValue}
                  />
                </div>
                <div className="referralSpace ">
                  <div className="flex gap-3">
                    <BiGift
                      size={50}
                      className="inline-block bg-gray-100 p-2 rounded-2xl"
                      fill="blue"
                    />{" "}
                    <span className="text-blue-500">Have referral code?</span>
                  </div>
                  <BiChevronDown
                    className="inline-block"
                    onClick={() => setReferralCodeExist(!referralCodeExist)}
                  />
                  {referralCodeExist && (
                    <div className="w-full flex">
                      <input
                        type="text"
                        name="referral"
                        id="referral"
                        placeholder="referral code (Optional)"
                        className="bg-white p-2 rounded-2xl my-2 mx-auto w-10/12 focus:border-blue-700 focus:border outline-none"
                      />
                    </div>
                  )}
                </div>
                <div
                  className={`absolute bottom-0 text-center w-10/12 my-3 left-10 p-3 rounded-xl ${numberValue && numberValue?.toString().trim().length > 9 ? "bg-blue-700 text-white" : "bg-gray-300 text-gray-500"}`}
                >
                  <strong>Next</strong>
                </div>
              </div>
            </>
          )}
        </>
      )}{" "}
    </>
  );
};

export default HomePage;
