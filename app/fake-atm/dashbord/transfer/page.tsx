"use client";
import { user } from "@/src/components/data";
import GetUserFromDb from "@/src/components/FakeAtmComponent/features/GetUserFromDb";
import React from "react";

const page = () => {
  const [err, setErr] = React.useState<string>("");
  const [acc_no, setAcc_no] = React.useState<string>("");
  const [bank_name, setBank_name] = React.useState<string>("suhayaPoint");
  const [person_name, setPerson_name] = React.useState<string>("");
  const [userFound1, setUSerFound1] = React.useState<user | undefined>();
  return (
    <div>
      <div className=" w-full h-full  ">
        <h1 className="title">Transfer</h1>
        <form
          action=""
          onSubmit={function (event) {
            event.preventDefault();
          }}
          className="w-10/12 my-8 mx-auto"
        >
          <div className="my-3 mx-auto ">
            <label htmlFor="acc_no">Account No.:</label>
            <input
              value={acc_no}
              onChange={(e) => {
                if (isNaN(Number(e.currentTarget.value))) return;
                if (e.currentTarget.value.length > 10) return;
                setAcc_no(e.currentTarget.value);
              }}
              type="text"
              name="acc_no"
              id="acc_no"
              className=" my-0 mx-2 border-white bg-gray-200 border-10 p-2 outline-none rounded-2xl"
            />
          </div>
          <div className="my-3 mx-auto">
            <label htmlFor="bank_name">Bank:</label>
            <select
              onChange={(e) => setBank_name(e.currentTarget.value)}
              name="bank"
              id="bank_name"
              className="rounded-xl border bg-gray-200 mx-3 p-3"
            >
              <option value="suhayaPoint"> Suhaya Point</option>
            </select>
          </div>
          <div>
            <label htmlFor="name">Name</label>{" "}
            <input
              value={person_name}
              type="text"
              readOnly
              className="border-4 rounded-2xl bg-gray-200 border-white p-2 outline-none"
            />
            <GetUserFromDb
              setErr={setErr}
              setPerson_name={setPerson_name}
              acc_no={acc_no}
              bank_name={bank_name}
              setUserFound={setUSerFound1}
            />
          </div>
          <div>{err}</div>
        </form>
      </div>
    </div>
  );
};

export default page;
