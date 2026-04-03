import React, { useEffect } from "react";
import OtpInput from "./OtpInput";
import { BsFillExclamationCircleFill } from "react-icons/bs";
type myProps = {
  countMin: number;
  countSec: number;
  maskNumberStart(numb: number): string;
  numberValue: number | undefined;
  wrongOtp: boolean;
  generatedOtp: string;
  setWrongOtp: React.Dispatch<React.SetStateAction<boolean>>;
  onOtpComleted(text: string): void;
  setShowOtpModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const OTPVerify = ({
  wrongOtp,
  countMin,
  countSec,
  setWrongOtp,
  setShowOtpModal,
  onOtpComleted,
  maskNumberStart,
  numberValue,
  generatedOtp,
}: myProps) => {
  React.useEffect(() => {
    setShowOtpModal(true);
    setTimeout(() => {
      setShowOtpModal(false);
    }, 60000);
  }, []);
  return (
    <>
      {" "}
      <div className="my-3 mx-auto  w-10/12 ">
        <h2 className="font-bold">Verify Your Phone Number</h2>
        <p className="text-gray-500">
          We've set a 6 digit code to {maskNumberStart(numberValue!)} {". "}{" "}
          Check your SMS <br />
          and enter it here.
        </p>

        <div className="w-full p-4 bg-white rounded-md">
          <OtpInput
            length={generatedOtp.toString().length}
            onOTPComplete={onOtpComleted}
          />

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
              {countSec ? `(${countMin ? `${countMin}:` : ""}${countSec})` : ""}
            </button>
          </div>
          {wrongOtp && (
            <p className="text-center text-red-700 animate-pulse">
              Invalid or expired OTP{" "}
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default OTPVerify;
