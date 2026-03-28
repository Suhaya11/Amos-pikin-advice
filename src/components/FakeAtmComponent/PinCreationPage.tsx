import React from "react";
import OtpInput from "./OtpInput";

const PinCreationPage = () => {
  return (
    <div>
      <div className=" mt-10 ">
        <h2 className="title text-2xl ">
          <strong>set up your Transaction pin </strong>
        </h2>
      </div>
      <div>
        <span>Enter your pin </span>{" "}
        <OtpInput length={4} onOTPComplete={() => {}} />
      </div>
      <div>
        <span>Confirm your pin </span>{" "}
        <OtpInput
          length={4}
          onOTPComplete={() => {
            console.error("Eje Suhaya");
          }}
        />
      </div>
    </div>
  );
};

export default PinCreationPage;
