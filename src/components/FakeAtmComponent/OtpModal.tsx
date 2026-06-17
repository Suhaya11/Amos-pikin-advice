import React from "react";
type myProps = {
  generatedOtp: string;
  setCountMin: React.Dispatch<React.SetStateAction<number>>;
  setCountSec: React.Dispatch<React.SetStateAction<number>>;
  countMin: number;
  countSec: number;
  OTPCounter(): void;
  setGenerateOtp: React.Dispatch<React.SetStateAction<string>>;
  reduceSec(): void;
};
const OtpModal = (props: myProps) => {
  React.useEffect(() => {
    props.setGenerateOtp(
      Math.random().toString().split("").slice(2, 8).join(""),
    );
    if (!props.countMin) props.setCountMin(1);
    if (!props.countSec) props.setCountSec(60);
    else props.reduceSec();
    props.OTPCounter();
    setTimeout(() => {
      props.OTPCounter();
    }, 1);
  }, []);

  return (
    <div className=" OtpNotification rounded-2xl right-4 absolute bg-white p-2">
      <h2 className="title text-blue-600">SuhayaPoint</h2>
      <p>
        your otp is{" "}
        <strong
          onDoubleClick={(e) =>
            navigator.clipboard.writeText(e.currentTarget.innerText)
          }
          title="Double click to copy"
          className="underline text-blue-500 pointer-events-auto"
        >
          {props.generatedOtp}
        </strong>{" "}
        and will expire in 1 minute
      </p>
    </div>
  );
};

export default OtpModal;
