import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <h2 className="title">message translation</h2>
      <p>
        This is a mini chat bot that gives feedback base on some keywords in
        user input
      </p>
      <h4 className="title">How it works</h4>
      <ul className="w-10/12 my-3 mx-auto ">
        <li className="list-disc my-4">
          User will add a keyword and message he need from that keyword at{" "}
          <Link href={"/message-trans/req-res/"}> Here</Link>
        </li>
        <li className="list-disc my-4">
          In chat when user type a message The bot scans the user input and find
          a matching keyword and return a message base on that keyword
        </li>
        <li className="list-disc my-4">
          If user input does'nt countain any matching keyword then bot let the
          user know{" "}
        </li>
        <li className="list-disc my-4">
          If user try to add duplicate keyword the app log error message oto let
          the user know{" "}
        </li>
        <li className="list-disc my-4">
          {" "}
          <strong>Note: </strong> since this is just a basic chat boat it's not
          capable of thinking and if the user input contain multiple keywords
          then the first matching keyword is used
        </li>
      </ul>
    </div>
  );
};

export default page;
