import React from "react";
import { Data, user } from "../../data";
import { error } from "console";
type myProp = {
  acc_no: string;
  setPerson_name: React.Dispatch<React.SetStateAction<string | undefined>>;
  bank_name: string | undefined;

  setUserFound: React.Dispatch<React.SetStateAction<user | undefined>>;

  setErr: React.Dispatch<React.SetStateAction<string>>;
};
const GetUserFromDb = ({
  setErr,

  setUserFound,

  acc_no,
  setPerson_name,
  bank_name,
}: myProp) => {
  const verifyAcc = () => {
    if (acc_no.length !== 10 || isNaN(Number(acc_no))) {
      setErr("Invalid Account number");
      setPerson_name("");
      setUserFound(undefined);
      return;
    }
    const query = localStorage.getItem("AmosIdeaApp");
    if (!query) return;
    const localData: Data = JSON.parse(query);
    if (
      !localData.atm_simulations?.users?.some(
        (user) =>
          Number(user.bankDatails?.acc_no).toString() == acc_no &&
          user.bankDatails?.acc_bank == bank_name,
      )
    ) {
      console.error(
        localData.atm_simulations?.users?.map((user) =>
          Number(user.bankDatails?.acc_no).toString() == acc_no ||
          user.bankDatails?.acc_bank == bank_name
            ? console.error(
                user.bankDatails?.acc_bank,
                "and ",
                bank_name,
                user?.bankDatails?.acc_no,
                "and ",
                acc_no,
              )
            : false,
        ),
      );
      setErr("Incorrect bank Details");
      setPerson_name("");
      setUserFound(undefined);
      return;
    }
    if (
      localData.atm_simulations.currentUSer?.bankDatails?.acc_no == acc_no &&
      localData.atm_simulations.currentUSer.bankDatails.acc_bank == bank_name
    ) {
      setErr("you cannot transfer to your account");
      setPerson_name("");
      setUserFound(undefined);
      return;
    }
    const theUser: user | undefined = localData.atm_simulations.users.find(
      (user) =>
        user.bankDatails?.acc_bank == bank_name &&
        user.bankDatails?.acc_no == acc_no,
    );
    if (
      theUser?.bankDatails?.acc_bank != bank_name ||
      theUser?.bankDatails?.acc_no != acc_no
    ) {
      console.error(theUser);
      console.error(
        `${theUser?.bankDatails?.acc_bank}!= ${bank_name} || ${theUser?.bankDatails?.acc_no} != ${acc_no}`,
      );
      setPerson_name("");
      setUserFound(undefined);
      setErr("something wen't wrong");
      return;
    } else {
      setUserFound(theUser);
      setPerson_name(theUser?.bankDatails?.acc_name);
    }
  };
  return (
    <div className="flex justify-end w-10/12 my-0 mx-auto">
      <button
        onClick={() => {
          console.error(acc_no);
          verifyAcc();
        }}
        className="border-3 p-2 px-4 bg-blue-600 hover:bg-blue-900 text-white font-bold capitalize text-xl rounded-3xl border-blue-500"
      >
        check
      </button>
    </div>
  );
};

export default GetUserFromDb;
