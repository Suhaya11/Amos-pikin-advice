"use client";
import {
  benef,
  carrier,
  carriers,
  Data,
  myData,
  user,
} from "@/src/components/data";
import InsertPin from "@/src/components/FakeAtmComponent/features/InsertPin";
import ProtectedRoute from "@/src/components/FakeAtmComponent/ProtectedRoutes";
import { redirect } from "next/navigation";
import { send } from "process";

import React from "react";
import { BiSolidToggleLeft, BiSolidToggleRight } from "react-icons/bi";

const page = () => {
  const [dataCarriers, setDataCarriers] = React.useState<carriers | undefined>(
    myData.atm_simulations?.carriers,
  );
  const [clientNumber, setClintNumber] = React.useState<string>();
  const [dataPrice, setDataPrice] = React.useState<number>();
  const [network, setNetwork] = React.useState<
    "mtn" | "airtel" | "glo" | "9mobile"
  >();
  const [sending, setSending] = React.useState<boolean>(false);
  const [cashback, setCashback] = React.useState<number>();
  const [carrier, setCarrier] = React.useState<carrier | undefined>();
  const [dataQtt, setDataQtt] = React.useState<
    "mtn" | "airtel" | "glo" | "9mobile"
  >();
  const [err, setErr] = React.useState<string>();
  const [benef, setBenef] = React.useState<boolean>(false);
  const [currentUser, setCurrentUser] = React.useState<user | undefined>();
  const [usecashback, setusecashback] = React.useState<boolean>(false);
  const [whatToDebitfromCashback, setWhaToDebitfromcashback] = React.useState<
    number | undefined
  >(0);
  const [whatodebitfrombalance, setWhattodebitfrombalace] =
    React.useState<typeof whatToDebitfromCashback>(dataPrice);
  React.useEffect(() => {
    const query = localStorage.getItem("AmosIdeaApp");
    if (!query) redirect("/fake-atm/");
    const locadata: Data = JSON.parse(query);
    if (!locadata.atm_simulations?.currentUSer?.loginInfo?.isLoggedIn)
      redirect("fake-atm/login");
    setCurrentUser(locadata.atm_simulations.currentUSer);
    if (locadata.atm_simulations.carriers)
      setDataCarriers(locadata.atm_simulations.carriers);
  }, []);
  const cashbackusedAmount = (
    mycashback: number | undefined,
    amount: typeof mycashback,
  ) => {
    if (!mycashback || !amount) return undefined;
    if (mycashback >= amount) {
      setWhaToDebitfromcashback(amount);
      setWhattodebitfrombalace(0);
    } else {
      setWhaToDebitfromcashback(mycashback);
      setWhattodebitfrombalace(amount - mycashback);
    }
  };
  const cashbackNotusedAmount = () => {
    setWhaToDebitfromcashback(0);
    setWhattodebitfrombalace(dataPrice);
  };
  const setBeneficiary = (benef: benef) => {
    // if (el.currentTarget.value === "airtel") {
    //                 setCarrier(dataCarriers?.airtel);
    //                 return;
    //               }
    //               if (el.currentTarget.value === "glo") {
    //                 setCarrier(dataCarriers?.glo);
    //                 return;
    //               }
    //               if (el.currentTarget.value === "mtn") {
    //                 setCarrier(dataCarriers?.mtn);
    //                 return;
    //               }
    //               if (el.currentTarget.value === "9mobile") {
    //                 setCarrier(dataCarriers?.nineMobile);
    //                 return;
    //               }
    //               setCarrier(undefined);
    //               setDataQtt(undefined);
    //               setCashback(undefined);
    //             }}
    setClintNumber(benef.id);
    setNetwork(benef.bank as typeof network);
    switch (benef.bank?.toLocaleLowerCase()) {
      case "airtel":
        setCarrier(dataCarriers?.airtel);
      case "mtn":
        setCarrier(dataCarriers?.mtn);
      case "glo":
        setCarrier(dataCarriers?.glo);
      case "9mobile":
        setCarrier(dataCarriers?.nineMobile);
        return;
    }
  };
  return (
    <ProtectedRoute>
      {!sending ? (
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!dataPrice && !clientNumber && !network) {
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
              if (!dataPrice) {
                setErr("enter amount");
                return;
              }
              if (
                dataPrice >
                currentUser?.transactionData?.totalIncome -
                  currentUser?.transactionData?.totalSpent!
              ) {
                setErr("insufficient fund");
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
              <label htmlFor="amount">Price:</label>
              <input
                id="price"
                value={dataPrice ?? ""}
                type="text"
                className="border p-1 rounded-xl"
                placeholder="Price"
                readOnly
              />
            </div>
            <div className="flex justify-center my-5 gap-3">
              <label htmlFor="network">Network</label>
              <select
                name="Network"
                id="network"
                className="border rounded-lg p-1 px-3"
                onChange={(el) => {
                  setNetwork(el.currentTarget.value as typeof network);
                  setCarrier(undefined);
                  setDataQtt(undefined);
                  setCashback(undefined);
                  setDataPrice(undefined);
                  if (el.currentTarget.value === "airtel") {
                    setCarrier(dataCarriers?.airtel);
                    return;
                  }
                  if (el.currentTarget.value === "glo") {
                    setCarrier(dataCarriers?.glo);
                    return;
                  }
                  if (el.currentTarget.value === "mtn") {
                    setCarrier(dataCarriers?.mtn);
                    return;
                  }
                  if (el.currentTarget.value === "9mobile") {
                    setCarrier(dataCarriers?.nineMobile);
                    return;
                  }
                  setCarrier(undefined);
                  setDataQtt(undefined);
                  setCashback(undefined);
                }}
                value={network ?? ""}
              >
                <option value={""}>Select</option>
                <option value="airtel">Airtel</option>
                <option value="glo">GLO</option>
                <option value="mtn">MTN</option>
                <option value="9mobile">9Mobile</option>
              </select>
            </div>
            {/* <span>what to debit from balance: {whatodebitfrombalance}</span>
            <span>what to debi from cashback: {whatToDebitfromCashback}</span> */}
            <div className="flex gap-4">
              <label htmlFor="bundles">Bundles</label>
              <select
                name="bundle"
                value={carrier?.price ? dataQtt : ""}
                id="bulle"
                disabled={!carrier?.price}
                onChange={(e) => {
                  if (!carrier?.price) {
                    setCashback(0);

                    return;
                  }
                  setDataQtt(e.currentTarget.value as typeof dataQtt);
                  setDataPrice(carrier?.price! * Number(e.currentTarget.value));
                  setCashback(
                    (carrier?.cashback! / 100) *
                      (carrier?.price * Number(e.currentTarget.value)),
                  );
                }}
              >
                <option value={""}>select bundle</option>
                <option value="1"> 1 GB == {carrier?.price}</option>
                <option value="2"> 2 GB == {carrier?.price! * 2}</option>{" "}
                <option value="5"> 5 GB == {carrier?.price! * 5}</option>{" "}
                <option value="10"> 10 GB == {carrier?.price! * 10}</option>{" "}
                <option value="20"> 20 GB == {carrier?.price! * 20}</option>
              </select>
            </div>
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
            <div className="inline-block mr-0 ml-10">
              {" "}
              <span onClick={() => setusecashback(!usecashback)}>
                Use cashback{" "}
              </span>
              {!usecashback ? (
                <BiSolidToggleLeft
                  className="inline-block ml-3"
                  id="benef"
                  size={30}
                  onClick={() => {
                    const query = localStorage.getItem("AmosIdeaApp");
                    if (!query) redirect("/fake-atm/");
                    const data: Data = JSON.parse(query);

                    setusecashback(true);
                    cashbackusedAmount(
                      data.atm_simulations?.currentUSer?.transactionData
                        ?.cashBack,
                      dataPrice,
                    );
                  }}
                />
              ) : (
                <BiSolidToggleRight
                  id="benef"
                  onClick={() => {
                    setusecashback(false);
                    cashbackNotusedAmount();
                  }}
                  fill="blue"
                  className="inline-block ml-3"
                  size={30}
                />
              )}
            </div>
            <div>
              <p className="pl-10 capitalize">
                cahsback: {Math.trunc(cashback || 0.5) || 0}
              </p>
            </div>
            <span>{err || ""}</span>
            <select name="benef" id="benef" className="capitalize">
              <option value="">select beneficeary</option>
              {currentUser?.transactionData?.data?.beneficiaries?.map(
                (benef) => (
                  <option
                    key={benef.id}
                    className="capitalize"
                    onClick={() => setBeneficiary(benef)}
                  >
                    {benef.id}|&nbsp;{benef.bank}
                  </option>
                ),
              )}
            </select>
            <div className="text-end pr-3">
              <input
                type="submit"
                value="Send"
                className=" rounded-xl  p-1 px-3 bg-blue-600 font-bold text-xl border-blue-600 hover:bg-blue-900 text-white border-5"
              />
            </div>
          </form>
        </div>
      ) : (
        <InsertPin
          whatTodebitFromCashback={whatToDebitfromCashback}
          whatTodebitfromBalance={whatodebitfrombalance}
          benef={benef}
          err={err}
          setErr={setErr}
          setSending={setSending}
          user={currentUser}
          amount={dataPrice}
          service="data"
          network={network}
          cashback={cashback}
          recipient={clientNumber}
          qtt={dataQtt}
        />
      )}
    </ProtectedRoute>
  );
};

export default page;
