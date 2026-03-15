"use client";
import React from "react";
type myProps = {
  numberValue: number | undefined;
  setNumberValue: React.Dispatch<React.SetStateAction<number | undefined>>;
};
const NumberFieldInForm = ({ numberValue, setNumberValue }: myProps) => {
  const [country, setCountry] = React.useState("Ng");
  return (
    <div className="bg-gray-100 rounded-xl w-10/12 my-2 mx-auto flex gap-2">
      <span className="rounded-full border uppercase p-2">{country}</span>
      <select
        className="w-4/24"
        onChange={(e) => setCountry(e.currentTarget.value)}
      >
        <option value="Ng">+234</option>
        <option value="NR">+023</option>
        <option value="KD">+443</option>
        <option value="KN">+064</option>
      </select>
      <input
        type="tel"
        value={numberValue?.toString()}
        name="text"
        id="number"
        placeholder="Phone number"
        className="outline-none"
        onChange={(r) => {
          console.log("mh", Number(r.currentTarget.value));
          if (
            Number(r.currentTarget.value) &&
            r.currentTarget.value.length < 11
          ) {
            setNumberValue(Number(r.currentTarget.value));
            console.log(Number(r.currentTarget.value));
          } else if (r.currentTarget.value.length == 0)
            setNumberValue(undefined);
        }}
      />
    </div>
  );
};

export default NumberFieldInForm;
