// Buttons by sravanthi, table by athira and submit functionality by swati
import React, { useState, useRef, useEffect } from "react";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import * as XLSX from "xlsx";
import styles from "../../../styles/AttendanceRegisterButtons.module.css";
import { GoDownload } from "react-icons/go";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import useFileDownloader from "../../CustomHooks/Download";
import Notification from "../../../ui/Notification";

const Buttons = ({
  handleChangeClass,
  handleChangeSection,
  submitHandler,
  filteredData,
}) => {
  const classDropdownRef = useRef(null);
  const sectionDropdownRef = useRef(null);
  const [isClassOpen, setIsClassOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);
  const [isSectionOpen, setIsSectionOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState(null);
  const [showNotification, setShowNotification] = useState(false);
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");
  const [data, setData] = useState(null);
  const download = useFileDownloader();

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

  // function to download data from the URL
  const exportToExcel = () => {
    if (!selectedClass || !selectedSection) {
      // alert("Select class and section!!");
      setStatus("fail");
      setMessage("Please select class and section");
      setShowNotification(true);
      return;
    }
    download(
      filteredData,
      "Student Attendance",
      selectedClass + selectedSection
    );
  };

  // Function to fetch data from the URL
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:4000/StudentAttendance");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const fetchedData = await response.json();
      // Convert JSON data to array of arrays
      const dataArray = fetchedData.map((item) => [
        item.id,
        item.regNo,
        item.className,
        item.section,
        item.name,
        item.presentDays,
        item.absentDays,
        item.percentage,
        item.status,
      ]);
      setData(dataArray);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  //function to handle submit functionality
  const saveHandler = async () => {
    if (!selectedClass || !selectedSection) {
      // alert("Please select class and section!!!");
      setStatus("fail");
      setMessage("Please select class and section");
      setShowNotification(true);
    } else {
      submitHandler(selectedClass, selectedSection); //submitHandler is props from pages/studentattendance
      setShowNotification(true);
      setStatus("success");
      setMessage("Student Attendance saved");
      // alert("Data saved");
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
              className={`group flex gap-2 justify-between rounded-xl items-center cursor-pointer hover:bg-[#009dfd] hover:text-white p-1 hover:pl-2 hover:pr-2`}
            >
              <div className="">Edit</div>
              {/* <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/65a189dfb6f868722ac60d6733299f65ddf59f2dd6c99dc222528ac7b8f56d32?apiKey=8d87b58e79fa4e2d9738c0aa2c095387&"
                alt={`edit icon`}
                className="shrink-0 my-auto w-6 aspect-square fill-white"
              /> */}
              <FaRegEdit
                className={`group-hover:text-white h-5 w-[17.1px] text-[#a6a6a6]`}
              />
            </div>
            <div
              className={`group flex gap-2 justify-between rounded-xl items-center cursor-pointer hover:bg-[#009dfd] hover:text-white p-1 hover:pl-2 hover:pr-2`}
            >
              <div className="">Delete</div>
              {/* <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d999651e12724ea8e330f8f744c6e34186194cc7d53890eac88ba9070fe33388?apiKey=8d87b58e79fa4e2d9738c0aa2c095387&"
                alt={`delete icon`}
                className="shrink-0 my-auto w-6 aspect-square"
              /> */}
              <RiDeleteBin6Line
                className={`group-hover:text-white h-5 w-[17.1px] text-[#a6a6a6]`}
              />
            </div>
          </div>
        )}
      </div>
    );
  }

  //function to toggle the class dropdown
  const toggleClassDropdown = () => {
    setIsClassOpen(!isClassOpen);
    setIsSectionOpen(false);
  };

  //function to toggle the section dropdown
  const toggleSectionDropdown = () => {
    setIsSectionOpen(!isSectionOpen);
    setIsClassOpen(false);
  };

  //function to handle when we select class
  const handleClassSelect = (classOption) => {
    handleChangeClass(classOption, selectedSection); //handleChangeClass is props from pages/studentattendance
    setSelectedClass(classOption);
    setIsClassOpen(false);
  };

  //function to handle when we select section
  const handleSectionSelect = (sectionOption) => {
    if (selectedClass === null) {
      alert("Please select class!!!");
      setIsSectionOpen(false);
      return;
    }
    handleChangeSection(selectedClass, sectionOption); //handleChangeSection is props from pages/studentattendance
    setSelectedSection(sectionOption);
    setIsSectionOpen(false);
  };

  return (
    <>
      <div className="flex gap-5 justify-between  max-md:flex-wrap">
        {/* class and section button */}
        <div className="flex gap-2">
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

        {/* menu and submit buttons */}
        <div className="flex gap-2">
          <div className={styles.customSelect}>
            <div
              className={`${styles.selectContainer} justify-center cursor-pointer w-[108px]`}
              onClick={saveHandler}
            >
              Submit
            </div>
          </div>
          <IconButton />
        </div>
      </div>
      <Notification
        status={status}
        message={message}
        showAlert={showNotification}
        setShowAlert={setShowNotification}
        style={"ml-[calc(100vw-70rem)]"}
      />
    </>
  );
};

export default Buttons;
