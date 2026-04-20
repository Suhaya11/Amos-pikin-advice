"use client";
import CredictValidationHeader from "@/src/components/FakeAtmComponent/CredictValidationHeader";
import NINVerificationPage from "@/src/components/FakeAtmComponent/NINVerificationPage";
import ProtectedRoute from "@/src/components/FakeAtmComponent/ProtectedRoutes";
import React from "react";
import { BiFile, BiSolidBank } from "react-icons/bi";
import { BsExclamationCircleFill } from "react-icons/bs";

const page = () => {
  const [verifyWithNIN, setVerifyWithNIN] = React.useState<boolean>(false);
  const [decidedWhatToVerify, setDecideWhatToVerify] =
    React.useState<boolean>(false);
  const [ninNumber, setNinNumber] = React.useState<string>("");
  const [bvnNumber, setBvnNumber] = React.useState<string>("");
  const [idExist, setIdExist] = React.useState(false);
  const [idAdded, setIdAdded] = React.useState(false);
  return (
    <ProtectedRoute>
      <div className="">
        {!decidedWhatToVerify ? (
          <div>
            <CredictValidationHeader
              backwardAction={() => {}}
              withBackward={false}
              stage={1}
            />
            <div className="w-10/12 my-2 mx-auto">
              <h2 className="font-bold text-xl">Select an option</h2>
              <p className="text-gray-600 my-2">
                Select the type of ID to validate
              </p>
            </div>
            <div
              onClick={() => {
                setDecideWhatToVerify(true);
                setVerifyWithNIN(true);
              }}
              className="w-10/12 my-2 mx-auto bg-white p-4 rounded-2xl"
            >
              <BiFile
                size={80}
                fill="black"
                opacity={0.8}
                className="p-6 rounded-2xl resendOTP cursor-pointer"
              />
              <h2 className="text-lg font-bold">
                National Identification Number (NIN)
              </h2>
              <p className=" text-gray-500">
                <span className="font-bold text-gray-500">Don't have NIN?</span>{" "}
                Dial *346# on your registered number
              </p>
            </div>
            <div
              onClick={() => {
                setDecideWhatToVerify(true);
              }}
              className="w-10/12 my-2 mx-auto bg-white p-4 rounded-2xl"
            >
              <BiSolidBank
                size={80}
                fill="black"
                opacity={0.8}
                className="p-6 rounded-2xl resendOTP cursor-pointer"
              />
              <h2 className="text-lg font-bold">
                Bank Verification Number (BVN)
              </h2>
              <p className=" text-gray-500">
                <span className="font-bold text-gray-500">Don't have BVN?</span>{" "}
                Dial *565*0# on your registered number
              </p>
            </div>
            <div className="resendOTP p-2 my-2 mx-auto flex justify-around w-10/12 rounded-2xl">
              <BsExclamationCircleFill
                size={60}
                fill="blue"
                className="inline-block p-5"
              />
              <span className="w-10/12">
                You can proceed with either one now, but you will required to
                provide the other for a Level 2 account upgrade
              </span>
            </div>
          </div>
        ) : (
          <>
            {verifyWithNIN ? (
              <>
                (
                <NINVerificationPage
                  bvnNumber={bvnNumber}
                  setBvnNumber={setBvnNumber}
                  idAdded={idAdded}
                  setIdAdded={setIdAdded}
                  idExist={idExist}
                  setIdExist={setIdExist}
                  setNinNumber={setNinNumber}
                  ninNumber={ninNumber}
                />
                )
              </>
            ) : (
              <></>
            )}
          </>
        )}
      </div>
    </ProtectedRoute>
  );
};

export default page;
