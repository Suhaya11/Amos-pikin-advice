"use client";
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
  daily_wahala: [
    {
      id: "crypto.randomUUID()",
      date: new Date(),
      name: "machine spoiled",

      desctiption: "Our machine was spoiled",
      causer: "Natural",
      status: "unsolved",
      decision:
        "I'll make sure that my bycle were fine before the next data inshaAllah",
      rating: "difficult",
    },
  ],
  atm_simulations: {
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
};

interface atm_simulation {
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
}
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
