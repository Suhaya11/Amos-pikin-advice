"use client";
import { BsFillExclamationCircleFill } from "react-icons/bs";

const AddAction = () => {
  const grades: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  for (let i = 11; i < 101; i++) grades.push(i);

  return (
    <div className="fixed top-0 w-screen  flex justify-between h-screen bg-emerald-700 left-0 opacity-100 ">
      <form
        action=""
        className=" max-md:w-9/12 mx-auto my-30 h-70 bg-amber-100 p-2 flex flex-row flex-wrap   rounded-2xl border-amber-50 border-6 drop-shadow-purple-500"
      >
        <div className="flex justify-around w-full  h-fit">
          <label htmlFor="action">What to do:</label>{" "}
          <input
            type="text"
            name="action"
            id="action"
            placeholder="Name your action"
            className="border p-2 bg-white outline-0 rounded-2xl w-8/12 border-white h-10"
          />
        </div>
        <div className="w-full h-fit relative">
          <label htmlFor="reason">Why to do: </label>
          <BsFillExclamationCircleFill
            className="absolute top-2 right-0 w-4"
            title="Adding reason help with clear explanation when decision is made"
          />
          <textarea
            placeholder="what's your reason"
            name="reason"
            className="p-2 h-10 resize-none border bg-white outline-0 rounded-2xl w-8/12 border-white"
            id="reason"
          ></textarea>
        </div>
        <div className="w-full">
          <label htmlFor="grade">Grade: </label>
          <select
            name="grade"
            id="grade"
            className="inline h-10 border bg-white outline-0 rounded-2xl  px-3 border-white"
          >
            {grades.map((grade) => (
              <option value={grade} key={grade}>
                {grade}
              </option>
            ))}
          </select>
        </div>

        <div className="w-full flex justify-end ">
          <button
            type="submit"
            className="rounded-xl border px-3 h-fit py-1 bg-emerald-500 hover:bg-emerald-700 text-white font-bold transition-opacity "
          >
            Add action
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddAction;
