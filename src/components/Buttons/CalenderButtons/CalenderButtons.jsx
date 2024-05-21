import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const CalenderButtons = () => {
  return (
    <div className="flex items-center justify-between p-2">
      <div className="flex items-center gap-4">
        <div className="flex items-center">
          <span>
            <FaAngleLeft style={{ fontSize: "20px" }} />
          </span>
          <span className=" w-24 h-14 ml-2 text-5xl font-bold">May</span>
          <span>
            <FaAngleRight style={{ fontSize: "24px" }} />
          </span>
        </div>

        <span className=" w-28 h-14 text-5xl font-bold text-[#B6B6B6]">
          2024
        </span>
      </div>
      <span className=" h-11 font-normal text-4xl">Calender</span>
    </div>
  );
};

export default CalenderButtons;
