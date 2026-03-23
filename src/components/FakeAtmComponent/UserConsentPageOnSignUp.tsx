import React from "react";
import { BiCheckbox, BiSolidCheckboxChecked } from "react-icons/bi";
import BackNavigationForSignUp from "./BackNavigationForSignUp";
import LongNextButton from "./LongNextButton";
type myProps = {
  setAgreedWithNumber: React.Dispatch<React.SetStateAction<boolean>>;
  setTermsAcepted: React.Dispatch<React.SetStateAction<boolean>>;
  termsAcepted: boolean;
  agreedWithDataProcessingConsent: boolean;
  setAgreedwithDataProcessingConsent: React.Dispatch<
    React.SetStateAction<boolean>
  >;
  wantToRecieveUpdates: boolean;
  setWantToRecieveUpdates: React.Dispatch<React.SetStateAction<boolean>>;
  setUserGaveConsent: React.Dispatch<React.SetStateAction<boolean>>;
};
const UserConsentPageOnSignUp = ({
  setUserGaveConsent,
  setWantToRecieveUpdates,
  wantToRecieveUpdates,
  agreedWithDataProcessingConsent,
  setAgreedwithDataProcessingConsent,
  setAgreedWithNumber,
  termsAcepted,
  setTermsAcepted,
}: myProps) => {
  return (
    <div>
      <BackNavigationForSignUp
        GoBackTo={() => setAgreedWithNumber(false)}
        progressBarAmount={5}
      />
      <div className="w-10/12 my-3 mx-auto">
        <h2 className="font-bold">
          {" "}
          SuhayaPoint need your consent to continue
        </h2>
      </div>
      <div className="w-9/12 bg-white text-sm p-4 rounded-2xl my-3 mx-auto">
        <div className="grid  grid-cols-12 my-3">
          {termsAcepted ? (
            <BiSolidCheckboxChecked
              size={40}
              fill="blue"
              className="inline-block col-span-2 ml-2"
              onClick={() => setTermsAcepted(false)}
            />
          ) : (
            <BiCheckbox
              size={40}
              fill="gray"
              className="inline-block col-span-2 ml-2"
              onClick={() => setTermsAcepted(true)}
            />
          )}
          <span className="col-span-9 text-sm">
            {" "}
            I have read and agreed with{" "}
            <span className="font-bold text-blue-600 cursor-pointer">
              Terms and conditions
            </span>{" "}
            and{" "}
            <span className="font-bold  text-blue-600 cursor-pointer">
              Data privacy statements
            </span>
          </span>
        </div>
        <div className="grid  grid-cols-12 my-3">
          {agreedWithDataProcessingConsent ? (
            <BiSolidCheckboxChecked
              size={40}
              fill="blue"
              className="inline-block col-span-2 ml-2"
              onClick={() => setAgreedwithDataProcessingConsent(false)}
            />
          ) : (
            <BiCheckbox
              size={40}
              fill="gray"
              className="inline-block col-span-2 ml-2"
              onClick={() => setAgreedwithDataProcessingConsent(true)}
            />
          )}
          <span className="col-span-9">
            I have read and agree with the{" "}
            <span className="text-blue-500 font-bold">
              Data processing consent
            </span>
          </span>
        </div>
        <div className="grid  grid-cols-12">
          {wantToRecieveUpdates ? (
            <BiSolidCheckboxChecked
              size={40}
              fill="blue"
              className="inline-block col-span-2 ml-2"
              onClick={() => setWantToRecieveUpdates(false)}
            />
          ) : (
            <BiCheckbox
              size={40}
              fill="gray"
              className="inline-block col-span-2 ml-2"
              onClick={() => setWantToRecieveUpdates(true)}
            />
          )}
          <span className="col-span-9 ">
            I would like to recieve marketing and promotional information{" "}
            <span className="text-gray-500">(Optional)</span>
          </span>
        </div>
      </div>

      <LongNextButton
        actionText="Continue"
        termsAcepted={termsAcepted}
        agreedWithDataProcessingConsent={agreedWithDataProcessingConsent}
        actionToDo={() =>
          agreedWithDataProcessingConsent &&
          termsAcepted &&
          setUserGaveConsent(true)
        }
      />
    </div>
  );
};

export default UserConsentPageOnSignUp;
