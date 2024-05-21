// Created by Swati.
import { useState } from "react"; // Importing necessary dependencies from React
import { RiDeleteBin5Line } from "react-icons/ri";
import classes from "../../../styles/Step2Popup.module.css"; // Importing CSS module for styling
import { AiOutlineVerticalLeft, AiOutlineVerticalRight } from "react-icons/ai";

// Functional component Step2 of New bank transfer
export default function Step2({
  employeeList,
  selectEmployeeHandler,
  handlePrevious,
  handleSelectingEmployees,
  handleNext,
}) {
  const [selectedRows, setSelectedRows] = useState([]);

  //Function to store selected rows to change color
  const handleRowClick = (emp) => {
    // Check if the row is already selected
    if (selectedRows.includes(emp)) {
      // If selected, remove it from the array
      setSelectedRows(selectedRows.filter((row) => row.id !== emp.id));
    } else {
      // If not selected, add it to the array
      setSelectedRows([...selectedRows, emp]);
    }
    selectEmployeeHandler(emp);
  };

  const isRowSelected = (emp) => {
    return selectedRows.includes(emp);
  };

  //Function to handle onclick of next button
  const handleSubmit = () => {
    handleSelectingEmployees();
    handleNext();
  };

  return (
    <>
      <div
        className={`${classes.viewForm} w-[400px] lg:w-[1019px] md:w-[800px] sm:w-[500px]`}
      >
        <span className={classes.main}>
          <span className={`${classes.container} w-[450px]`}>
            Total Employees : 20
          </span>
          <span className={`${classes.container} w-[450px]`}>
            Total Amount : 11,49,000
          </span>
        </span>
        <div className={classes.facultyFilter}>
          {/* <p>Faculty filter</p> */}
          <div className={classes.facultyFilterDiv}>
            {/* <select className="h-full">
            <option>All Employees</option>
          </select> */}
            <select className="h-full">
              <option>All Employees</option>
              <option>Faculty</option>
            </select>
            <div className={classes.trash}>
              <RiDeleteBin5Line className={classes.trashIcon} />
            </div>
          </div>
        </div>
        <div
          className={`h-[298px] py-3 pr-3 pl-5 shadow-containerShadow rounded-[1.25rem] overflow-x-scroll overflow-y-hidden scrollbarnone`}
        >
          <div className="flex flex-col">
            <div className="overflow-x-auto scrollbarnone sm:-mx-5 lg:-mx-7">
              <div className="inline-block min-w-full  sm:px-5 lg:px-7">
                <div className="overflow-hidden">
                  <table className=" w-[1000px] flex flex-col gap-2.5 ">
                    <thead>
                      <tr className="w-[99%] h-[74px] rounded-[14px] flex border-[1px] items-center justify-between bg-blue-100 p-[12px] shadow-md">
                        <th className=" w-[12.5%] h-fit text-custom text-center font-bold">
                          S No.
                        </th>
                        <th className="  w-[12.5%] h-fit text-custom text-center font-bold">
                          Name
                        </th>
                        <th className="  w-[12.5%] h-fit text-custom text-center font-bold">
                          Employee no
                        </th>
                        <th className="  w-[12.5%] h-fit text-custom text-center font-bold">
                          Bank
                        </th>
                        <th className="  w-[12.5%] h-fit text-custom text-center font-bold">
                          Branch
                        </th>
                        <th className="  w-[12.5%] h-fit text-custom text-center font-bold">
                          IFSC Code
                        </th>
                        <th className="  w-[12.5%] h-fit text-custom text-center font-bold">
                          Acc. No
                        </th>
                        <th className="  w-[12.5%] h-fit text-custom text-center font-bold">
                          Amount
                        </th>
                      </tr>
                    </thead>
                    <tbody className="flex flex-col gap-2.5 w-full overflow-y-scroll SCROLLBAR h-[200px]">
                      {employeeList.map((emp) => (
                        <tr
                          key={emp.id}
                          onClick={() => handleRowClick(emp)}
                          className={`w-[99.5%] h-[52px] rounded-2xl flex border-[1px] items-center justify-between p-3 shadow-md ${
                            isRowSelected(emp)
                              ? "bg-blue-100"
                              : "hover:bg-gray-100"
                          }`}
                        >
                          <td className="w-40 h-fit text-custom lg:text-custom text-center font-normal">
                            {emp.id}
                          </td>
                          <td className="w-40 h-fit text-custom lg:text-custom text-center font-normal">
                            {emp.facultyName}
                          </td>
                          <td className="w-40 h-fit text-custom lg:text-custom text-center font-normal">
                            {emp.facultyId}
                          </td>
                          <td className="w-40 h-fit text-custom lg:text-custom text-center font-normal">
                            {emp.bankName}
                          </td>
                          <td className="w-40 h-fit text-custom lg:text-custom text-center font-normal">
                            {emp.branch}
                          </td>
                          <td className="w-40 h-fit text-custom lg:text-custom text-center font-normal">
                            {emp.ifsc}
                          </td>
                          <td className="w-40 h-fit text-custom lg:text-custom text-center font-normal">
                            {emp.bankAc}
                          </td>
                          <td className="w-40 h-fit text-custom lg:text-custom text-center font-normal">
                            {emp.amount}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Buttons */}
      <span className="w-full flex justify-center gap-5">
        <button
          className="p-[5px] bg-white flex justify-center items-center w-[138px] h-10 gap-2 rounded-[14px] border"
          onClick={handlePrevious}
        >
          <span>
            <AiOutlineVerticalRight />
          </span>
          <span>Previous</span>
        </button>
        <button
          className="p-[5px] bg-[#009dff] text-white flex justify-center items-center w-[138px] h-10 g-2.5 rounded-[14px] border"
          onClick={handleSubmit}
        >
          <span>Next</span>
          <span>
            <AiOutlineVerticalLeft />
          </span>
        </button>
      </span>
    </>
  );
}
