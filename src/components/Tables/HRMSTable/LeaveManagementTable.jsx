
//THIS COMPONENT WAS CREATED BY HAIDER


import React, { useEffect } from 'react'
import EmployeeAttendancePopup from '../../Popup/HRMSPopup/EmployeeAttendancePopup';
import Modal from '../../Modal/Modal';
import { useState } from 'react';
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";


export const LeaveManagementTable = ({leaveManagementDetails,setShowEmployeeAttendancePopup}) => {
  const [isAddNew, setISAddNew] = useState(false);
  const closeModal = () => {
    setISAddNew(false);
  };
  const [selectedEmployee, setSelectedEmployee] = useState({});
  

  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState("");
  const [sortedEmployeeLeaveManagement, setSortedEmployeeLeaveManagement] =
    useState([]);

  // Update sortedAttendanceRegDetails when attendanceRegdetails, sortBy, or sortOrder changes
  useEffect(() => {
    if (leaveManagementDetails.length === 0) {
      setSortedEmployeeLeaveManagement([]);
    } else {
      // Copy leaveManagementDetails to sort
      const sortedData = leaveManagementDetails.slice().sort((a, b) => {
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
      setSortedEmployeeLeaveManagement(sortedData);
    }
  }, [leaveManagementDetails, sortBy, sortOrder]);

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

  const showPopup = (leaveManagementDetail) => {
    setISAddNew(true);
    // console.log(leaveManagementDetail);
    setSelectedEmployee(leaveManagementDetail);
  }
  const getStatus = (startingDate) => {
    const today = new Date();
  const [day, month, year] = startingDate.split('-').map(Number); // Split the date string and convert each part to a number
  const appliedDate = new Date(year, month - 1, day); // Create a Date object with the correct format
  const diffTime = today.getTime() - appliedDate.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return `${diffDays} days ago`;
  
  };
  return (
    <>
      <table className="flex flex-col gap-[10px] h-[50%] xl:h-full rounded-3xl p-3 table-inner-shadow w-full xl:w-[75%] ">
        <thead className="pr-2">
          <tr className="w-full h-[74px] rounded-[14px] flex border-[1px] items-center justify-between bg-blue-100 p-3 shadow-md">
            <div className="flex w-28 lg:w-32 justify-center items-center gap-[4px] cursor-pointer ">
              <th
                className={`  h-fit text-xs lg:text-customtext text-center font-[580]`}
                onClick={() => {
                  setSortOrder(sortOrder === "asc" ? "desc" : "asc");
                  handleSort("employeeName");
                }}
              >
                Employee Name
              </th>
              <div>
                <span
                  className="cursor-pointer"
                  onClick={() => {
                    setSortOrder("asc");
                    handleSort("employeeName");
                  }}
                >
                  <MdOutlineKeyboardArrowUp />
                </span>
                <span
                  className="cursor-pointer"
                  onClick={() => {
                    setSortOrder("desc");

                    handleSort("employeeName");
                  }}
                >
                  <MdOutlineKeyboardArrowDown />
                </span>
              </div>
            </div>
            {/* <th className="w-28 lg:w-32 h-fit text-xs lg:text-lg text-center font-bold">
              Employee Name
            </th> */}
            <div className="flex w-20 lg:w-28 justify-center items-center gap-[4px] cursor-pointer ">
              <th
                className={`  h-fit text-xs lg:text-customtext text-center font-[580]`}
                onClick={() => {
                  setSortOrder(sortOrder === "asc" ? "desc" : "asc");
                  handleSort("leaveType");
                }}
              >
                Leave Type
              </th>
              <div>
                <span
                  className="cursor-pointer"
                  onClick={() => {
                    setSortOrder("asc");
                    handleSort("leaveType");
                  }}
                >
                  <MdOutlineKeyboardArrowUp />
                </span>
                <span
                  className="cursor-pointer"
                  onClick={() => {
                    setSortOrder("desc");

                    handleSort("leaveType");
                  }}
                >
                  <MdOutlineKeyboardArrowDown />
                </span>
              </div>
            </div>
            {/* <th className="w-20 lg:w-28 h-fit text-xs lg:text-lg text-center font-bold">
              Leave Type
            </th> */}
            <div className="flex w-20 lg:w-28 justify-center items-center gap-[4px] cursor-pointer ">
              <th
                className={`  h-fit text-xs lg:text-customtext text-center font-[580]`}
                onClick={() => {
                  setSortOrder(sortOrder === "asc" ? "desc" : "asc");
                  handleSort("startingDate");
                }}
              >
                Leave Date
              </th>
              <div>
                <span
                  className="cursor-pointer"
                  onClick={() => {
                    setSortOrder("asc");
                    handleSort("startingDate");
                  }}
                >
                  <MdOutlineKeyboardArrowUp />
                </span>
                <span
                  className="cursor-pointer"
                  onClick={() => {
                    setSortOrder("desc");

                    handleSort("startingDate");
                  }}
                >
                  <MdOutlineKeyboardArrowDown />
                </span>
              </div>
            </div>
            {/* <th className="w-20 lg:w-28 h-fit text-xs lg:text-lg text-center font-bold">
              Leave Date
            </th> */}
            <div className="flex w-20 lg:w-28 justify-center items-center gap-[4px] cursor-pointer ">
              <th
                className={`  h-fit text-xs lg:text-customtext text-center font-[580]`}
                onClick={() => {
                  setSortOrder(sortOrder === "asc" ? "desc" : "asc");
                  handleSort("appliedOn");
                }}
              >
                Applied On
              </th>
              <div>
                <span
                  className="cursor-pointer"
                  onClick={() => {
                    setSortOrder("asc");
                    handleSort("appliedOn");
                  }}
                >
                  <MdOutlineKeyboardArrowUp />
                </span>
                <span
                  className="cursor-pointer"
                  onClick={() => {
                    setSortOrder("desc");

                    handleSort("appliedOn");
                  }}
                >
                  <MdOutlineKeyboardArrowDown />
                </span>
              </div>
            </div>
            {/* <th className="w-20 lg:w-28 h-fit text-xs lg:text-lg text-center font-bold">
              Applied On
            </th> */}
            <th className="w-20 lg:w-28 h-fit text-xs lg:text-customtext text-center font-[580]">
              Status
            </th>
          </tr>
        </thead>

        <tbody className="flex flex-col gap-[10px] w-full overflow-y-auto SCROLLBAR h-tbodyheight py-1 pr-2">
          {sortedEmployeeLeaveManagement.map((leaveManagementDetail, index) => (
            <tr
              key={index}
              className="w-full p-3 h-[52px] rounded-[14px] flex border-[1px] items-center justify-between shadow-md cursor-pointer"
              onClick={() => showPopup(leaveManagementDetail)}
            >
              <td className="w-28 lg:w-32 h-fit text-xs lg:text-base  flex items-center gap-2">
                <img
                  className="w-6 h-6 lg:w-8 lg:h-8 xl:h-10 xl:w-10 rounded-full"
                  src="https://img.icons8.com/officel/16/bolivian-girl.png"
                  alt="bolivian-girl"
                />
                <span>{leaveManagementDetail.employeeName}</span>
              </td>
              <td className="w-20 lg:w-28 h-fit text-xs lg:text-base text-center ">
                {leaveManagementDetail.leaveType}
              </td>
              <td className="w-20 lg:w-28 h-fit text-xs lg:text-base text-center ">
                {`${leaveManagementDetail.startingDate} to ${leaveManagementDetail.endingDate}`}
              </td>
              {/* <td className="w-20 lg:w-28 h-fit text-xs lg:text-base text-center ">
                {leaveManagementDetail.leaveType}
              </td> */}
              {/* <td className="w-20 lg:w-28 h-fit text-xs lg:text-base text-center ">
                {leaveManagementDetail.leaveDate}
              </td> */}
              <td className="w-20 lg:w-28 h-fit text-xs lg:text-base text-center ">
                {leaveManagementDetail.appliedOn}
              </td>
              {/* <td className="w-20 lg:w-28 h-fit text-xs lg:text-base text-center ">
                {leaveManagementDetail.appliedOn}
              </td> */}
              <td className="w-20 lg:w-28 h-fit text-xs lg:text-base text-center ">
                {getStatus(leaveManagementDetail.startingDate)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal handleClose={closeModal} isOpen={isAddNew}>
        <EmployeeAttendancePopup
          closeModal={closeModal}
          selectedEmployee={selectedEmployee}
        ></EmployeeAttendancePopup>
      </Modal>
    </>
  );
}

export default LeaveManagementTable;