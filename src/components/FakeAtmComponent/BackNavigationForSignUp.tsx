import React from "react";
import { BiSolidLeftArrowAlt } from "react-icons/bi";
type myProps = {
  GoBackTo(): void;
  progressBarAmount: number;
};
const BackNavigationForSignUp = ({ GoBackTo, progressBarAmount }: myProps) => {
  return (
    <>
      <div className="flex justify-between text-blue-700">
        <BiSolidLeftArrowAlt
          title="Back"
          size={40}
          className="cursor-pointer"
          onClick={GoBackTo}
        />
        <span className="cursor-pointer">Need Help?</span>
      </div>
      <div className=" border-gray-500 bg-gray-200 w-full">
        <div className={`w-${progressBarAmount}/12 border-blue-700 border-2`}>
          {" "}
        </div>
      </div>
    </>
  );
};

export default BackNavigationForSignUp;
