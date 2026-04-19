"use client";
import React from "react";
import CredictValidationHeader from "./CredictValidationHeader";
import NINInput from "./NINInput";
import LongNextButton from "./LongNextButton";
import { alradyExist, Data, idDetails, myData, user } from "../data";
import { redirect } from "next/navigation";
import { BsFillExclamationTriangleFill } from "react-icons/bs";
import IDinfoForm from "./IDinfoForm";
type myProps = {
  ninNumber: string;
  setNinNumber: React.Dispatch<React.SetStateAction<string>>;
  idExist: boolean;
  setIdExist: React.Dispatch<React.SetStateAction<boolean>>;
  setIdAdded: React.Dispatch<React.SetStateAction<boolean>>;
  idAdded: boolean;
  bvnNumber: string;
  setBvnNumber: React.Dispatch<React.SetStateAction<string>>;
};
const NINVerificationPage = ({
  bvnNumber,
  setBvnNumber,
  setIdAdded,
  idAdded,
  ninNumber,
  setNinNumber,
  idExist,
  setIdExist,
}: myProps) => {
  const [learnMore, setLEarnMore] = React.useState<boolean>(false);
  const checkForNin = (
    whattoCheck: "nin" | "bvn",
    ninDetails: idDetails,
    secQs: {
      q1: { q: string; a: string | number };
      q2: { q: string; a: string | number };
    },
  ) => {
    if (whattoCheck === "nin") {
      const query = localStorage.getItem("AmosIdeaApp");
      const theData: Data = JSON.parse(query || "{}");
      if (alradyExist(theData, ninNumber, "nin")) {
        setIdExist(true);
        return;
      } else {
        const updatedCurrentUser: user = {
          ...theData.atm_simulations?.currentUSer,
          loginInfo: {
            ...theData.atm_simulations?.currentUSer?.loginInfo,

            nin: ninDetails,
            securityQuestion1: {
              question: secQs.q1.q,
              answer: secQs.q1.a,
            },
            securityQuestion2: {
              question: secQs.q2.q,
              answer: secQs.q2.q,
            },
          },
        };
        const updatedData: Data = {
          ...theData,
          atm_simulations: {
            currentUSer: updatedCurrentUser,
            users: theData.atm_simulations?.users?.map((user) => {
              if (
                user.bankDatails?.acc_no ===
                updatedCurrentUser.bankDatails?.acc_no
              )
                return {
                  ...user,
                  loginInfo: {
                    ...user.loginInfo,
                    nin: updatedCurrentUser.loginInfo.nin,
                  },
                };
              else return user;
            }),
          },
        };
        localStorage.setItem("AmosIdeaApp", JSON.stringify(updatedData));
        redirect("/fake-atm/dashbord");
      }
    } else {
      const query = localStorage.getItem("AmosIdeaApp");
      const theData: Data = JSON.parse(query || "{}");
      if (alradyExist(theData, bvnNumber, "bvn")) {
        setIdExist(true);
        return;
      } else {
        const updatedCurrentUser: user = {
          ...theData.atm_simulations?.currentUSer,
          loginInfo: {
            ...theData.atm_simulations?.currentUSer?.loginInfo,

            bvn: ninDetails,
            securityQuestion1: {
              question: secQs.q1.q,
              answer: secQs.q1.a,
            },
            securityQuestion2: {
              question: secQs.q2.q,
              answer: secQs.q2.q,
            },
          },
        };
        const updatedData: Data = {
          ...theData,
          atm_simulations: {
            currentUSer: updatedCurrentUser,
            users: theData.atm_simulations?.users?.map((user) => {
              if (
                user.bankDatails?.acc_no ===
                updatedCurrentUser.bankDatails?.acc_no
              )
                return {
                  ...user,
                  loginInfo: {
                    ...user.loginInfo,
                    bvn: updatedCurrentUser.loginInfo.bvn,
                  },
                };
              else return user;
            }),
          },
        };
        localStorage.setItem("AmosIdeaApp", JSON.stringify(updatedData));
        redirect("/fake-atm/dashbord");
      }
    }
  };
  return (
    <div onClick={() => learnMore && setLEarnMore(false)}>
      {!idAdded ? (
        <>
          {" "}
          <CredictValidationHeader
            backwardAction={() => {}}
            withBackward={true}
            stage={2}
          />
          <div className="w-10/12 my-2 mx-auto">
            <h3 className="font-bold">Verify your NIN</h3>
            <p className="text-gray-600">Enter your 11 digit NIN</p>
            <NINInput ninNumber={ninNumber} setNinNumber={setNinNumber} />
          </div>
          <LongNextButton
            actionText="Next"
            actionToDo={() => {
              const query = localStorage.getItem("AmosIdeaApp");
              const theData: Data = JSON.parse(query || "{}");
              if (alradyExist(theData, ninNumber, "nin")) {
                setIdExist(true);
                setIdAdded(false);
              } else {
                setIdExist(false);
                setIdAdded(true);
              }
            }}
            agreedWithDataProcessingConsent
            termsAcepted={ninNumber.length === 11}
          />
        </>
      ) : (
        <>
          <CredictValidationHeader
            backwardAction={() => {
              setIdAdded(false);
            }}
            withBackward={true}
            stage={3}
          />
          <div className="w-10/12 my-2 mx-auto">
            <h3 className="font-bold">Complete your information </h3>
            <p className="text-gray-600">
              you have to fill your informations{" "}
              <span
                onClick={() => setLEarnMore(!learnMore)}
                className="relative rounded-2xl underline font-bold text-blue-700"
              >
                learn more
                {learnMore && (
                  <span
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                    className="absolute  top-7 z-10 right-0 w-60 text-left bg-white border text-black rounded-2xl p-2"
                  >
                    <BsFillExclamationTriangleFill
                      className="my-0 mx-auto"
                      fill="red"
                      size={30}
                    />
                    <span>
                      Since this project is for learning and donot involved
                      querying some other DBs and outside data so the NIN and
                      BVN infomations must be filled by the user{" "}
                    </span>
                  </span>
                )}
              </span>
            </p>
            <IDinfoForm checkForNin={checkForNin} ninNumber={ninNumber} />
          </div>
          {/* <LongNextButton
            actionText="Next"
            actionToDo={checkForNin}
            agreedWithDataProcessingConsent
            termsAcepted={ninNumber.length === 11}
          /> */}
        </>
      )}
    </div>
  );
};

export default NINVerificationPage;
