
//THIS COMPONENT WAS CREATED BY HAIDER


import React from 'react'
import { useState,useEffect } from 'react';
import LeaveManagementButtons from '../../components/Buttons/HRMSButtons/LeaveManagementButtons';
import LeaveManagementTable from '../../components/Tables/HRMSTable/LeaveManagementTable';
import LeaveManagementInfo from '../../components/LeaveManagementInfo/LeaveManagementInfo';
import { useParams } from 'react-router-dom';

const leaveManagementColumn = [
  {label: "Employee Name"},
  {label: "Leave Type"},
  {label: "Leave Date"},
  {label: "Applied On"},
  {label: "Status"}
];

export const LeaveManagement = () => {
   const {employeeId} = useParams();
  const [leaveManagementDetails,setLeaveManagementDetails] = useState([]);
  const [showEmployeeAttendancePopup,setShowEmployeeAttendancePopup] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
    try {
        const response = await fetch("http://localhost:4000/LeaveManagement");
        if (!response.ok) {
        throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        const filterDataById = jsonData.filter(employee=>Number(employee.id)===Number(employeeId))
        // console.log(jsonData);
        setLeaveManagementDetails(filterDataById);
    } catch (error) {
        console.log(error.message);
    }
    };
    fetchData();
  },[employeeId]);


  return (
    <div className="flex flex-col gap-4 w-full rounded-2xl overflow-hidden ">
      <LeaveManagementButtons
        filteredData={leaveManagementDetails}
      ></LeaveManagementButtons>

      <div className="flex gap-4 w-full flex-col xl:flex-row h-full overflow-hidden">
        <LeaveManagementTable
          showEmployeeAttendancePopup={showEmployeeAttendancePopup}
          setShowEmployeeAttendancePopup={setShowEmployeeAttendancePopup}
          leaveManagementDetails={leaveManagementDetails}
          employeeId={employeeId}
        ></LeaveManagementTable>

        <LeaveManagementInfo></LeaveManagementInfo>
      </div>
    </div>
  );
}

export default LeaveManagement;