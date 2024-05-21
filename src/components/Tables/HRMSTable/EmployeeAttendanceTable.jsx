//Implemented by swati
import { useNavigate } from "react-router-dom";
import styles from "../../../styles/StudentAttendanceTable.module.css";
import profile from "../../../assets/images/table-profile.webp";
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { useEffect, useState } from "react";

const EmployeeAttendanceTable = ({ filteredEmployeeData, statusHandler }) => {
  const navigate = useNavigate();

  const employeeAttendanceColumnArr = [
   { label:"Employee ID",value: "empId",
      downicon: <MdOutlineKeyboardArrowDown />,
      upicon: <MdOutlineKeyboardArrowUp />},
   { label:"Designation",value: "designation",
      downicon: <MdOutlineKeyboardArrowDown />,
      upicon: <MdOutlineKeyboardArrowUp />},
   {label: "Total working days",value: "workingDays",
      downicon: <MdOutlineKeyboardArrowDown />,
      upicon: <MdOutlineKeyboardArrowUp />},
    {label:"Total Absent",value: "absent",
      downicon: <MdOutlineKeyboardArrowDown />,
      upicon: <MdOutlineKeyboardArrowUp />},
   { label:"Percentage",value: "percentage",
      downicon: <MdOutlineKeyboardArrowDown />,
      upicon: <MdOutlineKeyboardArrowUp />},
    {label:"Status",value: "status",
      downicon: "",
      upicon: ""}
  ];

   const [sortBy, setSortBy] = useState(null);
   const [sortOrder, setSortOrder] = useState("");
   const [sortedEmployeeAttendance, setSortedEmployeeAttendance] = useState([]);

   // Update sortedAttendanceRegDetails when attendanceRegdetails, sortBy, or sortOrder changes
   useEffect(() => {
     if (filteredEmployeeData.length === 0) {
       setSortedEmployeeAttendance([]);
     } else {
       // Copy filteredEmployeeData to sort
       const sortedData = filteredEmployeeData.slice().sort((a, b) => {
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
       setSortedEmployeeAttendance(sortedData);
     }
   }, [filteredEmployeeData, sortBy, sortOrder]);

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


  function clickHandler(employee) {
    statusHandler(
      employee,
      employee.status === "absent" ? "present" : "absent"
    ); //statusHandler is props function to toggle the status.
  }

  function getDetails(empId) {
    navigate(`leavemanagement/${empId}`);
  }

  return (
    <div
      className={`p-3 shadow-containerShadow md:shadow-containerShadow w-full h-full rounded-[1.25rem] scrollbarnone`}
    >
      <div className="flex flex-col overflow-hidden">
        <div className="overflow-x-auto scrollbarnone sm:-mx-5 lg:-mx-7">
          <div className="inline-block min-w-full  sm:px-5 lg:px-7">
            <div className="overflow-hidden">
              <table className="w-full  flex flex-col gap-[10px]">
                <thead className="pr-2">
                  <tr className="w-full p-3 h-[74px] rounded-[14px] flex border-[1px] items-center justify-between bg-blue-100  shadow-md text-lg">
                    <div className="flex w-40 justify-center items-center gap-[4px] cursor-pointer ">
                      <th
                        className={` h-fit text-customtext font-[580] text-center`}
                        onClick={() => {
                          setSortOrder(sortOrder === "asc" ? "desc" : "asc");
                          handleSort("empName");
                        }}
                      >
                        Employee Name
                      </th>
                      <div>
                        <span
                          className="cursor-pointer"
                          onClick={() => {
                            setSortOrder("asc");
                            handleSort("empName");
                          }}
                        >
                          <MdOutlineKeyboardArrowUp />
                        </span>
                        <span
                          className="cursor-pointer"
                          onClick={() => {
                            setSortOrder("desc");

                            handleSort("empName");
                          }}
                        >
                          <MdOutlineKeyboardArrowDown />
                        </span>
                      </div>
                    </div>
                   
                    {employeeAttendanceColumnArr.map(
                      ({ label, value, downicon, upicon }) => {
                        //employeeAttendanceColumnArr is containing header names
                        return (
                          <div
                            key={label}
                            className="flex w-40 justify-center items-center gap-[4px] cursor-pointer "
                          >
                            <th
                              className={` h-fit text-customtext font-[580] text-center`}
                              onClick={() => {
                                setSortOrder(
                                  sortOrder === "asc" ? "desc" : "asc"
                                );
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

                          // <th
                          //   key={label}
                          //   className={`w-40 h-fit text-custom text-center font-bold`}
                          // >
                          //   {label}
                          // </th>
                        );
                      }
                    )}
                  </tr>
                </thead>

                <tbody className="flex flex-col gap-[10px] w-full overflow-y-auto SCROLLBAR h-tbodyheight py-1 pr-2">
                  {sortedEmployeeAttendance.map((employee) => {
                    //filteredEmployeeData is props containing row data
                    return (
                      <tr
                        key={employee.id}
                        className="w-full p-3 h-[52px] rounded-[14px] flex border-[1px] items-center justify-between shadow-md cursor-pointer"
                        onClick={() => getDetails(employee.empId)}
                      >
                        <td className="w-40 h-fit text-customtext text-center ">
                          <div className="flex gap-2 self-stretch text-lg leading-5 text-center text-black">
                            <img
                              loading="lazy"
                              src={profile}
                              alt={`Avatar of student`}
                              className="shrink-0 rounded-full aspect-square w-[40px] h-[40px]"
                            />{" "}
                            <div className="my-auto">{employee.empName}</div>{" "}
                          </div>{" "}
                        </td>
                        <td className="w-40 h-fit text-customtext text-center ">
                          {employee.empId}
                        </td>
                        <td className="w-40 h-fit text-customtext text-center ">
                          {employee.designation}
                        </td>
                        <td className="w-40 h-fit text-customtext text-center ">
                          {employee.workingDays}
                        </td>
                        <td className="w-40 h-fit text-customtext text-center ">
                          {employee.absent}
                        </td>
                        <td className="w-40 h-fit text-customtext text-center ">
                          {`${
                            (employee.workingDays - employee.absent) *
                            Math.floor(100 / employee.workingDays)
                          }%`}
                        </td>
                        <td className="w-40 h-fit text-customtext text-center  flex justify-center">
                          {/* toggle button */}
                          <div
                            className="flex flex-col justify-center self-stretch my-auto w-[40px]"
                            onClick={(e) => {
                              e.stopPropagation();
                              clickHandler(employee);
                            }}
                          >
                            <div
                              className={
                                employee.status === "present"
                                  ? `${styles["toggle-btn"]}  ${styles["success"]} cursor-pointer`
                                  : `${styles["toggle-btn"]} cursor-pointer`
                              }
                            >
                              <div
                                className={
                                  employee.status === "present"
                                    ? `${styles["toggle-icon"]} ${styles["success-icon"]}`
                                    : styles["toggle-icon"]
                                }
                              ></div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeAttendanceTable;
