import React from "react";
import { BiSolidUser } from "react-icons/bi";
type myProps = {
  startedTypingNumber: boolean;
  setStartedTypingNumber: React.Dispatch<React.SetStateAction<boolean>>;
};
const UsernameFieldInForm = ({
  startedTypingNumber,
  setStartedTypingNumber,
}: myProps) => {
  return (
    <div
      className={`${startedTypingNumber ? "border-blue-500 border" : ""} bg-gray-100 relative rounded-xl w-8/12 my-2 mx-auto p-4 flex gap-2`}
    >
      <span>
        <BiSolidUser size={30} className="inline-block" />{" "}
        <span
          className={`absolute  ${startedTypingNumber ? " top-0 text-xs" : "text-gray-400 "} select-none pointer-events-none`}
        >
          Username
        </span>{" "}
        <input
          type="tel"
          name=""
          id=""
          className="outline-none cursor-pointer"
          onFocus={() => setStartedTypingNumber(true)}
          onBlur={(e) =>
            !e.currentTarget.value && setStartedTypingNumber(false)
          }
        />
      </span>
    </div>
  );
};

export default UsernameFieldInForm;
