// "use client";
import React from "react";
import {
  benef,
  Data,
  incomingTransaction,
  outgoingTransaction,
  reciever,
  user,
} from "../../data";
type myProps = {
  acc_no: string;
  person_name: string;
  bank_name: string;
  userFound1: user | undefined;
  benef: boolean;
  amount: number | undefined;
  narration: string | undefined;
  setErr: React.Dispatch<React.SetStateAction<string>>;
  enteredPin: string;
};
const SendMoney = ({
  enteredPin,
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
    const thesender: user | undefined = localData.atm_simulations?.currentUSer;
    // if (enteredPin != thesender?.cardInfo?.cardPin) {
    //   setErr("wrong pin");
    //   return;
    // }
    if (!thesender) return;
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
      reciever.bankDatails?.acc_no == thesender?.bankDatails?.acc_no &&
      reciever.bankDatails?.acc_bank == thesender?.bankDatails?.acc_bank
    ) {
      setErr("You can literally not send money to your account!!");
      return;
    }
    if (
      Number(
        thesender.income?.transactions?.reduce(
          (prv, crr) => prv + crr.amount!,
          0,
        ),
      ) -
        Number(
          thesender.spent?.transactions?.reduce(
            (prv, crr) => prv + crr.amount!,
            0,
          ),
        ) <
        Number(amount) &&
      false
    ) {
      setErr("Insufficent funds");
      return;
    }
    const newTransactionIn: incomingTransaction = {
      amount: amount,
      reason: narration,
      sender: {
        acc_number: thesender.bankDatails?.acc_no,
        name: thesender.bankDatails?.acc_name,
        bank: thesender.bankDatails?.acc_bank,
        transac_string: `SHY${thesender.bankDatails?.acc_no.toString().slice(4, -1)}${new Date().getTime()}`,
      },
      time: new Date(),
    };

    const updatedTransactionForReceiver = reciever.income?.transactions?.length
      ? [...reciever.income?.transactions, newTransactionIn]
      : [newTransactionIn];

    const updatedReciever: user | undefined = {
      ...reciever,
      income: {
        total:
          reciever?.income?.transactions?.reduce(
            (prv, crr) => prv + Number(crr.amount)!,
            0,
          ) || amount!,
        transactions: updatedTransactionForReceiver,
      },
    };

    const newTransactionOut: outgoingTransaction = {
      amount: amount,
      reason: narration,
      reciever: {
        acc_number: reciever.bankDatails?.acc_no,
        name: reciever.bankDatails?.acc_name,
        bank: reciever.bankDatails?.acc_bank,
        transac_string: `SHY${thesender.bankDatails?.acc_no.toString().slice(4, -1)}${new Date().getTime()}`,
      },
      time: new Date(),
    };

    const updatedBeneficiaries: benef[] = benef
      ? [
          ...thesender.spent?.beneficiaries!,
          {
            acc_no: reciever.bankDatails?.acc_no,
            name: reciever.bankDatails?.acc_name,
            bank: reciever.bankDatails?.acc_bank,
          },
        ]
      : [...thesender.spent?.beneficiaries!];

    const updatedTransactionForSender = thesender.spent?.transactions?.length
      ? [...thesender.spent?.transactions, newTransactionOut]
      : [newTransactionIn];

    const updatedCurrentUser: user | undefined = {
      ...thesender,
      spent: {
        total: thesender.spent?.transactions?.reduce(
          (prv, crr) => prv + crr.amount!,
          0,
        ),
        transactions: updatedTransactionForSender,
        beneficiaries: [...updatedBeneficiaries],
      },
    };
    console.error(updatedCurrentUser, updatedReciever);
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
