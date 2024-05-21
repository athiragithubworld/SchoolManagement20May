// this component did by sravanthi
import React, { useState, useRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import * as XLSX from "xlsx";
import DeletePopup from "../../../ui/DeletePopup";
import Modal from "../../Modal/Modal";
import styles from "../../../styles/AttendanceRegisterButtons.module.css";
import { GoDownload } from "react-icons/go";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GoShareAndroid } from "react-icons/go";
import useFileDownloader from "../../CustomHooks/Download";
import Notification from "../../../ui/Notification";

// props from pages/AttendanceRegister
const Buttons = ({
  handleDeleteSelectedRows,
  selectedRows,
  handleChangeClass,
  handleChangeSection,
  filtered,
}) => {
  // State and refs for managing dropdowns
  const [isClassOpen, setIsClassOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);
  const [isSectionOpen, setIsSectionOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState(null);
  const classDropdownRef = useRef(null);
  const sectionDropdownRef = useRef(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [isOpenPayroll, setIsOpenPayroll] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const downloadFile = useFileDownloader();

  // for closing modal
  function closePayrollModal() {
    setIsOpenPayroll(false);
  }
  const toggleConfirmationPopup = () => {
    setShowConfirmation(!showConfirmation);
  };

  // Function to toggle delete confirmation popup
  const toggleDeleteConfirmationPopup = () => {
    setShowDeleteConfirmation(!showDeleteConfirmation);
  };

  // Function to handle delete action
  const handleDelete = () => {
    // Show confirmation popup when delete button is clicked
    toggleDeleteConfirmationPopup();
  };
  // function for confirmation to  delete the the data
  const handleDeleteConfirmed = () => {
    console.log("Selected rows:", selectedRows);
    if (selectedRows.length > 0) {
      handleDeleteSelectedRows();
      // After delete action is confirmed, hide the confirmation popup
      toggleDeleteConfirmationPopup();
    } else {
      // No rows selected, show message
      alert("No rows selected for deletion.");
    }
  };
  // State and refs for managing dropdowns
  const [startDate, setStartDate] = useState(null);
  // To show calendar for icon click
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [endDate, setEndDate] = useState(null);
  // State for fetched data
  const [data, setData] = useState(null);

  // Effect to handle clicks outside dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        classDropdownRef.current &&
        !classDropdownRef.current.contains(event.target) &&
        sectionDropdownRef.current &&
        !sectionDropdownRef.current.contains(event.target)
      ) {
        setIsClassOpen(false);
        setIsSectionOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
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
    setSelectedClass(classOption);
    handleChangeClass(classOption, selectedClass);
    setIsClassOpen(false);
  };
  // Function to handle section selection
  const handleSectionSelect = (sectionOption) => {
    handleChangeSection(selectedClass, sectionOption);
    setSelectedSection(sectionOption);
    setIsSectionOpen(false);
  };
  // Function to export data to Excel
  const exportToExcel = () => {
    if (!selectedClass || !selectedSection) {
      // alert("Select class and section!!");
      setShowAlert(true);
      setStatus("fail");
      setMessage("Please select class and section!!");
      return;
    }
    // console.log(filtered);
    downloadFile(
      filtered,
      `Attendance Register ${selectedClass} ${selectedSection}`,
      selectedClass + selectedSection
    );
  };

  // Function to fetch data from the server
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:4000/AttendanceRegister");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const fetchedData = await response.json();
      // Convert JSON data to array of arrays
      const dataArray = fetchedData.map((item) => [
        item.no,
        item.studentName,
        item.rollNo,
        item.totalWorking,
        item.present,
        item.absent,
        item.percent,
      ]);
      setData(dataArray);
    } catch (error) {
      console.error("Error fetching data:", error);
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
              <GoDownload
                className={` group-hover:text-white h-5 w-[17.1px] text-[#a6a6a6]`}
              />
            </div>
            <div
              className={`group flex gap-2 justify-between rounded-xl items-center cursor-pointer hover:bg-[#009dfd] hover:text-white p-1 hover:pl-2 hover:pr-2`}
            >
              <div>Share</div>
              <GoShareAndroid
                className={` group-hover:text-white h-5 w-[17.1px] text-[#a6a6a6]`}
              />
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <>
      <div className="flex justify-between w-full ">
        <div className="flex gap-2">
          <div className="flex  gap-2">
            {/* class */}
            <div className={styles.customSelect} ref={classDropdownRef}>
              <div
                className={styles.selectContainer}
                onClick={toggleClassDropdown}
              >
                <div className={styles.selectedOption}>
                  {selectedClass ? selectedClass : "Class"}
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
                  {selectedSection ? selectedSection : "Section"}
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
          </div>
          {/* start date */}
          {/* <div className="flex w-full h-10 justify-between gap-3 items-center "> */}
          {/* <div className="w-fit  p-2 gap-1 flex border-[1px] rounded-[14px] bg-customblue items-center justify-center">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="w-[85px] h-[20px] text-xs font-normal  border-none blue-button-color text-white text-center outline-none cursor-pointer placeholder:text-white  placeholder:text-lg"
              placeholderText="Start Date"
            />
            <span>
              <FaRegCalendarAlt
                className="w-5 h-5 text-white cursor-pointer"
                // onClick={() => setShowDatePicker(true)}
              />
            </span>
          </div> */}
          {/* end date */}
          {/* <div className="w-fit  p-2 gap-1 flex border-[1px] rounded-[14px]  bg-customblue items-center justify-center">
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              className="w-[85px] h-[20px] text-xs font-normal blue-button-color text-white text-center outline-none cursor-pointer placeholder:text-white  placeholder:text-lg"
              placeholderText="End Date"
            />
            <FaRegCalendarAlt className="w-5 h-5 text-white" />
          </div> */}
          {/* </div> */}
        </div>
        {/* more icon */}
        <IconButton icon="{{ext_8}}" />
        {showDeleteConfirmation && (
          <Modal isOpen={isOpenPayroll} handleClose={closePayrollModal}>
            {/* this is from ui/DeletePopup */}
            <DeletePopup
              handleConfirmDelete={handleDeleteConfirmed}
              handleCancelDelete={toggleConfirmationPopup}
            />
          </Modal>
        )}
      </div>
      <Notification
        showAlert={showAlert}
        setShowAlert={setShowAlert}
        message={message}
        status={status}
      />
    </>
  );
};

export default Buttons;
