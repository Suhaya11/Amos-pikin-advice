import { BiClipboard } from "react-icons/bi";

type myProps = { aza: number };
const AddMoneyModal = ({ aza }: myProps) => {
  return (
    <div className="rounded-2xl border cursor-default bg-white z-10 w-49 text-black animate p-2 absolute">
      <p className="title">Add money</p>
      <p>
        To add money to your account use your phone number add your account
        number excluding the leading zero{" "}
      </p>
      <p>
        <span className="mr-2  p-1 text-blue-700 underline"> {aza}</span>{" "}
        <BiClipboard
          className="inline-block cursor-pointer "
          title="Copy"
          onClick={() => navigator.clipboard.writeText(aza.toString())}
        />
      </p>
    </div>
  );
};

export default AddMoneyModal;
