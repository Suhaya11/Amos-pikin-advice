"use client";
import React from "react";
import { BiRightArrowAlt, BiSolidLeftArrowAlt } from "react-icons/bi";
import { BsFillBackspaceFill, BsFillTelephoneFill } from "react-icons/bs";
import OtpInput from "./OtpInput";
type myProps = {
  maskNumberStart(numb: number): string;
  numberValue: number | undefined;
  passcodeValue: string;
  setPasscodeValue: React.Dispatch<React.SetStateAction<string>>;
  setEmailAdded: React.Dispatch<React.SetStateAction<boolean>>;
  setPasscodeInserted: React.Dispatch<React.SetStateAction<boolean>>;
};
const PasscodeSetupPage = (props: myProps) => {
  const [defaultKeybord, setDefaultKeybord] = React.useState(false);
  return (
    <div>
      <div className="flex justify-between text-blue-700">
        <BiSolidLeftArrowAlt
          title="Back"
          size={40}
          className="cursor-pointer"
          onClick={() => props.setEmailAdded(false)}
        />
        <span className="cursor-pointer mr-4 resendOTP p-2 rounded-2xl">
          <BsFillTelephoneFill className="inline-block" />{" "}
          {props.maskNumberStart(props.numberValue!)}
        </span>
      </div>
      <main>
        <h2 className="title">Setup your passcode</h2>
        <p className="text-sm text-gray-500 text-center">
          Enter a 6 digit passcode
        </p>
        <OtpInput
          length={6}
          onOTPComplete={(text: string) => {
            props.setPasscodeValue(text);
            props.setPasscodeInserted(true);
            console.error("function called !");
          }}
        />
        {defaultKeybord && (
          <div>
            <div className="flex mt-30 my-4 mx-auto w-10/12 justify-around">
              <span className={"keyStroke"}>1</span>
              <span className={"keyStroke"}>2</span>

              <span className={"keyStroke"}>3</span>
            </div>
            <div className="flex my-4 mx-auto w-10/12 justify-around">
              <span className={"keyStroke"}>4</span>
              <span className={"keyStroke"}>5</span>
              <span className={"keyStroke"}>6</span>
            </div>
            <div className="flex my-4 mx-auto w-10/12 justify-around">
              <span className={"keyStroke"}>7</span>
              <span className={"keyStroke"}>8</span>
              <span className={"keyStroke"}>9</span>
            </div>
            <div className="flex my-4 mx-auto w-10/12 justify-around">
              <span className={"keyStroke"}>
                <BsFillBackspaceFill />
              </span>
              <span className={"keyStroke"}>0</span>
              <span className={"keyStroke"}>
                <BiRightArrowAlt />
              </span>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default PasscodeSetupPage;
