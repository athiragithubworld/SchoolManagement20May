// Created by Athira
import { useNavigate } from "react-router-dom";
import employeeImage from './../../../assets/images/employeeImage.png';
import { useEffect, useState } from "react";

export default function EmployeeListTable({ employeeListColumn, employeeDetails, selectEmployeeRole }) {
  const navigate = useNavigate();


 const [sortBy, setSortBy] = useState(null);
 const [sortOrder, setSortOrder] = useState("");
 const [sortedEmployeeDetails, setSortedEmployeeDetails] = useState([]);

 // Update sortedAttendanceRegDetails when attendanceRegdetails, sortBy, or sortOrder changes
 useEffect(() => {
   if (employeeDetails.length === 0) {
     setSortedEmployeeDetails([]);
   } else {
     // Copy employeeDetails to sort
     const sortedData = employeeDetails.slice().sort((a, b) => {
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
     setSortedEmployeeDetails(sortedData);
   }
 }, [employeeDetails, sortBy, sortOrder]);

 // Function to handle sorting when clicking on table headers
 const handleSort = (key) => {
   console.log("sortkey", key);
   console.log("order", sortOrder);
   if (sortBy === key) {
     //  setSortOrder(sortOrder === "asc" ? "asc" : "desc");
   } else {
     setSortBy(key);
     // setSortOrder("asc");
   }
 };
  

   function getDetails(data) {
     navigate(`employeeprofile/${data.id}/${data.Role}`);
   }
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
                  <thead className="pr-2">
                    <tr className="w-full p-3 h-[74px] rounded-[14px] flex border-[1px] items-center justify-between bg-blue-100  shadow-md text-lg">
                      {employeeListColumn.map(
                        ({ label, value, downicon, upicon }) => {
                          return (
                            <div
                              key={label}
                              className="flex w-40 justify-center items-center gap-[4px] cursor-pointer "
                            >
                              <th
                                className={` h-[19px] text-customtext font-[580] text-center`}
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
                            //   className={`w-40 h-[19px] text-customtext font-bold text-center`}
                            // >
                            //   {label}
                            // </th>
                          );
                        }
                      )}
                    </tr>
                  </thead>

                  <tbody className="flex flex-col gap-[10px] w-full overflow-y-auto SCROLLBAR h-tbodyheight py-1 pr-2">
                    {sortedEmployeeDetails.length !== 0 &&
                      Array.isArray(sortedEmployeeDetails) &&
                      sortedEmployeeDetails.map((data, index) => {
                        return selectEmployeeRole !== "Teaching" ? (
                          // Row for non-teaching employees
                          <tr
                            key={index}
                            className="w-full p-3 h-[52px] rounded-[14px] flex border-[1px] items-center justify-between shadow-md cursor-pointer"
                            onClick={() =>
                              getDetails({
                                id: data.employeeCustomId,
                                Role: data.Role,
                              })
                            }
                          >
                            {/* Columns for non-teaching employees */}
                            <td className=" h-fit text-customtext  max-h-[52px] w-40  flex gap-2 items-center overflow-clip">
                              <img
                                src={data.image ? data.image : employeeImage}
                                className="shrink-0 rounded-full aspect-square w-[40px] h-[40px]"
                              />
                              <div className="max-h-[52px] leading-none">
                              {(data.FirstName?data.FirstName:'') +
                                " " +
                                (data.MiddleName?data.MiddleName:'') +
                                " " +
                                (data.LastName?data.LastName:'')}
                              </div>
                            </td>
                            <td className="w-40 h-fit text-customtext text-center">
                              {data.employeeCustomId}
                            </td>
                            <td className="w-40 h-fit text-customtext text-center">
                              {data.Designation}
                            </td>
                            <td className="w-40 h-fit text-customtext text-center">
                              {data.Qualification}
                            </td>
                            <td className="w-40 h-fit text-customtext text-center">
                              {data.Role}
                            </td>
                          </tr>
                        ) : (
                          // Row for teaching employees
                          <tr
                            key={index}
                            className="w-full p-3 h-[52px] rounded-[14px] flex border-[1px] items-center justify-between shadow-primary cursor-pointer"
                            onClick={() =>
                              getDetails({
                                id: data.employeeCustomId,
                                Role: data.Role,
                              })
                            }
                          >
                            {/* Columns for teaching employees */}
                            <td className="w-40 h-fit max-h-[52px] text-customtext text-center flex gap-2 items-center">
                              <img
                                src={data.image ? data.image : employeeImage}
                                className="shrink-0 rounded-full aspect-square w-[40px] h-[40px]"
                              />
                               <div className="max-h-[52px] leading-none">
                              {(data.FirstName?data.FirstName:'') +
                                " " +
                                (data.MiddleName?data.MiddleName:'') +
                                " " +
                                (data.LastName?data.LastName:'')}
                              </div>
                            </td>
                            <td className="w-40 h-fit text-customtext text-center">
                            {data.employeeCustomId}
                            </td>
                            <td className="w-40 h-fit text-customtext text-center">
                              {data.PrimarySubject}
                            </td>
                            <td className="w-40 h-fit text-customtext text-center">
                              {data.SecondarySubject}
                            </td>
                            <td className="w-40 h-fit text-customtext text-center">
                              {data.Qualification}
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
    </>
  );
}
