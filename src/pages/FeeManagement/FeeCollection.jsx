//Created by Gunjan
import React,{ useEffect, useState } from "react";
import StudentFeeListTable from "../../components/Tables/FeeManagementTable/StudentFeeListTable";
import StudentFeeCollectionButtons from "../../components/Buttons/FeeManagementButtons/StudentFeeCollectionButton";

const FeeCollection = () => {
  const [classOption, setClassOption] = useState("");
  const [sectionOption, setSectionOption] = useState("");
  const [tableData, setTableData] = useState([]);
  const [filteredData, setFilteredData] = useState(tableData);
  const [refetch,setRefetch] = useState(false);

  useEffect(() => {
    document.title = "Student List"; // Set the title to 'Page Title'    
    return () => {
      document.title = "School"; // Reset the title
    };
  }, []);


  const fetchData = async () => {   ///for fetching data 
    try {
      const response = await fetch("http://localhost:4000/StudentFeeList");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const jsonData = await response.json();
      setTableData(jsonData);
      const paidStudents = jsonData.filter(
        (student) => student.status === "Unpaid"
      );
      setFilteredData(paidStudents);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleDataRefetch=()=>{    //for handling data refecth on changes made
    setRefetch(!refetch);
  }

  useEffect(()=>{
  fetchData();
  
  // console.log('first use effect in fee collection');
  // },[handleUpdateEachRowDetails]) using this turns top popup off
  },[refetch])

  //filter for class
  const handleChangeClass = (selectedClass) => {
    setClassOption(selectedClass);
    if (sectionOption === "") {
      const filteredTable = tableData.filter((data) => {
        return data.className === selectedClass && data.status === "Unpaid";
      });
      setFilteredData(filteredTable);
    } else {
      const filteredTable = tableData.filter((data) => {
        return (
          data.className === selectedClass &&
          data.section === sectionOption &&
          data.status === "Unpaid"
        );
      });
      setFilteredData(filteredTable);
    }
  };

  //filter for section
  const handleChangeSection = (selectedSection) => {
    setSectionOption(selectedSection);
    const filteredTable = tableData.filter((data) => {
      return (
        data.status === "Unpaid" &&
        data.className === classOption &&
        data.section === selectedSection
      );
    });
    setFilteredData(filteredTable);
  };

  function handleUpdateEachRowDetails(updatedRowDetails, updateId) {   //for handling updating the rows
    const index = tableData.findIndex((data) => data.id === updateId);
    tableData[index] = {
      id: tableData[index].id,
      ...updatedRowDetails,
    };
    // const filterIndex = filteredData.findIndex((data) => data.id === updateId);
    // filteredData[filterIndex] = {
    //   id: filteredData[filterIndex].id,
    //   ...updatedRowDetails,
    // };
  }


  return (
    <div className="flex flex-col gap-4 w-full overflow-hidden rounded-2xl mt-[5px]">
      <StudentFeeCollectionButtons
        tableData={filteredData}
        filterOption="Unpaid"
        handleChangeClass={handleChangeClass}
        handleChangeSection={handleChangeSection}
      />
      <StudentFeeListTable
        tableData={filteredData}
        filterOption="Unpaid"
        handleUpdateEachRowDetails={handleUpdateEachRowDetails}
        handleRefetch={handleDataRefetch}
      />
    </div>
  );
};

export default FeeCollection;
