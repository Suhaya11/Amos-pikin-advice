import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { BiWorld } from "react-icons/bi";
type myProps = {
  setGotoSignup: React.Dispatch<React.SetStateAction<boolean>>;
};
const GoToSignUp = ({ setGotoSignup }: myProps) => {
  return (
    <div className="reletive">
      {" "}
      <div className="absolute left-20 top-15">
        {" "}
        <Logo />
      </div>
      <div className="absolute w-8/12 my-3 mx-auto top-15 left-15">
        <span className="text-4xl font-extrabold left-30 top-2 absolute capitalize">
          SuhayaPoint
        </span>
        <span className=" fakeLearningBank">fake learning bank</span>
      </div>
      <div className="mt-30 bg-blend-darken rounded-2xl bg-blue-900 w-9/12 border mx-auto p-4">
        <BiWorld
          size={150}
          fillRule="evenodd"
          fill="lightblue"
          className="my-0 mx-auto"
        />
      </div>
      <div className="w-8/12 my-3 mx-auto">
        <h1 className="text-2xl text-center font-extrabold">
          {" "}
          Get a debit card <br />
          that always works
        </h1>
        <p className="text-center text-sm">
          Withdraw cash and make payments <br /> anywhere securely with your
          debit <br /> card
        </p>
      </div>
      <div className="flex justify-around w-10/12 my-0 mx-auto">
        <Link
          href={"/fake-atm/login"}
          className="loginHomePage rounded-2xl font-bold"
        >
          Login
        </Link>{" "}
        <button
          onClick={() => setGotoSignup(true)}
          className="signupHomePage font-bold rounded-2xl  text-white"
        >
          Sing Up
        </button>
      </div>
      <p className="text-center text-xs w-9/12 my-2 mx-auto">
        SuhayaPoint FLB is licensed by{" "}
        <strong>Suhaya learning enviroment</strong>. All deposits are insured by{" "}
        <strong>Your Local strorage</strong>
      </p>
    </div>
  );
};

export default GoToSignUp;
