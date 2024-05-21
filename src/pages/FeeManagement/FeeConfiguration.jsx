import { useEffect, useState } from "react";

import FeeConfigurationTable from "../../components/Tables/FeeManagementTable/FeeConfigurationTable";
import FeeConfigurationButtons from "../../components/Buttons/FeeManagementButtons/FeeConfigurationButtons";
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
const FeeConfiguration = () => {
  useEffect(() => {
    document.title = "Student Fee"; // Set the title to 'Page Title'
    return () => {
      document.title = "School"; // Reset the title
    };
  }, []);

 

  const studentFeeColumnArr = [
    {
      label: "Class",
      value: "className",
      downicon: <MdOutlineKeyboardArrowDown />,
      upicon: <MdOutlineKeyboardArrowUp />,
    },
    {
      label: "Tution Fee",
      value: "tution",
      downicon: <MdOutlineKeyboardArrowDown />,
      upicon: <MdOutlineKeyboardArrowUp />,
    },
    {
      label: "Books Fee",
      value: "books",
      downicon: <MdOutlineKeyboardArrowDown />,
      upicon: <MdOutlineKeyboardArrowUp />,
    },
    {
      label: "Uniform Fee",
      value: "uniform",
      downicon: <MdOutlineKeyboardArrowDown />,
      upicon: <MdOutlineKeyboardArrowUp />,
    },
    {
      label: "Transportation Fee",
      value: "transport",
      downicon: <MdOutlineKeyboardArrowDown />,
      upicon: <MdOutlineKeyboardArrowUp />,
    },
    {
      label: "Total Fee",
      value: "total",
      downicon: "",
      upicon: "",
    },
  ];

 
  const [studentFeeColumn, setStudentFeeColumn] = useState(studentFeeColumnArr);
  const [studentFeeDetails, setStudentFeeDetails] = useState([]);
  // const [filteredFeeDetails,setFilteredFeeDetails] = useState([]);
  const [refetch,setRefetch] = useState(false);



  // const handleYearFilter=(data)=>{     ///function for filtering list according to the year
  //     if(data === "20-21")
  //     {
  //         const filtered = studentFeedetails.filter((item)=>{
  //           const itemDate = new Date(item.feeDate);
  //           return itemDate >= new Date('2020-01-01') && itemDate<= new Date('2021-12-31');
  //         })
  //         setFilteredFeeDetails(filtered);
  //     } else if(data === "21-22")
  //       {
  //           const filtered = studentFeedetails.filter((item)=>{
  //             const itemDate = new Date(item.feeDate);
  //             return itemDate >= new Date('2021-01-01') && itemDate<= new Date('2022-12-31');
  //           })
  //           setFilteredFeeDetails(filtered);
  //       } else if(data === "22-23")
  //         {
  //             const filtered = studentFeedetails.filter((item)=>{
  //               const itemDate = new Date(item.feeDate);
  //               return itemDate >= new Date('2022-01-01') && itemDate<= new Date('2023-12-31');
  //             })
  //             setFilteredFeeDetails(filtered);
  //         }else if(data === "23-24")
  //           {
  //               const filtered = studentFeedetails.filter((item)=>{
  //                 const itemDate = new Date(item.feeDate);
  //                 return itemDate >= new Date('2023-01-01') && itemDate<= new Date('2024-12-31');
  //               })
  //               setFilteredFeeDetails(filtered);
  //           }  
  // }

  
  const handleStudentFeeColumn = (newColumn) => {
    setStudentFeeColumn((columns) => [...columns, newColumn]);
  };

  const handleAddFeeDetails = (newDetails) => {
    const updatedDetailsArray = [...studentFeeDetails];
    updatedDetailsArray.push({
      id: Math.random(),
      ...newDetails,
    });
    setStudentFeeDetails(updatedDetailsArray);
    setRefetch(!refetch);
  };

  function handleDeleteStudentFeeDetails() {
    setStudentFeeDetails([]);
  }

  function handleDeleteEachRowDetails(id) {
    const updatedFeeDetails = studentFeeDetails.filter((detail) => {
      return detail.id !== Number(id);
    });
    setStudentFeeDetails(updatedFeeDetails);
    setRefetch(!refetch);
  }

  function handleUpdateEachRowDetails(updatedRowDetails, updateId) {
    const index = studentFeeDetails.findIndex((data) => data.id === updateId);
    studentFeeDetails[index] = {
      id: studentFeeDetails[index].id,
      ...updatedRowDetails,
    };

    setRefetch(!refetch);
  }

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:4000/StudentFeeDetails");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const jsonData = await response.json();

      setStudentFeeDetails(jsonData);
    } catch (error) {
      // console.log(error.message);
    }
  };
  
  useEffect(() => {
    
    fetchData();
  }, [refetch]);            //added this for refreshing as soon as data is added. adding this disables popup

  // console.log("object")

  return (
    <div className="flex flex-col w-full h-full overflow-y-hidden rounded-2xl">
      {/* <SalaryDetailsButton
        handleStudentFeeColumn={handleStudentFeeColumn}
        handleDeleteStudentFeeDetails={handleDeleteStudentFeeDetails}
      /> */}
      <FeeConfigurationButtons
        handleStudentFeeColumn={handleStudentFeeColumn}
        handleDeleteStudentFeeDetails={handleDeleteStudentFeeDetails}
        handleAddNew={handleAddFeeDetails}
        studentFeedetails={studentFeeDetails}
      />
      <FeeConfigurationTable
        studentFeeColumn={studentFeeColumn}
        studentFeedetails={studentFeeDetails}
        handleDeleteEachRowDetails={handleDeleteEachRowDetails}
        handleUpdateEachRowDetails={handleUpdateEachRowDetails}
      />
    </div>
  );
};

export default FeeConfiguration;
