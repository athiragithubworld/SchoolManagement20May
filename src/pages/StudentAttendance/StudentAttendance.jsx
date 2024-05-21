// This page is done by swati.
import { useEffect, useState } from "react";
import Buttons from "../../components/Buttons/StudentAttendanceButtons/StudentAttendanceButtons";
import Table from "../../components/Tables/StudentAttendanceTable/StudentAttendanceTable";
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";

const StudentAttendance = () => {
  const [studentAttendanceDetailsArr, setStudentAttendanceDetailsArr] =
    useState([]);
  const [filteredData, setFilteredData] = useState(studentAttendanceDetailsArr);

  useEffect(() => {
    document.title = "Student Attendance"; // Set the title to 'Page Title'
    fetchData();
    return () => {
      document.title = "School"; // Reset the title
    };
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:4000/StudentAttendance");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      } else {
        const attendanceData = await response.json();
        setStudentAttendanceDetailsArr(attendanceData);
      }
    } catch (error) {
      // setError(error.message);
      console.log(error.message);
    }
  };



  const studentAttendanceColumnArr = [
    {
      label: "Name",
      value: "name",
      downicon: <MdOutlineKeyboardArrowDown />,
      upicon: <MdOutlineKeyboardArrowUp />,
    },
    {
      label: "Reg.No",
      value: "regNo",
      downicon: <MdOutlineKeyboardArrowDown />,
      upicon: <MdOutlineKeyboardArrowUp />,
    },
    {
      label: "Present Days",
      value: "presentDays",
      downicon: <MdOutlineKeyboardArrowDown />,
      upicon: <MdOutlineKeyboardArrowUp />,
    },
    {
      label: "Absent Days",
      value: "absentDays",
      downicon: <MdOutlineKeyboardArrowDown />,
      upicon: <MdOutlineKeyboardArrowUp />,
    },
    {
      label: "Percentage",
      value: "percentage",
      downicon: <MdOutlineKeyboardArrowDown />,
      upicon: <MdOutlineKeyboardArrowUp />,
    },
    {
      label: "Status",
      value: "status",
      downicon: "",
      upicon: "",
    },
  ];

  //function to get class details while filtering or submitting
  const getClassData = (selectedClass, selectedSection) => {
    const classData = studentAttendanceDetailsArr.filter((obj) => {
      return obj.className === selectedClass && obj.section === selectedSection;
    });
    return classData;
  };

  //get the data of selected class
  const handleChangeClass = async (selectedClass, selectedSection) => {
    if (!selectedClass || !selectedSection) {
      return;
    } else {
      const classData = getClassData(selectedClass, selectedSection);
      if (classData.length === 0) {
        setFilteredData([]);
      } else {
        const classValues = Object.values(classData[0]).filter((obj) => {
          return typeof obj === "object";
        });
        setFilteredData(classValues);
      }
    }
  };

  //get the data of selected section
  const handleChangeSection = (selectedClass, selectedSection) => {
    if (!selectedClass || !selectedSection) {
      return;
    } else {
      const classData = getClassData(selectedClass, selectedSection);
      if (classData.length === 0) {
        setFilteredData([]);
      } else {
        const classValues = Object.values(classData[0]).filter((obj) => {
          return typeof obj === "object";
        });
        setFilteredData(classValues);
      }
    }
  };

  //function to handle submmission of attendance details
  const submitHandler = async (selectedClass, selectedSection) => {
    const classData = getClassData(selectedClass, selectedSection);
    const id = classData[0].id;
    const updatedData = filteredData.reduce((acc, item, index) => {
      acc[index] = item;
      return acc;
    }, {});
    await fetch(`http://localhost:4000/StudentAttendance/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...updatedData,
        className: selectedClass,
        section: selectedSection,
        id,
      }),
    });
    fetchData();
  };

  //function to handle status change
  const statusHandler = async (student, status) => {
    const newFilteredData = filteredData.map((rowData) => {
      if (rowData.id === student.id) {
        return { ...rowData, status: status };
      } else {
        return { ...rowData };
      }
    });
    setFilteredData(newFilteredData);
  };

  return (
    <div className="flex flex-col gap-4 w-full overflow-hidden rounded-2xl ">
      <Buttons
        handleChangeClass={handleChangeClass}
        handleChangeSection={handleChangeSection}
        submitHandler={submitHandler}
        filteredData={filteredData}
      />
      <Table
        statusHandler={statusHandler}
        studentAttendanceColumnArr={studentAttendanceColumnArr}
        studentAttendanceDetailsArr={filteredData}
      />
    </div>
  );
};

export default StudentAttendance;
