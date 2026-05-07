"use client";
import { Data, masker, user } from "@/src/components/data";
import LIcenceFooter from "@/src/components/FakeAtmComponent/LIcenceFooter";
import Logo from "@/src/components/FakeAtmComponent/Logo";
import NumberFieldInForm from "@/src/components/FakeAtmComponent/NumberFieldInForm";
import PublicOnlyRoute from "@/src/components/FakeAtmComponent/PublicOnlyRoutes";
import UsernameFieldInForm from "@/src/components/FakeAtmComponent/userNameFieldInForm";
import Link from "next/link";
import { redirect } from "next/navigation";

import React from "react";
import {
  BiFingerprint,
  BiPhone,
  BiSolidLeftArrowAlt,
  BiUser,
} from "react-icons/bi";
import { BsFillLockFill } from "react-icons/bs";

const LoginPage = () => {
  const [wantToLoginwithPhoneNumber, setWantToLoginwithPhoneNumber] =
    React.useState<boolean>(true);
  const [startedTypingNumber, setStartedTypingNumber] =
    React.useState<boolean>(true);
  const [numberVerified, setNumberVerified] = React.useState<boolean>(false);
  const [numberExist, setNumberExist] = React.useState<boolean>(true);
  const [numberValue, setNumberValue] = React.useState<string | undefined>();
  const [errorOnNumber, setErrorOnNumber] = React.useState<string>("");
  const [userWithTheNumber, setUSerWithTheNumber] = React.useState<
    user | undefined
  >();
  const [usernameValue, setUsernameValue] = React.useState<
    string | undefined
  >();
  const [passcodeValue, setPasscodeValue] = React.useState<
    string | undefined
  >();
  React.useEffect(() => {
    const query = localStorage.getItem("AmosIdeaApp");
    const localData: Data = JSON.parse(query || "{}");
    if (localData.atm_simulations?.currentUSer?.loginInfo?.phoneNumber) {
      setNumberVerified(true);
      setErrorOnNumber("");
      setUSerWithTheNumber(localData.atm_simulations.currentUSer);
    }
  }, []);
  const verifyNumber = (
    num: string,
    Idtype: "phone" | "username",
  ): user | void => {
    const query = localStorage.getItem("AmosIdeaApp");
    const localData: Data = JSON.parse(query || "{}");
    if (
      (Idtype === "phone" && num && num.length !== 10) ||
      isNaN(Number(num))
    ) {
      setNumberVerified(false);
      if (num?.length < 10) {
        setErrorOnNumber("Phone Number must be 10");
        return;
      }
      if (num?.length > 10) {
        setErrorOnNumber("Number limit exceeded");
        return;
      }
      if (isNaN(Number(num))) {
        setErrorOnNumber("Invalid Number input");
        return;
      }
      return;
    }
    if (
      (localData.atm_simulations?.currentUSer?.loginInfo?.phoneNumber &&
        localData.atm_simulations.currentUSer.loginInfo.phoneNumber == num) ||
      localData.atm_simulations?.currentUSer?.loginInfo?.username == num
    ) {
      setUSerWithTheNumber(localData.atm_simulations.currentUSer);
      setNumberVerified(true);
      setNumberExist(true);
      setErrorOnNumber("");
      return localData.atm_simulations.currentUSer;
    }
    localData.atm_simulations?.users?.map((user) => {
      if (
        user.loginInfo?.phoneNumber == num ||
        user.loginInfo?.username == num
      ) {
        setUSerWithTheNumber(user);
        setNumberVerified(true);
        setNumberExist(true);
        return user;
      } else return user;
    });
  };
  const login = (pass: string | undefined) => {
    const query = localStorage.getItem("AmosIdeaApp");
    const localData: Data = JSON.parse(query || "{}");
    if (
      !localData.atm_simulations?.users?.some(
        (user) =>
          user.loginInfo?.phoneNumber ==
          userWithTheNumber?.loginInfo?.phoneNumber,
      )
    )
      return;
    if (userWithTheNumber?.loginInfo?.password == pass) {
      // here there suppose to be an encryption
      const updatedCurrentUser: user = {
        ...localData.atm_simulations.currentUSer,
        loginInfo: {
          ...localData.atm_simulations.currentUSer?.loginInfo,
          isLoggedIn: true,
        },
      };
      const newData: Data = {
        ...localData,
        atm_simulations: {
          currentUSer: updatedCurrentUser,
          users: [
            ...localData.atm_simulations.users.map((user) =>
              user.loginInfo?.phoneNumber !=
              updatedCurrentUser.loginInfo?.phoneNumber
                ? {
                    ...user,
                    loginInfo: { ...user.loginInfo, isLoggedIn: false },
                  }
                : updatedCurrentUser,
            ),
          ],
        },
      };
      localStorage.setItem("AmosIdeaApp", JSON.stringify(newData));
      redirect("/fake-atm/login");
    }
  };
  const handleChangeNumber = () => {
    const localquery = localStorage.getItem("AmosIdeaApp");
    if (!localquery) return;
    const availabeData: Data = JSON.parse(localquery);
    if (!availabeData.atm_simulations?.currentUSer) return;

    const userLoggedOut: Data = {
      ...availabeData,
      atm_simulations: {
        currentUSer: {},
        users: availabeData.atm_simulations.users,
      },
    };
    localStorage.setItem("AmosIdeaApp", JSON.stringify(userLoggedOut));
    redirect("/fake-atm/login");
  };

  return (
    <PublicOnlyRoute>
      <div>
        {!numberVerified ? (
          <>
            <div className="flex justify-between relative ">
              <div className="absolute">
                <Logo />
              </div>
              <div className="flex flex-wrap flex-row justify-end absolute right-0 top-4">
                <span className="w-full text-right mr-10">
                  lost your phone?
                </span>{" "}
                <span className="text-blue-600 cursor-pointer hover:text-blue-800 w-full text-right mr-10">
                  <BsFillLockFill className="inline-block font-extrabold" />{" "}
                  Lock your account
                </span>
              </div>
            </div>
            <div className="absolute bottom-0  w-full">
              <h1 className="w-10/12  my-2 mx-auto uppercase font-extrabold">
                Log in to your account
              </h1>
              <div className="flex gap-4 w-10/12 my-2 mx-auto  ">
                <span>login with</span>
                <span
                  onClick={() => setWantToLoginwithPhoneNumber(true)}
                  className={`${wantToLoginwithPhoneNumber ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-300"} cursor-pointer rounded-3xl font-bold p-2 `}
                >
                  <BiPhone className="inline-block" /> Phone
                </span>
                <span
                  onClick={() => setWantToLoginwithPhoneNumber(false)}
                  className={`${wantToLoginwithPhoneNumber ? "bg-gray-100 text-gray-400" : "bg-blue-600 text-white"} p-2 rounded-3xl cursor-pointer font-bold`}
                >
                  {" "}
                  <BiUser className="inline-block " /> Username
                </span>{" "}
              </div>
              {wantToLoginwithPhoneNumber ? (
                <NumberFieldInForm
                  numberValue={numberValue}
                  setNumberValue={setNumberValue}
                />
              ) : (
                <UsernameFieldInForm
                  setStartedTypingNumber={setStartedTypingNumber}
                  startedTypingNumber={startedTypingNumber}
                />
              )}
              <div className="flex justify-between w-10/12 my-3 mx-auto">
                <span
                  className="w-7/12 cursor-pointer bg-blue-600 p-3 text-center text-white font-bold rounded-xl pt-6 text-2xl select-none"
                  onClick={() =>
                    wantToLoginwithPhoneNumber
                      ? verifyNumber(numberValue!, "phone")
                      : verifyNumber(usernameValue || "", "username")
                  }
                >
                  Next
                </span>{" "}
                <span className="w-3/12  text-center ">
                  <BiFingerprint
                    size={60}
                    fill="blue"
                    className="my-0 mx-auto bg-blue-100 p-2 rounded-2xl  cursor-pointer"
                  />
                </span>
              </div>
              <div>
                <p className="capitalize text-center text-blue-600 cursor-pointer">
                  <span onClick={() => handleChangeNumber()}>
                    change my phone number
                  </span>
                  <br />
                  <Link href={"/fake-atm/"}>Create account ?</Link>
                </p>
              </div>
              <LIcenceFooter />
            </div>
          </>
        ) : (
          <>
            <div>
              <BiSolidLeftArrowAlt
                size={40}
                fill="blue"
                onClick={() => setNumberVerified(false)}
              />
              <div className="w-10/12 my-0 mx-auto">
                <p className="font-bold">Welcome Back</p>
                <p>Please verify your Account</p>
              </div>
              <h1 className="title">Passcode</h1>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (
                    passcodeValue?.length === 6 &&
                    !isNaN(Number(passcodeValue))
                  )
                    login(passcodeValue);
                }}
                className="w-6/12 my-0 mx-auto"
              >
                <input
                  value={passcodeValue ?? ""}
                  onChange={(e) => {
                    if (
                      isNaN(Number(e.currentTarget.value)) ||
                      e.currentTarget.value.length > 6
                    )
                      return;
                    setPasscodeValue(e.currentTarget.value);
                  }}
                  type="text"
                  required
                  className="border-2 rounded-2xl outline-none bg-gray-400 p-2"
                />
                <div className="flex justify-end my-4 mx-auto">
                  <input
                    type="submit"
                    value="Verify"
                    className="border p-1 px-4 bg-blue-800 text-white font-bold rounded-md cursor-pointer hover:bg-blue-950"
                  />
                </div>
              </form>
              <Link
                href={"/login/resetPassword"}
                className="text-blue-600 block text-center cursor-pointer hover:underline font-bold"
              >
                Forgot Password ?
              </Link>
              <p
                className="capitalize text-center text-blue-600 cursor-pointer"
                onClick={() => handleChangeNumber()}
              >
                change my phone number
              </p>
              <div className="absolute bottom-0">
                <LIcenceFooter />
              </div>
            </div>
          </>
        )}
      </div>
    </PublicOnlyRoute>
  );
};

export default LoginPage;
