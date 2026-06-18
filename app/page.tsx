import Link from "next/link";
import { CgCopyright } from "react-icons/cg";

export default function Home() {
  return (
    <div className="">
      <div className="w-45/48">
        <p className="title">Amos Idea app</p>
        <p className=" w-10/12 my-2 mx-auto">
          Welcome to this project stack created by
          <strong title="Sulaiman Yaladu Yau"> SUHAYA</strong>
          By following an advice by Sanmi amos i.e AmosPikin the Tech Prophet
        </p>
      </div>
      <div>
        <h2 className="title">Explore</h2>
        <Link href={"/fake-atm/"}>
          {" "}
          <div className="w-8/12 my-3 mx-auto border text-center p-2 bg-amber-700 text-white font-bold rounded-2xl hover:bg-amber-800 hover:p-3">
            Fake atm simulation
            <p className="font-light">
              a partial clone of monie point micro finance bank
            </p>
          </div>
        </Link>
        <Link href={"/daily-wahala/"}>
          {" "}
          <div className="w-8/12 my-3 mx-auto border text-center p-2 bg-violet-700 text-white font-bold rounded-2xl hover:bg-violet-800 hover:p-3">
            Daily Wahala Tracker
            <p className="font-light">
              An app that records problems encountered On this day, Provide
              conclution, save the records and give user ability to print it
            </p>
          </div>
        </Link>
        <Link href={"/decision-maker/"}>
          {" "}
          <div className="w-8/12 my-3 mx-auto border text-center p-2 bg-green-700 text-white font-bold rounded-2xl hover:bg-green-800 hover:p-3">
            Decision maker
            <p className="font-light">
              An app that give user to add some routines and rank them based on
              some parameters in which letter user'll just mention the works and
              the app will decide which one to do based on pre-set prameters
            </p>
          </div>
        </Link>{" "}
        <Link href={"/message-trans/"}>
          {" "}
          <div className="w-8/12 my-3 mx-auto border text-center p-2 bg-pink-500 text-white font-bold rounded-2xl hover:bg-pink-800 hover:p-3">
            Message Translator
            <p className="font-light">
              An app that seems to be like a chat bot which contains predefined
              keywords that it display a certain message in which user can add a
              keyword and a message that he need to be associated with that
              keyword
            </p>
          </div>
        </Link>{" "}
      </div>

      <footer>
        <h3 className="title">
          <CgCopyright className="inline " size={30} />{" "}
          <strong title="Sulaiman Haladu Yau">SUHAYA</strong>
        </h3>
      </footer>
    </div>
  );
}
