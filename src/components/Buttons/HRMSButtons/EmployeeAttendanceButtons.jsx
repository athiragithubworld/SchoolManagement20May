//implemented by swati

import { useState, useRef, useEffect } from "react";
import { IoChevronDown } from "react-icons/io5";
import { IoChevronUp } from "react-icons/io5";
import { GoDownload } from "react-icons/go";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import styles from "../../../styles/AttendanceRegisterButtons.module.css";
import useFileDownloader from "../../CustomHooks/Download";

const EmployeeAttendanceButtons = ({
  handleSelectionCategory,
  handleSubmit,
  filteredEmployeeData,
}) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("All Employees");
  const filterDropdownRef = useRef(null);

  const downloadFile = useFileDownloader();

  const exportToExcel = () => {
    // console.log(filtered);
    downloadFile(filteredEmployeeData, "Employee Attendance", selectedFilter);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        filterDropdownRef.current &&
        !filterDropdownRef.current.contains(event.target)
      ) {
        setIsFilterOpen(false);
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

  //function to toggle filter dropdown (all, unpaid, paid)
  const toggleFilterDropdown = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  //function to handle when a filter is selected
  const handleFilterSelect = (filterOption) => {
    setSelectedFilter(filterOption);
    handleSelectionCategory(filterOption);
    setIsFilterOpen(false);
    //  Close filter dropdown after selecting
  };

  //function to save employee attendance
  const submitHandler = () => {
    handleSubmit();
  };

  return (
    <div className="flex gap-5 justify-between max-md:flex-wrap">
      <span className={`${styles.f} flex gap-2`}>
        {/* Filter Dropdown */}
        <div
          className={`${styles.customSelect} w-[130px]`}
          ref={filterDropdownRef}
        >
          <div
            className={`${styles.selectContainer} text-sm h-full`}
            onClick={toggleFilterDropdown}
          >
            <div className={styles.selectedOption}>
              {selectedFilter ? selectedFilter : "All Employees"}
            </div>
            <div className={styles.dropdownIcon}>
              {isFilterOpen ? (
                <IoChevronUp className={styles.down} />
              ) : (
                <IoChevronDown className={styles.down} />
              )}
            </div>
          </div>
          {isFilterOpen && (
            <div className={styles.optionsContainer}>
              <div
                className={styles.option}
                onClick={() => handleFilterSelect("All Employees")}
              >
                All Employees
              </div>
              <div
                className={styles.option}
                onClick={() => handleFilterSelect("Faculty")}
              >
                Faculty
              </div>
              <div
                className={styles.option}
                onClick={() => handleFilterSelect("Non Teaching")}
              >
                Non Teaching
              </div>
              <div
                className={styles.option}
                onClick={() => handleFilterSelect("Admin")}
              >
                Admin
              </div>
            </div>
          )}
        </div>
      </span>
      <span className={`${styles.feelistRight} flex gap-2`}>
        <div className={styles.customSelect}>
          <button
            className={`${styles.selectContainer} justify-center cursor-pointer w-[108px] disabled:opacity-50`}
            onClick={submitHandler}
            // disabled={selectedFilter === "All Employees"}
          >
            Submit
          </button>
        </div>
        <IconButton />
      </span>
    </div>
  );
};

export default EmployeeAttendanceButtons;
