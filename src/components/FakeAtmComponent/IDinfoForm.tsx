"use client";
import React from "react";
import { idDetails } from "../data";
type myProps = {
  ninNumber: string;
  checkForNin(
    whattoCheck: "nin" | "bvn",
    ninDetails: idDetails,
    secQs: {
      q1: { q: string; a: string | number };
      q2: { q: string; a: string | number };
    },
  ): void;
};
const IDinfoForm = ({ checkForNin, ninNumber }: myProps) => {
  //personal informations
  const [fname, setFname] = React.useState<string>("");
  const [lname, setLname] = React.useState<string>("");
  const [sname, setSname] = React.useState<string>("");
  const [dob, setDob] = React.useState<Date>(new Date());
  const [gender, setGender] = React.useState<string>("");
  //address
  const [state, setState] = React.useState<string>("");
  const [lga, setLga] = React.useState<string>("");
  const [town, setTown] = React.useState<string>("");
  //security Questions
  const [q1, setQ1] = React.useState<string>("");
  const [a1, setA1] = React.useState<string>("");
  const [q2, setQ2] = React.useState<string>("");
  const [a2, setA2] = React.useState<string>("");

  return (
    <div className="border bg-white p-2 my-4 mx-auto rounded-md">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (fname && lname && gender && state && lga && town && dob) {
            checkForNin(
              "nin",
              {
                vid: { type: "nin", value: ninNumber },
                personalInfo: {
                  fName: fname,
                  lname,
                  sname,
                  dob: dob.toString(),
                  gender,
                },
                address: { lga, state, town },
              },
              {
                q1: {
                  q: q1,
                  a: a1,
                },
                q2: {
                  q: q2,
                  a: a2,
                },
              },
            );
          } else
            console.log(
              "(fname && lname && gender && state && lga && town && dob)",
              fname,
              lname,
              gender,
              state,
              lga,
              town,
              dob,
            );
        }}
      >
        <h3 className="title">Personal information</h3>
        <div className="flex my-0 mx-auto justify-center gap-4 flex-wrap flex-row">
          <div className="">
            <label htmlFor="fname">First Name:</label>{" "}
            <input
              value={fname}
              onChange={(e) => {
                setFname(e.currentTarget.value);
              }}
              type="text"
              name="fname"
              id="fname"
              className="idInfoInput"
              placeholder="e.g Sulaiman"
              required
            />
          </div>{" "}
          <div>
            <label htmlFor="lname">Last name:</label>{" "}
            <input
              value={lname}
              onChange={(e) => setLname(e.currentTarget.value)}
              type="text"
              name="lname"
              id="lname"
              className="idInfoInput"
              placeholder="e.g Haladu"
              required
            />
          </div>{" "}
          <div>
            <label htmlFor="sname">Surname:</label>{" "}
            <input
              value={sname}
              onChange={(e) => setSname(e.currentTarget.value)}
              type="text"
              name="sname"
              id="sname"
              className="idInfoInput"
              placeholder="e.g Yau"
            />
          </div>{" "}
        </div>
        <div className="my-2 flex  justify-center gap-4 flex-wrap flex-row">
          <div>
            <label htmlFor="dob">Date of Birth:</label>{" "}
            <input
              onChange={(e) =>
                e.currentTarget.valueAsDate &&
                setDob(e.currentTarget.valueAsDate)
              }
              max="2009-01-01"
              type="date"
              name="dob
          "
              id="dob"
              className="idInfoInputNoWidth"
              required
            />
          </div>
          <div>
            <label htmlFor="gender">Gender:</label>{" "}
            <select
              value={gender}
              onChange={(w) => {
                setGender(w.currentTarget.value);
              }}
              name="gender"
              id="gender"
              className="idInfoInputNoWidth"
            >
              <option value="" typeof="hidden"></option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>{" "}
        </div>{" "}
        <h3 className="title">Address</h3>
        <div className="flex justify-center gap-4 flex-wrap flex-row">
          <div>
            <label htmlFor="state">State:</label>{" "}
            <input
              value={state}
              onChange={(e) => setState(e.currentTarget.value)}
              type="text"
              name="state"
              id="state"
              className="idInfoInput"
              placeholder="e.g Kano"
              required
            />
          </div>
          <div>
            <label htmlFor="lga">LGA:</label>{" "}
            <input
              value={lga}
              onChange={(e) => setLga(e.currentTarget.value)}
              type="text"
              name="lga"
              id="lga"
              className="idInfoInput"
              placeholder="e.g Kibiya"
              required
            />
          </div>{" "}
          <div>
            <label htmlFor="town">City/Town:</label>{" "}
            <input
              value={town}
              onChange={(e) => setTown(e.currentTarget.value)}
              type="text"
              name="town"
              id="town"
              className="idInfoInput"
              placeholder="e.g Kadigawa"
              required
            />
          </div>{" "}
        </div>{" "}
        <h3 className="title">Security Questions</h3>
        <div className="flex justify-center flex-wrap flex-row gap-4">
          <div className="my-2">
            <label htmlFor="sq1">Question 1:</label>{" "}
            <select
              value={q1}
              onChange={(e) => setQ1(e.currentTarget.value)}
              name="sq1"
              id="sq1"
              className="idInfoInputNoWidth"
            >
              <option value="childhoodName">Whats your childHood Name</option>
              <option value="primarySchoolName">
                What's the name of your primary school
              </option>
              <option value="childhoodBestFriend">
                Who's your childhood best friend
              </option>
              <option value="FistGirl/BoyFriend">Who you firstly Love</option>
            </select>{" "}
            <div className="my-2 flex gap-4">
              <label htmlFor="answer2">Answer 2</label>
              <input
                value={a1}
                onChange={(e) => setA1(e.currentTarget.value)}
                type="text"
                className="idInfoInputNoWidth"
                id=" answer2"
                placeholder="Answer 1"
              />
            </div>
          </div>{" "}
          <div>
            <label htmlFor="sq2">Question 2:</label>{" "}
            <select
              value={q2}
              onChange={(e) => setQ2(e.currentTarget.value)}
              name="sq2"
              id="sq2"
              className="idInfoInputNoWidth"
            >
              <option value="childhoodName">Whats your childHood Name</option>
              <option value="primarySchoolName">
                What's the name of your primary school
              </option>
              <option value="childhoodBestFriend">
                Who's your childhood best friend
              </option>
              <option value="FistGirl/BoyFriend">Who you firstly Love</option>
            </select>
            ;
            <div className="my-2 flex gap-4">
              <label htmlFor="answer2">Answer 2</label>
              <input
                type="text"
                className="idInfoInputNoWidth"
                id=" answer2"
                placeholder="Answer 2"
                value={a2}
                onChange={(e) => setA2(e.currentTarget.value)}
              />
            </div>
          </div>
        </div>
        <div className="w-full flex justify-end">
          <input
            type="submit"
            value="Proceed"
            className="border p-2 px-6 font-bold bg-blue-600 text-white hover:bg-blue-800 rounded-md"
          />
        </div>
      </form>
    </div>
  );
};

export default IDinfoForm;
