"use client";
import { Data, transaction } from "@/src/components/data";

import ProtectedRoute from "@/src/components/FakeAtmComponent/ProtectedRoutes";
import Link from "next/link";

import React from "react";
import { BiSolidLeftArrowAlt } from "react-icons/bi";

const Transaction_history = () => {
  const [transactions, setTracsactions] = React.useState<transaction[]>([]);
  React.useEffect(() => {
    const querty = localStorage.getItem("AmosIdeaApp");
    if (!querty) return;
    const thedata: Data = JSON.parse(querty);
    if (
      thedata.atm_simulations?.currentUSer?.transactionData?.transactions
        ?.length
    ) {
      setTracsactions([
        ...thedata.atm_simulations?.currentUSer?.transactionData?.transactions!,
      ]);
    }
  }, []);
  return (
    <ProtectedRoute>
      <div>
        <Link href={"/fake-atm/dashbord"}>
          <BiSolidLeftArrowAlt size={40} fill="blue" />
        </Link>
        <div>
          <h2 className="title">Transaction history</h2>
        </div>
        {transactions.length ? (
          <>
            <div className="bg-yellow-700">
              {transactions.map((transaction) => (
                <div key={transaction.time?.toString()}>{}</div>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="bg-yellow-400">hi</div>
          </>
        )}
      </div>
    </ProtectedRoute>
  );
};

export default Transaction_history;
