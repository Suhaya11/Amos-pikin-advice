import { AddActionSchema } from "./rules";
import { Data } from "@/src/components/data";
export const addActionToMMR = async (state: any) => {
  const action = await state.get("action");
  const grade = await state.get("grade");
  const reason = await state.get("reason");
  if (action && Number(grade) && reason) {
    const locally = localStorage.getItem("AmosIdeaApp");

    const currentData: Data = JSON.parse(locally || "{}");
    console.log(currentData.decisions);
    console.log(reason, action, grade);
    currentData?.decisions?.push({
      id: crypto.randomUUID(),
      todo: action,
      reason,
      rank: grade,
    });

    localStorage.setItem("AmosIdeaApp", JSON.stringify(currentData));
  }
};
