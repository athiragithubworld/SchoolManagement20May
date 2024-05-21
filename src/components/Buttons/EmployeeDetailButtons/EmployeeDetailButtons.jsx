
//THIS COMPONENT WAS CREATED BY HAIDER,ICONBUTTON WAS TAKEN FOR SRAVANTHI AND UPDATED


import React from 'react'
import { GoShareAndroid } from "react-icons/go";
import { FiEdit } from "react-icons/fi";
import { useState,useEffect,useRef } from 'react';
import * as XLSX from 'xlsx';
import { GoDownload } from "react-icons/go";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import usePopupDownloader from "../../CustomHooks/DownloadPopup";
import styles from "../../../styles/AttendanceRegisterButtons.module.css";
import { useNavigate } from 'react-router-dom';


export const EmployeeDetailsButtons = ({ setDisable,employeeDetails,payrollDetails,disable}) => {
  const navigate = useNavigate();
  const downloadFile = usePopupDownloader();

  const exportToExcel = () => {
    
    // console.log(filtered);
    downloadFile(
      {...employeeDetails,...payrollDetails},
      "Employee Details",
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
//deleting employee details
    const handleDelete = async(employeeDetails,payrollDetails)=>{
      const confirmDelete = window.confirm('Are you sure you want to delete this item?');
      if (!confirmDelete) return; // If user cancels, do nothing
         try{
          await fetch(`http://localhost:4000/allEmployeeDetailsArr/${employeeDetails.id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
          }); 
          if(payrollDetails && payrollDetails.length!==0){
            await fetch(`http://localhost:4000/PayrollDetails/${payrollDetails.id}`,{
              method:'DELETE',
              headers:{
                'Content-Type':'application/json'
              }
            })
          }
          alert('Successfully Deleted');
          navigate("/employeeList")
          }

         catch(error){console.error('Failed in deleting the data',error)}
      }

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
            <div onClick={()=>setDisable(false)}
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
              <div className="" onClick={()=>handleDelete(employeeDetails,payrollDetails)}>Delete</div>
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
  //updating user details using put request
  async function submitHandler(employeeDetails){
    if(employeeDetails.MobileNoPrimary && employeeDetails.MobileNoPrimary.length!==10){alert('Mobile number should be exactly 10 digits long.'); return}
    if(employeeDetails.MobileNoSecondary && employeeDetails.MobileNoSecondary.length!==10){alert('Emargency contact number should be exactly 10 digits long.'); return}
    if(employeeDetails.AadharCardNo && employeeDetails.AadharCardNo.length!==12){alert('Aadhar Number should be exactly 12 digits long.'); return}
    if(employeeDetails.PanCardNo && employeeDetails.PanCardNo.length!==10){alert('Pan Number should be exactly 10 digits long.'); return}
    if(employeeDetails.currentPincode && employeeDetails.currentPincode.length!==6){alert('Current Pincode should be exactly 6 digits long.'); return}
    if(employeeDetails.permanentPincode && employeeDetails.permanentPincode.length!==6){alert('Permanent Pincode should be exactly 6 digits long.'); return}
    if(employeeDetails.IFSCCode && employeeDetails.IFSCCode.length!==11){alert('IFSC code should be exactly 11 character long.'); return}
    if(employeeDetails.UANNo && employeeDetails.UANNo.length!==12){alert('UAN number should be exactly 12 character long.'); return}
    if(employeeDetails.YearOfPassingHSC && employeeDetails.YearOfPassingHSC.length!==4){alert('Year of Passing HSC should be exactly 4 digits long.'); return}
    if(employeeDetails.YearOfPassingHSC && employeeDetails.YearOfPassingSSC.length!==4){alert('Year of Passing HSC should be exactly 4 digits long.'); return}
    if(employeeDetails.YearOfPassingHSC && employeeDetails.YearOfPassingUG.length!==4){alert('Year of Passing HSC should be exactly 4 digits long.'); return}
    if(employeeDetails.YearOfPassingHSC && employeeDetails.YearOfPassingPG.length!==4){alert('Year of Passing HSC should be exactly 4 digits long.'); return}
  
    try{
        await fetch(`http://localhost:4000/allEmployeeDetailsArr/${employeeDetails.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(employeeDetails),
        }); 
        if(payrollDetails!==undefined){
          await fetch(
            `http://localhost:4000/PayrollDetails/${payrollDetails.id}`,{
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(payrollDetails)
            }
          )
        }
        
      }catch(error){console.error('failed to update',error)}
  }
  
  const handleUpdate = (employeeDetails,payrollDetails) => {
    setDisable(true)
    submitHandler(employeeDetails,payrollDetails);
  }
  return (
    <div className="flex w-full h-10 place-content-end">
    <div className="flex gap-2">
      {disable===false && <div className={styles.customSelect}>
        <div
          className={`${styles.selectContainer} justify-center h-10 cursor-pointer w-[108px]`}
          onClick={()=> handleUpdate(employeeDetails,payrollDetails)}
        >
          Submit
        </div>
      </div>}
      <IconButton />
    </div>
</div>
  );
}

export default EmployeeDetailsButtons;