"use client";
import AncikaKaida from "@/src/components/FakeAtmComponent/AncikaKaida";
import BackNavigationForSignUp from "@/src/components/FakeAtmComponent/BackNavigationForSignUp";
import GoToSignUp from "@/src/components/FakeAtmComponent/GoToSignUp";
import Logo from "@/src/components/FakeAtmComponent/Logo";
import NumberFieldInForm from "@/src/components/FakeAtmComponent/NumberFieldInForm";
import Link from "next/link";
import React from "react";
import {
  BiArrowFromBottom,
  BiCheckbox,
  BiChevronDown,
  BiGift,
  BiSolidCheckbox,
  BiSolidCheckboxChecked,
} from "react-icons/bi";
import { BsFillExclamationCircleFill } from "react-icons/bs";

const HomePage = () => {
  const [goToSignup, setGotoSignup] = React.useState<boolean>(true);
  const [ancikaKaida, setAncikaKaida] = React.useState<boolean>(true);
  const [referralCodeExist, setReferralCodeExist] = React.useState(false);
  const [referralCode, setReferralCode] = React.useState<string>("");
  const [numberIsEnoughForSignUp, setNumberIsEnoughForSignUp] =
    React.useState<boolean>(false);
  const [numberValue, setNumberValue] = React.useState<number | undefined>(
    9075898883,
  );
  const [agreedWithTheNumber, setAgreedWithNumber] =
    React.useState<boolean>(true);
  const [termsAcepted, setTermsAcepted] = React.useState<boolean>(false);
  const [agreedWithDataProcessingConsent, setAgreedwithDataProcessingConsent] =
    React.useState<boolean>(false);
  const [wantToRecieveUpdates, setWantToRecieveUpdates] =
    React.useState<boolean>(false);
  const [userGaveConsent, setUserGaveConsent] = React.useState<boolean>(true);
  const maskNumberStart = (something: number | string): string =>
    `***${something.toString().split("").slice(-3).join("")}`;
  const [otpValues, setOtpValue] = React.useState<number[]>([]);
  return (
    <>
      {!goToSignup ? (
        <GoToSignUp setGotoSignup={setGotoSignup} />
      ) : (
        <>
          {!ancikaKaida && goToSignup ? (
            <AncikaKaida
              setAncikaKaida={setAncikaKaida}
              setGotoSignup={setGotoSignup}
            />
          ) : (
            <>
              {!agreedWithTheNumber && ancikaKaida && goToSignup ? (
                <div>
                  {" "}
                  <BackNavigationForSignUp
                    GoBackTo={() => setAncikaKaida(false)}
                    progressBarAmount={3}
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
                  {!userGaveConsent &&
                  agreedWithTheNumber &&
                  ancikaKaida &&
                  goToSignup ? (
                    <div>
                      <BackNavigationForSignUp
                        GoBackTo={() => setAgreedWithNumber(false)}
                        progressBarAmount={5}
                      />
                      <div className="w-10/12 my-3 mx-auto">
                        <h2 className="font-bold">
                          {" "}
                          SuhayaPoint need your consent to continue
                        </h2>
                      </div>
                      <div className="w-9/12 bg-white text-sm p-4 rounded-2xl my-3 mx-auto">
                        <div className="grid  grid-cols-12 my-3">
                          {termsAcepted ? (
                            <BiSolidCheckboxChecked
                              size={40}
                              fill="blue"
                              className="inline-block col-span-2 ml-2"
                              onClick={() => setTermsAcepted(false)}
                            />
                          ) : (
                            <BiCheckbox
                              size={40}
                              fill="gray"
                              className="inline-block col-span-2 ml-2"
                              onClick={() => setTermsAcepted(true)}
                            />
                          )}
                          <span className="col-span-9 text-sm">
                            {" "}
                            I have read and agreed with{" "}
                            <span className="font-bold text-blue-600 cursor-pointer">
                              Terms and conditions
                            </span>{" "}
                            and{" "}
                            <span className="font-bold  text-blue-600 cursor-pointer">
                              Data privacy statements
                            </span>
                          </span>
                        </div>
                        <div className="grid  grid-cols-12 my-3">
                          {agreedWithDataProcessingConsent ? (
                            <BiSolidCheckboxChecked
                              size={40}
                              fill="blue"
                              className="inline-block col-span-2 ml-2"
                              onClick={() =>
                                setAgreedwithDataProcessingConsent(false)
                              }
                            />
                          ) : (
                            <BiCheckbox
                              size={40}
                              fill="gray"
                              className="inline-block col-span-2 ml-2"
                              onClick={() =>
                                setAgreedwithDataProcessingConsent(true)
                              }
                            />
                          )}
                          <span className="col-span-9">
                            I have read and agree with the{" "}
                            <span className="text-blue-500 font-bold">
                              Data processing consent
                            </span>
                          </span>
                        </div>
                        <div className="grid  grid-cols-12">
                          {wantToRecieveUpdates ? (
                            <BiSolidCheckboxChecked
                              size={40}
                              fill="blue"
                              className="inline-block col-span-2 ml-2"
                              onClick={() => setWantToRecieveUpdates(false)}
                            />
                          ) : (
                            <BiCheckbox
                              size={40}
                              fill="gray"
                              className="inline-block col-span-2 ml-2"
                              onClick={() => setWantToRecieveUpdates(true)}
                            />
                          )}
                          <span className="col-span-9 ">
                            I would like to recieve marketing and promotional
                            information{" "}
                            <span className="text-gray-500">(Optional)</span>
                          </span>
                        </div>
                      </div>
                      <div className="absolute w-10/12 bottom-0 left-13">
                        <span
                          onClick={() =>
                            agreedWithDataProcessingConsent &&
                            termsAcepted &&
                            setUserGaveConsent(true)
                          }
                          className={`inline-block my-2 font-bold capitalize w-full text-center p-2 rounded-xl ${termsAcepted && agreedWithDataProcessingConsent ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-400"}`}
                        >
                          continue
                        </span>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div>
                        <BackNavigationForSignUp
                          GoBackTo={() => setUserGaveConsent(false)}
                          progressBarAmount={9}
                        />
                        <div className="my-3 mx-auto  w-10/12 ">
                          <h2 className="font-bold">
                            Verify Your Phone Number
                          </h2>
                          <p className="text-gray-500">
                            We've set a 6 digit code to{" "}
                            {maskNumberStart(numberValue!)} {". "} Check your
                            SMS <br />
                            and enter it here.
                          </p>

                          <div className="w-full p-4 bg-white rounded-md">
                            <div className="flex justify-around w-8/12 my-2 mx-auto">
                              <input
                                type="text"
                                className="otp_1 otp"
                                autoFocus={otpValues.length == 0}
                                onChange={(e) =>
                                  setOtpValue([
                                    ...otpValues,
                                    Number(e.currentTarget.value),
                                  ])
                                }
                              />
                              <input
                                type="text"
                                className="otp_2 otp"
                                autoFocus={otpValues.length == 1}
                              />
                              <input
                                type="text"
                                className="otp_3 otp"
                                autoFocus={otpValues.length == 2}
                              />
                              <input
                                type="text"
                                className="otp_4 otp"
                                autoFocus={otpValues.length == 3}
                              />
                              <input
                                type="text"
                                className="otp_5 otp"
                                autoFocus={otpValues.length == 4}
                              />
                              <input
                                type="text"
                                className="otp_6 otp"
                                autoFocus={otpValues.length == 5}
                              />
                            </div>
                            <div className=" w-10/12 my-4 mx-auto p-4 resendOTP  rounded-2xl text-xs flex justify-between">
                              <div className="flex gap-3">
                                <BsFillExclamationCircleFill
                                  fill="blue"
                                  size={20}
                                  className="inline-block"
                                />
                                <span className=" inline-block pt-1">
                                  Did'nt recieved the code{" "}
                                </span>
                              </div>
                              <span className="w-fit  ">Resend ( 0:19)</span>
                            </div>
                            <input
                              type="text"
                              name=""
                              id="otpT"
                              className="border bg-white border-blue-500
                             "
                            />
                          </div>
                        </div>
                      </div>
                    </>
                  )}
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
