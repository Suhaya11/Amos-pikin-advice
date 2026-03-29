"use client";
import AncikaKaida from "@/src/components/FakeAtmComponent/AncikaKaida";
import BackNavigationForSignUp from "@/src/components/FakeAtmComponent/BackNavigationForSignUp";
import ConfirmPasscode from "@/src/components/FakeAtmComponent/ConfirmPasscode";
import GoToSignUp from "@/src/components/FakeAtmComponent/GoToSignUp";
import LongNextButton from "@/src/components/FakeAtmComponent/LongNextButton";

import NumberFieldInForm from "@/src/components/FakeAtmComponent/NumberFieldInForm";
import OtpInput from "@/src/components/FakeAtmComponent/OtpInput";
import OtpModal from "@/src/components/FakeAtmComponent/OtpModal";
import PasscodeSetupPage from "@/src/components/FakeAtmComponent/PasscodeSetupPage";
import PhoneNumberVerifySignUp from "@/src/components/FakeAtmComponent/PhoneNumberVerifySignUp";
import PinCreationPage from "@/src/components/FakeAtmComponent/PinCreationPage";
import UserConsentPageOnSignUp from "@/src/components/FakeAtmComponent/UserConsentPageOnSignUp";
import VerifyEmail from "@/src/components/FakeAtmComponent/VerifyEmail";

import React, { useEffect } from "react";

import { BsFillExclamationCircleFill } from "react-icons/bs";

