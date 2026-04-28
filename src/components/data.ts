"use client";

import { useEffect, useState } from "react";

export interface Data {
  decisions?: decision[];
  daily_wahala?: wahala[];
  atm_simulations?: atm_simulation;
  timeGreetings?: timeGreeting[];
}
export interface decision {
  id: string;
  todo: string;
  rank: number;
  reason?: string;
}
export type rating =
  | "difficult"
  | "very difficult"
  | "modarate"
  | "easy"
  | "very easy"
  | "no thing";
export type status =
  | "unsolved"
  | "solved"
  | "pending"
  | "solving"
  | "cannot solve";
export interface wahala {
  id: string;
  date: Date;
  name: string;
  causer: string;
  status: status;
  decision: string;
  rating: rating;
  desctiption: string;
}

export interface timeGreeting {
  id: string;
  morning?: {
    time: Data;
    message: string;
  };
  afternone?: {
    time: Data;
    message: string;
  };
  evening?: {
    time: Date;
    message: string;
  };
}

export const myData: Data = {
  // decisions: [
  //   {
  //     id: crypto.randomUUID(),
  //     todo: "Going to sallah",
  //     rank: 1000,
  //     reason: "becouse sallah is the biggest ibada to muslim",
  //   },
  //   {
  //     id: crypto.randomUUID(),
  //     todo: "call friend ",
  //     rank: 100,
  //     reason: "becouse its very important to be contacting each other",
  //   },
  //   {
  //     id: crypto.randomUUID(),
  //     todo: "Going to sallah 2",
  //     rank: 109,
  //     reason: "becouse sallah is the biggest ibada to muslim",
  //   },
  //   {
  //     id: crypto.randomUUID(),
  //     todo: "call friend 2",
  //     rank: 108,
  //     reason: "becouse its very important to be contacting each other",
  //   },
  //   {
  //     id: crypto.randomUUID(),
  //     todo: "Going to sallah 3",
  //     rank: 170,
  //     reason: "becouse sallah is the biggest ibada to muslim",
  //   },
  //   {
  //     id: crypto.randomUUID(),
  //     todo: "call friend 3",
  //     rank: 107,
  //     reason: "becouse its very important to be contacting each other",
  //   },
  // ],
  daily_wahala: [],
  atm_simulations: {
    currentUSer: {},
    users: [],
  },
  decisions: [],
  timeGreetings: [],
};

export type user = {
  income?: {
    transactions?: [
      {
        amount: number;
        sender: {
          name: string;
          acc_number: number | string;
          transac_string: string;
        };
        time: Date;
        reason?: string;
        other?: string | number;
      },
    ];
    total: number;
  };
  spent?: {
    total: number;
    transactions: [
      {
        amount: number;
        reciever: {
          name: string;
          acc_number: number | string;
          transac_string: string;
        };
        time: Date;
        reason?: string;
        other?: string | number;
      },
    ];
  };
  bankDatails?: {
    acc_no: string | number;
    acc_name: string;
    acc_bank: string;
  };
  loginInfo?: {
    phoneNumber?: string | undefined;
    password?: string | undefined;
    username?: string | undefined;
    nin?: idDetails;
    bvn?: string | undefined | idDetails;
    email?: string;
    securityQuestion1?:
      | {
          question: string;
          answer: string | number;
        }
      | undefined;
    securityQuestion2?:
      | {
          question: string;
          answer: string | number;
        }
      | undefined;
  };
  cardInfo?: {
    cardNo: string;
    cardPin: string;
    cardHolder: string;
    code: number;
    bankName: string;
    cardBalance?: {
      income: number;
      spent: number;
    };
  };
};
export type idDetails = {
  vid: {
    type: "nin" | "bvn";
    value: string | number;
  };
  personalInfo: {
    fName: string;
    lname: string;
    sname?: string;
    dob: string;
    gender: string;
  };
  address: {
    state: string;
    lga: string;
    town: string;
  };
};
type atm_simulation = {
  currentUSer?: user;
  users?: user[];
};
export const CalculatedTodaysDate = (date: Date): string =>
  `${new Date(date).getDate() - 1}/${new Date(date).getMonth()}/${new Date(date).getFullYear()}`;
console.log(CalculatedTodaysDate(new Date()));
export const CalculateSavedDate = (date: Date): string =>
  `${new Date(date).getDate()}/${new Date(date).getMonth()}/${new Date(date).getFullYear()}`;
export const TodaysWahala = (array: wahala[]): wahala[] =>
  array.filter((item) =>
    CalculateSavedDate(item.date) === CalculatedTodaysDate(new Date())
      ? item
      : null,
  );
export const FindAllMeAsWahalaCouser = (wahalas: wahala[]): wahala[] =>
  TodaysWahala(wahalas).filter(
    (wahala) =>
      wahala.causer == `me` ||
      wahala.causer == "Me" ||
      wahala.causer == "ME" ||
      wahala.causer == "mE",
  );
export const findAllNotMeAsWahalaCauser = (wahalas: wahala[]): wahala[] =>
  TodaysWahala(wahalas).filter(
    (wahala) =>
      wahala.causer != `me` &&
      wahala.causer !== "Me" &&
      wahala.causer !== "ME" &&
      wahala.causer != "mE",
  );
export const masker = (text: string): string => {
  const myArray: "*"[] = [];
  for (let index = 0; index < text.length; index++) {
    myArray.push("*");
  }
  return myArray.join("");
};

export const alradyExist = (
  dataToCheck: Data,
  text: string,
  whatToCheck?: "nin" | "bvn" | "phone",
): boolean | undefined => {
  if (whatToCheck === "nin") {
    return dataToCheck.atm_simulations?.users?.some(
      (user) => user?.loginInfo?.nin?.vid?.value === text,
    );
  } else if (whatToCheck === "bvn")
    return dataToCheck.atm_simulations?.users?.some(
      (user) => user?.loginInfo?.bvn === text,
    );
  else if (whatToCheck === "phone")
    return dataToCheck.atm_simulations?.users?.some(
      (user) => user.loginInfo?.phoneNumber?.toString() === text,
    );
};
// export const dataRetriver = () => {
//   const [savedData, setSavedData] = useState<Data>();
//   useEffect(() => {
//     const query = localStorage.getItem("AmosIdeaApp");
//     const daata: Data = JSON.parse(query || "{}");
//     setSavedData(daata);
//   });
//   return savedData;
// };
// export const thedaata = dataRetriver();
