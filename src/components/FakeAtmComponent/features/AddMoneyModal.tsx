import { BiClipboard } from "react-icons/bi";

type myProps = {
  aza: number;
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};
const AddMoneyModal = ({ aza, setOpenModal }: myProps) => {
  return (
    <div
      onClick={() => setOpenModal(false)}
      className="w-full cursor-default h-full absolute  top-0 left-0 z-20"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="rounded-2xl mt-20 border cursor-default bg-white z-10 w-49 text-black animate p-2 absolute"
      >
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
            onClick={() => {
              navigator.clipboard.writeText(aza.toString());
              setOpenModal(false);
            }}
          />
        </p>
      </div>
    </div>
  );
};

export default AddMoneyModal;