const HomePage = () => {
  const [goToSignup, setGotoSignup] = React.useState<boolean>(true);
  const [ancikaKaida, setAncikaKaida] = React.useState<boolean>(true);
  const [referralCodeExist, setReferralCodeExist] = React.useState(false);
  const [referralCode, setReferralCode] = React.useState<string>("");
  // const [numberIsEnoughForSignUp, setNumberIsEnoughForSignUp] =
  //   React.useState<boolean>(false);
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
  // const [otpValues, setOtpValue] = React.useState<string[]>([]);
  const [otpIsValid, setOtpIsValid] = React.useState<boolean>(true);

  const [wrongOtp, setWrongOtp] = React.useState<boolean>(false);
  const [generatedOtp, setGeneratedOtp] = React.useState<string>(
    Math.random().toString().split("").slice(2, 8).join(""),
  );
  const [countSec, setCountSec] = React.useState<number>(60);
  const [countMin, setCountMin] = React.useState<number>(1);
  const [noOfOtpReRequest, setNoOfOtpReRequest] = React.useState<number>(0);
  const [showOtpModal, setShowOtpModal] = React.useState<boolean>(false);
  const [emailValue, setEmailValue] = React.useState<string>("");
  const [emailAdded, setEmailAdded] = React.useState<boolean>(true);
  const [passcodeValue, setPasscodeValue] = React.useState("");
  const [passcodeInserted, setPasscodeInserted] =
    React.useState<boolean>(false);
  const [passcodeIsConfirmed, setPasscodeIsConfirmed] =
    React.useState<boolean>(true);
  const [userPin, setUserPin] = React.useState<string>("");
  const [doneWithPin, setDoneWithPin] = React.useState<boolean>(false);
  const OTPCounter = async () => {
    setInterval(() => {
      setCountMin((prev) => (prev > 0 ? prev - 1 : prev));
    }, 1000);
  };

  const reduceSec = () => {
    setInterval(() => {
      setCountSec((prev) => (prev > 0 ? prev - 1 : prev));
    }, 1000);
  };
  React.useEffect(() => {
    setShowOtpModal(true);
    setTimeout(() => {
      setShowOtpModal(false);
    }, 60000);
  }, []);

  const onOtpComleted = (userOTP: string): void => {
    console.error(userOTP);
    if (!isNaN(Number(userOTP)) && userOTP === generatedOtp)
      setOtpIsValid(true);
    else setWrongOtp(true);
  };
  // console.error("hhh", new Array(6).fill(Math.random()));

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
                <PhoneNumberVerifySignUp
                  setAgreedWithNumber={setAgreedWithNumber}
                  setReferralCode={setReferralCode}
                  referralCode={referralCode}
                  setReferralCodeExist={setReferralCodeExist}
                  referralCodeExist={referralCodeExist}
                  setAncikaKaida={setAncikaKaida}
                  setNumberValue={setNumberValue}
                  numberValue={numberValue}
                />
              ) : (
                <>
                  {!userGaveConsent &&
                  agreedWithTheNumber &&
                  ancikaKaida &&
                  goToSignup ? (
                    <UserConsentPageOnSignUp
                      setUserGaveConsent={setUserGaveConsent}
                      wantToRecieveUpdates={wantToRecieveUpdates}
                      setAgreedWithNumber={setAgreedWithNumber}
                      setAgreedwithDataProcessingConsent={
                        setAgreedwithDataProcessingConsent
                      }
                      agreedWithDataProcessingConsent={
                        agreedWithDataProcessingConsent
                      }
                      setTermsAcepted={setTermsAcepted}
                      setWantToRecieveUpdates={setWantToRecieveUpdates}
                      termsAcepted={termsAcepted}
                    />
                  ) : (
                    <>
                      {!otpIsValid ? (
                        <div>
                          <BackNavigationForSignUp
                            GoBackTo={() => setUserGaveConsent(false)}
                            progressBarAmount={9}
                          />

                          {showOtpModal && (
                            <OtpModal
                              reduceSec={reduceSec}
                              countMin={countMin}
                              countSec={countSec}
                              setGenerateOtp={setGeneratedOtp}
                              OTPCounter={OTPCounter}
                              setCountMin={setCountMin}
                              setCountSec={setCountSec}
                              generatedOtp={generatedOtp}
                            />
                          )}
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
                              <OtpInput
                                length={generatedOtp.toString().length}
                                onOTPComplete={onOtpComleted}
                              />
                              {/* <div className="flex justify-around w-8/12 my-2 mx-auto">
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
                            </div> */}
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
                                <button
                                  onClick={() => {
                                    setShowOtpModal(false);
                                    setShowOtpModal(true);
                                    setWrongOtp(false);
                                    setTimeout(() => {
                                      setShowOtpModal(false);
                                    }, 60000);
                                  }}
                                  className={
                                    countSec
                                      ? "w-fit p-3 bg-gray-400 text-white rounded-2xl font-bold pointer-events-none"
                                      : "p-3 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-900 pointer-events-auto cursor-pointer active:p-1 active:bg-red-500"
                                  }
                                >
                                  Resend{" "}
                                  {countSec
                                    ? `(${countMin ? `${countMin}:` : ""}${countSec})`
                                    : ""}
                                </button>
                              </div>
                              {wrongOtp && (
                                <p className="text-center text-red-700 animate-pulse">
                                  Invalid or expired OTP{" "}
                                </p>
                              )}
                            </div>
                          </div>
                          {/* <LongNextButton actionToDo={onOtpComleted()}/> */}
                        </div>
                      ) : (
                        <>
                          {!emailAdded ? (
                            <VerifyEmail
                              setOtpIsValid={setOtpIsValid}
                              emailValue={emailValue}
                              setEmailValue={setEmailValue}
                              setEmailAdded={setEmailAdded}
                            />
                          ) : (
                            <>
                              {!passcodeIsConfirmed ? (
                                <>
                                  {!passcodeInserted ? (
                                    <PasscodeSetupPage
                                      setPasscodeInserted={setPasscodeInserted}
                                      passcodeValue={passcodeValue}
                                      setPasscodeValue={setPasscodeValue}
                                      maskNumberStart={maskNumberStart}
                                      setEmailAdded={setEmailAdded}
                                      numberValue={numberValue}
                                    />
                                  ) : (
                                    <ConfirmPasscode
                                      setPasscodeInserted={setPasscodeInserted}
                                      passcodeValue={passcodeValue}
                                      setPasscodeValue={setPasscodeValue}
                                      maskNumberStart={maskNumberStart}
                                      setEmailAdded={setEmailAdded}
                                      numberValue={numberValue}
                                      otpCompleted={(text: string) => {
                                        if (
                                          passcodeValue &&
                                          passcodeValue === text
                                        )
                                          setPasscodeIsConfirmed(true);
                                      }}
                                    />
                                  )}
                                </>
                              ) : (
                                <>
                                  {!doneWithPin ? (
                                    <PinCreationPage
                                      userPin={userPin}
                                      setUserPin={setUserPin}
                                      setDoneWithPin={setDoneWithPin}
                                    />
                                  ) : (
                                    <div className="text-9xl text-pink-500">
                                      {" "}
                                      DONE WITH PIN NOW
                                    </div>
                                  )}
                                </>
                              )}
                            </>
                          )}
                        </>
                      )}
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
