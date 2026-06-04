// "use client";
import React from "react";
import { benef, Data, reciever, transaction, user } from "../../data";
import { redirect } from "next/navigation";
type myProps = {
  acc_no: string | number | undefined;
  person_name: string | undefined;
  bank_name: string | undefined;
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
    if (!amount) {
      setErr("invalid request");
      return;
    }
    const query = localStorage.getItem("AmosIdeaApp");
    if (!query) return;
    const localData: Data = JSON.parse(query);
    const thesender: user | undefined = localData.atm_simulations?.currentUSer;
    if (enteredPin != thesender?.cardInfo?.cardPin) {
      setErr("wrong pin");
      return;
    }

    if (!thesender) return;
    const reciever: user | undefined = localData.atm_simulations?.users?.find(
      (user) =>
        user.loginInfo?.phoneNumber == userFound1?.loginInfo?.phoneNumber &&
        user.bankDatails?.acc_name == person_name &&
        user.bankDatails?.acc_no == acc_no &&
        user.loginInfo?.password == userFound1?.loginInfo?.password &&
        user.bankDatails?.acc_bank == bank_name,
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
    // console.error(
    //   reciever?.transactionData?.transactions
    //     ?.filter((tra) => tra.type == "in")
    //     .reduce((prv, curr) => prv + curr.amount!, amount),
    // );
    if (
      Number(thesender.transactionData?.totalIncome) -
        Number(thesender.transactionData?.totalSpent) <
      Number(amount)
    ) {
      setErr("Insufficent funds");
      return;
    }
    const newTransactionIn: transaction = {
      id: crypto.randomUUID(),
      type: "in",
      amount: amount,
      reason: narration,
      client: {
        acc_number: thesender.bankDatails?.acc_no,
        name: thesender.bankDatails?.acc_name,
        bank: thesender.bankDatails?.acc_bank,
        transac_string: `SHY${thesender.bankDatails?.acc_no?.toString().slice(4, -1)}${new Date().getTime()}`,
      },
      time: new Date(),
    };

    const updatedTransactionForReceiver = reciever.transactionData?.transactions
      ?.length
      ? [...reciever.transactionData?.transactions, newTransactionIn]
      : [newTransactionIn];

    const updatedIncome = reciever.transactionData?.totalIncome
      ? reciever.transactionData?.totalIncome + amount
      : amount;
    const updatedReciever: user | undefined = {
      ...reciever,
      transactionData: {
        totalSpent: reciever.transactionData?.totalSpent,
        totalIncome: updatedIncome || amount!,
        transactions: updatedTransactionForReceiver,
        beneficiaries: reciever.transactionData?.beneficiaries || [],
      },
    };

    const newTransactionOut: transaction = {
      id: newTransactionIn.id,
      type: "out",
      amount: amount,
      reason: narration,
      client: {
        acc_number: reciever.bankDatails?.acc_no,
        name: reciever.bankDatails?.acc_name,
        bank: reciever.bankDatails?.acc_bank,
        transac_string: `SHY${thesender.bankDatails?.acc_no?.toString().slice(4, -1)}${new Date().getTime()}`,
      },
      time: new Date(),
    };

    const updatedBeneficiaries: benef[] = benef
      ? [
          ...(thesender.transactionData?.beneficiaries?.filter(
            (bene) =>
              bene.acc_no != reciever.bankDatails?.acc_no &&
              bene.bank != reciever.bankDatails?.acc_bank,
          ) || []),
          {
            id: reciever.id,
            acc_no: reciever.bankDatails?.acc_no,
            name: reciever.bankDatails?.acc_name,
            bank: reciever.bankDatails?.acc_bank,
          },
        ]
      : thesender.transactionData?.beneficiaries || [];

    const updatedTransactionForSender: transaction[] = thesender.transactionData
      ?.transactions?.length
      ? [...thesender.transactionData?.transactions, newTransactionOut]
      : [newTransactionOut];

    const updatedSpent = thesender.transactionData?.totalSpent
      ? thesender.transactionData?.totalSpent + amount
      : amount;

    const updatedCurrentUser: user | undefined = {
      ...thesender,
      transactionData: {
        totalIncome: thesender.transactionData?.totalIncome,
        totalSpent: updatedSpent || amount,
        transactions: updatedTransactionForSender,
        beneficiaries: [...updatedBeneficiaries],
      },
    };
    const updatedUsers: user[] | undefined =
      localData.atm_simulations?.users?.map((user) => {
        if (
          user.bankDatails?.acc_bank ==
            updatedCurrentUser.bankDatails?.acc_bank &&
          user.bankDatails?.acc_no == updatedCurrentUser.bankDatails?.acc_no &&
          user.cardInfo?.cardNo == updatedCurrentUser.cardInfo?.cardNo &&
          user.cardInfo?.cardPin == updatedCurrentUser.cardInfo?.cardPin &&
          user.cardInfo?.code == updatedCurrentUser.cardInfo?.code &&
          user.loginInfo?.isLoggedIn &&
          user.loginInfo.password == updatedCurrentUser.loginInfo?.password &&
          user.loginInfo.phoneNumber ==
            updatedCurrentUser.loginInfo?.phoneNumber
        ) {
          // console.error("wow");

          return { ...updatedCurrentUser };
        }

        if (
          user.bankDatails?.acc_bank == updatedReciever.bankDatails?.acc_bank &&
          user.bankDatails?.acc_no == updatedReciever.bankDatails?.acc_no &&
          user.bankDatails?.acc_name == updatedReciever.bankDatails?.acc_name &&
          user.cardInfo?.cardNo == updatedReciever.cardInfo?.cardNo &&
          user.cardInfo?.cardPin == updatedReciever.cardInfo?.cardPin &&
          user.cardInfo?.code == updatedReciever.cardInfo?.code &&
          user.loginInfo?.isLoggedIn == false &&
          user.loginInfo.password == updatedReciever.loginInfo?.password &&
          user.loginInfo.phoneNumber ==
            updatedReciever.loginInfo?.phoneNumber &&
          user.loginInfo.username == updatedReciever.loginInfo?.username
        ) {
          // console.error("Ah reciever");
          return { ...updatedReciever };
        }
        // console.error(
        //   user.bankDatails?.acc_bank ==
        //     updatedCurrentUser.bankDatails?.acc_bank &&
        //     user.bankDatails?.acc_no ==
        //       updatedCurrentUser.bankDatails?.acc_no &&
        //     user.cardInfo?.cardNo == updatedCurrentUser.cardInfo?.cardNo &&
        //     user.cardInfo?.cardPin == updatedCurrentUser.cardInfo?.cardPin &&
        //     user.cardInfo?.code == updatedCurrentUser.cardInfo?.code &&
        //     user.loginInfo?.password ==
        //       updatedCurrentUser.loginInfo?.password &&
        //     user.loginInfo?.phoneNumber ==
        //       updatedCurrentUser.loginInfo?.phoneNumber,
        // );
        // console.error("hh none of the above", user);
        return user;
      });
    const updatedData: Data = {
      ...localData,
      atm_simulations: {
        ...localData.atm_simulations,
        currentUSer: updatedCurrentUser,
        users: updatedUsers,
      },
    };
    localStorage.setItem("AmosIdeaApp", JSON.stringify(updatedData));
    redirect("/fake-atm/dashbord");
    // console.error(updatedUsers);
    // console.error(updatedCurrentUser);
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
