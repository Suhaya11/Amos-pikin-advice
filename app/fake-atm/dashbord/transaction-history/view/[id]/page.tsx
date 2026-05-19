// "use client";
// import { Data, transaction } from "@/src/components/data";
// import React from "react";

// const page = async ({ params }: any) => {
//   const { id } = await params;
//   const [transaction, setTransaction] = React.useState<
//     transaction | undefined
//   >();
//   React.useEffect(() => {
//     const query = localStorage.getItem("AmosIdeaApp");
//     if (!query) return;
//     const Datar: Data = JSON.parse(query);
//     Datar.atm_simulations?.currentUSer?.transactionData?.transactions?.map(
//       (tran) => {
//         if (tran.id == id) setTransaction(tran);
//         else return;
//       },
//     );
//   });

//   return (
//     <div>
//       <h1 className="text-9xl to-blue-800">{transaction?.amount || "oops"}</h1>
//     </div>
//   );
// };

// export default page;
