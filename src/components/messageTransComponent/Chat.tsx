"use client";
import React from "react";
import { chatsreqres, Data, localstorageApi, responsekey } from "../data";
import UserMessage from "./UserMessage";
import BotMessage from "./BotMessage";
import ChatField from "./ChatField";
import { redirect } from "next/navigation";
import { BiDownArrowAlt } from "react-icons/bi";

const Chat = () => {
  const [chats, setChats] = React.useState<chatsreqres[] | undefined>([
    // {
    //   id: crypto.randomUUID(),
    //   req: {
    //     message: "hi there",
    //     time: new Date(),
    //   },
    //   res: {
    //     message: "hello user,How can i help you ?",
    //     time: new Date(),
    //   },
    // },
    // {
    //   id: crypto.randomUUID(),
    //   req: {
    //     message: "hi there",
    //     time: new Date(),
    //   },
    //   res: {
    //     message: "hello user,How can i help you ?",
    //     time: new Date(),
    //   },
    // },
  ]);

  const scrollToButtom = React.useRef<HTMLInputElement | null>(null);
  const coutainerRef = React.useRef<HTMLDivElement | null>(null);
  React.useEffect(() => {
    const query = localStorage.getItem(localstorageApi);
    if (!query) redirect("/");
    const data: Data = JSON.parse(query);

    setChats(data.messageStrans?.messages);
    if (chats?.length && scrollToButtom.current) {
      scrollToButtom.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [chats?.length]);

  return (
    <div ref={coutainerRef}>
      {" "}
      {scrollToButtom.current?.scrollHeight! > 4 && (
        <div className="sticky top-100 flex justify-center">
          <BiDownArrowAlt
            size={40}
            onClick={() => {
              scrollToButtom.current?.scrollIntoView({
                behavior: "smooth",
                block: "center",
              });
            }}
          />
        </div>
      )}
      <>
        {" "}
        {chats?.length ? (
          <>
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
          </>
        ) : (
          <>
            <div className="my-50 mx-auto">
              <h1 className="text-center">No Conversations</h1>
            </div>
          </>
        )}
      </>
      <ChatField
        scrollToButtom={scrollToButtom}
        chats={chats}
        setChats={setChats}
      />
    </div>
  );
};

export default Chat;
