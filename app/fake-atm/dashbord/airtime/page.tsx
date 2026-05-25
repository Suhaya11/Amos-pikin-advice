"use client";
import { Data, user } from "@/src/components/data";
import InsertPin from "@/src/components/FakeAtmComponent/features/InsertPin";

import { Amarante } from "next/font/google";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import {
  BiLeftArrowAlt,
  BiSolidToggleLeft,
  BiSolidToggleRight,
} from "react-icons/bi";

const page = () => {
  const [clientNumber, setClintNumber] = React.useState<string>();
  const [airtimeAmount, setAirtimeAmount] = React.useState<number>();
  const [network, setNetwork] = React.useState<
    "mtn" | "airtel" | "glo" | "9mobile"
  >();
  const [sending, setSending] = React.useState<boolean>(false);
  const [cashback, setCashback] = React.useState<number>();
  const [currentUser, setCurrenctUSer] = React.useState<user | undefined>();
  const [err, setErr] = React.useState<string>();
  const [benef, setBenef] = React.useState<boolean>(false);
  React.useEffect(() => {
    const query = localStorage.getItem("AmosIdeaApp");
    if (!query) {
      setErr("Not logged in");
      redirect("/fake-atm/");
    }
    const data: Data = JSON.parse(query);
    if (!data.atm_simulations?.currentUSer?.loginInfo?.isLoggedIn)
      redirect("fake-atm");
    setCurrenctUSer(data.atm_simulations.currentUSer);
  }, []);
  return (
    <>
      {!sending ? (
        <div>
          <div className="text-8xl">
            <Link href={"/fake-atm/dashbord"}>
              <BiLeftArrowAlt size={40} fill="blue"></BiLeftArrowAlt>
            </Link>
          </div>
          <div>
            <h1 className="title">Airtime</h1>
          </div>
          <div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (!airtimeAmount && !clientNumber && !network) {
                  setErr("error occured");
                  return;
                }
                if (!currentUser?.transactionData?.totalIncome) {
                  setErr("balance error");
                  return;
                }

                if (isNaN(Number(clientNumber))) {
                  setErr("Invalid number");
                  return;
                }
                if (
                  clientNumber?.length != 11 &&
                  Number(clientNumber).toString().length != 10
                ) {
                  setErr("invalid number length");
                  return;
                }
                if (!airtimeAmount) {
                  setErr("enter amount");
                  return;
                }
                if (
                  airtimeAmount >
                  currentUser?.transactionData?.totalIncome -
                    currentUser?.transactionData?.totalSpent!
                ) {
                  setErr("insufficient fund");
                  return;
                }
                if (airtimeAmount < 100) {
                  setErr("minimum amount is 100");
                  return;
                }
                if (airtimeAmount > 20000) {
                  setErr("maximum amount is 20000");
                  return;
                }
                setErr("");
                setSending(true);
              }}
              className="w-8/12 border my-10 mx-auto"
            >
              <div className="flex justify-center gap-3">
                <label htmlFor="recipient">Recipient:</label>
                <input
                  type="text"
                  className="border p-1 rounded-xl"
                  placeholder="phone number"
                  id="recipient"
                  onChange={(e) => {
                    if (
                      isNaN(Number(e.currentTarget.value)) ||
                      e.currentTarget.value.length > 11
                    )
                      return;
                    setClintNumber(e.currentTarget.value);
                  }}
                  value={clientNumber ?? ""}
                />
              </div>
              <div className="flex justify-center my-5 gap-3">
                <label htmlFor="amount">Amount:</label>
                <input
                  id="amount"
                  onChange={(e) => {
                    if (
                      isNaN(Number(e.currentTarget.value)) ||
                      e.currentTarget.value.length > 11
                    )
                      return;
                    setAirtimeAmount(Number(e.currentTarget.value));
                    setCashback(Number(e.currentTarget.value) / 10);
                  }}
                  value={airtimeAmount ?? ""}
                  type="text"
                  className="border p-1 rounded-xl"
                  placeholder="Amount"
                />
              </div>
              <div className="flex justify-center my-5 gap-3">
                <label htmlFor="network">Network</label>
                <select
                  name="Network"
                  id="network"
                  className="border rounded-lg p-1 px-3"
                  onChange={(el) =>
                    setNetwork(el.currentTarget.value as typeof network)
                  }
                >
                  <option>Select</option>
                  <option value="airtel">Airtel</option>
                  <option value="glo">GLO</option>
                  <option value="mtn">MTN</option>
                  <option value="9mobile">9Mobile</option>
                </select>
              </div>
              <div>
                {" "}
                <span onClick={() => setBenef(!benef)}>Save beneficiary </span>
                {!benef ? (
                  <BiSolidToggleLeft
                    className="inline-block ml-3"
                    id="benef"
                    size={30}
                    onClick={() => setBenef(true)}
                  />
                ) : (
                  <BiSolidToggleRight
                    id="benef"
                    onClick={() => setBenef(false)}
                    fill="blue"
                    className="inline-block ml-3"
                    size={30}
                  />
                )}
              </div>
              <div>
                <p className="pl-10 capitalize">cahsback: {cashback || 0}</p>
              </div>
              <span>{err || ""}</span>
              <div className="text-end pr-3">
                <input
                  type="submit"
                  value="Send"
                  className=" rounded-xl  p-1 px-3 bg-blue-600 font-bold text-xl border-blue-600 hover:bg-blue-900 text-white border-5"
                />
              </div>
            </form>
          </div>
        </div>
      ) : (
        <InsertPin
          benef={benef}
          err={err}
          setErr={setErr}
          setSending={setSending}
          user={currentUser}
          amount={airtimeAmount}
          service="airtime"
          network={network}
          cashback={cashback}
          recipient={clientNumber}
        />
      )}
    </>
  );
};

export default page;
