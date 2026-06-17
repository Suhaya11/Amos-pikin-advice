"use client";
import React from "react";
import OtpInput from "./OtpInput";
import LongNextButton from "./LongNextButton";
import { Console } from "console";
import { BiQuestionMark } from "react-icons/bi";
import {
  BsFillQuestionCircleFill,
  BsFillQuestionSquareFill,
} from "react-icons/bs";
type myProps = {
  setUserPin: React.Dispatch<React.SetStateAction<string>>;
  setDoneWithPin: React.Dispatch<React.SetStateAction<boolean>>;
  userPin: string;
};
const PinCreationPage = (props: myProps) => {
  const [tempUserPin, setTempUserPin] = React.useState<string>("");
  const [userPinNotSame, setUserPinNotSame] = React.useState<boolean>(true);
  const [oTPCompleted, setOTPCompleted] = React.useState<boolean>(false);
  return (
    <div>
      <div className=" mt-10  ">
        <h2 className="title text-2xl ">
          <strong>set up your Transaction pin </strong>
        </h2>
      </div>
      <div className="w-11/12 my-5 mx-auto border-5 border-white rounded-4xl p-4 bg-white">
        <div>
          <span className="inline-block my-1 mx-auto w-6/12  text-center text-gray-500">
            Enter transaction pin{" "}
          </span>{" "}
          <div className="border-2 p-3 rounded-xl border-gray-300">
            <OtpInput
              length={4}
              onOTPComplete={(rext: string) => {
                setTempUserPin(rext);
              }}
            />
          </div>
        </div>
        <div>
          <span className="inline-block my-1 mx-auto w-6/12  text-center text-gray-500">
            Confirm transaction pin{" "}
          </span>{" "}
          <div className={"border-2 p-3 rounded-xl border-gray-300"}>
            <OtpInput
              length={4}
              onOTPComplete={(text: string) => {
                if (text === tempUserPin) {
                  props.setUserPin(text);
                  setUserPinNotSame(false);
                } else {
                  props.setUserPin("");
                  setUserPinNotSame(true);
                }
              }}
              setOtpCompleted={setOTPCompleted}
            />
          </div>
        </div>{" "}
      </div>
      <LongNextButton
        actionText="Create Pin"
        actionToDo={() => {
          if (!userPinNotSame) props.setDoneWithPin(true);
        }}
        termsAcepted={props.userPin !== ""}
        agreedWithDataProcessingConsent={oTPCompleted}
        optionalElememt={
          <p className=" bottom-10 text-center ">
            <BsFillQuestionCircleFill className="inline-block" fill="blue" />{" "}
            <span className="text-blue-300 ">Need help?</span>
            <strong className="cursor-pointer  text-blue-600 ">
              Click here
            </strong>
          </p>
        }
      />
    </div>
  );
};

export default PinCreationPage;
