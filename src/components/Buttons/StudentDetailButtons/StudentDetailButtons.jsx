
//THIS COMPONENT WAS CREATED BY HAIDER,ICONBUTTON WAS TAKEN FOR SRAVANTHI AND UPDATED


import React from 'react'
import { GoShareAndroid } from "react-icons/go";
import { FiEdit } from "react-icons/fi";
import { useState,useEffect,useRef } from 'react';
import * as XLSX from 'xlsx';
import { GoDownload } from "react-icons/go";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import useFileDownloader from "../../CustomHooks/Download";
import styles from "../../../styles/AttendanceRegisterButtons.module.css";
import { useNavigate } from 'react-router-dom';

export const StudentDetailButtons = ({selectedStudent,editable, setEditable}) => {

  const downloadFile = useFileDownloader();
  const navigate = useNavigate();

  const exportToExcel = () => {
    
    console.log(selectedStudent,"sel");
    downloadFile(
      [selectedStudent],
      `Student Detail ${selectedStudent.StudentId}`,
      
    );
  };

  const handleDelete = async(selectedStudent)=>{
    const confirmDelete = window.confirm('Are you sure you want to delete this item?');
    
    if (!confirmDelete) return; // If user cancels, do nothing
        try{
          await fetch(`http://localhost:4000/StudentListDetails/${selectedStudent?.id}`,{
            method:'DELETE',
            headers:{
              'Content-Type':'application/json'
            }
          })
        alert('Successfully Deleted');
        navigate(-1);
        }
        catch(error){console.error('Failed in deleting the data',error)}
  }

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
              onClick={()=>setEditable(true)}
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
              onClick={()=>handleDelete(selectedStudent)}
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

  async function submitHandler(selectedStudent){

    if(selectedStudent.AadharCardNo.length < 12)
      {
        alert("Enter Valid Aadhar Number");
        return;
      }
    if(selectedStudent.PhoneNo.length < 10)
      {
        alert("Enter Valid Student Phone Number");
        return;
      }
    if(selectedStudent.FatherMobileNo.length < 10)
      {
        alert("Enter Valid Father Phone Number");
        return;
      }
    if(selectedStudent.MotherMobileNo.length < 10)
      {
        alert("Enter Valid Mother Phone Number");
        return;
      }
    if(selectedStudent.GuardianMobileNo.length < 10)
      {
        alert("Enter Valid Guardian Phone Number");
        return;
      }
    if(selectedStudent.CurrentPinCode.length < 6)
      {
        alert("Enter Valid Current Pin Code");
        return;
      }
    if(selectedStudent.PermanentPinCode.length < 6)
      {
        alert("Enter Valid Permanent Pin Code");
        return;
      }
    try{
      await fetch(`http://localhost:4000/StudentListDetails/${selectedStudent?.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(selectedStudent)
      });
    }
    catch(e){console.error('Failed in updating the data',error)}
    
    
    alert("Data Saved");
    setEditable(false);
  }

  return (
    <div className="flex w-full h-10 place-content-end">
        <div className="flex gap-2">
          <div className={styles.customSelect}>
            {
              editable &&   
              <div className={`${styles.selectContainer} justify-center h-10 cursor-pointer w-[108px]`}
                onClick={()=>submitHandler(selectedStudent)}>
                Submit
              </div>
            }
          </div>
          <IconButton />
        </div>
    </div>
  );
}

export default StudentDetailButtons;