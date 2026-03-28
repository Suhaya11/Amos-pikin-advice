"use client";
import React from "react";
type myProps = {
  length: number;
  onOTPComplete(someText: string): void;
};
const OtpInput = ({ length, onOTPComplete }: myProps) => {
  const [otp, setOtp] = React.useState<string[]>(new Array(length).fill(""));

  const inputRefs = React.useRef<HTMLInputElement[]>([]);

  React.useEffect(() => {
    setOtp(new Array(length).fill(""));
  }, []);
  const handleChange = (value: string, index: number) => {
    if (isNaN(Number(value))) return; // donot take what is not number

    const newOtp = [...otp];
    //take the last digit
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);
    //Auto-focus next input
    if (value && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
    /// trigger callback when all fields are filled
    if (newOtp.every((value) => value != "")) {
      console.error("OTP completed");
      onOTPComplete(newOtp.join(""));
    }
  };
  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    /// Move to previous input on backspace if current is empty
    if (e.key === "Backspace" && !otp[index] && index > 0)
      inputRefs.current[index - 1]?.focus();
  };
  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const data = e.clipboardData.getData("text").split("").slice(0, length);
    const NewOtp = [...otp];
    data.forEach((char: string, index: number) => {
      if (!isNaN(Number(char))) NewOtp[index] = char;
    });
    setOtp(NewOtp);

    // focus on the last box or the next empty one
    const nexIndex = data.length < length ? data.length : data.length - 1;
    inputRefs.current[nexIndex].focus();
    onOTPComplete(NewOtp.join(""));
  };

  return (
    <div className="flex justify-around w-8/12 my-2 mx-auto">
      {otp.map((digit, index) => (
        <input
          className="otp_1 otp"
          key={index}
          type="text"
          inputMode="numeric"
          autoComplete="one-time-code"
          value={digit}
          ref={(el) => {
            if (el) inputRefs.current[index] = el;
          }}
          onChange={(e) => handleChange(e.currentTarget.value, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onPaste={handlePaste}
        />
      ))}
    </div>
  );
};

export default OtpInput;
