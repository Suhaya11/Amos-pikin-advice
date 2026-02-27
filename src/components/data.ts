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
export interface wahala {
  id: string;
  date: Date;
  reason: string;
  cause: string;
  reaction: string;
  decision: string;
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
  decisions: [
    {
      id: crypto.randomUUID(),
      todo: "Going to sallah",
      rank: 1000,
      reason: "becouse sallah is the biggest ibada to muslim",
    },
    {
      id: crypto.randomUUID(),
      todo: "call friend ",
      rank: 100,
      reason: "becouse its very important to be contacting each other",
    },
    {
      id: crypto.randomUUID(),
      todo: "Going to sallah 2",
      rank: 109,
      reason: "becouse sallah is the biggest ibada to muslim",
    },
    {
      id: crypto.randomUUID(),
      todo: "call friend 2",
      rank: 108,
      reason: "becouse its very important to be contacting each other",
    },
    {
      id: crypto.randomUUID(),
      todo: "Going to sallah 3",
      rank: 170,
      reason: "becouse sallah is the biggest ibada to muslim",
    },
    {
      id: crypto.randomUUID(),
      todo: "call friend 3",
      rank: 107,
      reason: "becouse its very important to be contacting each other",
    },
  ],
  daily_wahala: [
    {
      id: crypto.randomUUID(),
      date: new Date(),
      reason: "Our machine was spoiled",
      cause: "there was somethinsg wrong with it",
      reaction:
        "i just resist and make sure that i found wayout before tomorrow",
      decision:
        "I'll make sure that my bycle were fine before the next data inshaAllah",
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
