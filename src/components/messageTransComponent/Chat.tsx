"use client";
import React from "react";
import { chatsreqres, Data, localstorageApi, responsekey } from "../data";
import UserMessage from "./UserMessage";
import BotMessage from "./BotMessage";
import ChatField from "./ChatField";
import { redirect } from "next/navigation";

const Chat = () => {
  const [chats, setChats] = React.useState<chatsreqres[] | undefined>([
    {
      id: crypto.randomUUID(),
      req: {
        message: "hi there",
        time: new Date(),
      },
      res: {
        message: "hello user,How can i help you ?",
        time: new Date(),
      },
    },
    {
      id: crypto.randomUUID(),
      req: {
        message: "hi there",
        time: new Date(),
      },
      res: {
        message: "hello user,How can i help you ?",
        time: new Date(),
      },
    },
  ]);
  const [responses, setResponses] = React.useState<responsekey[] | undefined>();
  const [count, setCount] = React.useState<number>(0);
  const scrollToButtom = React.useRef<HTMLInputElement | null>(null);
  React.useEffect(() => {
    const query = localStorage.getItem(localstorageApi);
    if (!query) redirect("/");
    const data: Data = JSON.parse(query);
    setResponses(data.messageStrans?.responses);
    setChats(data.messageStrans?.messages);
    if (chats?.length && scrollToButtom.current) {
      scrollToButtom.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [chats?.length]);

  return (
    <div>
      {chats?.map((chat) => (
        <div key={chat.id} className="">
          {
            <>
              {chat.req.message && <UserMessage message={chat.req} />}

              {chat.res?.message && <BotMessage message={chat.res} />}
            </>
          }
        </div>
      ))}
      <ChatField
        scrollToButtom={scrollToButtom}
        chats={chats}
        setChats={setChats}
      />
    </div>
  );
};

export default Chat;
