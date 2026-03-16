"use client";
import React from "react";
type myProps = {
  length: number;
  onOTPComplete(someText: string): void;
};
const OtpInput = ({ length, onOTPComplete }: myProps) => {
  const [otp, setOtp] = React.useState<string[]>(new Array(length).fill(""));
  const inputRefs = React.useRef<HTMLInputElement[]>([]);
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
    if (newOtp.every((value) => value != "")) onOTPComplete(newOtp.join(""));
  };
  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    /// Move to previous input on backspace if current is empty
    if (e.key === "Backspace" && !otp[index] && index > 0)
      inputRefs.current[index - 1]?.focus();
  };

  return (
    <div>
      {otp.map((digit, index) => (
        <input
          key={index}
          type="text"
          inputMode="numeric"
          autoComplete="one-time-code"
          value={digit}
        />
      ))}
    </div>
  );
};

export default OtpInput;
