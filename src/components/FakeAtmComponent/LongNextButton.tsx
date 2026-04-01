import React from "react";
type myProps = {
  actionToDo(): void | any;
  termsAcepted?: boolean;
  agreedWithDataProcessingConsent?: boolean;
  actionText: string;
  optionalElememt?: React.ReactElement;
};
const LongNextButton = (props: myProps) => {
  return (
    <div className="absolute w-10/12 bottom-0 left-13">
      <button
        onClick={props.actionToDo}
        disabled={!props.termsAcepted || !props.agreedWithDataProcessingConsent}
        className={`inline-block my-2 font-bold capitalize w-full text-center p-2 rounded-xl ${props.termsAcepted && props.agreedWithDataProcessingConsent ? "bg-blue-600 text-white cursor-pointer" : "bg-gray-200 text-gray-400 cursor-not-allowed "}`}
      >
        {props.actionText}
      </button>
      {props.optionalElememt}
    </div>
  );
};

export default LongNextButton;
