// Created by Athira

import * as React from "react";

// AttendanceSummaryHeader component renders the header for the attendance summary table.
function AttendanceSummaryHeader() {
  return (
    <thead>
      <tr>
        <th
          colSpan={5}
          className="text-customtext font-bold text-left pb-2 w-1/5"
        >
          Attendance Summary
        </th>
      </tr>
    </thead>
  );
}

// AttendanceSummaryLabels component renders the labels row for the attendance summary table.
function AttendanceSummaryLabels() {
  return (
    <thead>
      <tr className="bg-indigo-100 ">
        <th className="p-2 font-bold text-left w-1/5 rounded-tl-lg rounded-bl-lg">
          Student
        </th>
        <th className="p-2 font-bold text-center w-1/5">Total</th>
        <th className="p-2 font-bold text-center w-1/5">Present</th>
        <th className="p-2 font-bold text-center w-1/5">Absent</th>
        <th className="p-2 font-bold text-center w-1/5 rounded-tr-lg rounded-br-lg">
          Present %
        </th>
      </tr>
    </thead>
  );
}

// AttendanceRow component renders a single row of data in the attendance summary table.
function AttendanceRow({ label, total, present, absent, percentage }) {
  return (
    <tr className="">
      <td className="p-2 text-left whitespace-nowrap w-1/5">{label}</td>
      <td className="p-2 text-center w-1/5">{total}</td>
      <td className="p-2 text-center w-1/5">{present}</td>
      <td className="p-2 text-center w-1/5">{absent}</td>
      <td className="p-2 text-center w-1/5">{percentage}</td>
    </tr>
  );
}

// DashboardAttendanceSummary component renders the entire section of the attendance summary.
function ClassManagementAttendanceSummary() {
  // Sample data for attendance summary.
  const attendanceData = [
    {
      label: "Girls",
      total:60 ,
      present: 50,
      absent: 10,
      percentage: "90%",
    },
   
    {
      label: "Boys",
      total: 60,
      present: 50,
      absent: 10,
      percentage: "90%",
    },
  ];

  return (
    <section className="flex grow-0 col-span-full flex-col p-4  h-fit text-base  text-black bg-white rounded-[20px] shadow-containerShadow">
      <div className="overflow-x-auto ">
        <table className="table-auto border-collapse w-full">
          <AttendanceSummaryHeader />
          <AttendanceSummaryLabels />
          <tbody>
            {attendanceData.map((data, index) => (
              <AttendanceRow
                key={index}
                label={data.label}
                total={data.total}
                present={data.present}
                absent={data.absent}
                percentage={data.percentage}
              />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default ClassManagementAttendanceSummary;
