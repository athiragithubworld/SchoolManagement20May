//Table by athira toggle button by swati
import styles from "../../../styles/StudentAttendanceTable.module.css";
import profile from "../../../assets/images/table-profile.webp";
import { useState, useEffect } from "react";

const Table = ({
  statusHandler,
  studentAttendanceColumnArr,
  studentAttendanceDetailsArr,
}) => {
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState("");
  const [sortedAttendanceDetails, setSortedAttendanceDetails] = useState([]);

  // Update sortedAttendanceDetails when attendanceRegdetails, sortBy, or sortOrder changes
  useEffect(() => {
    if (studentAttendanceDetailsArr.length === 0) {
      setSortedAttendanceDetails([]);
    } else {
      // Copy studentAttendanceDetailsArr to sort
      const sortedData = studentAttendanceDetailsArr.slice().sort((a, b) => {
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
      setSortedAttendanceDetails(sortedData);
    }
  }, [studentAttendanceDetailsArr, sortBy, sortOrder]);

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

  //function to change the status
  function clickHandler(student) {
    statusHandler(student, student.status === "present" ? "absent" : "present"); //statusHandler is props function to toggle the status.
  }

  return (
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
                  <tr className="w-full p-3 h-[60px] rounded-[14px] flex border-[1px] items-center justify-between bg-blue-100 shadow-md ">
                    {studentAttendanceColumnArr.map(
                      ({ label, value, downicon, upicon }) => {
                        //studentAttendanceColumnArr is props containing header names
                        return (
                          // <th
                          //   key={label}
                          //   className={`w-40 h-fit text-custom text-center font-bold`}
                          // >
                          //   {label}
                          // </th>
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
                                  //  setSortOrder(
                                  //    sortOrder === "desc" ||
                                  //      sortOrder === "" ||
                                  //      sortOrder === undefined
                                  //      ? "asc"
                                  //      : setSortedAttendanceRegDetails(
                                  //          attendanceRegdetails
                                  //        )
                                  //  );
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
                                  // setSortOrder(
                                  //   sortOrder === "asc" ||
                                  //     sortOrder === "" ||
                                  //     sortOrder === undefined
                                  //     ? "desc"
                                  //     : setSortedAttendanceRegDetails(
                                  //         attendanceRegdetails
                                  //       )
                                  // );
                                  handleSort(value);
                                }}
                              >
                                {downicon}
                              </span>
                            </div>
                          </div>
                        );
                      }
                    )}
                  </tr>
                </thead>

                {/* tablebody */}
                <tbody className="flex flex-col gap-[10px] w-full overflow-y-auto SCROLLBAR h-tbodyheight py-1 pr-2">
                  {sortedAttendanceDetails.length !== 0 &&
                    Array.isArray(sortedAttendanceDetails) &&
                    sortedAttendanceDetails.map((student) => {
                      //studentAttendanceDetailsArr is props containing row data
                      return (
                        <tr
                          key={student.id}
                          className="w-full p-3 h-[52px] rounded-[14px] flex border-[1px] items-center justify-between shadow-md"
                        >
                          <td className="w-40 h-fit text-customtext  text-center ">
                            <div className="flex gap-2 self-stretch  leading-5 text-center text-customblack">
                              <img
                                loading="lazy"
                                src={profile}
                                alt={`Avatar of student`}
                                className="shrink-0 rounded-full aspect-square w-[40px]"
                              />{" "}
                              <div className="my-auto">{student.name}</div>{" "}
                            </div>{" "}
                          </td>
                          <td className="w-40 h-fit text-customtext  text-center ">
                            {student.regNo}
                          </td>
                          <td className="w-40 h-fit text-customtext  text-center ">
                            {student.presentDays}
                          </td>
                          <td className="w-40 h-fit text-customtext  text-center ">
                            {student.absentDays}
                          </td>
                          <td className="w-40 h-fit text-customtext  text-center ">
                            {student.percentage}
                          </td>
                          <td className="w-40 h-fit text-customtext  text-center  flex justify-center">
                            {/* toggle button */}
                            <div className="flex flex-col justify-center self-stretch my-auto w-[25%]">
                              <div
                                onClick={() => clickHandler(student)}
                                className={
                                  student.status === "present"
                                    ? `${styles["toggle-btn"]} ${styles["success"]} cursor-pointer`
                                    : `${styles["toggle-btn"]} cursor-pointer`
                                }
                              >
                                <div
                                  className={
                                    student.status === "present"
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

export default Table;
