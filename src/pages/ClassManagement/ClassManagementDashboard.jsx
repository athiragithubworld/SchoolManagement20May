// created by Athira
import ClassManagementAttendanceSummary from "../../components/ClassManagement/Dashboard/ClassManagementAttendanceSummary";
import Teachers from "../../components/ClassManagement/Dashboard/Teachers";
import ClassRepresentative from '../../components/ClassManagement/Dashboard/ClassRepresentative'
import ClassManagementBirthday from "../../components/ClassManagement/Dashboard/ClassManagementBirthday";
import ClassManagementAbsentees from "../../components/ClassManagement/Dashboard/ClassManagementAbsentees";
import ClassManagementDashboardButtons from "../../components/ClassManagement/Dashboard/ClassManagementDashboardButtons";
import { useEffect, useState } from "react";
import ClassRepresentativePopup from "../../components/Popup/ClassRepresentativePopup/ClassRepresentativePopup";


const ClassManagementDashboard = () => {
const [selectedClass, setSelectedClass] = useState("");
const [selectedSection, setSelectedSection] = useState("");
const [showClassRepresentativePopup, setShowClassRepresentativePopup] =
  useState(false);
const [classRepresentativeDetails, setClassRepresentativeDetails] = useState();
const [classRepresentative, setClassRepresentative] = useState();


useEffect(() => {
  // document.title = "Student List"; // Set the title to 'Page Title'
  const fetchData = async () => {
    try {
      const response = await fetch(
        "http://localhost:4000/ClassManagementDashboardStudentList"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const jsonData = await response.json();
      console.log(jsonData,"json")
      let onlyClassRepresentatives;
      if (selectedClass !== "" && selectedSection === "") {
        onlyClassRepresentatives = jsonData.filter(
          (student) =>
            student.className === selectedClass &&
            student.classRepresentative === "Yes"
        );
      } else if (selectedClass !== "" && selectedSection !== "") {
        onlyClassRepresentatives = jsonData.filter(
          (student) =>
            student.className === selectedClass &&
            student.section === selectedSection &&
            student.classRepresentative === "Yes"
        );
      } else {
        onlyClassRepresentatives = jsonData.filter(
          (student) => student.classRepresentative === "Yes"
        );
      }
      setClassRepresentativeDetails(onlyClassRepresentatives);
    } catch (error) {
      console.log(error.message);
    }
  };
  fetchData();
  /* return () => {
       document.title = "School"; // Reset the title
     };*/
}, [selectedClass, selectedSection, showClassRepresentativePopup]);
  
  
  
  const handleClassChange = (studentClass) => {
    setSelectedClass(studentClass);
  };
  const handleSectionChange = (section) => {
    setSelectedSection(section);
  };
  const handleSelectedClassrepresentative = (classRepresentative) => {
    setClassRepresentative(classRepresentative);
  };

  // const [showClassRepresentativePopup,setShowClassRepresentativePopup] = useState(false);

  return (
    <div className="flex overflow-y-auto">
      <div className="grid grid-rows-[.01fr,1fr] gap-4 w-full">
        {/* sravathi created */}
        {/* <ClassManagementDashboardButtons /> */}
        <ClassManagementDashboardButtons
          handleClass={handleClassChange}
          handleSection={handleSectionChange}
        />
        <div className="overflow-y-scroll w-full scrollbarnone h-full">
          <div className="grid grid-cols-[5fr 2fr] gap-[18px]  grid-flow-col h-fit  max-[1280px]:grid-flow-row p-1">
            <div className=" col-span-6 grid  grid-cols-3 gap-[18px] h-full">
              {/* By Athira */}
              <ClassManagementAttendanceSummary />
              {/* By Sravanthi */}
              <Teachers />
              {/* By haider */}
              
                <ClassRepresentative
                  classRepresentativeDetails={classRepresentativeDetails}
                  selectedClassRepresentative={
                    handleSelectedClassrepresentative
                  }
                  setShowClassRepresentativePopup={
                    setShowClassRepresentativePopup
                  }
                />
              
              {/* <ClassRepresentative
                setShowClassRepresentativePopup={
                  setShowClassRepresentativePopup
                }
              /> */}
            </div>
            <div className="max-[1280px]:col-span-6 grid  grid-cols-1 gap-[18px] h-full">
              <div className="xl:col-span-2 sm:col-span-6 h-full">
                {/* Design Athira and functionality Swati */}
                <ClassManagementBirthday />
              </div>
              <div className="xl:col-span-2 sm:col-span-6 h-full">
                {/* By Swati */}
                <ClassManagementAbsentees />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="z-30">
        {showClassRepresentativePopup && (
          <ClassRepresentativePopup
            setShowClassRepresentativePopup={setShowClassRepresentativePopup}
            previousClassRepresentative={classRepresentative}
          />
        )}
      </div>
    </div>

    // Haider implemented flex
    // <div className="flex flex-col gap-3  w-full">
    //   {/* sravathi created */}
    //   <ClassManagementDashboardButtons />

    //   <div className="flex flex-col w-full gap-4 h-fit xl:flex-row overflow-y-auto">
    //     <div className="flex flex-col gap-4 w-full xl:w-[70%] h-fit">
    //       {/* By Athira */}
    //       <ClassManagementAttendanceSummary />
    //       {/* By Sravanthi */}
    //       <Teachers />
    //       {/* By haider */}
    //       <ClassRepresentative />
    //     </div>
    //     <div className="flex flex-col gap-4 w-full xl:w-[30%] h-fit">
    //       {/* Design Athira and functionality Swati */}
    //       <ClassManagementBirthday />
    //       {/* By Swati */}
    //       <ClassManagementAbsentees />
    //     </div>
    //   </div>
    // </div>
  );
};

export default ClassManagementDashboard;
