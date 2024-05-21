import  { useState,useEffect,useRef } from "react";
import classes from "../../../styles/EnrollButtons.module.css";
import Modal from "../../Modal/Modal"

import { IoMdAdd } from "react-icons/io";
// import EnrollDetailsPopup from "../../Popup/EnrollementInfoPopup/EnrollDetailsPopup";
import { GoDownload } from "react-icons/go";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import EnrollStudentSteps from "../../Popup/EnrollementInfoPopup/EnrollStudentSteps";
import useFileDownloader from "../../CustomHooks/Download";

export default function EnrollmentButtons({
  // handleAddNew,
  enrollmentdetails,
  setEnrollmentDetails,
  // handleAddStudentDetails,
 
}) {

  const [isAddNew, setISAddNew] = useState(false);
  const closeModal = () => {
    setISAddNew(false);
  };
// Download file in excel
  // 
   const downloadFile = useFileDownloader();

   const exportToExcel = () => {
     
     downloadFile(enrollmentdetails, "Enrollment Details");
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
            {/* <div
              className={`group flex gap-2 justify-between rounded-xl items-center cursor-pointer hover:bg-[#009dfd] hover:text-white p-1 hover:pl-2 hover:pr-2`}
            >
              <div className="">Edit</div>
              
              <FaRegEdit
                className={`group-hover:text-white h-5 w-[17.1px] text-[#a6a6a6]`}
              />
            </div> */}
            {/* <div
              className={`group flex gap-2 justify-between rounded-xl items-center cursor-pointer hover:bg-[#009dfd] hover:text-white p-1 hover:pl-2 hover:pr-2`}
            >
              <div className="">Delete</div>
             
              <RiDeleteBin6Line
                className={`group-hover:text-white h-5 w-[17.1px] text-[#a6a6a6]`}
              />
            </div> */}
          </div>
        )}
      </div>
    );
  }
  return (
    <div className={classes.buttoncontainer}>
      <span className={classes.buttons}>
        <span>
          <div className="flex gap-1">
            <button
              className={classes.salarydetails_addbutton}
              onClick={() => setISAddNew(true)}
            >
              <div className={classes.addnewbuttone}>
                Add New
                <IoMdAdd size={23} />
              </div>
            </button>
            {/* option button are added */}
            <span>
              <IconButton icon="{{ext_8}}" />
            </span>
          </div>
          {/* Show Enroll Student Popup  */}
          <Modal handleClose={closeModal} isOpen={isAddNew}>
            <EnrollStudentSteps
              // isOpen={isAddNew}
              // handleAddNew={handleAddNew}
              closeModal={closeModal}
              enrollmentdetails={enrollmentdetails}
              setEnrollmentDetails={setEnrollmentDetails}
              // handleEnrollRefetch={handleEnrollRefetch}
              // handleAddStudentDetails={handleAddStudentDetails}
              // handleAdd={handleAdd}
              // handleUpdateStudent={handleUpdateStudent}
            />
          </Modal>
        </span>
      </span>
    </div>
  );
}


