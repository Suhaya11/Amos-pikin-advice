"use client";
import React from "react";
import { BiSend, BiUser } from "react-icons/bi";
import { chats, chatsreqres } from "../data";
import ErrorMessage from "../FakeAtmComponent/features/ErrorMessage";
interface myProps {
  scrollToButtom: React.RefObject<HTMLInputElement | null>;
  chats: chatsreqres[] | undefined;
  setChats: React.Dispatch<React.SetStateAction<chatsreqres[] | undefined>>;
}
const ChatField = ({ scrollToButtom, setChats, chats }: myProps) => {
  const [message, setMessage] = React.useState<string>();
  const [botRes, setBotRes] = React.useState<string>();
  const [err, setErr] = React.useState<string>();
  // const [hasScrolled, setHasScrolled] = React.useState(false);
  // const scrollToButtom = React.useRef<HTMLInputElement | null>(null);
  // React.useEffect(() => {
  //   if (hasScrolled && scrollToButtom.current) {
  //     scrollToButtom.current.scrollIntoView({
  //       behavior: "smooth",
  //       block: "center",
  //     });
  //   }
  // }, [hasScrolled]);

  return (
    <form
      className="scroll-auto relative  flex justify-center gap-5 my-4 mx-auto "
      onSubmit={(e) => {
        e.preventDefault();
        if (!message) {
          setErr("Empty Message !!");
          return;
        }
        if (message.includes("yy")) {
          setBotRes("this is what i want");
        } else if (message.toLocaleLowerCase().includes("hungry")) {
          setBotRes("You want to say you need food?. what's your choice");
        } else setBotRes("Now i have limited capabilites ");

        setTimeout(() => {
          setChats([
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
          ]);
        }, 1000);
      }}
    >
      <BiUser size={30} className="mt-2 border rounded-full" />{" "}
      <input
        name=""
        id=""
        className=" border rounded-2xl w-8/12  outline-none p-2"
        placeholder="Message here ....."
        value={message ?? ""}
        onChange={(e) => setMessage(e.currentTarget.value)}
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
