import React from "react";
import CredictValidationHeader from "./CredictValidationHeader";
import NINInput from "./NINInput";
import LongNextButton from "./LongNextButton";
import { alradyExist, Data, myData, user } from "../data";
import { redirect } from "next/navigation";
type myProps = {
  ninNumber: string;
  setNinNumber: React.Dispatch<React.SetStateAction<string>>;
  idExist: boolean;
  setIdExist: React.Dispatch<React.SetStateAction<boolean>>;
};
const NINVerificationPage = ({
  ninNumber,
  setNinNumber,
  idExist,
  setIdExist,
}: myProps) => {
  const checkForNin = () => {
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
          nin: ninNumber,
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
  };
  return (
    <div>
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
        actionToDo={checkForNin}
        agreedWithDataProcessingConsent
        termsAcepted={ninNumber.length === 11}
      />
    </div>
  );
};

export default NINVerificationPage;
