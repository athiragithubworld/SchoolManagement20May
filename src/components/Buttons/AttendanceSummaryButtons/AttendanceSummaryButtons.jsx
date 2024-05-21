//THIS COMPONENT WAS CREATED BY HAIDER,ICONBUTTON WAS TAKEN FOR SRAVANTHI AND UPDATED

import React, { useState, useRef, useEffect } from "react";
import * as XLSX from "xlsx";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "../../../styles/AttendanceRegisterButtons.module.css";
import { FaRegCalendarAlt } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import { GoDownload } from "react-icons/go";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GoShareAndroid } from "react-icons/go";
import useFileDownloader from "../../CustomHooks/Download";
import Notification from "../../../ui/Notification";

export const AttendanceSummaryButtons = ({
  handleChangeSection,
  handleChangeClass,
  filteredData,
}) => {
  const [data, setData] = useState(null);
  const [isClassOpen, setIsClassOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);
  const [isSectionOpen, setIsSectionOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState(null);
  const classDropdownRef = useRef(null);
  const sectionDropdownRef = useRef(null);
  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const downloadFile = useFileDownloader();

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
      filteredData,
      `Attendance Summary ${selectedClass} ${selectedSection}`,
      selectedClass + selectedSection
    );
  };

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:4000/AttendanceRegister");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const fetchedData = await response.json();
      // Convert JSON data to array of arrays
      const dataArray = fetchedData.map((item) => [
        item.Sno,
        item.Class,
        item.Section,
        item.Present,
        item.Absent,
        item.PresentPercent,
      ]);
      setData(dataArray);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

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
              onClick={() => exportToExcel()}
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

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <>
      <div className="flex w-full h-10 justify-between items-center">
        <div className="flex w-fit h-10 gap-2">
          {/* <div className="w-fit h-10 p-2 gap-1 flex border-[1px] rounded-2xl bg-customblue items-center justify-center">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className="w-[85px] h-[20px] text-xs font-normal blue-button-color text-white text-center outline-none cursor-pointer placeholder:text-white  placeholder:text-lg"
            placeholderText="Start Date"
          />
          <FaRegCalendarAlt className="w-5 h-5 text-white" />
        </div>

        <div className="w-fit h-10 p-2 gap-1 flex border-[1px] rounded-2xl  bg-customblue items-center justify-center">
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            className="w-[85px] h-[20px] text-xs font-normal blue-button-color text-white text-center outline-none cursor-pointer placeholder:text-white  placeholder:text-lg"
            placeholderText="End Date"
          />
          <FaRegCalendarAlt className="w-5 h-5 text-white" />
        </div> */}
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

        <IconButton icon="{{ext_8}}" />
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

export default AttendanceSummaryButtons;
