import React, { useEffect, useState } from 'react';
import AttendanceRegisterButtons from '../../components/Buttons/AttendanceRegisterButtons/AttendanceRegisterButtons';
import Table from '../../components/Tables/AttendanceRegisterTable/AttendanceRegisterTable';
import styles from '../../styles/MainComponent.module.css';
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";

const AttendanceRegister = () => {
  useEffect(() => {
    document.title = "Attendance Register";
    return () => {
      document.title = "School";
    };
  }, []);
  //  columns for the attendance register table
  const AttendanceRegArr = [
    // { label: "S.no", value: "no" },
    {
      label: "Student Name",
      value: "studentName",
      downicon: <MdOutlineKeyboardArrowDown />,
      upicon: <MdOutlineKeyboardArrowUp />,
    },
    {
      label: "Roll No",
      value: "rollNo",
      downicon: <MdOutlineKeyboardArrowDown />,
      upicon: <MdOutlineKeyboardArrowUp />,
    },
    {
      label: "Total Working Days",
      value: "totalWorking",
      downicon: <MdOutlineKeyboardArrowDown />,
      upicon: <MdOutlineKeyboardArrowUp />,
    },
    {
      label: "Days Present",
      value: "present",
      downicon: <MdOutlineKeyboardArrowDown />,
      upicon: <MdOutlineKeyboardArrowUp />,
    },
    {
      label: "Days Absent",
      value: "absent",
      downicon: <MdOutlineKeyboardArrowDown />,
      upicon: <MdOutlineKeyboardArrowUp />,
    },
    {
      label: "Percent of days (%)",
      value: "percent",
      downicon: "",
      upicon: "",
    },
  ];

  

  const [attendanceRegColumn, setAttendanceRegColumn] = useState(AttendanceRegArr); // for columns of the table
  const [attendanceRegdetails, setAttendanceRegDetails] = useState([]); // attendance register details
  const [selectedRows, setSelectedRows] = useState([]);// State for selected rows
  const[filtered,setFiltered]=useState([]);// State for filtered attendance register details based on class/section
  // filter data based  on class and section
  const handleChangeClass = async (selectedClass) => {
    if (!selectedClass) {
      return;
    } else {
      const newdata=attendanceRegdetails.filter(item =>{
        return item.className==selectedClass 
      })
      console.log("class",selectedClass)
      setFiltered(newdata);
    }
  };
  const handleChangeSection = async (selectedClass,selectedSection) => {
    if (!selectedClass || !selectedSection) {
      return;
    } else {
      const newdata=attendanceRegdetails.filter(item =>{
        return item.className==selectedClass && item.section == selectedSection
      })
      console.log("class",selectedSection)
      setFiltered(newdata);
    }
    
  };
 // Fetch attendance register data from server 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/AttendanceRegister");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setAttendanceRegDetails(jsonData);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);
  // deleting functionality based on selected rows
  const handleDeleteSelectedRows = async () => {
    try {
        if (!selectedRows || selectedRows.length === 0) {
            console.error('No rows selected for deletion');
            return;
        }

        // Iterate over each selected row and send a DELETE request for each ID
        const deletePromises = selectedRows.map(async id => {
            const response = await fetch(`http://localhost:4000/AttendanceRegister/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error(`Failed to delete row with ID ${id}`);
            }
        });

        // Wait for all DELETE requests to complete
        await Promise.all(deletePromises);

        // Update attendanceRegdetails after successful deletion
        setAttendanceRegDetails(attendanceRegdetails.filter(data => !selectedRows.includes(data.id)));
    } catch (error) {
        console.error('Error deleting rows:', error);
    }
};


  return (
    <div className="flex flex-col gap-4 w-full overflow-hidden rounded-2xl">
      <AttendanceRegisterButtons
        handleDeleteSelectedRows={handleDeleteSelectedRows}
        handleChangeSection={handleChangeSection}
        handleChangeClass={handleChangeClass}
        selectedRows={selectedRows}
        filtered={filtered}
      />
      <Table
        attendanceRegColumn={attendanceRegColumn}
        attendanceRegdetails={filtered}
        selectedRows={selectedRows}
        setSelectedRows={setSelectedRows}
      />
    </div>
  );
};

export default AttendanceRegister;

