"use client";
import {
  airtime_Data,
  Data,
  refactorDate,
  transaction,
} from "@/src/components/data";
import Logo from "@/src/components/FakeAtmComponent/Logo";

import ProtectedRoute from "@/src/components/FakeAtmComponent/ProtectedRoutes";
import Link from "next/link";

import React from "react";
import { BiDownload, BiSolidLeftArrowAlt } from "react-icons/bi";

const Transaction_history = () => {
  const [transactions, setTracsactions] = React.useState<transaction[]>([]);
  const [airtimes, setAirtemes] = React.useState<airtime_Data[]>([]);
  const [airtimetoView, setAirtimeToview] = React.useState<airtime_Data>();
  const [datas, setData] = React.useState<airtime_Data[]>();
  const [datatoView, setDataToview] = React.useState<airtime_Data>();
  const [transactiontoview, setTransactiontoview] =
    React.useState<transaction>();
  const [sectionToshow, setSectionToShow] = React.useState<
    "airtime" | "data" | "transactions"
  >("transactions");
  const [viewOne, setViewOne] = React.useState<boolean>(false);

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
    if (
      thedata.atm_simulations?.currentUSer?.transactionData?.airtime?.airtimes
        .length
    ) {
      setAirtemes(
        thedata.atm_simulations.currentUSer.transactionData.airtime.airtimes,
      );
    }
    if (
      thedata.atm_simulations?.currentUSer?.transactionData?.data?.datas.length
    ) {
      setData(thedata.atm_simulations.currentUSer.transactionData.data.datas);
    }
  }, []);
  const historytoShow = (
    whatToShow: "data" | "airtime" | "transactions",
  ): React.ReactNode => {
    if (whatToShow == "airtime")
      return (
        <>
          {" "}
          <>
            <>
              {!viewOne ? (
                <div>
                  {airtimes?.length ? (
                    <>
                      <div className="bg-gray-200">
                        <p
                          className={` cursor-pointer flex font-bold justify-between w-11/12 my-5 mx-auto pt-3`}
                        >
                          <span>Number</span>
                          <span>Date</span>
                          <span>Amount</span>
                        </p>
                        {airtimes?.map(
                          (data) =>
                            data && (
                              <div key={data.id}>
                                <p
                                  key={data.id}
                                  className={` cursor-pointer flex justify-between w-11/12 my-5 mx-auto pt-3`}
                                  onClick={() => {
                                    setAirtimeToview(data);
                                    setViewOne(true);
                                  }}
                                >
                                  <span className="mr">{data.client}</span>
                                  <span>{refactorDate(data.time!, "-")}</span>
                                  <span className={`inline-block mr-4`}>
                                    {data.price} $
                                  </span>
                                </p>
                              </div>
                            ),
                        )}
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="bg-yellow-400">hi</div>
                    </>
                  )}
                </div>
              ) : (
                <div>
                  <BiSolidLeftArrowAlt
                    size={50}
                    fill="blue"
                    onClick={() => {
                      setViewOne(false);
                      setDataToview(undefined);
                    }}
                  ></BiSolidLeftArrowAlt>
                  <div className="flex justify-center my-2 mx-auto  w-10/12 mt-10">
                    <Logo />
                  </div>
                  <h1 className="text-center text-5xl">
                    {airtimetoView?.price}$
                  </h1>
                  <div className=" w-10/12  my-2 mx-auto">
                    <div className="my-4 flex justify-between">
                      <span>Reciever:</span>{" "}
                      <span>{airtimetoView?.client}</span>
                    </div>
                    <div className="my-4 flex justify-between">
                      <span>Network:</span>{" "}
                      <span>{airtimetoView?.network}</span>
                    </div>
                    <div className="my-4 flex justify-between">
                      <span>Cashback:</span>{" "}
                      <span>{airtimetoView?.cashback}$</span>
                    </div>
                    <div className="my-4 flex justify-between">
                      <span>Date:</span>{" "}
                      <span>
                        {refactorDate(airtimetoView?.time!, "-") ==
                        refactorDate(new Date(), "-")
                          ? "Today"
                          : refactorDate(airtimetoView?.time!, "-")}{" "}
                        by{" "}
                        {new Date(airtimetoView?.time!)
                          .toTimeString()
                          .slice(0, 8)}
                      </span>
                    </div>
                    <div className="my-4 flex justify-between">
                      <span>Transaction Id:</span>{" "}
                      <span>{airtimetoView?.id.slice(0, 20)}</span>
                    </div>
                    <div className="flex justify-center">
                      <span
                        onClick={() => window.print()}
                        className="bg-blue-700 text-white p-1 rounded-2xl text-2xl"
                      >
                        <BiDownload className="inline-block" /> Download
                      </span>{" "}
                    </div>
                  </div>
                </div>
              )}
            </>
          </>
        </>
      );
    if (whatToShow == "data")
      return (
        <>
          {" "}
          <>
            <>
              {!viewOne ? (
                <div>
                  {datas?.length ? (
                    <>
                      <div className="bg-gray-200">
                        <p
                          className={` cursor-pointer flex font-bold justify-between w-11/12 my-5 mx-auto pt-3`}
                        >
                          <span>Number</span>
                          <span>Date</span>
                          <span>Amount</span>
                        </p>
                        {datas?.map(
                          (data) =>
                            data && (
                              <div key={data.id}>
                                <p
                                  key={data.id}
                                  className={` cursor-pointer flex justify-between w-11/12 my-5 mx-auto pt-3`}
                                  onClick={() => {
                                    setDataToview(data);
                                    setViewOne(true);
                                  }}
                                >
                                  <span className="mr">{data.client}</span>
                                  <span>{refactorDate(data.time!, "-")}</span>
                                  <span className={`inline-block mr-4`}>
                                    {data.price} $
                                  </span>
                                </p>
                              </div>
                            ),
                        )}
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="bg-yellow-400">hi</div>
                    </>
                  )}
                </div>
              ) : (
                <div>
                  <BiSolidLeftArrowAlt
                    size={50}
                    fill="blue"
                    onClick={() => {
                      setViewOne(false);
                      setDataToview(undefined);
                    }}
                  ></BiSolidLeftArrowAlt>
                  <div className="flex justify-center my-2 mx-auto  w-10/12 mt-10">
                    <Logo />
                  </div>
                  <h1 className="text-center text-5xl">{datatoView?.price}$</h1>
                  <div className=" w-10/12  my-2 mx-auto">
                    <div className="my-4 flex justify-between">
                      <span>Reciever:</span> <span>{datatoView?.client}</span>
                    </div>
                    <div className="my-4 flex justify-between">
                      <span>Network:</span> <span>{datatoView?.network}</span>
                    </div>
                    <div className="my-4 flex justify-between">
                      <span>Quantity:</span> <span>{datatoView?.qtt}GB</span>
                    </div>
                    <div className="my-4 flex justify-between">
                      <span>Date:</span>{" "}
                      <span>
                        {refactorDate(datatoView?.time!, "-") ==
                        refactorDate(new Date(), "-")
                          ? "Today"
                          : refactorDate(datatoView?.time!, "-")}{" "}
                        by{" "}
                        {new Date(datatoView?.time!).toTimeString().slice(0, 8)}
                      </span>
                    </div>
                    <div className="my-4 flex justify-between">
                      <span>Transaction Id:</span>{" "}
                      <span>{datatoView?.id.slice(0, 20)}</span>
                    </div>
                    <div className="flex justify-center">
                      <span
                        onClick={() => window.print()}
                        className="bg-blue-700 text-white p-1 rounded-2xl text-2xl"
                      >
                        <BiDownload className="inline-block" /> Download
                      </span>{" "}
                    </div>
                  </div>
                </div>
              )}
            </>
          </>
        </>
      );
    if (whatToShow === "transactions")
      return (
        <>
          <>
            {!viewOne ? (
              <div>
                {transactions.length ? (
                  <>
                    <div className="bg-gray-200">
                      {transactions.map(
                        (transaction) =>
                          transaction && (
                            <p
                              key={transaction.id}
                              className={` cursor-pointer flex justify-between w-11/12 my-5 mx-auto pt-3`}
                              onClick={() => {
                                setTransactiontoview(transaction);
                                setViewOne(true);
                              }}
                            >
                              <span className="mr">
                                {transaction.client?.name}
                              </span>
                              <span>
                                {refactorDate(transaction.time!, "-")}
                              </span>
                              <span
                                className={`transaction-${transaction.type} inline-block mr-4`}
                              >
                                {transaction.amount} $
                              </span>
                            </p>
                          ),
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="bg-yellow-400">hi</div>
                  </>
                )}
              </div>
            ) : (
              <div>
                <BiSolidLeftArrowAlt
                  size={50}
                  fill="blue"
                  onClick={() => {
                    setViewOne(false);
                    setTransactiontoview(undefined);
                  }}
                ></BiSolidLeftArrowAlt>
                <div className="flex justify-center my-2 mx-auto  w-10/12 mt-10">
                  <Logo />
                </div>
                <h1 className="text-center text-5xl">
                  {transactiontoview?.amount}$
                </h1>
                <div className=" w-10/12  my-2 mx-auto">
                  <div className="my-4 flex justify-between">
                    <span>
                      {transactiontoview?.type == "in"
                        ? "Sender:"
                        : "Reciever:"}
                    </span>{" "}
                    <span>{transactiontoview?.client?.name}</span>
                  </div>
                  <div className="my-4 flex justify-between">
                    <span>type:</span>{" "}
                    <span>
                      {transactiontoview?.type == "in"
                        ? "incomming"
                        : "outgoing"}
                    </span>
                  </div>
                  <div className="my-4 flex justify-between">
                    <span>Date:</span>{" "}
                    <span>
                      {refactorDate(transactiontoview?.time!, "-") ==
                      refactorDate(new Date(), "-")
                        ? "Today"
                        : refactorDate(transactiontoview?.time!, "-")}{" "}
                      by{" "}
                      {new Date(transactiontoview?.time!)
                        .toTimeString()
                        .slice(0, 8)}
                    </span>
                  </div>
                  <div className="my-4 flex justify-between">
                    <span>Transaction Id:</span>{" "}
                    <span>{transactiontoview?.id.slice(0, 20)}</span>
                  </div>
                  <div className="flex justify-center">
                    <span
                      onClick={() => window.print()}
                      className="bg-blue-700 text-white p-1 rounded-2xl text-2xl"
                    >
                      <BiDownload className="inline-block" /> Download
                    </span>{" "}
                  </div>
                </div>
              </div>
            )}
          </>
        </>
      );
  };
  return (
    <ProtectedRoute>
      <div>
        {" "}
        {!viewOne && (
          <Link href={"/fake-atm/dashbord"}>
            <BiSolidLeftArrowAlt size={40} fill="blue" />
          </Link>
        )}
        <div>
          <h2 className="title">Transaction history</h2>
        </div>
        {!viewOne && (
          <div className="flex justify-end w-10/12 my-2 mx-auto gap-4">
            <span
              className={`rounded-2xl border p-1 px-3 ${
                sectionToshow === "transactions"
                  ? "bg-blue-600 font-bold   text-white "
                  : ""
              }`}
              onClick={() => {
                setSectionToShow("transactions");
              }}
            >
              Transaction
            </span>
            <span
              className={`rounded-2xl border p-1 px-3 ${
                sectionToshow === "data"
                  ? "bg-blue-600 font-bold   text-white"
                  : ""
              }`}
              onClick={() => setSectionToShow("data")}
            >
              Data
            </span>
            <span
              className={`rounded-2xl border p-1 px-3 ${
                sectionToshow === "airtime"
                  ? "bg-blue-600 font-bold text-white"
                  : ""
              }`}
              onClick={() => setSectionToShow("airtime")}
            >
              Airtime
            </span>{" "}
          </div>
        )}
      </div>

      {historytoShow(sectionToshow)}
    </ProtectedRoute>
  );
};

export default Transaction_history;
