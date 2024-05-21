
//UPDATION OF THIS COMPONENT'S CSS WAS DONE BY HAIDER,ICONBUTTON WAS TAKEN FOR SRAVANTHI AND UPDATED


import  { useState,useEffect,useRef } from "react";
import Modal from "../../Modal/Modal";
// import AddColumnSalaryDetails from "../../Popup/PayrollPopup/AddColumnSalaryDetails";
import { IoMdAdd } from "react-icons/io";
import AddNewSalaryDetails from '../../Popup/PayrollPopup/AddNewPayrollDetails';
import { GoDownload } from "react-icons/go";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import * as XLSX from 'xlsx';
import useFileDownloader from "../../CustomHooks/Download";
/**
 * TimeTableButtons component renders a container with buttons for editing and sharing the time table.
 * It also contains dropdown menus for selecting class and section.
 *
 * @returns {JSX.Element} The TimeTableButtons JSX element.
 */



//PROPS COMING FROM PAYROLLDASHBOARD PAGE
export default function PayrollButton({
  handleDeleteFacultySalaryDetails,
  handleAddNew,
  facultySalarydetails,
  setFacultySalaryDetails
}) {
  const [isOpenDeleteFaculty, setIsOpenDeleteFaculty] = useState(false);
  const [isAddNew, setISAddNew] = useState(false);
  const [data, setData] = useState(null);


  const downloadFile = useFileDownloader();

  const exportToExcel = () => {

    // console.log(filtered);
    downloadFile(
      facultySalarydetails,
      "Payroll Details",
    );
  };

  // Function to fetch data from the URL
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:4000/PayrollDetails");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const fetchedData = await response.json();
      // Convert JSON data to array of arrays
      const dataArray = fetchedData.map((item) => [
        item.id,
        item.facultyName,
        item.facultyId,
        item.branch,
        item.ifsc,
        item.bankAc,
        item.amount,
      ]);
      setData(dataArray);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const closeModal = () => {
    setIsOpenDeleteFaculty(false);
    setISAddNew(false);
  };

  // function having the design for menu icon(edit, share, delete).
  
  function IconButton({ className })
  {
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

  return (
    <div className="flex w-full h-10 place-content-end">
      <span className="flex justify-center items-center w-44 h-10 gap-2">
        <div className="w-32 h-10 p-2 rounded-2xl flex justify-center items-center text-white blue-button-color">
          <button
            onClick={() => setISAddNew(true)}
            className="flex gap-2 justify-center items-center w-full"
          >
            <div className="text-lg">Add New</div>
            <IoMdAdd className="w-5 h-5 text-white" />
          </button>
        </div>

        <IconButton icon="{{ext_8}}" />

        {/* <div className="h-[53px] w-[53px] rounded-2xl border-[1px] flex justify-center items-center opacity-70">
          <button>
            <MdOutlineFileDownload onClick={fetchData} className="h-[32px] w-[32px]"/>
          </button>
        </div>

        <div className="h-[53px] w-[53px] rounded-2xl border-[1px] flex justify-center items-center opacity-70">
          <button>
              <FiEdit className="h-[32px] w-[32px]" />
            </button>
        </div>

        <div className="h-[53px] w-[53px] rounded-2xl border-[1px] flex justify-center items-center opacity-70">
          <button onClick={() => setIsOpenDeleteFaculty(true)}>
              <RiDeleteBin5Line className="h-[32px] w-[32px]" />
            </button>
        </div> */}

        {/* <Modal handleClose={closeModal} isOpen={isOpenDeleteFaculty}>
          <DeleteFacultySalaryDetails
            handleDeleteFacultySalaryDetails={
              handleDeleteFacultySalaryDetails
            }
            closeModal={closeModal}
          />
        </Modal> */}

        <Modal handleClose={closeModal} isOpen={isAddNew}>
          <AddNewSalaryDetails
            handleAddNew={handleAddNew}
            closeModal={closeModal}
            facultySalarydetails ={facultySalarydetails}
            setFacultySalaryDetails={setFacultySalaryDetails}
          />
        </Modal>
      </span>
    </div>
  );
}
