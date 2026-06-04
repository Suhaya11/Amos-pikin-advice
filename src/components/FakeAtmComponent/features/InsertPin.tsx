"use client";
import React from "react";
import {
  airtime_Data,
  benef,
  Data,
  masker,
  transaction,
  user,
} from "../../data";
import Link from "next/link";
import { BiLeftArrowAlt } from "react-icons/bi";
import { redirect } from "next/navigation";
type myProps = {
  user?: user;
  recipient: string | undefined;
  amount: number | undefined;
  network: "mtn" | "airtel" | "glo" | "9mobile" | undefined;
  cashback: number | undefined;
  setSending: React.Dispatch<React.SetStateAction<boolean>>;
  service: "airtime" | "data";
  setErr: React.Dispatch<React.SetStateAction<string | undefined>>;
  err: string | undefined;
  benef: boolean;
  qtt?: string;
  whatTodebitFromCashback: number | undefined;
  whatTodebitfromBalance: number | undefined;
};

const InsertPin = ({
  whatTodebitFromCashback,
  whatTodebitfromBalance,
  qtt,
  benef,
  setSending,
  setErr,
  user,
  amount,
  recipient,
  network,
  cashback,
  service,
  err,
}: myProps) => {
  const [pin, sertPin] = React.useState<string>();
  return (
    <>
      <BiLeftArrowAlt size={40} fill="blue" onClick={() => setSending(false)} />
      {user?.loginInfo?.isLoggedIn ||
      (amount && recipient && network && cashback && service) ? (
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault();

              const query = localStorage.getItem("AmosIdeaApp");
              if (!query) redirect("/fake-atm");
              const datanow: Data = JSON.parse(query);
              if (!datanow.atm_simulations?.currentUSer?.loginInfo?.isLoggedIn)
                redirect("/fake-atm/");
              if (datanow.atm_simulations.currentUSer.id != user?.id)
                redirect("/fake-atm/");
              if (
                pin != datanow.atm_simulations.currentUSer.cardInfo?.cardPin
              ) {
                setErr("Wrong pin");
                return;
              }
              if (service == "data") {
                const newTransaction: airtime_Data = {
                  id: crypto.randomUUID(),
                  cashback: cashback,
                  type: service,
                  client: recipient,
                  price: amount!,
                  time: new Date(),
                  network: network,
                  qtt: qtt,
                };

                const datas: airtime_Data[] = datanow.atm_simulations
                  .currentUSer.transactionData?.data?.datas.length
                  ? [
                      ...datanow.atm_simulations.currentUSer.transactionData
                        ?.data.datas,
                      newTransaction,
                    ]
                  : [newTransaction];
                const beneficiaries: benef[] = datanow.atm_simulations
                  .currentUSer.transactionData?.data?.beneficiaries?.length
                  ? [
                      ...datanow.atm_simulations.currentUSer.transactionData?.data.beneficiaries.filter(
                        (ben) => ben.id != recipient || ben.bank != network,
                      ),
                      { id: recipient, bank: network },
                    ]
                  : [{ id: recipient, bank: network }];
                const theBalancelost: typeof whatTodebitfromBalance =
                  whatTodebitfromBalance ? whatTodebitfromBalance : amount;
                const theCashbacklost: typeof whatTodebitFromCashback =
                  whatTodebitFromCashback ? whatTodebitFromCashback : 0;
                const newCurrentUSer: user = {
                  ...datanow.atm_simulations.currentUSer,
                  transactionData: {
                    ...datanow.atm_simulations.currentUSer.transactionData,
                    totalSpent:
                      datanow.atm_simulations?.currentUSer?.transactionData
                        ?.totalSpent! + theBalancelost!,
                    data: {
                      datas: [...datas],
                      beneficiaries: benef
                        ? beneficiaries
                        : datanow.atm_simulations.currentUSer.transactionData
                            ?.data?.beneficiaries,
                    },
                    cashBack: datanow.atm_simulations.currentUSer
                      .transactionData?.cashBack
                      ? datanow.atm_simulations.currentUSer.transactionData
                          ?.cashBack -
                        theCashbacklost! +
                        cashback!
                      : cashback,
                  },
                };
                const updatedUSers: user[] | undefined =
                  datanow?.atm_simulations?.users?.map((user) => {
                    if (user.id == newCurrentUSer.id) {
                      console.error(
                        "this is the user",
                        user.id,
                        newCurrentUSer.id,
                      );
                      return newCurrentUSer;
                    } else {
                      console.error(
                        "the user now is suppose to be now same ",
                        user.id,
                        newCurrentUSer.id,
                      );
                      return user;
                    }
                  });
                const updatedData: Data = {
                  ...datanow,
                  atm_simulations: {
                    ...datanow.atm_simulations,
                    users: updatedUSers,
                    currentUSer: newCurrentUSer,
                  },
                };
                localStorage.setItem(
                  "AmosIdeaApp",
                  JSON.stringify(updatedData),
                );
                redirect("/fake-atm/dashbord");
              }
              const newTransaction: airtime_Data = {
                id: crypto.randomUUID(),
                cashback: cashback,
                type: service,
                client: recipient,
                price: amount!,
                time: new Date(),
                network: network,
              };

              const airtimes: airtime_Data[] = datanow.atm_simulations
                .currentUSer.transactionData?.airtime?.airtimes?.length
                ? [
                    ...datanow.atm_simulations.currentUSer.transactionData
                      ?.airtime.airtimes,
                    newTransaction,
                  ]
                : [newTransaction];
              const beneficiaries: benef[] = datanow.atm_simulations.currentUSer
                .transactionData?.airtime?.beneficiaries?.length
                ? [
                    ...datanow.atm_simulations.currentUSer.transactionData?.airtime.beneficiaries.filter(
                      (ben) => ben.id != recipient || ben.bank != network,
                    ),
                    { id: recipient, bank: network },
                  ]
                : [{ id: recipient, bank: network }];
              const theBalanceLost: typeof whatTodebitfromBalance =
                whatTodebitfromBalance ? whatTodebitfromBalance : amount;
              const theCashbackLost: typeof whatTodebitFromCashback =
                whatTodebitFromCashback ? whatTodebitFromCashback : 0;
              const newCurrentUSer: user = {
                ...datanow.atm_simulations.currentUSer,
                transactionData: {
                  ...datanow.atm_simulations.currentUSer.transactionData,
                  totalSpent:
                    datanow.atm_simulations?.currentUSer?.transactionData
                      ?.totalSpent! + theBalanceLost!,
                  airtime: {
                    airtimes: [...airtimes],
                    beneficiaries: benef
                      ? beneficiaries
                      : datanow.atm_simulations.currentUSer.transactionData
                          ?.airtime?.beneficiaries,
                  },
                  cashBack: datanow.atm_simulations.currentUSer.transactionData
                    ?.cashBack
                    ? datanow.atm_simulations.currentUSer.transactionData
                        ?.cashBack -
                      theCashbackLost! +
                      cashback!
                    : cashback,
                },
              };
              const updatedUSers: user[] | undefined =
                datanow?.atm_simulations?.users?.map((user) => {
                  if (user.id == newCurrentUSer.id) return newCurrentUSer;
                  else return user;
                });
              const updatedData: Data = {
                ...datanow,
                atm_simulations: {
                  ...datanow.atm_simulations,
                  users: updatedUSers,
                  currentUSer: newCurrentUSer,
                },
              };
              localStorage.setItem("AmosIdeaApp", JSON.stringify(updatedData));
              redirect("/fake-atm/dashbord");
            }}
            className="my-50 mx-auto flex justify-center gap-2 flex-wrap flex-row"
          >
            <label htmlFor="pin">Pin:</label>
            <input
              onFocus={() => setErr("")}
              className="border w-30 rounded-lg p-1 px-3 text-center bg-amber-50"
              type="password"
              id="pin"
              value={pin ?? ""}
              onChange={(e) =>
                !isNaN(Number(e.currentTarget.value)) &&
                e.currentTarget.value.length < 5
                  ? sertPin(e.currentTarget.value)
                  : null
              }
            />
            <input
              type="submit"
              value={"Buy " + service}
              className="rounded-lg  px-4 bg-blue-600 border-4 border-blue-600 hover:bg-blue-900 text-white font-bold"
            />
            <p className="w-full text-center text-red-600 animate-bounce">
              {err || ""}
            </p>
          </form>
        </div>
      ) : (
        <>
          <div className="my-50 mx-auto text-red-600 animate-pulse font-bold text-5xl">
            error occured
          </div>
        </>
      )}
    </>
  );
};

export default InsertPin;
