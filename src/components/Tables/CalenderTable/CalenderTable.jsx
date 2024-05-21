import { useState } from "react";

const CalenderTable = ({ rows }) => {
  const [showHoliday, setShowHoliday] = useState(false);
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <section className="flex flex-col overflow-hidden">
      <div className="overflow-x-auto scrollbarnone sm:-mx-5 lg:-mx-7">
        <div className="inline-block min-w-full  sm:px-5">
          <div className="overflow-hidden">
            <table className="w-full flex flex-col">
              <thead className="">
                <tr className="w-full pt-3 h-[35px] rounded-[14px] flex items-center justify-between text-lg">
                  {dayNames.map((day) => {
                    return (
                      <div
                        key={day}
                        className="flex w-[14%] justify-center items-center gap-[4px] cursor-pointer "
                      >
                        <th
                          className={` h-fit text-customtext font-bold text-center`}
                        >
                          {day}
                        </th>
                      </div>
                    );
                  })}
                </tr>
              </thead>
              <tbody className="flex flex-col gap-[10px] w-full overflow-y-auto SCROLLBAR h-tbodyheight py-1 pr-2">
                {rows.map((row, rowIndex) => {
                  return (
                    <tr
                      key={rowIndex}
                      className="w-full p-3 h-[112px] flex  items-center justify-between "
                    >
                      {row.map((day, index) => {
                        return (
                          <>
                            <td
                              className="w-36 h-full text-custom lg:text-custom text-center font-normal hover:cursor-pointer"
                              onClick={() =>
                                setShowHoliday((prevValue) => !prevValue)
                              }
                            >
                              <div className="flex flex-col items-start h-full px-1 py-2 border-[1px]  rounded-[14px] shadow-md">
                                <span className=" px-3 text-xl">{day}</span>
                                <span className=" w-28 h-7 ml-0.5 rounded-[14px] bg-[#EEEBFF] text-[#1B0F62]">
                                  Republic Day
                                </span>
                              </div>
                            </td>
                            {showHoliday && (
                              <div className=" bg-white flex flex-col gap-2 justify-center p-2 z-10 absolute mt-40 ml-5 w-36 h-28 border-[1px] shadow-md rounded-[14px] ">
                                <span className="flex justify-center w-28 h-7 ml-0.5 rounded-[14px] bg-[#EEEBFF] text-[#1B0F62]">
                                  Republic Day
                                </span>
                                <span className="flex justify-center w-28 h-7 ml-0.5 rounded-[14px] bg-[#DAF6F3] text-[#173B1B]">
                                  Rama Navami
                                </span>
                                <span className="flex justify-center w-28 h-7 ml-0.5 rounded-[14px] bg-[#FFE8D1] text-[#2D0C00]">
                                  Gudi Padwa
                                </span>
                              </div>
                            )}
                          </>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalenderTable;
