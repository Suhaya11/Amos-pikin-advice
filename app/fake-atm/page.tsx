"use client";
import AncikaKaida from "@/src/components/FakeAtmComponent/AncikaKaida";
import BackNavigationForSignUp from "@/src/components/FakeAtmComponent/BackNavigationForSignUp";
import GoToSignUp from "@/src/components/FakeAtmComponent/GoToSignUp";
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
  const [ancikaKaida, setAncikaKaida] = React.useState<boolean>(true);
  const [referralCodeExist, setReferralCodeExist] = React.useState(true);
  const [referralCode, setReferralCode] = React.useState<string>("");
  const [numberIsEnoughForSignUp, setNumberIsEnoughForSignUp] =
    React.useState<boolean>(false);
  const [numberValue, setNumberValue] = React.useState<number>();
  const [agreedWithTheNumber, setAgreedWithNumber] =
    React.useState<boolean>(true);
  return (
    <>
      {!goToSignup ? (
        <GoToSignUp setGotoSignup={setGotoSignup} />
      ) : (
        <>
          {!ancikaKaida ? (
            <AncikaKaida
              setAncikaKaida={setAncikaKaida}
              setGotoSignup={setGotoSignup}
            />
          ) : (
            <>
              {!agreedWithTheNumber ? (
                <div>
                  {" "}
                  <BackNavigationForSignUp
                    progressBarAmount={2}
                    GoBackTo={() => setGotoSignup(false)}
                  />
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
                          value={referralCode}
                          onChange={(e) =>
                            setReferralCode(e.currentTarget.value)
                          }
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
                    onClick={() =>
                      numberValue &&
                      numberValue?.toString()?.length > 9 &&
                      setAgreedWithNumber(true)
                    }
                    className={`absolute bottom-0 text-center w-10/12 my-3 left-10 p-3 rounded-xl ${numberValue && numberValue?.toString().trim().length > 9 ? "bg-blue-700 text-white" : "bg-gray-300 text-gray-500"}`}
                  >
                    <strong className="select-none">Next</strong>
                  </div>
                </div>
              ) : (
                <>
                  <div>
                    <BackNavigationForSignUp
                      GoBackTo={() => setAgreedWithNumber(false)}
                      progressBarAmount={4}
                    />
                    <div className="w-10/12 my-3 mx-auto">
                      <h2 className="font-bold">
                        {" "}
                        SuhayaPoint need your consent to continue
                      </h2>
                    </div>
                    <div className="w-9/12 bg-white rounded-2xl my-3 mx-auto">
                      <div>
                        <input
                          type="checkbox"
                          name="termsAndCondititon"
                          id="termsAndCondititon"
                        />
                        <label htmlFor="termsAndCondititon">
                          {" "}
                          I have read and agreed with{" "}
                          <span className="font-bold text-blue-600">
                            Terms and conditions
                          </span>{" "}
                          and{" "}
                          <span className="font-bold text-blue-600">
                            Data privacy statements
                          </span>
                        </label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          name="termsAndCondititon"
                          id="termsAndCondititon"
                        />
                        <label htmlFor="termsAndCondititon"></label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          name="termsAndCondititon"
                          id="termsAndCondititon"
                        />
                        <label htmlFor="termsAndCondititon"></label>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </>
          )}
        </>
      )}{" "}
    </>
  );
};

export default HomePage;
