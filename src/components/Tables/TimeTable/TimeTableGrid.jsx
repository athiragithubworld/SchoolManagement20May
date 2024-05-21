import React, { useEffect, useRef, useState } from "react"; // Importing necessary dependencies from React
import classes from "../../../styles/TimeTableGrid.module.css"; // Importing CSS module for styling
import TableBoxDragAndDrop from "./TableBoxDragAndDrop"; // Importing TableBoxDragAndDrop component
import { useLocation } from "react-router-dom";
// Constants for days and timings
const days = ["Time", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const timings = [
  "09:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "01:00 PM",
  "02:00 PM",
  "02:30 PM",
  "03:00 PM",
  "03:30 PM",
];


// Functional component TimeTableGrid
export default function TimeTableGrid({
  // timetableDetails,
  handleTimeTableDetails,
  timeTableClass,
  timeTableSection,
  filteredData,
}) {
  const pathName = useLocation().pathname;
  // Refs for days, timings, and lunch break
  const daysRef = useRef([]); // Ref for days
  daysRef.current = days;

  const timingsRef = useRef([]); // Ref for timings
  timingsRef.current = timings;

  const lunchBreakRef = useRef(); // Ref for lunch break
  lunchBreakRef.current = "01:00 PM";


  // console.log("object")
  return (
    <>
      <div
        className={`${classes.container}`}
        style={{
          opacity: pathName === "/viewtimetable" ? 1 : 1,
          // pointerEvents: pathName === "/viewtimetable" ? "none" : "auto",
        }}
      >
        <table
        // className={`${classes.grid}`}
        >
          <div className={classes.tableHeadContainer}>
            <thead>
              {/* Rendering row for days */}
              <tr className={classes.tableheading}>
                {daysRef.current.map((day, index) => (
                  <th key={index}>
                    {/* scope="col" */}
                    <div className={classes.columnheading}>{day}</div>
                  </th>
                ))}
              </tr>
            </thead>
          </div>
          <div
            className={classes.tableBodyContainer}
            style={{
              overflowY: pathName === "/viewtimetable" ? "auto" : "auto",
              scrollbarWidth: pathName === "/viewtimetable" ? "none" : "none",
            }}
          >
            <tbody>
              {/* Rendering rows for timings */}

              {timingsRef.current.map((timing, dayIndex) => (
                <tr className={classes.tablecontent} key={dayIndex}>
                  {/* <th scope="row"></th> */}
                  <td>
                    <div className={classes.time}>{timing}</div>
                  </td>
                  {/* Checking if it's lunch break time */}
                  {lunchBreakRef.current === timing ? (
                    // If yes, rendering a merged cell for lunch break
                    <td
                      colSpan="6"
                      className={classes.facultytime}
                      style={{ backgroundColor: "#cdcaca", gridColumn: "2/8" }}
                    >
                      Lunch Break
                    </td>
                  ) : (
                    // implementing view table
                    Array.from({ length: 6 }).map((_, gridIndex) => {
                      return (
                        <>
                          <TableBoxDragAndDrop
                            key={gridIndex}
                            day={daysRef.current[gridIndex + 1]}
                            timing={timing}
                            handleTimeTableDetails={handleTimeTableDetails}
                            filteredData={filteredData}
                          />
                        </>
                      );
                    })
                  )}
                </tr>
              ))}
            </tbody>
          </div>
        </table>
      </div>
    </>
  );
}
