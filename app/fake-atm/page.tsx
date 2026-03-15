import Logo from "@/src/components/FakeAtmComponent/Logo";
import Link from "next/link";
import React from "react";
import { BiAtom, BiCard, BiWorld } from "react-icons/bi";

const HomePage = () => {
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
        <Link href={""} className="loginHomePage rounded-2xl font-bold">
          Login
        </Link>{" "}
        <Link
          href={""}
          className="signupHomePage font-bold rounded-2xl  text-white"
        >
          Sing Up
        </Link>
      </div>
      <p className="text-center text-xs w-9/12 my-2 mx-auto">
        SuhayaPoint FLB is licensed by{" "}
        <strong>Suhaya learning enviroment</strong>. All deposits are insured by{" "}
        <strong>Your Local strorage</strong>
      </p>
    </div>
  );
};

export default HomePage;
