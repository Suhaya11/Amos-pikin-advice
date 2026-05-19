"use client";
import { Data, user } from "@/src/components/data";
import GetUserFromDb from "@/src/components/FakeAtmComponent/features/GetUserFromDb";
import SendMoney from "@/src/components/FakeAtmComponent/features/SendMoney";
import ProtectedRoute from "@/src/components/FakeAtmComponent/ProtectedRoutes";
import Link from "next/link";
import React from "react";
import {
  BiSolidLeftArrowAlt,
  BiSolidToggleLeft,
  BiSolidToggleRight,
} from "react-icons/bi";

const page = () => {
  const [err, setErr] = React.useState<string>("");
  const [acc_no, setAcc_no] = React.useState<string>("");
  const [bank_name, setBank_name] = React.useState<string>("suhayaPoint");
  const [person_name, setPerson_name] = React.useState<string | undefined>("");
  const [userFound1, setUSerFound1] = React.useState<user | undefined>();
  const [benef, setBenef] = React.useState<boolean>(false);
  const [amount, setAmount] = React.useState<number>(0);
  const [narration, setNarration] = React.useState<string | undefined>("");
  const [wantToSend, setWantToSend] = React.useState<boolean>(false);
  const [enteredPin, setEnteredPin] = React.useState<string>("");
  return (
    <ProtectedRoute>
      <div>
        <Link href={"/fake-atm/dashbord"}>
          <BiSolidLeftArrowAlt size={60} fill="blue" />
        </Link>
        {!wantToSend ? (
          <div className=" w-full h-full  ">
            <h1 className="title">Transfer</h1>
            <form
              action=""
              onSubmit={function (event) {
                event.preventDefault();
              }}
              className="w-10/12 my-8 mx-auto"
            >
              <div className="my-3 mx-auto ">
                <label htmlFor="acc_no">Account No.:</label>
                <input
                  value={acc_no}
                  onChange={(e) => {
                    if (isNaN(Number(e.currentTarget.value))) return;
                    if (e.currentTarget.value.length > 10) return;

                    setAcc_no(e.currentTarget.value);
                  }}
                  type="text"
                  name="acc_no"
                  id="acc_no"
                  className=" my-0 mx-2 border-white bg-gray-200 border-10 p-2 outline-none rounded-2xl"
                />
              </div>
              <div className="my-3 mx-auto">
                <label htmlFor="bank_name">Bank:</label>
                <select
                  onChange={(e) => setBank_name(e.currentTarget.value)}
                  name="bank"
                  id="bank_name"
                  className="rounded-xl border bg-gray-200 mx-3 p-3"
                >
                  <option value="suhayaPoint"> Suhaya Point</option>
                </select>
              </div>
              <div>
                <label htmlFor="name">Name</label>{" "}
                <input
                  value={person_name}
                  type="text"
                  readOnly
                  className="border-4 rounded-2xl bg-gray-200 border-white p-2 outline-none"
                />
                {person_name && (
                  <div>
                    <div>
                      <label htmlFor="amount">Amount</label>
                      <input
                        value={amount ? amount : ""}
                        onChange={(e) => {
                          if (
                            isNaN(Number(e.currentTarget.value)) ||
                            amount.toString().length > 8
                          )
                            return;
                          setAmount(Number(e.currentTarget.value));
                        }}
                        type="text"
                        id="amount"
                        className="border-4 rounded-2xl bg-gray-200 border-white p-2 outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="narr">Narration</label>
                      <input
                        onChange={(e) => {
                          if (
                            e.currentTarget.value.includes("=") ||
                            e.currentTarget.value.includes("/") ||
                            e.currentTarget.value.includes("!") ||
                            e.target.value.includes("|")
                          ) {
                            setErr(
                              `invalid character [  ${e.target.value.at(-1)}  ] blocked due to security reasons`,
                            );
                            return;
                          }
                          if (e.currentTarget.value.length > 30) {
                            setErr("maximum narration is 30 characters");
                          }
                          setErr("");
                          setNarration(e.currentTarget.value);
                        }}
                        value={narration}
                        className="border-4 rounded-2xl bg-gray-200 border-white p-2
                  outline-none"
                        type="text"
                        id="narr"
                      />
                      <div className="flex justify-end w-10/12 my-3 mx-auto">
                        <label htmlFor="benef">Save beneficiary</label>

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
                    </div>
                  </div>
                )}
                {person_name == "" ? (
                  <GetUserFromDb
                    setErr={setErr}
                    setPerson_name={setPerson_name}
                    acc_no={acc_no}
                    bank_name={bank_name}
                    setUserFound={setUSerFound1}
                  />
                ) : (
                  <>
                    <div>
                      <div className="flex justify-end w-10/12 my-0 mx-auto">
                        <button
                          onClick={() => {
                            const query = localStorage.getItem("AmosIdeaApp");
                            if (!query) return;
                            const localData: Data = JSON.parse(query);
                            if (
                              userFound1?.bankDatails?.acc_bank != bank_name ||
                              userFound1.bankDatails.acc_name != person_name ||
                              userFound1.bankDatails.acc_no != acc_no
                            ) {
                              setErr("Please check you credentials ");
                              return;
                            }
                            if (
                              userFound1.bankDatails.acc_bank ==
                                localData.atm_simulations?.currentUSer
                                  ?.bankDatails?.acc_bank &&
                              userFound1.bankDatails.acc_no ==
                                localData.atm_simulations.currentUSer
                                  .bankDatails.acc_no
                            ) {
                              setErr("You cannot send money to your account");
                              return;
                            }
                            setWantToSend(true);
                          }}
                          className="border-3 p-2 px-4 bg-blue-600 hover:bg-blue-900 text-white font-bold capitalize text-xl rounded-3xl border-blue-500"
                        >
                          send
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>

              <div>{err}</div>
            </form>
          </div>
        ) : (
          <div>
            <div className="w-full h-full absolute top-0 left-0 bg-white ">
              <BiSolidLeftArrowAlt
                className="cursor-pointer"
                size={40}
                fill="blue"
                onClick={() => {
                  setWantToSend(false);
                }}
              />
              <div>
                <form
                  action=""
                  className="w-8/12 my-40 border mx-auto"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <input
                    className="border-4 rounded-2xl bg-gray-200 border-white p-2
                  outline-none"
                    placeholder="Pin"
                    value={enteredPin ? enteredPin : ""}
                    type="text"
                    onChange={(e) => {
                      if (
                        isNaN(Number(e.currentTarget.value)) ||
                        e.currentTarget.value.length > 4
                      )
                        return;
                      setEnteredPin(e.currentTarget.value);
                    }}
                  />
                  <p>{err || <>&nbsp;</>}</p>
                  <SendMoney
                    enteredPin={enteredPin}
                    setErr={setErr}
                    acc_no={acc_no}
                    person_name={person_name}
                    narration={narration}
                    bank_name={bank_name}
                    amount={amount}
                    benef={benef}
                    userFound1={userFound1}
                  />
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </ProtectedRoute>
  );
};

export default page;
// look back to signup about userping issue
