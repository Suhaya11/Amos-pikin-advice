import React from "react";
import Image from "next/image";
import myPic from "@/public/aboutme.jpg";
import Link from "next/link";
import {
  BiLogoFacebook,
  BiLogoGmail,
  BiLogoTwitter,
  BiLogoWhatsapp,
} from "react-icons/bi";
const About = () => {
  return (
    <div className="w-10/12 my-4 mx-auto">
      <h2 className="title">About Me</h2>
      <div className="justify-center flex my-3">
        <Image src={myPic} alt="Picture of SUHAYA" loading="lazy" width={200} />
      </div>
      <p>My name is Sulaiman Haladu Yau {"SUHAYA"}</p>
      <p>
        I'm a final year student (as of June 2026) Studying B.Sc.Ed Chemistry at
        ADUSTECH
      </p>
      <p>I'm from Kano State of Nigeria</p>
      <p>
        I'm learning web development for 3 years although sometimes I'm
        experiencing cutt-off in my learning since I'm chemistry student which
        means if get back to school my web development learning will have to
        stop becouse I'll have to focus on my degree program.
      </p>
      <p>
        Over these years I've learned so many thing related to computer E.G{" "}
      </p>
      <ol>
        <li className="AboutLi">
          Web development languages (e.g HTML,CSS ,JAVASCRIPT,TYPESCRIPT)
        </li>
        <li className="AboutLi">
          Web Development Technologies (E.g Tailwind css, Bootstrap,ReactJS/TS,
          NextJs/Ts Git & github)
        </li>
        <li className="AboutLi">Basic Computer operations</li>
        <li className="AboutLi">Microsoft office suite (Some )</li>
        <li className="AboutLi">Basic computer networking</li>
        <li className="AboutLi">
          Master modern communications (e.g Facebook, Gmail,Whatsapp,and many
          more )
        </li>
        <li className="AboutLi">
          Basic of Ethical hacking (e.g WPA,WPA2 wifi hacking,Basic SQL
          injection with burpsuite,basic network sniffings : bettercap,
          wireshark, burpsuite , CIA Triad, AAA, Phishing attacks , NMap , john
          and many Hacking tools since I'm running Kali linux on USB as daily
          driver){" "}
        </li>
        <li className="AboutLi">
          Operating systems ( Windows and Linix) I've used windows 10 for my
          first one week i then switched to Linux Mint then back to windows 10
          for a while then to Manjaro Linux os then back to windows and finally
          now I'm using Kali linux on USB as daily driver and windows 10 on my
          Hardisk drive for some uses like Microsoft suite for final year school
          project{" "}
        </li>
      </ol>
      <p>
        Links to my Project are there in{" "}
        <a
          className="text-blue-800 underline"
          href="https://suhayap.netlify.app"
        >
          {" "}
          My personal protfolio{" "}
        </a>{" "}
        website.
      </p>
      <h3 className="title">About the project</h3>
      <p>
        This project is built with Next.Ts wit tailwind css and I named it
        AmosIdeaApp becouse I get the idea of building it from a nigerian
        developer Sanmi Amos i.e <a href="#">Amos Pikin</a>{" "}
      </p>
      <p>The project countain following sections</p>
      <ul className="aboutLinks">
        <li>
          <Link href={"/fake-atm/about"}>Fake Atm simulation</Link>{" "}
        </li>
        <li>
          <Link href={"/daily-wahala/about"}> Daily wahala tracker </Link>
        </li>
        <li>
          <Link href={"/decision-maker/about"}>Decision Maker</Link>
        </li>
        <li>
          <Link href={"message-trans/"}>Message Translation</Link>{" "}
        </li>
      </ul>
      <h2 className="title">Finally</h2>
      <p>
        Finally I'm Open to any front-end working oppotunity Remote , physical
        or hybrid.
      </p>
      <p>
        I'm also open to Intenships or open source collaboration oppotunity Paid
        or free{" "}
      </p>
      <p className=" ">Contact me here.</p>
      <ul>
        <li>
          <a href="https://facebook.com/@sulaimanhaladuyau">
            <BiLogoFacebook />
          </a>
        </li>
        <li>
          <a href="mailto:suhaya1082@gmail.com">
            <BiLogoGmail />
          </a>
        </li>
        <li>
          <a href="https://x.com/@sulaimanhaladuyau">
            <BiLogoTwitter />
          </a>
        </li>{" "}
        <li>
          <a href="dial:+2349075898883">
            <BiLogoWhatsapp />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default About;
