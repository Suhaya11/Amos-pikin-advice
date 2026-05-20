"use client";
import { Data, masker, user } from "@/src/components/data";
import AddMoneyModal from "@/src/components/FakeAtmComponent/features/AddMoneyModal";
import Transfer from "@/src/components/FakeAtmComponent/features/Transfer";
import ProtectedRoute from "@/src/components/FakeAtmComponent/ProtectedRoutes";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import { Router } from "next/router";
import React from "react";
import {
  BiBell,
  BiBookOpen,
  BiCopy,
  BiFile,
  BiFootball,
  BiHeadphone,
  BiHide,
  BiHistory,
  BiMobileAlt,
  BiMoney,
  BiPhoneOutgoing,
  BiShow,
  BiTransfer,
  BiUser,
  BiVolumeFull,
} from "react-icons/bi";
import { BsCoin, BsGrid } from "react-icons/bs";

const FakeAtm = () => {
  const [showBalance, setShowBalance] = React.useState<boolean>(true);
  const [localData, setLocalData] = React.useState<Data>({});
  const [lastUpdate, setLastUpdate] = React.useState<Date>();
  const [userOptions, setUserOptions] = React.useState<boolean>(false);
  const [showAddMoneyModal, setShowAddMoneyModal] =
    React.useState<boolean>(false);
  const [totalincome, settotalincome] = React.useState<number | undefined>(0);
  const [totalspent, settotalspent] = React.useState<number | undefined>(0);
  const pathName = usePathname();
  //   {
  //   atm_simulations: {
  //     currentUSer: {
  //       loginInfo: {
  //         username: "suhaya",
  //         password: "dd",
  //         securityQuestion1: {
  //           question: "a",
  //           answer: "b",
  //         },
  //         securityQuestion2: {
  //           question: "c",
  //           answer: "d",
  //         },
  //       },
  //       cardInfo: {
  //         cardNo: "20200202002020",
  //         cardHolder: "suhaya",
  //         cardPin: "1111",
  //         cardBalance: {
  //           income: 209,
  //           spent: 1000,
  //         },
  //         bankName: "suhayaBank",
  //         code: 234,
  //       },
  //       bankDatails: {
  //         acc_bank: "suhayaBank",
  //         acc_no: 22222222,
  //         acc_name: "suhaya",
  //       },
  //       income: {
  //         transactions: [
  //           {
  //             amount: 39,
  //             sender: {
  //               name: "sani haladu",
  //               acc_number: 2299292992,
  //               transac_string: `${new Date().getTime()}`,
  //             },
  //             time: new Date(),
  //           },
  //         ],
  //         total: 209,
  //       },
  //       spent: {
  //         transactions: [
  //           {
  //             amount: 333,
  //             reciever: {
  //               name: "sulaiman haladu",
  //               acc_number: 2223252471,
  //               transac_string: `${new Date().getTime()}suhaya`,
  //             },
  //             time: new Date(),
  //           },
  //         ],
  //         total: 3333,
  //       },
  //     },
  //     users: [
  //       {
  //         loginInfo: {
  //           username: "suhaya",
  //           password: "dd",
  //           securityQuestion1: {
  //             question: "a",
  //             answer: "b",
  //           },
  //           securityQuestion2: {
  //             question: "c",
  //             answer: "d",
  //           },
  //         },
  //         cardInfo: {
  //           cardNo: "20200202002020",
  //           cardHolder: "suhaya",
  //           cardPin: "1111",
  //           cardBalance: {
  //             income: 209,
  //             spent: 1000,
  //           },
  //           bankName: "suhayaBank",
  //           code: 234,
  //         },
  //         bankDatails: {
  //           acc_bank: "suhayaBank",
  //           acc_no: 22222222,
  //           acc_name: "suhaya",
  //         },
  //         income: {
  //           transactions: [
  //             {
  //               amount: 39,
  //               sender: {
  //                 name: "sani haladu",
  //                 acc_number: 2299292992,
  //                 transac_string: `${new Date().getTime()}`,
  //               },
  //               time: new Date(),
  //             },
  //           ],
  //           total: 209,
  //         },
  //         spent: {
  //           transactions: [
  //             {
  //               amount: 333,
  //               reciever: {
  //                 name: "sulaiman haladu",
  //                 acc_number: 2223252471,
  //                 transac_string: `${new Date().getTime()}suhaya`,
  //               },
  //               time: new Date(),
  //             },
  //           ],
  //           total: 3333,
  //         },
  //       },
  //     ],
  //   },
  //   decisions: [],
  //   daily_wahala: [],

  //   timeGreetings: [],
  // }
  const [currentUser, setCurrentUser] = React.useState<user>();
  React.useEffect(() => {
    setLastUpdate(new Date());
    const localquery = localStorage.getItem("AmosIdeaApp");
    if (localquery) {
      const myCurrentData: Data = JSON.parse(localquery);
      if (myCurrentData) {
        setLocalData(myCurrentData);
        if (localData?.atm_simulations?.currentUSer)
          setCurrentUser(localData?.atm_simulations?.currentUSer);
        settotalincome(currentUser?.transactionData?.totalIncome);
        settotalspent(currentUser?.transactionData?.totalSpent);
      }
    } else {
      localStorage.setItem("AmosIdeaApp", JSON.stringify(localData));
    }
  }, []);
  const handleLogOUt = () => {
    const localquery = localStorage.getItem("AmosIdeaApp");
    if (!localquery) return;

    const availabeData: Data = JSON.parse(localquery);
    if (!availabeData.atm_simulations?.currentUSer) return;
    if (!confirm("Do you really want to logout")) return;

    const userLoggedOut: Data = {
      ...availabeData,
      atm_simulations: {
        currentUSer: {
          ...availabeData.atm_simulations.currentUSer,
          loginInfo: {
            ...availabeData.atm_simulations.currentUSer.loginInfo,
            isLoggedIn: false,
          },
        },
        users: availabeData.atm_simulations?.users?.map((user) => {
          if (
            user.loginInfo?.phoneNumber ==
              availabeData.atm_simulations?.currentUSer?.loginInfo
                ?.phoneNumber &&
            user.loginInfo?.password ==
              availabeData.atm_simulations?.currentUSer?.loginInfo?.password
          ) {
            return {
              ...availabeData.atm_simulations?.currentUSer,
              loginInfo: {
                ...availabeData.atm_simulations?.currentUSer?.loginInfo,
                isLoggedIn: false,
              },
            };
          } else return user;
        }),
      },
    };
    localStorage.setItem("AmosIdeaApp", JSON.stringify(userLoggedOut));
    redirect("/fake-atm/login");
  };

  return (
    <ProtectedRoute>
      <div className="bg-gray-50">
        <h1 className=" flex justify-between bg-white">
          <div>
            <span
              onClick={() => {
                if (!prompt("really")) return;
                localStorage.clear();
                redirect("/fake-atm/");
              }}
            >
              resetusers
            </span>
            <BiUser
              onClick={() => setUserOptions(!userOptions)}
              className="text-4xl inline-block mr-3 border p-1 rounded-full"
            />
            <div className="relative">
              {userOptions && (
                <ul className="absolute  bg-white p-3 font-bold capitalize rounded-md">
                  <li className="cursor-pointer hover:underline text-blue-700">
                    Upgrade
                  </li>
                  <li className="cursor-pointer hover:underline text-blue-700">
                    settings
                  </li>
                  <li
                    onClick={() => handleLogOUt()}
                    className="cursor-pointer hover:underline text-blue-700"
                  >
                    LogOut
                  </li>
                </ul>
              )}
            </div>
            <span>level 1</span>
          </div>
          <div className="mr-2">
            <BiHeadphone className="inline-block text-3xl" />
            <BiBell className="inline-block text-3xl" />
          </div>
        </h1>
        <div className="container border bg-blue-900 p">
          <div className="ml-2">
            <div className="text-white w-10/12 my-3 mx-auto font-bold flex gap-2">
              <span>
                {" "}
                {Number(
                  localData?.atm_simulations?.currentUSer?.loginInfo
                    ?.phoneNumber,
                )}
              </span>{" "}
              <span>|</span>{" "}
              <span>
                {`${
                  localData?.atm_simulations?.currentUSer?.loginInfo?.nin
                    ?.personalInfo.fName
                }  ${
                  localData?.atm_simulations?.currentUSer?.loginInfo?.nin
                    ?.personalInfo.lname
                } ${
                  localData?.atm_simulations?.currentUSer?.loginInfo?.nin
                    ?.personalInfo.sname
                }`}
              </span>
              <span>
                <BiCopy
                  className="inline-block cursor-pointer"
                  onClick={() =>
                    navigator.clipboard.writeText(
                      Number(
                        localData.atm_simulations?.currentUSer?.loginInfo
                          ?.phoneNumber,
                      ).toString(),
                    )
                  }
                />
              </span>
            </div>
            <div className="my-3">
              <h2 className="text-3xl text-gray-100 flex gap-2 font-bold">
                {showBalance ? (
                  <>
                    <span className="uppercase line-through ">n</span>{" "}
                    <span className="select-none">
                      {localData.atm_simulations?.currentUSer?.transactionData
                        ?.totalIncome! -
                        localData.atm_simulations?.currentUSer?.transactionData
                          ?.totalSpent! || 0}
                    </span>
                    <span>
                      <BiHide
                        onClick={() => setShowBalance(false)}
                        className="inline-block cursor-pointer active:p-1"
                      />
                    </span>
                  </>
                ) : (
                  <>
                    <span className="uppercase line-through select-none">
                      n
                    </span>{" "}
                    <span className="select-none">
                      {masker(
                        `${
                          localData.atm_simulations?.currentUSer
                            ?.transactionData?.totalIncome! -
                            localData.atm_simulations?.currentUSer
                              ?.transactionData?.totalSpent! || 0
                        }`,
                      )}
                    </span>
                    <span>
                      <BiShow
                        onClick={() => setShowBalance(true)}
                        className="inline-block cursor-pointer active:p-1"
                      />
                    </span>
                  </>
                )}
              </h2>
            </div>
            <div className="text-gray-100 flex gap-2 font-bold my-3">
              <span>Last updated</span>
              <span>{lastUpdate?.toLocaleString().toString()}</span>
            </div>
            <div className="text-white flex gap-4 my-3">
              <span className="bg-blue-800 cursor-pointer p-1 px-3 rounded-2xl">
                <span className="text-2xl"> +</span>{" "}
                <span onClick={() => setShowAddMoneyModal(true)}>Add</span>
                {showAddMoneyModal && (
                  <AddMoneyModal
                    setOpenModal={setShowAddMoneyModal}
                    openModal={showAddMoneyModal}
                    aza={Number(
                      localData.atm_simulations?.currentUSer?.loginInfo
                        ?.phoneNumber,
                    )}
                  />
                )}
              </span>
              <span className="bg-blue-800 p-1 px-3 rounded-2xl cursor-pointer">
                <BiHistory className="inline" />{" "}
                <Link href={`${pathName}/transaction-history`}>
                  <span>history</span>
                </Link>
              </span>{" "}
            </div>
          </div>
        </div>
        <div>
          <div className="w-10/12 flex justify-between my-3 mx-auto">
            <span>services</span>
            <span className="text-blue-600 cursor-pointer">Edit</span>
          </div>
          <div className="w-10/12 flex justify-around flex-row flex-wrap my-3 mx-auto">
            <span className=" servicesBoxUnderFakeAtmDashbord">
              <Link href={`${pathName}/transfer`}>
                Transfer{" "}
                <BiTransfer
                  className="rotate-z-135  text-center my-0 mx-auto"
                  size={40}
                />
              </Link>
            </span>

            <span className=" servicesBoxUnderFakeAtmDashbord">
              <Link href={`${pathName}/airtime`}>
                {" "}
                <BiPhoneOutgoing size={40} className="my-0 mx-auto" />
                Airtime{" "}
              </Link>
            </span>

            <span className=" servicesBoxUnderFakeAtmDashbord">
              <BiMobileAlt size={40} className="my-0 mx-auto" />
              Data
            </span>
            <span className="  servicesBoxUnderFakeAtmDashbord">
              <BiFootball size={40} className="my-0 mx-auto" />
              Betting
            </span>
          </div>
          <div className="w-10/12  flex justify-around my-2 mx-auto">
            <span className=" servicesBoxUnderFakeAtmDashbord">
              <BiMoney size={40} className="my-0 mx-auto" />
              Savings
            </span>
            <span className="servicesBoxUnderFakeAtmDashbord">
              <BiBookOpen size={40} className="my-0 mx-auto" />
              Education
            </span>
            <span className=" servicesBoxUnderFakeAtmDashbord">
              <BiFile size={40} className="my-0 mx-auto" />
              <span>statement</span>
            </span>

            <span className=" servicesBoxUnderFakeAtmDashbord">
              <BsGrid size={40} className="my-0 mx-auto" />
              menu
            </span>
          </div>
          <h3 className="w-10/12 flex my-2 mx-auto">Rewards</h3>
          <div className="w-10/12 flex my-2 mx-auto justify-around">
            <div className="flex flex-wrap flex-row bg-white p-4 rounded-2xl ">
              <span className="w-full">
                <BsCoin size={30} />
              </span>
              <span className="w-full">CashBack</span>
              <span className="w-full">
                {localData.atm_simulations?.currentUSer?.transactionData
                  ?.cashBack || 0}{" "}
                <span className="uppercase line-through">n</span>
              </span>
            </div>
            <div className="flex flex-wrap flex-row bg-white p-4 rounded-2xl">
              <span className="w-full">
                <BiVolumeFull size={30} />
              </span>
              <span className="w-full">Refferals</span>
              <span className="w-full">
                40 <span className="uppercase line-through">n</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default FakeAtm;
