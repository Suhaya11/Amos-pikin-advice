"use client";
import { Data, masker, user } from "@/src/components/data";
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
  const [localData, setLocalDate] = React.useState<Data>({
    atm_simulations: {
      currentUSer: {
        loginInfo: {
          username: "suhaya",
          password: "dd",
          securityQuestion1: {
            question: "a",
            answer: "b",
          },
          securityQuestion2: {
            question: "c",
            answer: "d",
          },
        },
        cardInfo: {
          cardNo: "20200202002020",
          cardHolder: "suhaya",
          cardPin: "1111",
          cardBalance: {
            income: 209,
            spent: 1000,
          },
          bankName: "suhayaBank",
          code: 234,
        },
        bankDatails: {
          acc_bank: "suhayaBank",
          acc_no: 22222222,
          acc_name: "suhaya",
        },
        income: {
          transactions: [
            {
              amount: 39,
              sender: {
                name: "sani haladu",
                acc_number: 2299292992,
                transac_string: `${new Date().getTime()}`,
              },
              time: new Date(),
            },
          ],
          total: 209,
        },
        spent: {
          transactions: [
            {
              amount: 333,
              reciever: {
                name: "sulaiman haladu",
                acc_number: 2223252471,
                transac_string: `${new Date().getTime()}suhaya`,
              },
              time: new Date(),
            },
          ],
          total: 3333,
        },
      },
      users: [
        {
          loginInfo: {
            username: "suhaya",
            password: "dd",
            securityQuestion1: {
              question: "a",
              answer: "b",
            },
            securityQuestion2: {
              question: "c",
              answer: "d",
            },
          },
          cardInfo: {
            cardNo: "20200202002020",
            cardHolder: "suhaya",
            cardPin: "1111",
            cardBalance: {
              income: 209,
              spent: 1000,
            },
            bankName: "suhayaBank",
            code: 234,
          },
          bankDatails: {
            acc_bank: "suhayaBank",
            acc_no: 22222222,
            acc_name: "suhaya",
          },
          income: {
            transactions: [
              {
                amount: 39,
                sender: {
                  name: "sani haladu",
                  acc_number: 2299292992,
                  transac_string: `${new Date().getTime()}`,
                },
                time: new Date(),
              },
            ],
            total: 209,
          },
          spent: {
            transactions: [
              {
                amount: 333,
                reciever: {
                  name: "sulaiman haladu",
                  acc_number: 2223252471,
                  transac_string: `${new Date().getTime()}suhaya`,
                },
                time: new Date(),
              },
            ],
            total: 3333,
          },
        },
      ],
    },
    decisions: [],
    daily_wahala: [],

    timeGreetings: [],
  });
  const [currentUser, setCurrentUser] = React.useState<user>();
  React.useEffect(() => {
    const localquery = localStorage.getItem("AmosIdeaApp");
    if (localquery) {
      const myCurrentData: Data = JSON.parse(localquery);
      if (myCurrentData) {
        setLocalDate(myCurrentData);
        if (localData.atm_simulations?.currentUSer)
          setCurrentUser(localData.atm_simulations?.currentUSer);
      }
    } else {
      localStorage.setItem("AmosIdeaApp", JSON.stringify(localData));
    }
  }, []);
  return (
    <div className="bg-gray-50">
      <h1 className=" flex justify-between bg-white">
        <div>
          <BiUser className="text-4xl inline-block mr-3 border p-1 rounded-full" />
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
            <span> 9075898883</span> <span>|</span>{" "}
            <span>Sulaiman haladu yau</span>
            <span>
              <BiCopy className="inline-block cursor-pointer" />
            </span>
          </div>
          <div className="my-3">
            <h2 className="text-3xl text-gray-100 flex gap-2 font-bold">
              {showBalance ? (
                <>
                  <span className="uppercase line-through">n</span>{" "}
                  <span>{currentUser?.income?.total}</span>
                  <span>
                    <BiHide
                      onClick={() => setShowBalance(false)}
                      className="inline-block cursor-pointer active:p-1"
                    />
                  </span>
                </>
              ) : (
                <>
                  <span className="uppercase line-through">n</span>{" "}
                  <span>{masker(`${currentUser?.income?.total}`)}</span>
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
            <span>{new Date().toLocaleString().toString()}</span>
          </div>
          <div className="text-white flex gap-4 my-3">
            <span className="bg-blue-800 cursor-pointer p-1 px-3 rounded-2xl">
              <span className="text-2xl"> +</span> <span>Add</span>
            </span>
            <span className="bg-blue-800 p-1 px-3 rounded-2xl cursor-pointer">
              <BiHistory className="inline" /> <span>history</span>
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
            <BiTransfer
              className="rotate-z-135  text-center my-0 mx-auto"
              size={40}
            />
            Transfer
          </span>
          <span className=" servicesBoxUnderFakeAtmDashbord">
            <BiPhoneOutgoing size={40} className="my-0 mx-auto" />
            Airtime
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
              40 <span className="uppercase line-through">n</span>
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
  );
};

export default FakeAtm;
