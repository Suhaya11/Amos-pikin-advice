"use client";
import { alradyExist, Data, user } from "@/src/components/data";
import AncikaKaida from "@/src/components/FakeAtmComponent/AncikaKaida";
import BackNavigationForSignUp from "@/src/components/FakeAtmComponent/BackNavigationForSignUp";
import Biometrics from "@/src/components/FakeAtmComponent/Biometrics";
import ConfirmPasscode from "@/src/components/FakeAtmComponent/ConfirmPasscode";
import GoToSignUp from "@/src/components/FakeAtmComponent/GoToSignUp";

import OtpModal from "@/src/components/FakeAtmComponent/OtpModal";
import OTPVerify from "@/src/components/FakeAtmComponent/OTPVerify";
import PasscodeSetupPage from "@/src/components/FakeAtmComponent/PasscodeSetupPage";
import PhoneNumberVerifySignUp from "@/src/components/FakeAtmComponent/PhoneNumberVerifySignUp";
import PinCreationPage from "@/src/components/FakeAtmComponent/PinCreationPage";
import UserConsentPageOnSignUp from "@/src/components/FakeAtmComponent/UserConsentPageOnSignUp";
import VerifyEmail from "@/src/components/FakeAtmComponent/VerifyEmail";
import { Questrial } from "next/font/google";
import { redirect } from "next/navigation";

import React from "react";

const HomePage = () => {
  const [goToSignup, setGotoSignup] = React.useState<boolean>(false);
  const [ancikaKaida, setAncikaKaida] = React.useState<boolean>(false);
  const [referralCodeExist, setReferralCodeExist] = React.useState(false);
  const [referralCode, setReferralCode] = React.useState<string>("");
  // const [numberIsEnoughForSignUp, setNumberIsEnoughForSignUp] =
  //   React.useState<boolean>(false);
  const [numberValue, setNumberValue] = React.useState<number | undefined>();
  const [agreedWithTheNumber, setAgreedWithNumber] =
    React.useState<boolean>(false);
  const [termsAcepted, setTermsAcepted] = React.useState<boolean>(false);
  const [agreedWithDataProcessingConsent, setAgreedwithDataProcessingConsent] =
    React.useState<boolean>(false);
  const [wantToRecieveUpdates, setWantToRecieveUpdates] =
    React.useState<boolean>(false);
  const [userGaveConsent, setUserGaveConsent] = React.useState<boolean>(false);
  const maskNumberStart = (something: number | string): string =>
    `***${something.toString().split("").slice(-3).join("")}`;
  // const [otpValues, setOtpValue] = React.useState<string[]>([]);
  const [otpIsValid, setOtpIsValid] = React.useState<boolean>(false);

  const [wrongOtp, setWrongOtp] = React.useState<boolean>(false);
  const [generatedOtp, setGeneratedOtp] = React.useState<string>(
    Math.random().toString().split("").slice(2, 8).join(""),
  );
  const [countSec, setCountSec] = React.useState<number>(60);
  const [countMin, setCountMin] = React.useState<number>(1);
  // const [noOfOtpReRequest, setNoOfOtpReRequest] = React.useState<number>(0);
  const [showOtpModal, setShowOtpModal] = React.useState<boolean>(false);
  const [emailValue, setEmailValue] = React.useState<string>("");
  const [emailAdded, setEmailAdded] = React.useState<boolean>(false);
  const [passcodeValue, setPasscodeValue] = React.useState<string>("");
  const [passcodeInserted, setPasscodeInserted] =
    React.useState<boolean>(false);
  const [passcodeIsConfirmed, setPasscodeIsConfirmed] =
    React.useState<boolean>(false);
  const [passcodeNotSame, setPasscodeNotSame] = React.useState(false);
  const [userPin, setUserPin] = React.useState<string>("");
  const [doneWithPin, setDoneWithPin] = React.useState<boolean>(false);
  const addUserFunction = () => {
    const user: user = {
      bankDatails: {
        acc_no: numberValue!,
        acc_name: "",
        acc_bank: "suhayaPoing",
      },
      loginInfo: {
        phoneNumber: numberValue!,
        password: passcodeValue,
        username: "",
        nin: "",
        bvn: "",
        email: emailValue,
        securityQuestion1: {
          question: "whats your name",
          answer: "suhaya",
        },
        securityQuestion2: {
          question: "how old are you",
          answer: 24,
        },
      },
    };

    const query = localStorage.getItem("AmosIdeaApp");
    if (!query) {
      const AmosIdeaApp: Data = {
        atm_simulations: {
          users: [user],
          currentUSer: user,
        },
        daily_wahala: [],
        timeGreetings: [],
        decisions: [],
      };
      localStorage.setItem("AmosIdeaApp", JSON.stringify(AmosIdeaApp));
      redirect("/fake-atm/id-validation");
    } else {
      const currentData: Data = JSON.parse(query);
      if (!alradyExist(currentData, numberValue?.toString()!, "phone")) {
        const newData: Data = {
          ...currentData,
          atm_simulations: {
            currentUSer: user,
            users: [...currentData.atm_simulations?.users!, user],
          },
        };
        localStorage.setItem("AmosIdeaApp", JSON.stringify(newData));
        redirect("/fake-atm/id-validation");
      }
    }
  };
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

  const onOtpComleted = (userOTP: string): void => {
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
                          <OTPVerify
                            numberValue={numberValue}
                            onOtpComleted={onOtpComleted}
                            countMin={countMin}
                            countSec={countSec}
                            maskNumberStart={maskNumberStart}
                            wrongOtp={wrongOtp}
                            setWrongOtp={setWrongOtp}
                            setShowOtpModal={setShowOtpModal}
                            generatedOtp={generatedOtp}
                          />
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
                                      passcodeNotSame={passcodeNotSame}
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
                                        else setPasscodeNotSame(true);
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
                                    <Biometrics
                                      addUserFunction={addUserFunction}
                                    />
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
