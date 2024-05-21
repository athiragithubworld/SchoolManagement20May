import React, { useEffect, useRef, useState } from "react";
import classes from "../../../styles/MarkRegisterDetailsTable.module.css";

export default function MarkRegisterTable({
  markRegisterColumn,
  studentMarkRegisterDetails,
}) {
  // const [sortBy, setSortBy] = useState(null);
  // const [sortOrder, setSortOrder] = useState("asc");
  // const [sortedMarkRegisterDetails, setMarkRegisterDetails] = useState([]);

  // useEffect(() => {
  //   if (facultySalarydetails.length === 0) {
  //     setMarkRegisterDetails([]);
  //   } else {
  //     setMarkRegisterDetails(facultySalarydetails);
  //   }

  //   if (sortBy) {
  //     const sortedData = facultySalarydetails.slice().sort((a, b) => {
  //       const aValue = a[sortBy];
  //       const bValue = b[sortBy];

  //       if (sortOrder == "asc") {
  //         return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
  //       } else {
  //         return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
  //       }
  //     });
  //     setSortedFacultySalaryDetails(sortedData);
  //     // sortedFacultySalaryDetails.current.value=sortedData
  //     return () => {
  //       setSortedFacultySalaryDetails(facultySalarydetails);
  //     };
  //   }
  // }, [sortBy, sortOrder, facultySalarydetails]);

  // const handleSort = (key) => {
  //   if (sortBy === key) {
  //     setSortOrder(sortOrder == "asc" ? "desc" : "asc");
  //   } else {
  //     setSortBy(key);
  //     setSortOrder("asc");
  //   }
  // };

  // let downArrow = "\u2B18"; //'\u25BE'
  // let upArrow = "\u2B19"; //"\u25B4";

  {
    /* <span className={classes.arrowLength}>
                {sortOrder === "asc" && sortBy === value ? upArrow : downArrow}
            </span> */
  }
  return (
    <div className={`${classes.container} table-responsive`}>
      {/* <div className={classes.subContainer}> */}
      <table className={`${classes.salaryDetails_table} `}>
        <div className={classes.tableHeadContainer}>
          <thead>
            <tr>
              {markRegisterColumn.map(({ label, value, subheadings }) => {
                return (
                  <th
                    // scope="col"
                    key={value}
                    rowSpan={value === "subjects" ? 2 : 1}
                    colSpan={value === "subjects" ? 6 : 1}
                  >
                    {label}

                    {subheadings && value === "subjects" && (
                      <tr className={classes.subheadingparent}>
                        {subheadings.map(
                          ({ label: subLabel, value: subValue }) => (
                            <th className={classes.subheading} key={subValue}>
                              {subLabel}
                            </th>
                          )
                        )}
                      </tr>
                    )}
                  </th>
                );
              })}
            </tr>
          </thead>
        </div>

        <div className={classes.tableBodyContainer}>
          <tbody>
            {/* <span style={{ height: "5px", width: "100%" }}> */}
            <div >
              {studentMarkRegisterDetails.map((student, index) => (
                <tr key={student.id}>
                  {/* <th scope="row"></th> */}
                  <td>{index + 1}</td>
                  <td>{student.studentname}</td>
                  <td>{student.studentid}</td>
                  <td>{student.subjects.telugu}</td>
                  <td>{student.subjects.maths}</td>
                  <td>{student.subjects.hindi}</td>
                  <td>{student.subjects.english}</td>
                  <td>{student.subjects.science}</td>
                  <td>{student.subjects.social}</td>
                  <td>{student.totalobtainedmarks}</td>
                  <td>{student.totalmarks}</td>
                  <td>{student.percentage}</td>
                  <td>{student.result}</td>
                </tr>
              ))}
            </div>
            {/* </span> */}
          </tbody>
        </div>
      </table>
      {/* </div> */}
    </div>
  );
}


