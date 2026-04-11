import React from "react";
import { BiLeftArrowAlt } from "react-icons/bi";
type myProps = {
  withBackward: boolean;
  stage: number;
};
const CredictValidationHeader = ({ withBackward, stage }: myProps) => {
  return (
    <div className="relative">
      {withBackward && (
        <BiLeftArrowAlt size={40} className="ml-2" fill="blue" />
      )}
      <h2 className="title mt-6">Upgrade to level 1</h2>
      <div className="absolute right-2 w-30 top-0 h-1 bg-gray-600">
        <div className={`bg-red-600 h-1 w-${stage * 3}/12`}>&nbsp;</div>
      </div>
    </div>
  );
};

export default CredictValidationHeader;
