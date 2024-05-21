// Implemented by swati
import profile from "../../../assets/images/table-profile.webp";
import { useState ,useEffect } from "react";
import Modal from "../../Modal/Modal";
import LeaveManagementPopup from "../../Popup/HRMSPopup/LeaveManagementPopup";
import Notification from "../../../ui/Notification";
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";

const EmployeeMainListTable = ({ employeeList, filterData, leaveHandler }) => {
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState({});
  const [status, setStatus] = useState(true);
  const [message, setMessage] = useState("");
  const [key, setKey] = useState(0);

  function getStatusColor(status) {
    switch (status) {
      case "Pending":
        return {
          backgroundColor: "#FFE198",
          border: "1px solid #966B0B",
          color: "#966B0B",
        };
      case "Denied":
        return {
          backgroundColor: "#F1D0CE",
          border: "1px solid #BF0000",
          color: "#BF0000",
        };
      case "Approved":
        return {
          backgroundColor: "#C4FFBF",
          border: "1px solid #0A8100",
          color: "#0A8100",
        };
      default:
        return {};
    }
  }

  //function to open the modal and set the employee selected.
  function clickHandler(employee) {
    setShowModal(true);
    setSelectedEmployee(employee);
  }

  function handleClose() {
    setShowModal(false);
  }

  async function showNotification(status, message, empId) {
    const updatedStatusEmp = employeeList.filter((emp) => emp.id === empId);
    const index = employeeList.findIndex((emp) => emp.id === empId);
    console.log("emp", updatedStatusEmp);
    await fetch(`http://localhost:4000/EmployeeLeaveList/${empId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...selectedEmployee,
        status: status === "success" ? "Approved" : "Denied",
      }),
    });
    const updatedEmployeeList = [...employeeList];
    updatedEmployeeList[index] = {
      ...selectedEmployee,
      status: status === "success" ? "Approved" : "Denied",
    };
    leaveHandler(updatedEmployeeList);

    handleClose();
    setShowAlert(true);
    setKey((prevValue) => prevValue + 1);
    setStatus(status);
    setMessage(message);
  }

  const [sortBy, setSortBy] = useState(null);
   const [sortOrder, setSortOrder] = useState("");
   const [sortedEmployeeMainList, setSortedEmployeeMainList] = useState(
     []
   );

   // Update sortedAttendanceRegDetails when attendanceRegdetails, sortBy, or sortOrder changes
   useEffect(() => {
     if (filterData.length === 0) {
       setSortedEmployeeMainList([]);
     } else {
       // Copy filterData to sort
       const sortedData = filterData.slice().sort((a, b) => {
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
       setSortedEmployeeMainList(sortedData);
     }
   }, [filterData, sortBy, sortOrder]);

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

  return (
    <>
      <div
        className={`p-3 shadow-containerShadow md:shadow-containerShadow w-full h-full rounded-[1.25rem] scrollbarnone`}
      >
        <div className="flex flex-col overflow-hidden">
          <div className="overflow-x-auto scrollbarnone sm:-mx-5 lg:-mx-7">
            <div className="inline-block min-w-full  sm:px-5 lg:px-7">
              <div className="overflow-hidden">
                <table className="w-full flex flex-col gap-[10px]">
                  {/* tableheader */}
                  <thead className="pr-2">
                    <tr className="w-full p-3 h-[74px] rounded-[14px] flex border-[1px] items-center justify-between bg-blue-100  shadow-md text-lg">
                      <div className="flex w-48 justify-center items-center gap-[4px] cursor-pointer ">
                        <th
                          className={` h-fit text-customtext font-[580] text-center`}
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

                      {/* <th
                        className={`w-48 h-fit text-custom text-center font-bold`}
                      >
                        Employee Name
                      </th> */}

                      <div className="flex w-48 justify-center items-center gap-[4px] cursor-pointer ">
                        <th
                          className={` h-fit text-customtext font-[580] text-center`}
                          onClick={() => {
                            setSortOrder(sortOrder === "asc" ? "desc" : "asc");
                            handleSort("leaveType");
                          }}
                        >
                          Type of leave
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
                      {/* <th
                        className={`w-48 h-fit text-custom text-center font-bold`}
                      >
                        Type of leave
                      </th> */}
                      <div className="flex w-48 justify-center items-center gap-[4px] cursor-pointer ">
                        <th
                          className={` h-fit text-customtext font-[580] text-center`}
                          onClick={() => {
                            setSortOrder(sortOrder === "asc" ? "desc" : "asc");
                            handleSort("leaveDate");
                          }}
                        >
                          Leave Date
                        </th>
                        <div>
                          <span
                            className="cursor-pointer"
                            onClick={() => {
                              setSortOrder("asc");
                              handleSort("leaveDate");
                            }}
                          >
                            <MdOutlineKeyboardArrowUp />
                          </span>
                          <span
                            className="cursor-pointer"
                            onClick={() => {
                              setSortOrder("desc");

                              handleSort("leaveDate");
                            }}
                          >
                            <MdOutlineKeyboardArrowDown />
                          </span>
                        </div>
                      </div>
                      {/* <th
                        className={`w-48 h-fit text-custom text-center font-bold`}
                      >
                        Leave Date
                      </th> */}

                      <div className="flex w-48 justify-center items-center gap-[4px] cursor-pointer ">
                        <th
                          className={` h-fit text-customtext font-[580] text-center`}
                          onClick={() => {
                            setSortOrder(sortOrder === "asc" ? "desc" : "asc");
                            handleSort("appliedOn");
                          }}
                        >
                          Applied on
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
                      {/* <th
                        className={`w-48 h-fit text-custom text-center font-bold`}
                      >
                        Applied on
                      </th> */}
                      <th
                        className={`w-[110px] h-fit  text-center text-customtext font-[580]`}
                      >
                        Status
                      </th>
                    </tr>
                  </thead>
                  {/* tablebody */}
                  <tbody className="flex flex-col gap-[10px] w-full overflow-y-auto SCROLLBAR h-tbodyheight py-1 pr-2">
                    {/* employeeList is props containing row data */}
                    {sortedEmployeeMainList.map((employee) => {
                      return (
                        <tr
                          key={employee.id}
                          className="w-full p-3 h-[52px] rounded-[14px] flex border-[1px] items-center justify-between shadow-md cursor-pointer"
                          onClick={() => clickHandler(employee)}
                        >
                          <td className="w-48 h-fit text-customtext text-center ">
                            <div className="flex gap-2 self-stretch text-lg leading-5 text-left text-black">
                              <img
                                loading="lazy"
                                src={profile}
                                alt={`Avatar of student`}
                                className="shrink-0 rounded-full aspect-square w-[46px]"
                              />{" "}
                              <div className="my-auto">
                                {employee.employeeName}
                              </div>{" "}
                            </div>{" "}
                          </td>
                          <td className="w-48 h-fit text-customtext text-center ">
                            {employee.leaveType}
                          </td>
                          <td className=" w-48 h-fit text-customtext text-center ">
                            {employee.leaveDate}
                          </td>
                          <td className="w-48 h-fit text-customtext text-center ">
                            {employee.appliedOn}
                          </td>
                          <td
                            className=" w-[90px]"
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <div
                              className={` flex justify-center w-[90px] border rounded-xl`}
                              style={{ ...getStatusColor(employee.status) }}
                            >
                              {employee.status}
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
      <Modal handleClose={handleClose} isOpen={showModal}>
        <LeaveManagementPopup
          selectedEmployee={selectedEmployee}
          showNotification={showNotification}
        />
      </Modal>
      {/* {showNotification && ( */}
      <Notification
        showAlert={showAlert}
        setShowAlert={setShowAlert}
        status={status}
        message={message}
        key={key}
      />
      {/* )} */}
    </>
  );
};

export default EmployeeMainListTable;
