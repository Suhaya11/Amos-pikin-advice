"use client";
import { Data, localstorageApi, responsekey } from "@/src/components/data";
import ErrorMessage from "@/src/components/FakeAtmComponent/features/ErrorMessage";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import { BiLeftArrowAlt } from "react-icons/bi";

const page = () => {
  const [key, setKey] = React.useState<string>();
  const [value, setValue] = React.useState<string>();
  const [err, setErr] = React.useState<string>();

  const addKey = () => {
    const query = localStorage.getItem(localstorageApi);
    if (!query) redirect("/");
    const data: Data = JSON.parse(query);
    if (!key) {
      setErr("empty key !");
      return;
    }
    if (!value) {
      setErr("Invalid value !");
      return;
    }
    if (
      data.messageStrans?.responses?.some(
        (itskey) => itskey.key.trim() == key.trim(),
      )
    ) {
      setErr("Cannot have duplicate keyword ! ");
      return;
    }

    const newResponse: responsekey = {
      id: crypto.randomUUID(),
      key,
      value,
    };
    const newData: Data = {
      ...data,
      messageStrans: {
        ...data.messageStrans,
        responses: [...data.messageStrans?.responses!, newResponse],
      },
    };
    localStorage.setItem(localstorageApi, JSON.stringify(newData));
    setKey("");
    setValue("");
  };
  return (
    <div>
      <Link href={"/message-trans"}>
        <BiLeftArrowAlt size={30} fill="blue" />
      </Link>
      <form
        action=""
        className="mt-10"
        onSubmit={(e) => {
          e.preventDefault();
          addKey();
        }}
      >
        <div className="flex gap-2 w-10/12 my-2 mx-auto">
          <label className="pt-2" htmlFor="key">
            Keyword:
          </label>
          <input
            type="text"
            value={key ?? ""}
            onChange={(e) => setKey(e.currentTarget.value)}
            required
            placeholder="Keyword"
            className="Input"
          />
        </div>
        <div className="flex gap-2 w-10/12 my-2 mx-auto">
          <label className="pt-1" htmlFor="value">
            Response:
          </label>{" "}
          <input
            type="text"
            required
            placeholder="Desired response..."
            className="Input"
            value={value ?? ""}
            onChange={(e) => setValue(e.currentTarget.value)}
          />
        </div>
        <div className="flex justify-end w-9/12 my-4 mx-auto">
          <button className="bg-blue-500 hover:bg-blue-800 text-white font-bold p-1 px-3 rounded-2xl ">
            Add Keyword
          </button>
        </div>
      </form>
      {err && <ErrorMessage err={err} setErr={setErr} />}
    </div>
  );
};

export default page;
