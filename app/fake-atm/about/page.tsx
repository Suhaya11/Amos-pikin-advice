import React from "react";

const About = () => {
  return (
    <div>
      <h2 className="title">Fake Atm Simulation</h2>
      <p>
        This is the most interesting and time consuming part of this great
        project of mine
      </p>
      <p>
        It's a partial clone of a popular digital bank here in Nigeria i.e{" "}
        <strong>Monipoint micro finance bank</strong> although it's just some
        part of it
      </p>
      <p className="title">Features</p>
      <ul className="w-10/12 my-3 mx-auto ">
        <li className="list-disc my-4">Sign up</li>
        <li className="list-disc my-4">Login</li>
        <li className="list-disc my-4">Transfer</li>
        <li className="list-disc my-4">Airtime</li>
        <li className="list-disc my-4">Mobile Data</li>
        <li className="list-disc my-4">Referral </li>{" "}
        <li className="list-disc my-4">Redem referrals bonus </li>
        <li className="list-disc my-4">Cashback</li>
        <li className="list-disc my-4">Buy airtime/data with cashback</li>
      </ul>
      <h2 className="title">How it works</h2>
      <ul className="w-10/12 my-3 mx-auto ">
        <li className="list-disc my-4">
          User need to signup with a unique phone number and can provide
          someone's phone number a referral code to give him 500 N which will
          take him to ID validation page
        </li>
        <li className="list-disc my-4">
          User needs to validate their 11 digit unique Id ( in Nigeria{" "}
          <span title="National Identification Number">NIN</span> )
        </li>
        <li className="list-disc my-4">
          From there user can recieve transfers using his phone number without
          leading zero as account number
        </li>
        <li className="list-disc my-4">
          from there user can logout and login with just phone Number and
          passcode{" "}
        </li>
      </ul>
      <p className="title">Alhamdulillah</p>
    </div>
  );
};

export default About;
