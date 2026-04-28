import { alradyExist, Data, user } from "@/src/components/data";
import AncikaKaida from "@/src/components/FakeAtmComponent/AncikaKaida";
import BackNavigationForSignUp from "@/src/components/FakeAtmComponent/BackNavigationForSignUp";
import Biometrics from "@/src/components/FakeAtmComponent/Biometrics";
import ConfirmPasscode from "@/src/components/FakeAtmComponent/ConfirmPasscode";
import OtpModal from "@/src/components/FakeAtmComponent/OtpModal";
import OTPVerify from "@/src/components/FakeAtmComponent/OTPVerify";
import PasscodeSetupPage from "@/src/components/FakeAtmComponent/PasscodeSetupPage";
import PhoneNumberVerifySignUp from "@/src/components/FakeAtmComponent/PhoneNumberVerifySignUp";
import PinCreationPage from "@/src/components/FakeAtmComponent/PinCreationPage";
import UserConsentPageOnSignUp from "@/src/components/FakeAtmComponent/UserConsentPageOnSignUp";
import VerifyEmail from "@/src/components/FakeAtmComponent/VerifyEmail";
import { redirect } from "next/navigation";

import React from "react";
type myProps = {
  passcodeIsConfirmed: boolean;
  doneWithPin: boolean;

  setDoneWithPin: React.Dispatch<React.SetStateAction<boolean>>;

  setPasscodeIsConfirmed: React.Dispatch<React.SetStateAction<boolean>>;
  setPasscodeNotSame: React.Dispatch<React.SetStateAction<boolean>>;

  passcodeInserted: boolean;

  setWantToRecieveUpdates: React.Dispatch<React.SetStateAction<boolean>>;
  ancikaKaida: boolean;
  userPin: string;
  setUserPin: React.Dispatch<React.SetStateAction<string>>;
  setTermsAcepted: React.Dispatch<React.SetStateAction<boolean>>;
  termsAcepted: boolean;
  setAncikaKaida: React.Dispatch<React.SetStateAction<boolean>>;

  agreedWithTheNumber: boolean;
  setAgreedWithNumber: React.Dispatch<React.SetStateAction<boolean>>;
  setReferralCode: React.Dispatch<React.SetStateAction<string>>;
  referralCode: string;
  setReferralCodeExist: React.Dispatch<React.SetStateAction<boolean>>;
  referralCodeExist: boolean;
  numberValue: string | undefined;
  setNumberValue: React.Dispatch<React.SetStateAction<string | undefined>>;
  showOtpModal: boolean;
  userGaveConsent: boolean;
  wantToRecieveUpdates: boolean;
  otpIsValid: boolean;
  agreedWithDataProcessingConsent: boolean;
  setUserGaveConsent: React.Dispatch<React.SetStateAction<boolean>>;

  countSec: number;
  countMin: number;
  setGeneratedOtp: React.Dispatch<React.SetStateAction<string>>;
  generatedOtp: string;
  setCountMin: React.Dispatch<React.SetStateAction<number>>;
  setCountSec: React.Dispatch<React.SetStateAction<number>>;
  setAgreedwithDataProcessingConsent: React.Dispatch<
    React.SetStateAction<boolean>
  >;

  maskNumberStart(numb: number): string;
  emailAdded: boolean;
  wrongOtp: boolean;
  setOtpIsValid: React.Dispatch<React.SetStateAction<boolean>>;
  emailValue: string;
  setEmailValue: React.Dispatch<React.SetStateAction<string>>;
  setEmailAdded: React.Dispatch<React.SetStateAction<boolean>>;
  setWrongOtp: React.Dispatch<React.SetStateAction<boolean>>;
  maskNumberStart(numb: number): string;

  passcodeValue: string;
  setPasscodeValue: React.Dispatch<React.SetStateAction<string>>;
  maskNumberStart(numb: number): string;

  passcodeNotSame: boolean;

  setPasscodeInserted: React.Dispatch<React.SetStateAction<boolean>>;

  setShowOtpModal: React.Dispatch<React.SetStateAction<boolean>>;
};
const FakeAtmContext = (children: React.ReactElement): React.ReactNode => {
  //   const [goToSignup, setGotoSignup] = React.useState<boolean>(false);
  const [ancikaKaida, setAncikaKaida] = React.useState<boolean>(false);
  const [referralCodeExist, setReferralCodeExist] = React.useState(false);
  const [referralCode, setReferralCode] = React.useState<string>("");
  // const [numberIsEnoughForSignUp, setNumberIsEnoughForSignUp] =
  //   React.useState<boolean>(false);
  const [numberValue, setNumberValue] = React.useState<string | undefined>();
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
        acc_bank: "suhayaPoint",
      },
      loginInfo: {
        phoneNumber: numberValue!,
        password: passcodeValue,
        username: "",

        email: emailValue,
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

  const onOtpCompleted = (userOTP: string): void => {
    if (!isNaN(Number(userOTP)) && userOTP === generatedOtp)
      setOtpIsValid(true);
    else setWrongOtp(true);
  };
  const y: myProps = {
    doneWithPin,
    setDoneWithPin,
    setPasscodeIsConfirmed,
    setPasscodeNotSame,
    passcodeNotSame,
    passcodeIsConfirmed,

    passcodeValue,
    setPasscodeInserted,
    setPasscodeValue,
    emailAdded,
    setEmailAdded,
    emailValue,
    setEmailValue,
    setOtpIsValid,

    userGaveConsent,
    setCountMin,
    setCountSec,
    generatedOtp,
    setGeneratedOtp,

    countMin,
    countSec,
    setWantToRecieveUpdates,
    showOtpModal,
    termsAcepted,
    setTermsAcepted,
    agreedWithDataProcessingConsent,
    setAgreedwithDataProcessingConsent,
    wantToRecieveUpdates,
    setUserGaveConsent,
    numberValue,
    userPin,
    setUserPin,
    setNumberValue,
    setReferralCodeExist,
    referralCodeExist,
    ancikaKaida,
    passcodeInserted,
    setAncikaKaida,
    // setGotoSignup,
    agreedWithTheNumber,
    setAgreedWithNumber,
    referralCode,
    setReferralCode,
    otpIsValid,

    wrongOtp,

    setWrongOtp,
    setShowOtpModal,

    maskNumberStart,
  };
  const myLargeContext = React.createContext(y);
  const x = React.useContext(myLargeContext);
  console.log(x);

  return (
    <>
      <myLargeContext.Provider value={y}>{children}</myLargeContext.Provider>
    </>
  );
};
export default FakeAtmContext;
