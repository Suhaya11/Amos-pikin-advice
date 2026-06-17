"use client";
import React from "react";
type myProps = {
  err: string | undefined;
  setErr: React.Dispatch<React.SetStateAction<string | undefined>>;
};
const ErrorMessage = ({ err, setErr }: myProps) => {
  React.useEffect(() => {
    setTimeout(() => {
      setErr("");
    }, 5000);
  }, []);
  return (
    <div className="absolute top-0 left-0 w-full h-full errorMessage bottom-0 pointer-events-none">
      <div className="relative  h-full">
        <div
          className="absolute bottom-0  right-10  p-1 px-3 text-red-500 bg-gray-200 font-bold animate-bounce pointer-events-auto"
          onClick={() => setErr("")}
        >
          {" "}
          {err}
        </div>
      </div>
    </div>
  );
};

export default ErrorMessage;
