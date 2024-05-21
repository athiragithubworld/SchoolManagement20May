// Impleneted by Athira , buttons from sravanthi

import { useEffect, useState, useRef } from "react";
import classes from "../../../styles/TimeTableButton.module.css";
import TimeSettingModal from "../../Popup/TimeTablePopup/TimeSettingModal";
import Modal from "../../Modal/Modal";
import { useLocation, useNavigate } from "react-router-dom";
import { MdOutlineFileDownload } from "react-icons/md";
// import { GoShareAndroid } from "react-icons/go";
import { PiNotePencilLight } from "react-icons/pi";
import { FiSave } from "react-icons/fi";
import styles from "../../../styles/AttendanceRegisterButtons.module.css";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import DeleteFacultySalaryDetails from "../../Popup/SalaryPopup/DeleteFacultySalaryDetails";
import { GoDownload } from "react-icons/go";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import useFileDownloader from "../../CustomHooks/Download";
import Notification from "../../../ui/Notification";
import useTimeTableDownloader from "../../CustomHooks/DownloadTimeTable";

export default function TimeTableButtons({
  timeTableDetails,
  handleViewTimeTableData,
  filteredData,
  handleRefetch,
}) {
  const [isTimerOpen, setIsTimerOpen] = useState(false);
  const [isDeletePopupOpen, setDeletePopupOpen] = useState(false);
  const [deleteTimetable, setDeleteTimetable] = useState(false);
  const navigate = useNavigate();

  // State and refs for managing dropdowns
  const [isClassOpen, setIsClassOpen] = useState(false);
  const [classTable, setClassTable] = useState(undefined);
  const [isSectionOpen, setIsSectionOpen] = useState(false);
  const [section, setSection] = useState(undefined);
  const classDropdownRef = useRef(null);
  const sectionDropdownRef = useRef(null);
  const [showAlert, setShowAlert] = useState(false);
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");
  const download = useTimeTableDownloader();

  // Function to toggle class dropdown
  const toggleClassDropdown = () => {
    setIsClassOpen(!isClassOpen);
    setIsSectionOpen(false);
  };
  // Function to toggle section dropdown
  const toggleSectionDropdown = () => {
    setIsSectionOpen(!isSectionOpen);
    setIsClassOpen(false);
  };

  // Function to handle class selection
  const handleClassSelect = (classOption) => {
    setClassTable(classOption);
    handleViewTimeTableData(classTable, section);
    setIsClassOpen(false);
  };
  // Function to handle section selection
  const handleSectionSelect = (sectionOption) => {
    handleViewTimeTableData(classTable, section);
    setSection(sectionOption);
    setIsSectionOpen(false);
  };

  const handleAlert = (status, message) => {
    setShowAlert(true);
    setStatus(status);
    setMessage(message);
  };

  //export to excel
  const exportToExcel = () => {
    let downloadData = [];
    for (let i = 0; i < timeTableDetails.length; i++) {
      const { image, className, ...newObj } = timeTableDetails[i];
      downloadData.push(newObj);
    }
    if (!classTable || !section) {
      // alert("Select class and section!!");
      handleAlert("fail", "Select class and section!!");
      return;
    } else if (timeTableDetails.length === 0) {
      // alert("No data");
      handleAlert("fail", "No data!!");
    } else {
      download(
        downloadData,
        `TimeTable ${classTable} ${section}`,
        classTable + section
      );
     
    }
  };

  // function having the design for menu icon(edit, share, delete).
  function IconButton({ className }) {
    const [showDropdown, setShowDropdown] = useState(false);
    const ref = useRef(null);
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          setShowDropdown(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);

    return (
      <div className="flex flex-col" ref={ref}>
        <div
          onClick={() => setShowDropdown((prevState) => !prevState)}
          className={`flex justify-center items-center p-2 w-10 h-10 bg-white rounded-2xl border border-solid border-stone-300 cursor-pointer ${className}`}
        >
          <img
            src={
              "https://cdn.builder.io/api/v1/image/assets/TEMP/71951dafcb37cb60651b14b34087ee7264766f4fab0c5ff297e941864f350c14?apiKey=8d87b58e79fa4e2d9738c0aa2c095387&"
            }
            alt=""
            className="w-6 aspect-square"
          />
        </div>
        {showDropdown && (
          <div className="flex flex-col justify-left pl-2 pr-2 pt-2 pb-2 text-lg leading-9 whitespace-nowrap bg-white rounded-2xl border border-solid border-stone-300 absolute mt-12 ml-[-80px]">
            <div
              className={`group flex gap-2 justify-between rounded-xl items-center cursor-pointer hover:bg-[#009dfd] hover:text-white p-1 hover:pl-2 hover:pr-2`}
              onClick={exportToExcel}
            >
              <div>Download</div>
              {/* <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1abd5793beba4dce40c9b249b03a3c11548a27e0f16871929ff434fc2cee672?apiKey=8d87b58e79fa4e2d9738c0aa2c095387&"
                alt={`download icon`}
                className="shrink-0 my-auto w-6 aspect-square"
              /> */}
              <GoDownload
                className={` group-hover:text-white h-5 w-[17.1px] text-[#a6a6a6]`}
              />
            </div>
            <div
              onClick={openModal}
              className={`group flex gap-2 justify-between rounded-xl items-center cursor-pointer hover:bg-[#009dfd] hover:text-white p-1 hover:pl-2 hover:pr-2`}
            >
              <div>Edit</div>
              {/* <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/65a189dfb6f868722ac60d6733299f65ddf59f2dd6c99dc222528ac7b8f56d32?apiKey=8d87b58e79fa4e2d9738c0aa2c095387&"
                alt={`edit icon`}
                className="shrink-0 my-auto w-6 aspect-square fill-white"
              /> */}
              <FaRegEdit
                className={`group-hover:text-white h-5 w-[17.1px] text-[#a6a6a6]`}
              />
            </div>
          </div>
        )}
      </div>
    );
  }

  // Get current path name using useLocation hook
  const pathname = useLocation().pathname;

  // Function to open time setting modal
  const openModal = () => {
    // setIsTimerOpen(true);
    navigate("/updatetimetable");
  };

  // Function to close modals
  const closeModal = () => {
    setIsTimerOpen(false);
    setDeletePopupOpen(false);
  };

  // Effect hook to fetch time table data when classTable or section changes
  useEffect(() => {
    handleViewTimeTableData(classTable, section);
  }, [classTable, section, handleViewTimeTableData]);

  // Function to handle delete timetable
  function deleteTimetableHandler(value) {
    setDeleteTimetable(value);
  }

  // Function to handle form submission for saving timetable details
  const submitTimeTableDetailsHandler = async (e) => {
    e.preventDefault();

    // Validation checks
    if (!classTable || !section) {
      // alert("Please Select class and section");
      handleAlert("fail", "Please Select class and section");
      return;
    }
    if (timeTableDetails.length < 1 && filteredData.length < 1) {
      // alert("No data");
      handleAlert("fail", "No data");
      return;
    }
    if(timeTableDetails.length!==54)  ///for validating if time table is filled completely or not
      {
        alert("please fill the time table completely");
      }
   else{
    // Check if there is existing data and ask for confirmation to delete it
    if (filteredData.length > 0) {
      const id = filteredData[0].id;

      const confirmation = window.confirm(
        "Do you want to remove the previous data saved ?"
      );

      if (confirmation) {
        deleteData(id);
      } else {
        return;
      }
    }

   
    // Prepare timeTable object
    const timeTable = { ...timeTableDetails, classTable, section };

    // Post data to server
    await postData(timeTable);
    handleRefetch();}
  };

  // Function to delete data from server
  const deleteData = async (itemId) => {
    try {
      const response = await fetch(
        `http://localhost:4000/TimeTable/${itemId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete item");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Function to post data to server
  const postData = async (dataBody) => {
    try {
      const response = await fetch("http://localhost:4000/TimeTable", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataBody), // Replace with your actual data
      });
      // alert("Data Saved");
      handleAlert("success", "Data saved");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className={classes.buttoncontainer}>
        {/* Dropdowns for selecting class and section */}
        {/* class */}
        <span className="flex grow-0 gap-[9px]">
          <div className={styles.customSelect} ref={classDropdownRef}>
            <div
              className={styles.selectContainer}
              onClick={toggleClassDropdown}
            >
              <div className={styles.selectedOption}>
                {classTable ? classTable : "Class"}
              </div>
              <div className={styles.dropdownIcon}>
                {isClassOpen ? (
                  <IoChevronUp className={styles.down} />
                ) : (
                  <IoChevronDown className={styles.down} />
                )}
              </div>
            </div>
            {isClassOpen && (
              <div className={`${styles.optionsContainer}`}>
                <div
                  className={styles.option}
                  onClick={() => handleClassSelect("Pre KG")}
                >
                  Pre KG
                </div>
                <div
                  className={styles.option}
                  onClick={() => handleClassSelect("LKG")}
                >
                  LKG
                </div>
                <div
                  className={styles.option}
                  onClick={() => handleClassSelect("UKG")}
                >
                  UKG
                </div>
                <div
                  className={styles.option}
                  onClick={() => handleClassSelect("1st")}
                >
                  1st
                </div>
                <div
                  className={styles.option}
                  onClick={() => handleClassSelect("2nd")}
                >
                  2nd
                </div>
                <div
                  className={styles.option}
                  onClick={() => handleClassSelect("3rd")}
                >
                  {" "}
                  3rd
                </div>
                <div
                  className={styles.option}
                  onClick={() => handleClassSelect("4th")}
                >
                  4th
                </div>
                <div
                  className={styles.option}
                  onClick={() => handleClassSelect("5th")}
                >
                  5th
                </div>
                <div
                  className={styles.option}
                  onClick={() => handleClassSelect("6th")}
                >
                  6th
                </div>
                <div
                  className={styles.option}
                  onClick={() => handleClassSelect("7th")}
                >
                  7th
                </div>
                <div
                  className={styles.option}
                  onClick={() => handleClassSelect("8th")}
                >
                  8th
                </div>
                <div
                  className={styles.option}
                  onClick={() => handleClassSelect("9th")}
                >
                  9th
                </div>
                <div
                  className={styles.option}
                  onClick={() => handleClassSelect("10th")}
                >
                  10th
                </div>
                <div
                  className={styles.option}
                  onClick={() => handleClassSelect("11th")}
                >
                  11th
                </div>
                <div
                  className={styles.option}
                  onClick={() => handleClassSelect("12th")}
                >
                  12th
                </div>
              </div>
            )}
          </div>
          {/* section */}
          <div className={styles.customSelect} ref={sectionDropdownRef}>
            <div
              className={styles.selectContainer}
              onClick={toggleSectionDropdown}
            >
              <div className={styles.selectedOption}>
                {section ? section : "Section"}
              </div>
              <div className={styles.dropdownIcon}>
                {isSectionOpen ? (
                  <IoChevronUp className={styles.down} />
                ) : (
                  <IoChevronDown className={styles.down} />
                )}
              </div>
            </div>
            {isSectionOpen && (
              <div className={styles.optionsContainer}>
                <div
                  className={styles.option}
                  onClick={() => handleSectionSelect("A")}
                >
                  {" "}
                  A
                </div>
                <div
                  className={styles.option}
                  onClick={() => handleSectionSelect("B")}
                >
                  {" "}
                  B
                </div>
                <div
                  className={styles.option}
                  onClick={() => handleSectionSelect("C")}
                >
                  {" "}
                  C
                </div>
                <div
                  className={styles.option}
                  onClick={() => handleSectionSelect("D")}
                >
                  {" "}
                  D
                </div>
                <div
                  className={styles.option}
                  onClick={() => handleSectionSelect("E")}
                >
                  {" "}
                  E
                </div>
              </div>
            )}
          </div>
        </span>

        {/* Buttons for various actions */}
        <span>
          {/* Modal for showing Time Setting Modal */}
          <Modal handleClose={closeModal} isOpen={isTimerOpen}>
            <TimeSettingModal closeModal={closeModal} />
          </Modal>

          <span className="flex gap-2 justify-start items-start">
            {pathname !== "/viewtimetable" && (
              <button
                className={`${classes.faculty_sharebutton} flex gap-3 p-3 items-center`}
                onClick={submitTimeTableDetailsHandler}
              >
                <span>Save</span>
                <span>
                  <FiSave />
                </span>
              </button>
            )}
            {pathname === "/viewtimetable" && <IconButton icon="{{ext_8}}" />}
          </span>
        </span>

        {/* Modal for deleting timetable */}
        <Modal handleClose={closeModal} isOpen={isDeletePopupOpen}>
          <DeleteFacultySalaryDetails
            closeModal={closeModal}
            deleteTimetableHandler={deleteTimetableHandler}
          />
        </Modal>
      </div>
      <Notification
        status={status}
        message={message}
        showAlert={showAlert}
        setShowAlert={setShowAlert}
      />
    </>
  );
}
