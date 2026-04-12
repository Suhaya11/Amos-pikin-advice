import React from "react";
import { BiLeftArrowAlt } from "react-icons/bi";
type myProps = {
  withBackward: boolean;
  stage: number;
  backwardAction(): void;
};
const CredictValidationHeader = ({
  withBackward,
  stage,
  backwardAction,
}: myProps) => {
  return (
    <div className="relative">
      {withBackward && (
        <BiLeftArrowAlt
          size={40}
          className="ml-2"
          fill="blue"
          onClick={backwardAction}
        />
      )}
      <h2 className="title mt-6">Upgrade to level 1</h2>
      <div className="absolute right-2 w-30 top-0 h-1 bg-gray-400">
        <div
          className={`bg-blue-600 h-1 ${stage < 4 && "border-r-2"} w-${stage * 3}/12`}
        >
          &nbsp;
        </div>
      </div>
    </div>
  );
};

export default CredictValidationHeader;
