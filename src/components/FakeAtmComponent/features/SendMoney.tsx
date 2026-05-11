// "use client";
import React from "react";
import { Data, user } from "../../data";
type myProps = {
  acc_no: string;
  person_name: string;
  bank_name: string;
  userFound1: user | undefined;
  benef: boolean;
  amount: number;
  narration: string | undefined;
  setErr: React.Dispatch<React.SetStateAction<string>>;
};
const SendMoney = ({
  setErr,
  acc_no,
  bank_name,
  person_name,
  userFound1,
  benef,
  amount,
  narration,
}: myProps) => {
  const sendMoney = () => {
    const query = localStorage.getItem("AmosIdeaApp");
    if (!query) return;
    const localData: Data = JSON.parse(query);
    const sender: user | undefined = localData.atm_simulations?.currentUSer;
    const reciever: user | undefined = localData.atm_simulations?.users?.find(
      (user) =>
        user.loginInfo?.phoneNumber == userFound1?.loginInfo?.phoneNumber &&
        user.bankDatails?.acc_name == person_name &&
        user.bankDatails.acc_no == acc_no &&
        user.loginInfo?.password == userFound1?.loginInfo?.password &&
        user.bankDatails.acc_bank == bank_name,
    );
    if (!reciever) {
      setErr("somethig must have gone wrong");
      return;
    }
    if (
      reciever.bankDatails?.acc_no == sender?.bankDatails?.acc_no &&
      reciever.bankDatails?.acc_bank == sender?.bankDatails?.acc_bank
    ) {
      setErr("You can literally not send money to your account!!");
      return;
    }
    console.error(reciever);
  };

  return (
    <div>
      <div className="flex justify-end w-10/12 my-0 mx-auto">
        <button
          onClick={sendMoney}
          className="border-3 p-2 px-4 bg-blue-600 hover:bg-blue-900 text-white font-bold capitalize text-xl rounded-3xl border-blue-500"
        >
          send
        </button>
      </div>
    </div>
  );
};

export default SendMoney;
