import { chatsreqres } from "@/src/components/data";
import BotMessage from "@/src/components/messageTransComponent/BotMessage";
import UserMessage from "@/src/components/messageTransComponent/UserMessage";
import React from "react";

const page = () => {
  const data: chatsreqres[] = [
    {
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
      req: {
        message: "hi there",
        time: new Date(),
      },
      res: {
        message: "hello user,How can i help you ?",
        time: new Date(),
      },
    },
  ];
  data.forEach((dat) => {
    if (!dat.res) return;
    dat.req.client = "user";
    dat.res.client = "bot";
    dat.id = crypto.randomUUID();
  });
  return (
    <div>
      {data.map((e) => (
        <div key={e.id}>
          <UserMessage message={e.req} />
          <BotMessage message={e.res} />
        </div>
      ))}
    </div>
  );
};

export default page;
