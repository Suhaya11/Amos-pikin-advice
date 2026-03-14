import React from "react";
import { BiFlag, BiLock, BiPhone, BiUser } from "react-icons/bi";
import {
  BsFillLockFill,
  BsFillPhoneFill,
  BsFillTelephoneXFill,
} from "react-icons/bs";

const LoginPage = () => {
  return (
    <div>
      <div className="flex justify-between relative border">
        <div className="bg-blue-600 absolute uppercase px-3 select-none text-white font-extrabold text-7xl p-2 rounded-3xl ml-3 mt-2">
          s
        </div>{" "}
        <div className="flex flex-wrap flex-row justify-end absolute right-0 top-4">
          <span className="w-full text-right mr-10">lost your phone?</span>{" "}
          <span className="text-blue-600 cursor-pointer hover:text-blue-800 w-full text-right mr-10">
            <BsFillLockFill className="inline-block font-extrabold" /> Lock your
            account
          </span>
        </div>
      </div>
      <div className="absolute bottom-0 border w-full">
        <h1 className="title">Log in to your account</h1>
        <div className="flex gap-4 w-10/12 my-2 mx-auto border ">
          <span>login with</span>
          <span className="bg-blue-600 cursor-pointer rounded-3xl p-2 text-white ">
            <BiPhone fill="white" className="inline-block" /> Phone
          </span>
          <span className="bg-gray-100 p-2 rounded-3xl cursor-pointer text-gray-300">
            {" "}
            <BiUser className="inline-block " /> USername
          </span>{" "}
        </div>
        <div className="bg-gray-100 rounded-2xl w-10/12 my-2 mx-auto flex gap-2">
          <span className="rounded border w-3/12 p-2">NG</span>
          <span>+234</span>
          <input
            type="text"
            name="number"
            id="number"
            placeholder="Phone number"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
