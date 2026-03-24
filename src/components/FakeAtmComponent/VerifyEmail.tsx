import {
  BsFillEnvelopeFill,
  BsFillExclamationCircleFill,
} from "react-icons/bs";
import LongNextButton from "./LongNextButton";
import BackNavigationForSignUp from "./BackNavigationForSignUp";
import React from "react";
type myProps = {
  setOtpIsValid: React.Dispatch<React.SetStateAction<boolean>>;
  emailValue: string;
  setEmailValue: React.Dispatch<React.SetStateAction<string>>;
  setEmailAdded: React.Dispatch<React.SetStateAction<boolean>>;
};
const VerifyEmail = (props: myProps) => {
  return (
    <div>
      <BackNavigationForSignUp
        progressBarAmount={12}
        GoBackTo={() => props.setOtpIsValid(false)}
      />
      <h2 className="font-bold  w-10/12 my-2 mx-auto">
        What's your Email address
      </h2>
      <p className="w-10/12 my-2 mx-auto">
        Enter email address you want associate with this account
      </p>
      <div className="bg-white w-8/12 my-2 mx-auto p-2 pb-3 rounded-2xl">
        <div className="flex justify-center flex-wrap flex-row my-2">
          <div className=" bg-gray-200 p-4 rounded-2xl w-11/12">
            <BsFillEnvelopeFill className="inline-block" />{" "}
            <input
              type="email"
              name="email"
              id="email"
              className="outline-none"
              placeholder="Email address"
              value={props.emailValue}
              onChange={(e) => props.setEmailValue(e.currentTarget.value)}
            />
          </div>
        </div>
        <div className="flex justify-center gap-2">
          <div className="w-11/12 resendOTP p-4 rounded-2xl flex justify-between">
            <BsFillExclamationCircleFill
              className="inline-block w-3/12 p-1"
              fill="blue"
              size={60}
            />
            <p className="7/12 ">
              A verification link will be sent to your email address. Make sure
              it's correct before you proceed.
            </p>
          </div>
        </div>
      </div>
      <LongNextButton
        actionText="Next"
        actionToDo={() => {
          if (
            props.emailValue != "" &&
            props.emailValue.includes("@") &&
            props.emailValue.toLocaleLowerCase().endsWith(".com") &&
            !props.emailValue.includes("@.") &&
            !props.emailValue.includes(".@")
          )
            props.setEmailAdded(true);
        }}
        termsAcepted={true}
        agreedWithDataProcessingConsent={
          props.emailValue != "" &&
          props.emailValue.includes("@") &&
          props.emailValue.toLocaleLowerCase().endsWith(".com") &&
          !props.emailValue.includes("@.") &&
          !props.emailValue.includes(".@")
        }
        optionalElememt={
          <h3 className="text-center my-3">
            <span className=" font-bold cursor-pointer hover:underline text-blue-600 ">
              I dont have an email
            </span>
          </h3>
        }
      />
    </div>
  );
};

export default VerifyEmail;
