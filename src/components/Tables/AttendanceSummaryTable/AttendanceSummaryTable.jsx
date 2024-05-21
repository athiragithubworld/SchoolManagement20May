//THIS COMPONENT WAS CREATED BY HAIDER

import React, { useState, useEffect } from "react";

//PROPS COMING FROM ATTENDANCESUMMARY PAGE
export const AttendanceSummaryTable = ({
  attendanceSummaryColumn,
  attendanceSummaryDetails,
}) => {
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState("");
  const [sortedAttendanceSummary, setSortedAttendanceSummary] = useState([]);

  // Update sortedAttendanceRegDetails when attendanceRegdetails, sortBy, or sortOrder changes
  useEffect(() => {
    if (attendanceSummaryDetails.length === 0) {
      setSortedAttendanceSummary([]);
    } else {
      // Copy attendanceSummaryDetails to sort
      const sortedData = attendanceSummaryDetails.slice().sort((a, b) => {
        const aValue = a[sortBy];
        const bValue = b[sortBy];

        // Determine sorting order based on sortOrder
        if (sortOrder === "asc") {
          return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
        } else {
          // console.log("des");
          return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
        }
      });

      //  console.log("sortdata", sortedData);
      setSortedAttendanceSummary(sortedData);
    }
  }, [attendanceSummaryDetails, sortBy, sortOrder]);

  // Function to handle sorting when clicking on table headers
  const handleSort = (key) => {
    if (sortBy === key) {
      //  setSortOrder(sortOrder === "asc" ? "asc" : "desc");
    } else {
      setSortBy(key);
      // setSortOrder("asc");
    }
  };

  return (
    <table className="flex flex-col gap-[10px] w-full h-full rounded-[20px] p-3 table-inner-shadow">
      <thead className=" pr-2">
        <tr className="w-full h-[60px] rounded-[14px] flex border-[1px] items-center justify-between bg-blue-100 p-4 shadow-md">
          {attendanceSummaryColumn.map(
            ({ label, index, value, downicon, upicon }) => (
              <div
                key={label}
                className="flex w-40 justify-center items-center gap-[4px] cursor-pointer "
              >
                <th
                  className={` h-fit text-customtext font-[580] text-center`}
                  onClick={() => {
                    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
                    handleSort(value);
                  }}
                >
                  {label}
                </th>
                <div>
                  <span
                    className="cursor-pointer"
                    onClick={() => {
                      setSortOrder("asc");
                      handleSort(value);
                    }}
                  >
                    {upicon}
                  </span>
                  <span
                    className="cursor-pointer"
                    onClick={() => {
                      setSortOrder("desc");

                      handleSort(value);
                    }}
                  >
                    {downicon}
                  </span>
                </div>
              </div>
            )
          )}
        </tr>
      </thead>

      <tbody className="flex flex-col gap-[10px] w-full overflow-y-scroll SCROLLBAR h-tbodyheight  py-1 pr-2">
        {sortedAttendanceSummary.length !== 0 &&
          Array.isArray(sortedAttendanceSummary) &&
          sortedAttendanceSummary.map((attendanceSummaryDetail, index) => (
            <tr
              key={index}
              className="w-full h-[52px] rounded-[14px] flex border-[1px] items-center justify-between p-4 shadow-md bg-white"
            >
              <td className="w-40 h-fit  text-center text-customtext ">
                {attendanceSummaryDetail.Sno}
              </td>
              <td className="w-40 h-fit  text-center text-customtext ">
                {attendanceSummaryDetail.Class}
              </td>
              <td className="w-40 h-fit  text-center text-customtext ">
                {attendanceSummaryDetail.Section}
              </td>
              <td className="w-40 h-fit  text-center text-customtext">
                {attendanceSummaryDetail.Present}
              </td>
              <td className="w-40 h-fit  text-center text-customtext ">
                {attendanceSummaryDetail.Absent}
              </td>
              <td className="w-40 h-fit  text-center text-customtext">
                {attendanceSummaryDetail.PresentPercent}
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default AttendanceSummaryTable;
