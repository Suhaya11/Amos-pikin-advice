"use client";
import React from "react";
import { BsExclamationCircleFill } from "react-icons/bs";
type myProps = {
  ninNumber: string;
  setNinNumber: React.Dispatch<React.SetStateAction<string>>;
};
const NINInput = ({ ninNumber, setNinNumber }: myProps) => {
  return (
    <div className="bg-white relative p-3">
      {ninNumber && (
        <span className="w-10/12 text-sm left-15 bottom-50 pointer-events-none rounded-b-none my-0 mx-auto block p-3 rounded-2xl absolute">
          National Identification Number
        </span>
      )}
      <input
        onChange={(e) => {
          if (
            !isNaN(Number(e.currentTarget.value)) &&
            e.currentTarget.value.length < 12
          ) {
            setNinNumber(e.currentTarget.value);
          }
        }}
        value={ninNumber}
        type="text"
        name="ninInput"
        id="ninInput"
        className="w-10/12 border  mt-10  my-0 mx-auto block p-6 rounded-2xl focus:border-blue-500 outline-none"
        placeholder="National Identification Number"
      />

      <span className="absolute right-10">{ninNumber.length}/11</span>
      <div className="resendOTP p-2 my-2 mt-8 mx-auto flex justify-around w-10/12 rounded-2xl">
        <BsExclamationCircleFill
          size={60}
          fill="blue"
          className="inline-block p-5"
        />
        <span className="w-10/12">
          Dial <span className="text-blue-500 font-bold">*346# </span> on your
          registered phone number to get your NIN service cost{" "}
          <span className="font-bold">
            <span className="line-through">N</span>20.{" "}
          </span>{" "}
          or vist{" "}
          <a href="nimc.gov.ng/sms-service" className="font-bold text-blue-700">
            nimc.gov.ng/sms-service
          </a>
        </span>
      </div>
    </div>
  );
};

export default NINInput;
