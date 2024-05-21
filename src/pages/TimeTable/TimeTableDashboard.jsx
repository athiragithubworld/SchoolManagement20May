import { useState, useEffect } from "react"; // Importing necessary dependencies from React
import classes from "../../styles/TimeTableDashboard.module.css"; // Importing CSS module for styling
import TimeTableButtons from "../../components/Buttons/TimeTableButtons/TimeTableButtons"; // Importing TimeTableButtons component
import Faculty from "../../components/TimetableDashboard/Faculty/Faculty"; // Importing Faculty component
import TimeTableGrid from "../../components/Tables/TimeTable/TimeTableGrid"; // Importing TimeTableGrid component
// import { useLocation } from "react-router-dom";

// Functional component TimeTableDashboard
export default function TimeTableDashboard() {
  const [timeTableDetails, setTimeTableDetails] = useState([]); // State to hold the faculty details

  // state for class and section and for viewTabledata
  const [timeTableClass, setTimeTableClass] = useState();
  const [timeTableSection, setTimeTableSection] = useState();
  const [viewTimeTableData, setViewTimeTableData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [refetch, setRefetch] = useState(false);

  // const pathname = useLocation().pathname;

  function handleRefetch() {
    setRefetch((prev) => !prev);
  }

  function handleViewTimeTableData(classvalue, sectionvalue) {
    // setViewTimeTableData(data)
    setTimeTableClass(classvalue);
    setTimeTableSection(sectionvalue);
  }

  // console.log(object)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/TimeTable");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();

        setViewTimeTableData(jsonData);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [refetch]);

  useEffect(() => {
    const filldata = viewTimeTableData.filter(
      (item) =>
        item.classTable === timeTableClass && item.section === timeTableSection
    );
    setFilteredData(filldata);
  }, [viewTimeTableData, timeTableClass, timeTableSection]);

  useEffect(() => {
    let nestedObject;
    let arr = [];
    for (const key in filteredData[0]) {
      if (typeof filteredData[0][key] === "object") {
        nestedObject = filteredData[0][key];
        arr.push(nestedObject);
      }
    }
    setTimeTableDetails(arr);
  }, [filteredData]);

  function handleTimeTableDetails(period, action = "add") {
    if (action === "del") {
      setTimeTableDetails((timeTable) =>
        timeTable.filter(
          (ele) => ele.day !== period.day || ele.timing !== period.timing
        )
      );
    } else {
      setTimeTableDetails((timeTable) => [...timeTable, period]);
    }
  }

  return (
    <div className={classes.tablegrid}>
      {/* Container for the time table dashboard */}
      <TimeTableButtons
        handleRefetch={handleRefetch}
        timeTableDetails={timeTableDetails}
        handleViewTimeTableData={handleViewTimeTableData}
        filteredData={filteredData}
      />
      {/* Rendering TimeTableButtons component */}
      <TimeTableGrid
        timeTableDetails={timeTableDetails}
        handleTimeTableDetails={handleTimeTableDetails}
        timeTableClass={timeTableClass}
        timeTableSection={timeTableSection}
        filteredData={filteredData}
      />
      {/* Rendering TimeTableGrid component */}
      <Faculty /> {/* Rendering Faculty component */}
    </div>
  );
}
