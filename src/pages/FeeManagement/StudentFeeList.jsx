import { useEffect, useState } from "react";
import StudentFeeListTable from "../../components/Tables/FeeManagementTable/StudentFeeListTable";
import styles from "../../styles/MainComponent.module.css";
import StudentFeeListButton from "../../components/Buttons/FeeManagementButtons/StudentFeeListButton";
import FeeCollectionPopup from "../../components/Popup/StudentFeePopup/FeeCollectionPopup";
import { Modal } from "antd";

const StudentFeeList = () => {
  const [filterOption, setFilterOption] = useState("All Students");
  const [classOption, setClassOption] = useState("");
  const [sectionOption, setSectionOption] = useState("");
  const [tableData, setTableData] = useState([]);
  const [filteredData, setFilteredData] = useState(tableData);

  useEffect(() => {
    document.title = "Student List"; // Set the title to 'Page Title'
    return () => {
      document.title = "School"; // Reset the title
    };
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:4000/StudentFeeList");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const jsonData = await response.json();
      setTableData(jsonData);
      setFilteredData(jsonData);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(()=>{
    
    fetchData();
    // console.log("use effect in student fee list");
  },[])

  //filter for all,unpaid and paid
  const handleChangeFilter = (selectedFilter) => {
    setFilterOption(selectedFilter);
    if (
      selectedFilter === "All Students" &&
      classOption === "" &&
      sectionOption === ""
    ) {
      setFilteredData(tableData);
    } else if (
      selectedFilter === "All Students" &&
      classOption !== "" &&
      sectionOption === ""
    ) {
      const filteredTable = tableData.filter((data) => {
        return data.className === classOption;
      });
      setFilteredData(filteredTable);
    } else if (selectedFilter === "All Students") {
      const filteredTable = tableData.filter((data) => {
        return data.className === classOption && data.section === sectionOption;
      });
      setFilteredData(filteredTable);
    } else if (classOption === "" && sectionOption === "") {
      const filteredTable = tableData.filter((data) => {
        return data.status === selectedFilter;
      });
      setFilteredData(filteredTable);
    } else if (classOption !== "" && sectionOption === "") {
      const filteredTable = tableData.filter((data) => {
        return data.status === selectedFilter && data.className === classOption;
      });
      setFilteredData(filteredTable);
    } else {
      const filteredTable = tableData.filter((data) => {
        return (
          data.status === selectedFilter &&
          data.className === classOption &&
          data.section === sectionOption
        );
      });
      setFilteredData(filteredTable);
    }
  };

  //filter for class
  const handleChangeClass = (selectedClass) => {
    setClassOption(selectedClass);
    if (filterOption === "All Students" && sectionOption === "") {
      const filteredTable = tableData.filter((data) => {
        return data.className === selectedClass;
      });
      setFilteredData(filteredTable);
    } else if (filterOption === "All Students") {
      const filteredTable = tableData.filter((data) => {
        return (
          data.className === selectedClass && data.section === sectionOption
        );
      });
      setFilteredData(filteredTable);
    } else if (filterOption !== "All Students" && sectionOption === "") {
      const filteredTable = tableData.filter((data) => {
        return data.status === filterOption && data.class === selectedClass;
      });
      setFilteredData(filteredTable);
    } else {
      const filteredTable = tableData.filter((data) => {
        return (
          data.status === filterOption &&
          data.className === selectedClass &&
          data.section === sectionOption
        );
      });
      setFilteredData(filteredTable);
    }
  };

  //filter for section
  const handleChangeSection = (selectedSection) => {
    if (filterOption === "All Students") {
      setSectionOption(selectedSection);
      const filteredTable = tableData.filter((data) => {
        return (
          data.className === classOption && data.section === selectedSection
        );
      });
      setFilteredData(filteredTable);
    } else {
      setSectionOption(selectedSection);
      const filteredTable = tableData.filter((data) => {
        return (
          data.status === filterOption &&
          data.className === classOption &&
          data.section === selectedSection
        );
      });
      setFilteredData(filteredTable);
    }
  };


  return (
    <div className="flex flex-col gap-4 w-full h-full overflow-y-hidden rounded-2xl">
      <StudentFeeListButton
        handleChangeFilter={handleChangeFilter}
        handleChangeClass={handleChangeClass}
        handleChangeSection={handleChangeSection}
        tableData={filteredData}
      />
      <StudentFeeListTable
        tableData={filteredData}
        filterOption={filterOption}
      />
    </div>
  );
};

export default StudentFeeList;
