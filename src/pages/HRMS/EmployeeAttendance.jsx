//Implemented by swati

import { useState, useEffect } from "react";
import EmployeeAttendanceButtons from "../../components/Buttons/HRMSButtons/EmployeeAttendanceButtons";
import EmployeeAttendanceTable from "../../components/Tables/HRMSTable/EmployeeAttendanceTable";
import Notification from "../../ui/Notification";

const EmployeeAttendance = () => {
  const [employeeAttendanceData, setEmployeeAttendanceData] = useState([]);
  const [employeeAttendanceCopy, setEmployeeAttendanceCopy] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [alertKey, setAlertKey] = useState(0);
  const [filteredEmployeeData, setFilteredEmployeeData] = useState(
    employeeAttendanceData
  );
  const [selectedFilter, setSelectedFilter] = useState("All Employees");

  useEffect(() => {
    //fetch the data
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:4000/EmployeeAttendance"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();

        setEmployeeAttendanceData(jsonData[0].employees);
        setEmployeeAttendanceCopy(jsonData[0].employees);
        setFilteredEmployeeData(jsonData[0].employees);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  //function to change category into employee or faculty
  const handleSelectionCategory = (category) => {
    setSelectedFilter(category);
    if (category !== "All Employees") {
      const categoryFilterData = employeeAttendanceData.filter(
        (employee) => employee.designation === category
      );
      setFilteredEmployeeData(categoryFilterData);
    } else {
      setFilteredEmployeeData(employeeAttendanceData);
    }
  };
  //function to handle status change
  const statusHandler = async (employee, status) => {
    const newEmployeeData = employeeAttendanceCopy.map((rowData) => {
      if (rowData.empId === employee.empId) {
        return { ...rowData, status: status };
      } else {
        return { ...rowData };
      }
    });
    setEmployeeAttendanceCopy(newEmployeeData);
    const newFilteredData = filteredEmployeeData.map((rowData) => {
      if (rowData.empId === employee.empId) {
        return { ...rowData, status: status };
      } else {
        return { ...rowData };
      }
    });
    setFilteredEmployeeData(newFilteredData);
  };

  const handleSubmit = async () => {
    const res = await fetch(
      `http://localhost:4000/EmployeeAttendance/allemployees`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          employees: [...employeeAttendanceCopy],
          id: "allemployees",
          role: "All Employees",
        }),
      }
    );
    if (res.ok) {
      setShowNotification(true);
      setAlertKey((prevKey) => prevKey + 1);
    }
    const response = await fetch(`http://localhost:4000/EmployeeAttendance`);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const jsonData = await response.json();
    setEmployeeAttendanceData(jsonData[0].employees);
    if (selectedFilter !== "All Employees") {
      setFilteredEmployeeData(
        jsonData[0].employees.filter(
          (obj) => obj.designation === selectedFilter
        )
      );
    } else {
      setFilteredEmployeeData(jsonData[0].employees);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-4 w-full overflow-hidden rounded-2xl ">
        <EmployeeAttendanceButtons
          handleSelectionCategory={handleSelectionCategory}
          handleSubmit={handleSubmit}
          filteredEmployeeData={filteredEmployeeData}
        />
        <EmployeeAttendanceTable
          filteredEmployeeData={filteredEmployeeData}
          statusHandler={statusHandler}
        />
      </div>
      <Notification
        status="success"
        message="Employee Attendance saved"
        showAlert={showNotification}
        setShowAlert={setShowNotification}
        alertKey={alertKey}
        style="ml-[calc(100vw-56rem)]"
      />
    </>
  );
};

export default EmployeeAttendance;
