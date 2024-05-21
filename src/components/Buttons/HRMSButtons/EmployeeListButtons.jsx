import { useState, useRef , useEffect } from "react";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import styles from "../../../styles/AttendanceRegisterButtons.module.css";
import { IoMdAdd } from "react-icons/io";
import EmployeeListMainPopup from "../../../components/Popup/HRMSPopup/EmployeeListPopup/EmployeeListMainPopup";
import Modal from "../../Modal/Modal";
import { GoDownload } from "react-icons/go";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import useFileDownloader from "../../CustomHooks/Download";




export default function EmployeeListButtons({ handleselectedEmployeeRole,employeeDetails,handleModal }) {
  const [isClassOpen, setIsClassOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const classDropdownRef = useRef(null);
  const sectionDropdownRef = useRef(null);

  const downloadFile = useFileDownloader();

  const exportToExcel = () => {
   
    // console.log(filtered);
    downloadFile(
      employeeDetails,
      "Employee List",
      selectedEmployee
    );
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
              onClick={()=>exportToExcel()}
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
              <div className="" >
                Edit
              </div>
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

  // Options for employee dropdown
  const employeeList = [
    "All Employee",
    "Non Teaching",
    "Admin Staff",
    "Teaching",
  ];

  // Effect hook to handle click outside dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        classDropdownRef.current &&
        !classDropdownRef.current.contains(event.target)
      ) {
        setIsClassOpen(false);
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
  };
  // Function to handle class selection
  const handleEmployeeSelect = (classOption) => {
    setSelectedEmployee(classOption);
    setIsClassOpen(false);
  };

  useEffect(() => {
    handleselectedEmployeeRole(selectedEmployee);
  }, [handleselectedEmployeeRole, selectedEmployee]);

  function handleEmployeeDetail() {
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
    handleModal();
  };

  return (
    <>
      <div className="flex gap-5 justify-between max-md:flex-wrap ">
        {/* Employee dropdown */}
        <div className={styles.customSelect} ref={classDropdownRef}>
          <div className={styles.selectContainer} onClick={toggleClassDropdown}>
            <div
              className={` ${styles.customSelect} flex  gap-1 justify-center shrink-0  p-[3px] text-base  text-center `}
            >
              {selectedEmployee ? selectedEmployee : "All Employee"}
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
              {employeeList.map((option, index) => (
                <div
                  className={styles.option}
                  key={index}
                  onClick={() => handleEmployeeSelect(option)}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex justify-between gap-x-2 ">
          <button
            onClick={handleEmployeeDetail}
            className={`flex  gap-1 justify-center shrink-0 items-center p-3 text-sm  text-center text-white bg-customblue rounded-2xl h-[40px] w-[6.75rem] `}
          >
            <span className="flex  gap-1 justify-center shrink-0 items-center  text-base  text-center text-white bg-customblue rounded-2xl  ">
              Add New
            </span>
            <IoMdAdd />
          </button>
          <div className="flex gap-2">
            <IconButton icon="https://cdn.builder.io/api/v1/image/assets/TEMP/71951dafcb37cb60651b14b34087ee7264766f4fab0c5ff297e941864f350c14?apiKey=cc29434a9d8048cf898a480d8bbfba7a&" />
          </div>
        </div>
      </div>
      {/* To show new employee popup page */}
      <Modal isOpen={showModal} >
        <EmployeeListMainPopup employeeDetailsFetched={employeeDetails} handleClose={closeModal}/>
      </Modal>
    </>
  );
}
