"use client";
export const localstorageApi = "AmosIdeaApp";

export interface decisionHistory {
  dicision?: decision;
  time?: Date;
  id?: string;
}
export interface Data {
  decisions?: {
    decisions?: decision[];
    history?: decisionHistory[];
  };
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
export type carriers = {
  mtn?: carrier;
  airtel?: carrier;
  nineMobile?: carrier;
  glo?: carrier;
};
export type carrier = {
  price?: number; //per gig
  cashback?: number; /// per git
};
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
    carriers: {
      mtn: {
        price: 300,
        cashback: 10,
      },
      airtel: {
        // (100/price)* cashback
        price: 400,
        cashback: 7,
      },
      glo: {
        price: 250,
        cashback: 12.5,
      },
      nineMobile: {
        price: 200,
        cashback: 15,
      },
    },
  },
  decisions: {
    decisions: [],
    history: [],
  },
  timeGreetings: [],
};
export type reciever = {
  name?: string;
  acc_number?: number | string;
  transac_string?: string;
};
export type airtime_Data = {
  network?: "mtn" | "airtel" | "glo" | "9mobile";
  cashback?: number;
  client?: string;
  price?: number;
  type?: "airtime" | "data";
  time?: Date;
  qtt?: string;
  id: string;
};
export type transaction = {
  id: string;
  type?: "in" | "out" | "airtime" | "data" | "bonus";
  amount?: number;
  client?: {
    name?: string;
    acc_number?: number | string;
    transac_string?: string;
    bank?: string;
  };
  time?: Date;
  reason?: string;
  other?: string;
};
// export type outgoingTransaction = {
//   type?: "out" | "in";
//   amount?: number;
//   reciever?: {
//     name?: string;
//     acc_number?: number | string;
//     transac_string?: string;
//     bank?: string;
//   };
//   time?: Date;
//   reason?: string;
//   other?: string | number;
// };
export type benef = {
  id?: string;
  name?: string;
  acc_no?: string | number;
  bank?: string;
};
export type user = {
  id?: string;
  transactionData?: {
    airtime?: { airtimes: airtime_Data[]; beneficiaries?: benef[] };
    data?: { datas: airtime_Data[]; beneficiaries?: benef[] };
    beneficiaries?: benef[];
    transactions?: transaction[];
    totalIncome?: number;
    totalSpent?: number;
    cashBack?: number;
    referralBonus?: number;
  };
  // spent?: {
  //   total?: number;
  //   transactions?: incomingTransaction[];
  //   beneficiaries?: benef[];
  // };
  bankDatails?: {
    acc_no?: string | number;
    acc_name?: string;
    acc_bank?: string;
  };
  loginInfo?: {
    isLoggedIn?: boolean;
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
    cardNo?: string;
    cardPin?: string;

    code?: number | string;
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
  carriers?: carriers;
};
export const CalculatedTodaysDate = (date: Date): string =>
  `${new Date(date).getDate() - 1}/${new Date(date).getMonth()}/${new Date(date).getFullYear()}`;

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
export const refactorDate = function (
  date: Date = new Date(),
  seperator: "/" | "-" | ":" | "=" | "_" = "-",
): string {
  return `${new Date(date).getDay()}${seperator}${new Date(date).getMonth()}${seperator}${new Date(date).getFullYear()}`;
};

export const samplingDataForStarting: Data = {
  decisions: { decisions: [], history: [] },
  atm_simulations: {
    currentUSer: {},
    users: [],
    carriers: {},
  },
  daily_wahala: [],
  timeGreetings: [],
};

export const timeForToday = (date?: Date) => {
  if (date && refactorDate(date) == refactorDate()) {
    return new Date(date).toLocaleString().split(",").at(1);
  }
  if (date) return new Date(date).toLocaleDateString();
};
// this is if its today ;
export type chats = {
  client: "user" | "bot";
  message?: string;
  id?: string;
  time: Date;
};
export type req = {
  message?: string;
  time?: Date;
  client?: "user";
};
export type res = {
  message?: string;
  time?: Date;
  client?: "bot";
};
export type chatsreqres = {
  id?: string;
  req: req;
  res?: res;
};
