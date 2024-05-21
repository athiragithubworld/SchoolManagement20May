
// Created by Athira
//Updated functionality by gunjan
import { useCallback, useState } from 'react'
import EmployeeListButtons from '../../components/Buttons/HRMSButtons/EmployeeListButtons';
import EmployeeListTable from '../../components/Tables/HRMSTable/EmployeeListTable';
import { useEffect } from 'react';
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";

// Arrays defining column names for different employee roles
const employeeListColumnArr = [
  {
    label: "Employee Name",
    value: "employeeName",
    downicon: <MdOutlineKeyboardArrowDown />,
    upicon: <MdOutlineKeyboardArrowUp />,
  },
  {
    label: "Employee Id",
    value: "employeeId",
    downicon: <MdOutlineKeyboardArrowDown />,
    upicon: <MdOutlineKeyboardArrowUp />,
  },
  {
    label: "Designation",
    value: "designation",
    downicon: <MdOutlineKeyboardArrowDown />,
    upicon: <MdOutlineKeyboardArrowUp />,
  },
  {
    label: "Qualification",
    value: "qualification",
    downicon: <MdOutlineKeyboardArrowDown />,
    upicon: <MdOutlineKeyboardArrowUp />,
  },
  {
    label: "Role",
    value: "role",
    downicon: '',
    upicon:'',
  },
];


const facultyListColumnArr = [
  {
    label: "Employee Name",
    value: "employeeName",
    downicon: <MdOutlineKeyboardArrowDown />,
    upicon: <MdOutlineKeyboardArrowUp />,
  },
  {
    label: "Employee Id",
    value: "employeeId",
    downicon: <MdOutlineKeyboardArrowDown />,
    upicon: <MdOutlineKeyboardArrowUp />,
  },
  {
    label: "Primary Subject",
    value: "primarySubject",
    downicon: <MdOutlineKeyboardArrowDown />,
    upicon: <MdOutlineKeyboardArrowUp />,
  },
  {
    label: "Secondary Subject",
    value: "secondarySubject",
    downicon: <MdOutlineKeyboardArrowDown />,
    upicon: <MdOutlineKeyboardArrowUp />,
  },
  {
    label: "Qualification",
    value: "qualification",
    downicon: <MdOutlineKeyboardArrowDown />,
    upicon: <MdOutlineKeyboardArrowUp />,
  },
];



export default function EmployeeList() {
  const [employeeListColumn, setEmployeeListColumn] = useState(
    employeeListColumnArr
  );
  const [allEmployeeDetail,setAllEmployeeDetail] = useState([]);
  const [filteredEmployeeDetail,setFilteredEmployeeDetail] = useState([]);
  const [modalClosed, setModalClosed] = useState(false); // State variable to refresh the page and fetch newly added data
  // Function to handle selection of employee role
  const handleselectedEmployeeRole=useCallback((selectedEmployeeRole)=> {
     if(!selectedEmployeeRole || selectedEmployeeRole==='All Employee'){
          setEmployeeListColumn(employeeListColumnArr);
          setFilteredEmployeeDetail([...allEmployeeDetail].reverse())
        }else if(selectedEmployeeRole==='Teaching'){
          setEmployeeListColumn(facultyListColumnArr);
          const detailsOfFaculty = allEmployeeDetail.filter(employee=>employee.Role==='Teaching')
          setFilteredEmployeeDetail([...detailsOfFaculty].reverse())
        }else if(selectedEmployeeRole==='Admin Staff'){
          const fiteredAdminStaffArr = allEmployeeDetail.filter(employee=> employee.Role==='Admin Staff');
          setEmployeeListColumn(employeeListColumnArr);
          setFilteredEmployeeDetail([...fiteredAdminStaffArr].reverse())
        }else{
          const fiteredNonTeachingStaff = allEmployeeDetail.filter(employee=> employee.Role==='Non Teaching')
          setEmployeeListColumn(employeeListColumnArr);
          setFilteredEmployeeDetail([...fiteredNonTeachingStaff].reverse())
        }
  },[allEmployeeDetail])

  // Effect hook to fetch allEmployeelist
  useEffect(() => {
    async function getEmployeeDetails() {
      try {
        const response = await fetch(
          "http://localhost:4000/allEmployeeDetailsArr"
        )
        const detailsOfAllEmployees = await response.json();
        setAllEmployeeDetail(detailsOfAllEmployees)
      } catch (err) {
        console.log(err);
      }
    }
    getEmployeeDetails();
  },[modalClosed]);
  function handleModal() {
    setModalClosed(true); // Update the state variable and whole component when modal is closed
  }

  return (
    <div className="flex flex-col gap-4 w-full  overflow-hidden rounded-2xl">
      {/* Component for selecting employee role */}
      <EmployeeListButtons
        handleselectedEmployeeRole={handleselectedEmployeeRole}
        handleModal={handleModal}
        allEmployeeDetail={allEmployeeDetail}
      />
      {/* Component for displaying employee list table */}
      <EmployeeListTable
        employeeListColumn={employeeListColumn}
        employeeDetails={filteredEmployeeDetail}
       selectEmployeeRole={allEmployeeDetail}
      />
    </div>
  );
}
