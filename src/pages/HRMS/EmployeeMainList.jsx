//Implemented by Swati

import { useEffect, useState } from "react";
import EmployeeMainListTable from "../../components/Tables/HRMSTable/EmployeeMainListTable";
import EmployeeMainListButtons from "../../components/Buttons/HRMSButtons/EmployeeMainListButtons";

const EmployeeMainList = () => {
  const [employeeList, setEmployeeList] = useState([]);

  const [filteredData, setFilteredData] = useState(employeeList);
  const [selectedFilter, setSelectedFilter] = useState("All Students");

  useEffect(() => {
    //fetch the data
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/EmployeeLeaveList");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setEmployeeList(jsonData);
        setFilteredData(jsonData);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  //function to handle updating the table data on the basis of leave rejected or approved.
  function leaveHandler(updatedEmployeeList) {
    setEmployeeList(updatedEmployeeList);
    if (selectedFilter === "All Students") {
      setFilteredData(updatedEmployeeList);
    } else {
      setFilteredData(
        updatedEmployeeList.filter((emp) => emp.role === selectedFilter)
      );
    }
  }

  //function to filter data in the table.
  function filterDataHandler(selectedFilter) {
    setSelectedFilter(selectedFilter);
    if (selectedFilter === "All Employees") {
      setFilteredData(employeeList);
    } else {
      const updatedData = employeeList.filter(
        (emp) => emp.role === selectedFilter
      );
      setFilteredData(updatedData);
    }
  }

  return (
    <div className="flex flex-col gap-4 w-full overflow-hidden rounded-2xl">
      <EmployeeMainListButtons filterData={filterDataHandler} />
      <EmployeeMainListTable
        employeeList={employeeList}
        filterData={filteredData}
        leaveHandler={leaveHandler}
      />
    </div>
  );
};

export default EmployeeMainList;
