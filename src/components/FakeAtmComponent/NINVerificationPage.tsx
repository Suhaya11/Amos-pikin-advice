import React from "react";
import CredictValidationHeader from "./CredictValidationHeader";
import NINInput from "./NINInput";
import LongNextButton from "./LongNextButton";
type myProps = {
  ninNumber: string;
  setNinNumber: React.Dispatch<React.SetStateAction<string>>;
};
const NINVerificationPage = ({ ninNumber, setNinNumber }: myProps) => {
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
        actionToDo={() => {}}
        agreedWithDataProcessingConsent
        termsAcepted={ninNumber.length === 11}
      />
    </div>
  );
};

export default NINVerificationPage;
