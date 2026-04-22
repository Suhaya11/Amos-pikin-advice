"use client";
import React from "react";
import {
  BiFile,
  BiSolidFace,
  BiSolidLeftArrowAlt,
  BiSolidUser,
} from "react-icons/bi";
type myProps = {
  setAncikaKaida: React.Dispatch<React.SetStateAction<boolean>>;
};
const AncikaKaida = ({ setAncikaKaida }: myProps) => {
  return (
    <div>
      <BiSolidLeftArrowAlt
        size={40}
        onClick={() => {
          history.back();
          setAncikaKaida(false);
        }}
      />

      <div className="w-11/12 my-2 mx-auto ">
        {" "}
        <h2 className="font-bold text-xl">Before you get started </h2>
        <p className="text-gray-500 text-xs">
          {" "}
          Confirm you meet these requirments
        </p>
      </div>
      <div className="w-8/12 my-2 mx-auto">
        <div className="flex my-4 gap-4">
          <BiSolidUser size={40} className="inline-block" fill="blue" />{" "}
          <div className="inline-block">
            <h2 className="font-bold">You are 16 years and older</h2>
            <p className="text-xs font-light text-gray-500">
              You must be atlest 16 years old to <br />
              open an account
            </p>
          </div>
        </div>{" "}
        <div className="flex my-4 gap-4">
          <BiFile size={40} className="inline-block" fill="blue" />{" "}
          <div className="inline-block">
            <h2 className="font-bold">You have a valid NIN or BVN</h2>
            <p className="text-xs font-light text-gray-500">
              Use a valid NIN or BVN to help us <br />
              verify your identity quickly
            </p>
          </div>
        </div>{" "}
        <div className="flex gap-4 my-4">
          <BiSolidFace size={60} className="inline-block" fill="blue" />{" "}
          <div className="inline-block">
            <h2 className="font-bold">You can complete face verification</h2>
            <p className="text-xs font-light text-gray-500">
              Make sure your in a well-lit area and follow the onscreen
              instruction for the best result
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-5 w-full">
        {" "}
        <p
          className="text-white rounded-lg w-8/12 my-0 mx-auto text-center p-3 bg-blue-700"
          onClick={() => setAncikaKaida(true)}
        >
          <strong>get started</strong>
        </p>{" "}
      </div>
    </div>
  );
};

export default AncikaKaida;
