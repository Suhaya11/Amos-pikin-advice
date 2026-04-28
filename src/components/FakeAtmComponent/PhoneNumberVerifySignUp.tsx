"use client";
import React from "react";
import BackNavigationForSignUp from "./BackNavigationForSignUp";
import NumberFieldInForm from "./NumberFieldInForm";
import { BiChevronDown, BiGift } from "react-icons/bi";
import { Data, myData, user } from "../data";

type myProps = {
  setAncikaKaida: React.Dispatch<React.SetStateAction<boolean>>;
  setNumberValue: React.Dispatch<React.SetStateAction<string | undefined>>;
  numberValue: string | undefined;
  setReferralCodeExist: React.Dispatch<React.SetStateAction<boolean>>;
  referralCodeExist: boolean;
  setAgreedWithNumber: React.Dispatch<React.SetStateAction<boolean>>;
  referralCode: string;
  setReferralCode: React.Dispatch<React.SetStateAction<string>>;
};
const PhoneNumberVerifySignUp = ({
  setAgreedWithNumber,
  referralCode,
  setReferralCode,
  referralCodeExist,
  setAncikaKaida,
  setNumberValue,
  numberValue,
  setReferralCodeExist,
}: myProps) => {
  const [numberExist, setNumberExist] = React.useState<boolean>(false);
  const [users, setUsers] = React.useState<user[]>([]);
  React.useEffect(() => {
    const query = localStorage.getItem("AmosIdeaApp");
    if (query) {
      const data: Data = JSON.parse(query);

      setUsers(data.atm_simulations?.users || []);
    } else {
      localStorage.setItem("AmosIdeaApp", JSON.stringify(myData));
    }
  }, []);

  return (
    <div>
      {" "}
      <BackNavigationForSignUp
        GoBackTo={() => setAncikaKaida(false)}
        progressBarAmount={3}
      />
      <div className="my-3 mx-auto w-10/12">
        <h2>
          <strong>What's your phone number?</strong>
        </h2>
        <p className="text-gray-500 text-sm">
          Enter the phone number you want use for this account
        </p>
      </div>
      <div className="my-2 mx-auto w-10/12 p-2 bg-white rounded-2xl">
        <NumberFieldInForm
          setNumberValue={setNumberValue}
          numberValue={numberValue}
        />
        <div>
          <input
            type="text"
            placeholder="Username"
            className="bg-gray-100 rounded-xl w-10/12 my-2 mx-auto flex gap-2 p-2 pl-4 outline-none"
          />
        </div>

        <p
          className={`${numberExist ? "text-red-500" : "text-white"} font-serif animate-pulse text-center w-10/12 my-2 mx-auto`}
        >
          Number Already Exist
        </p>
      </div>
      <div className="referralSpace ">
        <div className="flex gap-3">
          <BiGift
            size={50}
            className="inline-block bg-gray-100 p-2 rounded-2xl"
            fill="blue"
          />{" "}
          <span className="text-blue-500">Have referral code?</span>
        </div>
        <BiChevronDown
          className="inline-block"
          onClick={() => setReferralCodeExist(!referralCodeExist)}
        />
        {referralCodeExist && (
          <div className="w-full flex">
            <input
              value={referralCode}
              onChange={(e) => setReferralCode(e.currentTarget.value)}
              type="text"
              name="referral"
              id="referral"
              placeholder="referral code (Optional)"
              className="bg-white p-2 rounded-2xl my-2 mx-auto w-10/12 focus:border-blue-700 focus:border outline-none"
            />
          </div>
        )}
      </div>
      <div
        onClick={() => {
          if (
            numberValue &&
            numberValue?.toString()?.length > 8 &&
            !users.some((usr) => usr?.loginInfo?.phoneNumber === numberValue)
          )
            setAgreedWithNumber(true);
          else if (
            numberValue &&
            users.some((usr) => usr?.loginInfo?.phoneNumber === numberValue)
          )
            setNumberExist(true);
          else null;
        }}
        className={`absolute bottom-0 text-center w-10/12 my-3 left-10 p-3 rounded-xl ${numberValue && numberValue?.toString().trim().length > 9 ? "bg-blue-700 text-white" : "bg-gray-300 text-gray-500"}`}
      >
        <strong className="select-none">Next</strong>
      </div>
    </div>
  );
};

export default PhoneNumberVerifySignUp;
