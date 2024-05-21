//THIS COMPONENT WAS CREATED BY HAIDER

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";

//PROPS COMING FROM STUDENTLIST PAGE
export const StudentListTable = ({ studentListColumn, studentListDetails }) => {
  const navigate = useNavigate();

  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState("");
  const [sortedStudentListDetail, setSortedStudentListDetails] = useState([]);

  // Update sortedAttendanceRegDetails when attendanceRegdetails, sortBy, or sortOrder changes
  useEffect(() => {
    if (studentListDetails.length === 0) {
      setSortedStudentListDetails([]);
    } else {
      // Copy studentListDetails to sort
      const sortedData = studentListDetails.slice().sort((a, b) => {
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
      setSortedStudentListDetails(sortedData);
    }
  }, [studentListDetails, sortBy, sortOrder]);

  // Function to handle sorting when clicking on table headers
  const handleSort = (key) => {
    //  console.log("sortkey", key);
    //  console.log("order", sortOrder);
    if (sortBy === key) {
      //  setSortOrder(sortOrder === "asc" ? "asc" : "desc");
    } else {
      setSortBy(key);
      // setSortOrder("asc");
    }
  };

  function getDetails(studentListDetail) {
    navigate(`studentDetails/${studentListDetail.StudentId}`);
  }

  return (
    <table className="flex flex-col gap-[10px] w-full h-full rounded-[20px] p-3 table-inner-shadow">
      <thead className=" pr-2">
        <tr className="w-full h-[60px] rounded-[14px] flex border-[1px] items-center justify-between bg-blue-100 p-3 shadow-md">
          <div className="flex w-56 justify-center items-center gap-[4px] cursor-pointer ">
            <th
              className={` h-fit text-customtext  text-center font-[580]`}
              onClick={() => {
                setSortOrder(sortOrder === "asc" ? "desc" : "asc");
                handleSort("FirstName");
              }}
            >
              Student Name
            </th>
            <div>
              <span
                className="cursor-pointer"
                onClick={() => {
                  setSortOrder("asc");
                  handleSort("FirstName");
                }}
              >
                <MdOutlineKeyboardArrowUp />
              </span>
              <span
                className="cursor-pointer"
                onClick={() => {
                  setSortOrder("desc");

                  handleSort("FirstName");
                }}
              >
                <MdOutlineKeyboardArrowDown />
              </span>
            </div>
          </div>

          {/* <th className="w-56 h-fit   text-center font-bold">
            Student Name
          </th> */}
          <div className="flex w-36 justify-center items-center gap-[4px] cursor-pointer ">
            <th
              className={` h-fit text-customtext  text-center font-[580]`}
              onClick={() => {
                setSortOrder(sortOrder === "asc" ? "desc" : "asc");
                handleSort("RollNo");
              }}
            >
              Roll No
            </th>
            <div>
              <span
                className="cursor-pointer"
                onClick={() => {
                  setSortOrder("asc");
                  handleSort("RollNo");
                }}
              >
                <MdOutlineKeyboardArrowUp />
              </span>
              <span
                className="cursor-pointer"
                onClick={() => {
                  setSortOrder("desc");

                  handleSort("RollNo");
                }}
              >
                <MdOutlineKeyboardArrowDown />
              </span>
            </div>
          </div>
          {/* <th className="w-36 h-fit  lg:text-lg text-center font-bold">
            Roll No
          </th> */}
          <div className="flex w-36 justify-center items-center gap-[4px] cursor-pointer ">
            <th
              className={` h-fit text-customtext  text-center font-[580]`}
              onClick={() => {
                setSortOrder(sortOrder === "asc" ? "desc" : "asc");
                handleSort("Gender");
              }}
            >
              Gender
            </th>
            <div>
              <span
                className="cursor-pointer"
                onClick={() => {
                  setSortOrder("asc");
                  handleSort("Gender");
                }}
              >
                <MdOutlineKeyboardArrowUp />
              </span>
              <span
                className="cursor-pointer"
                onClick={() => {
                  setSortOrder("desc");

                  handleSort("Gender");
                }}
              >
                <MdOutlineKeyboardArrowDown />
              </span>
            </div>
          </div>
          {/* <th className="w-36 h-fit  lg:text-lg text-center font-bold">
            Gender
          </th> */}
          <div className="flex w-36 justify-center items-center gap-[4px] cursor-pointer ">
            <th
              className={` h-fit text-custom  text-center font-[580]`}
              onClick={() => {
                setSortOrder(sortOrder === "asc" ? "desc" : "asc");
                handleSort("DOB");
              }}
            >
              DOB
            </th>
            <div>
              <span
                className="cursor-pointer"
                onClick={() => {
                  setSortOrder("asc");
                  handleSort("DOB");
                }}
              >
                <MdOutlineKeyboardArrowUp />
              </span>
              <span
                className="cursor-pointer"
                onClick={() => {
                  setSortOrder("desc");

                  handleSort("DOB");
                }}
              >
                <MdOutlineKeyboardArrowDown />
              </span>
            </div>
          </div>
          {/* <th className="w-36 h-fit  lg:text-lg text-center font-bold">
            DOB
          </th> */}
          <div className="flex w-36 justify-center items-center gap-[4px] cursor-pointer ">
            <th
              className={` h-fit text-customtext  text-center font-[580]`}
              onClick={() => {
                setSortOrder(sortOrder === "asc" ? "desc" : "asc");
                handleSort("StudentId");
              }}
            >
              Student ID
            </th>
            <div>
              <span
                className="cursor-pointer"
                onClick={() => {
                  setSortOrder("asc");
                  handleSort("StudentId");
                }}
              >
                <MdOutlineKeyboardArrowUp />
              </span>
              <span
                className="cursor-pointer"
                onClick={() => {
                  setSortOrder("desc");

                  handleSort("StudentId");
                }}
              >
                <MdOutlineKeyboardArrowDown />
              </span>
            </div>
          </div>
          {/* <th className="w-36 h-fit  lg:text-lg text-center font-bold">
            Student ID
          </th> */}
        </tr>
      </thead>

      <tbody className="flex flex-col gap-[10px] w-full overflow-y-scroll table-scrollbar h-tbodyheight py-1 pr-2">
        {sortedStudentListDetail.map((studentListDetail, index) => (
          <tr
            key={index}
            className="w-full h-[52px] rounded-[14px] flex border-[1px] items-center justify-between p-3 shadow-md bg-white cursor-pointer"
            onClick={() => getDetails(studentListDetail)}
          >
            <td className="w-56 h-fit   text-center text-customtext flex items-center gap-2">
              <img
                className="h-10 w-10 rounded-full"
                src="https://img.icons8.com/officel/16/bolivian-girl.png"
                alt="bolivian-girl"
              />
              {`${studentListDetail.FirstName} ${studentListDetail.MiddleName} ${studentListDetail.LastName}`}
            </td>
            <td className="w-36 h-fit   text-center text-customtext">
              {studentListDetail.RollNo}
            </td>
            <td className="w-36 h-fit   text-center text-customtext">
              {studentListDetail.Gender}
            </td>
            <td className="w-36 h-fit   text-center text-customtext">
              <input
                type="date"
                readOnly="true"
                name="DOB"
                value={studentListDetail["DOB"]}
              />
            </td>
            <td className="w-36 h-fit   text-center text-customtext">
              {studentListDetail.StudentId}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentListTable;
