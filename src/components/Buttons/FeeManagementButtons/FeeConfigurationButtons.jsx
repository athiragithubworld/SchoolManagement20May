// Year & Month button from sravanthi and Addnew and Dropdown from swati and other part Athira

import { useState, useRef, useEffect } from "react";
import classes from "../../../styles/FeeConfigurationButtons.module.css";
import Modal from "../../Modal/Modal";
import { IoMdAdd } from "react-icons/io";
import AddNewFeeDetails from "../../Popup/StudentFeePopup/AddNewFeeDetails";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import styles from "../../../styles/AttendanceRegisterButtons.module.css";
import { GoDownload } from "react-icons/go";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import useFileDownloader from "../../CustomHooks/Download";
import Notification from "../../../ui/Notification";

export default function FeeConfigurationButton({
  handleAddNew,
  handleYearFilter,

  studentFeedetails,
}) {
  const [isAddNew, setISAddNew] = useState(false);
  const [isClassOpen, setIsClassOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);
  const [isSectionOpen, setIsSectionOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState(null);
  const classDropdownRef = useRef(null);
  const sectionDropdownRef = useRef(null);
  const download = useFileDownloader();
  const [showAlert, setShowAlert] = useState(false);
  const [alertKey, setAlertKey] = useState(0);
  const [getStatus, setGetStatus] = useState();
  const [message, setMessage] = useState("");

  const handleAlert = (status, mess) => {
    //for showing notification success or failure
    setShowAlert(true);
    setGetStatus(status);
    setAlertKey((prev) => prev + 1);
    setMessage(mess);
  };

  // Function to open modal
  const openModal = () => {
    // setIsOpenAddColumn(true);
  };

  // Function to close modal
  const closeModal = () => {
    setISAddNew(false);
  };

  // Function to handle adding new details
  const handleAddNewDetails = (newDetails) => {
    handleAddNew(newDetails);
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
            >
              <div
                onClick={() =>
                  download(
                    studentFeedetails,
                    "student fee details",
                    "student fee details"
                  )
                }
              >
                Download
              </div>
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

  // Options for year dropdown
  const yearOptions = ["23-24", "22-23", "21-22", "20-21"];
  // Options for month dropdown
  const monthOptions = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  // Effect hook to handle click outside dropdowns
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
    setIsClassOpen(false);
  };

  // Function to handle section selection
  const handleSectionSelect = (sectionOption) => {
    setSelectedSection(sectionOption);
    setIsSectionOpen(false);
  };

  return (
    <>
      <div className={classes.buttoncontainer}>
        <span className="flex justify-start">
          {/* Year dropdown */}
          {/* <div className={styles.customSelect} ref={classDropdownRef}>
          <div className={styles.selectContainer} onClick={toggleClassDropdown}>
            <div className={styles.selectedOption}>
              {selectedClass ? selectedClass : "Year"}
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
            <div className={styles.optionsContainer}>
              {yearOptions.map((option, index) => (
                <div
                  className={styles.option}
                  key={index}
                  onClick={() => {
                    handleClassSelect(option);
                    handleYearFilter(option);
                  }}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div> */}
          {/* Month dropdown
        <div className={styles.customSelect} ref={sectionDropdownRef}>
          <div
            className={styles.selectContainer}
            onClick={toggleSectionDropdown}
          >
            <div className={styles.selectedOption}>
              {selectedSection ? selectedSection : "Month"}
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
              {monthOptions.map((option, index) => (
                <div
                  className={styles.option}
                  key={index}
                  onClick={() => handleSectionSelect(option)}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div> */}
        </span>

        {/* Add New button and modal */}
        <span>
          <span className="flex gap-2 justify-start ">
            <button
              className={classes.salarydetails_addbutton}
              onClick={() => setISAddNew(true)}
            >
              <div className={classes.addnewbuttone}>
                Add New
                <IoMdAdd />
              </div>
            </button>

            <IconButton icon="{{ext_8}}" />

            <Modal handleClose={closeModal} isOpen={isAddNew}>
              <AddNewFeeDetails
                handleAddNew={handleAddNewDetails}
                closeModal={closeModal}
                handleAlert={handleAlert}
                studentFeedetails={studentFeedetails}
              />
            </Modal>
          </span>
        </span>
      </div>
      <Notification
        status={getStatus}
        message={message}
        showAlert={showAlert}
        setShowAlert={setShowAlert}
        alertKey={alertKey}
      />
    </>
  );
}
