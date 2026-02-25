import { decision } from "../data";
import React from "react";
export type processDataExport = {
  addChoice(action?: decision): void;
  choosed?: decision[];
  removeChoice(action: decision): decision[];
  decidedFunc(): decision | undefined;
};

export const processData = async (
  anArray?: decision[],
): Promise<processDataExport | string> => {
  const [choosed, setChoosed] = React.useState<decision[]>(theData);
  try {
   
    

   
    };
    return { decidedFunc, addChoice, removeChoice, choosed };
  } catch (error) {
    return `Error: ${error}`;
  }
};
