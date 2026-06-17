"use client";
import React from "react";
import { BiPlus, BiSend, BiUser } from "react-icons/bi";
import { chatsreqres, Data, localstorageApi, responsekey } from "../data";
import ErrorMessage from "../FakeAtmComponent/features/ErrorMessage";
import { redirect } from "next/navigation";
import Link from "next/link";
interface myProps {
  scrollToButtom: React.RefObject<HTMLInputElement | null>;
  chats: chatsreqres[] | undefined;
  setChats: React.Dispatch<React.SetStateAction<chatsreqres[] | undefined>>;
}
const ChatField = ({ scrollToButtom, setChats, chats }: myProps) => {
  const [message, setMessage] = React.useState<string>();
  const [botRes, setBotRes] = React.useState<string>();
  const [err, setErr] = React.useState<string>();
  const [responses, setResponses] = React.useState<responsekey[] | undefined>([
    { key: "hi", value: "You greet me", id: crypto.randomUUID() },
    { key: "hungry", value: "You need food", id: crypto.randomUUID() },
    { key: " money ", value: "you'r empty pocket", id: crypto.randomUUID() },
  ]);

  React.useEffect(() => {
    const query = localStorage.getItem(localstorageApi);
    if (!query) redirect("/");
    const data: Data = JSON.parse(query);
    setResponses(data.messageStrans?.responses);
  }, []);

  const resSetter = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (
      !responses?.find((key) =>
        e.currentTarget.value
          .toLocaleLowerCase()
          .trim()
          .includes(key.key.trim().toLocaleLowerCase()),
      )
    ) {
      setBotRes("no response found");
    }
    responses?.map((one) => {
      if (
        e.currentTarget.value
          .toLocaleLowerCase()
          .trim()
          .includes(one.key.trim().toLocaleLowerCase())
      )
        setBotRes(one.value);
      else console.log(one.key, message);
    });
    // if (e?.currentTarget?.value?.toLocaleLowerCase().includes("hi")) {
    //   setBotRes("hello user. You want to greet me");
    // } else if (e?.currentTarget.value.toLocaleLowerCase().includes("hungry")) {
    //   setBotRes("You want to say you need food?. what's your choice");
    // } else setBotRes("Now i have limited capabilites ");
  };
  const handleSubmit = () => {
    if (!message) {
      setErr("Empty Message !!");
      return;
    }
    const newChats: chatsreqres[] = chats?.length
      ? [
          ...chats!,
          {
            id: crypto.randomUUID(),
            req: {
              client: "user",
              time: new Date(),
              message,
            },
            res: {
              message: botRes,
              time: new Date(),
              client: "bot",
            },
          },
        ]
      : [
          {
            id: crypto.randomUUID(),
            req: {
              client: "user",
              time: new Date(),
              message,
            },
            res: {
              message: botRes,
              time: new Date(),
              client: "bot",
            },
          },
        ];
    const query = localStorage.getItem(localstorageApi);
    if (!query) redirect("/");
    const data: Data = JSON.parse(query);
    botRes && setChats(newChats);

    const newData: Data = {
      ...data,
      messageStrans: {
        ...data.messageStrans,
        messages: newChats,
      },
    };

    localStorage.setItem(localstorageApi, JSON.stringify(newData));
    setMessage("");
  };

  return (
    <form
      className="scroll-auto relative  flex justify-center gap-5 my-4 mx-auto "
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <Link href={"/message-trans/req-res"}>
        <BiPlus size={30} className="mt-2 border rounded-full" />
      </Link>{" "}
      <input
        name=""
        id=""
        className=" border rounded-2xl w-8/12  outline-none p-2"
        placeholder="Message here ....."
        value={message ?? ""}
        onChange={(e) => {
          setMessage(e.currentTarget.value);
          resSetter(e);
        }}
        ref={scrollToButtom}
      />
      <button>
        {" "}
        <BiSend size={30} fill="purple" className="mb-0 mt-2 cursor-pointer" />
      </button>{" "}
      {err && <ErrorMessage setErr={setErr} err={err} />}
    </form>
  );
};

export default ChatField;
