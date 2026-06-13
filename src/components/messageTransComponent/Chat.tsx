"use client";
import React from "react";
import { chats, chatsreqres } from "../data";
import UserMessage from "./UserMessage";
import BotMessage from "./BotMessage";
import ChatField from "./ChatField";

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
  const [hasScrolled, setHasScrolled] = React.useState(false);
  const scrollToButtom = React.useRef<HTMLInputElement | null>(null);
  React.useEffect(() => {
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
              <UserMessage message={chat.req} />

              <BotMessage message={chat.res} />
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
