"use client";
import React, { useState, useRef } from 'react';

const OTPInput = ({ length = 6, onComplete }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const handleChange = (value: string, index: number) => {
    if (isNaN(Number(value))) return; // Only allow numbers

    const newOtp = [...otp];
    // Take only the last character entered
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    // Trigger callback when all fields are filled
    if (newOtp.every(v => v !== "")) {
      onComplete(newOtp.join(""));
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    // Move to previous input on backspace if current is empty
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const data = e.clipboardData.getData("text").split("").slice(0, length);
    const newOtp = [...otp];

    data.forEach((char, index) => {
      if (!isNaN(Number(char))) {
        newOtp[index] = char;
      }
    });

    setOtp(newOtp);
    // Focus the last filled box or the next empty one
    const nextIndex = data.length < length ? data.length : length - 1;
    inputRefs.current[nextIndex]?.focus();
  };

  return (
    <div className="flex gap-2 justify-center">
      {otp.map((digit, index) => (
        <input
          key={index}
          type="text"
          inputMode="numeric" // Shows number pad on mobile
          autoComplete="one-time-code" // Helps browser autofill
          maxLength={1}
          value={digit}
          ref={(el) => { if (el) inputRefs.current[index] = el; }}
          onChange={(e) => handleChange(e.target.value, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onPaste={handlePaste}
          className="w-12 h-14 text-center text-2xl font-bold border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-all"
        />
      ))}
    </div>
  );
};

export default OTPInput;
