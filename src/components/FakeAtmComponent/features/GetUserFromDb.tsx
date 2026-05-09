import React from "react";
import { Data, user } from "../../data";
type myProp = {
  acc_no: string;
  setPerson_name: React.Dispatch<React.SetStateAction<string>>;
  bank_name: string;

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
      setErr("Incorrect bank Details");
      return;
    }
    if (
      localData.atm_simulations.currentUSer?.bankDatails?.acc_no == acc_no &&
      localData.atm_simulations.currentUSer.bankDatails.acc_bank == bank_name
    ) {
      setErr("you cannot transfer to your account");
      return;
    }
    const theUser: user | undefined = localData.atm_simulations.users.find(
      (user) =>
        user.bankDatails?.acc_bank == bank_name &&
        Number(user.bankDatails.acc_no).toString() == acc_no,
    );
    if (
      theUser?.bankDatails?.acc_bank != bank_name ||
      Number(theUser.bankDatails.acc_no).toString() != acc_no
    ) {
      console.error(theUser);
      console.error(
        `${theUser?.bankDatails?.acc_bank}!= ${bank_name} || ${theUser?.bankDatails?.acc_no} != ${acc_no}`,
      );
      setErr("something wen't wrong");
      return;
    } else {
      setUserFound(theUser);
      setPerson_name(theUser.bankDatails.acc_name);
    }
  };
  return (
    <div>
      <button onClick={verifyAcc}>check</button>
    </div>
  );
};

export default GetUserFromDb;
