import { decision } from "@/src/components/data";

import { redirect } from "next/navigation";

type myProps = {
  decided: decision;
};
function Decided_Modal({ decided }: myProps) {
  if (!decided) redirect("/decision-maker");
  return (
    <div className="absolute w-screen z-10 h-screen bg-purple-200 top-15 left-0">
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="container border  bg-blue-800 text-white">
        <h1 className="title">Decided choice</h1>

        <br />
        <p>
          Based on some parameters you suppose choose{" "}
          <span className="font-bold">{decided?.todo} </span>
          {!decided?.todo?.startsWith("becouse") || "becouse"}
          {decided?.reason ||
            " Ranks shows that you value it more but if that's not true let me know    "}
          {!decided?.reason && (
            <button className="border rounded-2xl bg-white text-black p-2 cursor-pointer underline">
              Checkout
            </button>
          )}{" "}
        </p>
      </div>
    </div>
  );
}

export default Decided_Modal;
