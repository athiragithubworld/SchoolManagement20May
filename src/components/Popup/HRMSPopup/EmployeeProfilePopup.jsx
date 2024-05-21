
//THIS COMPONENT WAS CREATED BY HAIDER

import { useEffect, useRef, useState } from "react";
import { IoIosAdd } from "react-icons/io";
import profile from "../../../assets/women-profile.webp";
import { useParams } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import EmployeeDetailsButtons from "../../Buttons/EmployeeDetailButtons/EmployeeDetailButtons";
import InputCustomDropdown from "../../../ui/InputCustomDropDown";

/* primary details = [First Name,middle name,last name,mobile no Primary,mobile no secondary, email,gender,dob
  mothertongue, aadhar card , pan card no, religion, date of joining, experience, preLeavedSchool]*/
const genderOption = ["Male","Female","Other"]
const PrimaryDetails = ({ disable,employeeDetails,handleEmployeeDetailsChange}) => {
    return (
      <div className=" w-full rounded-2xl flex h-fit p-4 border-[1px] justify-between shadow-containerShadow">
        <div className="flex justify-center items-center w-1/6">
          <img
            className="w-[153px] rounded-full"
            alt="person-female--v2"
            src={profile}
          />
        </div>
        <div className="grid grid-cols-2 xl:grid-cols-3 w-5/6 gap-y-4 gap-x-8">
        <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
              First Name
         </label>
       <input disabled={disable} value={employeeDetails.FirstName}  onChange={(e) => {
          // Allow only alphabetic characters and backspace
          if (/^[a-zA-Z]*$/.test(e.target.value) || !e.target.value) {
            handleEmployeeDetailsChange(e);
          }
        }} name="FirstName"
        autoComplete="off" type='text' className="w-full h-12 border-[1px] shadow-md rounded-2xl text-center"/>
     </div>
     <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
              Middle Name
         </label>
       <input disabled={disable} value={employeeDetails.MiddleName} onChange={(e) => {
          // Allow only alphabetic characters and backspace
          if (/^[a-zA-Z]*$/.test(e.target.value) || !e.target.value) {
            handleEmployeeDetailsChange(e);
          }
        }} 
       name="MiddleName" autoComplete="off" type='text' className="w-full h-12 border-[1px] shadow-md rounded-2xl text-center"/>
     </div>
     <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
              Last Name
         </label>
       <input disabled={disable} value={employeeDetails.LastName} onChange={(e) => {
          // Allow only alphabetic characters and backspace
          if (/^[a-zA-Z]*$/.test(e.target.value) || !e.target.value) {
            handleEmployeeDetailsChange(e);
          }
        }} 
       name="LastName" type='text' autoComplete="off" className="w-full h-12 border-[1px] shadow-md rounded-2xl text-center"/>
     </div>
     <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
              Mobile No
         </label>
       <input disabled={disable} value={employeeDetails.MobileNoPrimary} type='number' onChange={(e) => {
        const newValue = e.target.value;
        if (!newValue || newValue.length <= 10) {
          handleEmployeeDetailsChange(e);
        }
      }} 
       
       name="MobileNoPrimary" autoComplete="off" className="w-full h-12 border-[1px] shadow-md rounded-2xl text-center"/>
     </div>
     <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
              Mobile No
         </label>
       <input disabled={disable} value={employeeDetails.MobileNoSecondary} type='number' onChange={(e) => {
        const newValue = e.target.value;
        if (!newValue || newValue.length <= 10) {
          handleEmployeeDetailsChange(e);
        }
      }} 
       name="MobileNoSecondary" autoComplete="off" className="w-full h-12 border-[1px] shadow-md rounded-2xl text-center"/>
     </div>
     <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
              Email
         </label>
       <input disabled={disable} value={employeeDetails.Email} onChange={handleEmployeeDetailsChange} name="Email" type='email'
       autoComplete="off" className="w-full h-12 border-[1px] shadow-md rounded-2xl text-center"/>
     </div>
     <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
              Gender
         </label>
         <InputCustomDropdown
    inputDisabled ={disable}
    buttonStyling="flex items-center w-full h-12 border-[1px] shadow-md rounded-2xl text-center"
    containerStyling="w-full"
    value={employeeDetails.Gender}
    onChange={(option) =>
    handleEmployeeDetailsChange({ name: "Gender", value: option })
    }
    options={genderOption}
    />
         {/* <select
         disabled={disable}
      className="w-full h-12 border-[1px] shadow-md rounded-2xl text-center"
      onChange={handleEmployeeDetailsChange}
      name='Gender'
      value={employeeDetails.Gender}
>
      <option className="hover:bg-customblue" value="select" disabled selected >Select</option>
      <option className="hover:bg-customblue" value="male">Male</option>
      <option className="hover:bg-customblue" value="female">Female</option>
      <option className="hover:bg-customblue" value="other">Other</option>
      </select> */}
       {/* <input disabled={disable} value={employeeDetails.Gender} onChange={handleEmployeeDetailsChange} name="Gender" type='text'
       autoComplete="off" className="w-full h-12 border-[1px] shadow-md rounded-2xl text-center"/> */}
     </div>
     <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
              DOB
         </label>
       <input disabled={disable} value={employeeDetails.DOB} onChange={handleEmployeeDetailsChange} name="DOB" type='date'
       autoComplete="off" className="w-full h-12 border-[1px] shadow-md rounded-2xl text-center"/>
     </div>
     <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
              Mother Tongue
         </label>
       <input disabled={disable} value={employeeDetails.MotherTongue} onChange={(e) => {
          // Allow only alphabetic characters and backspace
          if (/^[a-zA-Z]*$/.test(e.target.value) || !e.target.value) {
            handleEmployeeDetailsChange(e);
          }
        }} type='text'
       name="MotherTongue" autoComplete="off" className="w-full h-12 border-[1px] shadow-md rounded-2xl text-center"/>
     </div>
     <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
              Aadhar Card No
         </label>
       <input disabled={disable} value={employeeDetails.AadharCardNo} onChange={(e) => {
        const newValue = e.target.value;
        if (!newValue || newValue.length <= 12) {
          handleEmployeeDetailsChange(e);
        }
      }} 
       name="AadharCardNo" autoComplete="off" type='number' className="w-full h-12 border-[1px] shadow-md rounded-2xl text-center"/>
     </div>
     <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
              Pan Card No
         </label>
       <input disabled={disable} value={employeeDetails.PanCardNo} type='text' onChange={(e) => {
        const newValue = e.target.value;
        if (!newValue || newValue.length <= 10) {
          handleEmployeeDetailsChange(e);
        }
      }}  
       name="PanCardNo" autoComplete="off" className="w-full h-12 border-[1px] shadow-md rounded-2xl text-center"/>
     </div>
     <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
              Religion
         </label>
       <input disabled={disable} value={employeeDetails.Religion} onChange={(e) => {
          // Allow only alphabetic characters and backspace
          if (/^[a-zA-Z]*$/.test(e.target.value) || !e.target.value) {
            handleEmployeeDetailsChange(e);
          }
        }} name="Religion" type='text'
       autoComplete="off" className="w-full h-12 border-[1px] shadow-md rounded-2xl text-center"/>
     </div>
     <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
              Date Of Joining
         </label>
       <input disabled={disable} value={employeeDetails.DateOfJoining} onChange={handleEmployeeDetailsChange} type='date'
       name="DateOfJoining" autoComplete="off" className="w-full h-12 border-[1px] shadow-md rounded-2xl text-center"/>
     </div>
     <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
              Experience
         </label>
       <input disabled={disable} value={employeeDetails.Experience} onChange={handleEmployeeDetailsChange} type='text'
       name="Experience" autoComplete="off" className="w-full h-12 border-[1px] shadow-md rounded-2xl text-center"/>
     </div>
     <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
              Pre Leaved School
         </label>
       <input disabled={disable} value={employeeDetails.PreLeavedSchool} onChange={(e) => {
          // Allow only alphabetic characters and backspace
          if (/^[a-zA-Z\s]*$/.test(e.target.value) || !e.target.value) {
            handleEmployeeDetailsChange(e);
          }
        }} type='text'
       name="PreLeavedSchool" autoComplete="off" className="w-full h-12 border-[1px] shadow-md rounded-2xl text-center"/>
     </div>
        </div>
      </div>
    );
}

/* secondary details=[current address, permanent address,eduction,bank details, payroll details]*/
const SecondaryDetails = ({payrollDetails,disable,employeeDetails,handleEmployeeDetailsChange,handleInputBlur,handlePayrollDetailsChange}) => {
    return (
      <div className='w-full flex h-fit flex-col gap-4 shadow-student'>
  
        <div className="w-full flex flex-col gap-4 border p-4 shadow-containerShadow rounded-2xl">

          <div className='w-full flex flex-col gap-4'>
        
            <div className='flex place-items-start'><p className='text-lg font-bold'>Current Address</p></div>

            <div className='flex items-center'>
                <div className='w-[86px] h-fit flex items-center font-medium text-left'>Address</div>
                <input className="w-full h-12 border-[1px] shadow-md rounded-2xl text-center" name="currentAddress" type='text'
                onChange={handleEmployeeDetailsChange} value={employeeDetails.currentAddress} autoComplete="off" disabled={disable} />
            </div>

            <div className='grid grid-cols-3 gap-y-4 gap-x-8'>
            <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
              Pincode
         </label>
       <input disabled={disable} value={employeeDetails.currentPincode} autoComplete="off" type='number'
       onChange={(e) => {
        const newValue = e.target.value;
        if (!newValue || newValue.length <= 6) {
          handleEmployeeDetailsChange(e);
        }
      }}   name="currentPincode" className="w-full h-12 border-[1px] shadow-md rounded-2xl text-center"/>
     </div>
     <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
              City
         </label>
       <input disabled={disable} value={employeeDetails.currentCity} name="currentCity" type='text'
       onChange={(e) => {
        // Allow only alphabetic characters and backspace
        if (/^[a-zA-Z]*$/.test(e.target.value) || !e.target.value) {
          handleEmployeeDetailsChange(e);
        }
      }} autoComplete="off" className="w-full h-12 border-[1px] shadow-md rounded-2xl text-center"/>
     </div>
     <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
              State
         </label>
       <input disabled={disable} value={employeeDetails.currentState} name="currentState" type='text'
       onChange={(e) => {
        // Allow only alphabetic characters and backspace
        if (/^[a-zA-Z\s]*$/.test(e.target.value) || !e.target.value) {
          handleEmployeeDetailsChange(e);
        }
      }} autoComplete="off" className="w-full h-12 border-[1px] shadow-md rounded-2xl text-center"/>
     </div>
            </div>

          </div>

          <div className='w-full flex flex-col gap-4'>
        
            <div className='flex place-items-start'><p className='text-lg font-bold'>Permanent Address</p></div>

            <div className='flex items-center'>
                <div className='w-[86px] h-fit flex items-center font-medium text-left'>Address</div>
                <input className="w-full h-12 border-[1px] shadow-md rounded-2xl text-center" 
                disabled={disable} value={employeeDetails.permanentAddress} autoComplete="off" type='text' onChange={handleEmployeeDetailsChange}/>
            </div>

            <div className='grid grid-cols-3 gap-y-4 gap-x-8'>
            <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
              Pincode
         </label>
       <input disabled={disable} value={employeeDetails.permanentPincode} type='number' onChange={(e) => {
        const newValue = e.target.value;
        if (!newValue || newValue.length <= 6) {
          handleEmployeeDetailsChange(e);
        }
      }}   
       name="permanentPincode" autoComplete="off" className="w-full h-12 border-[1px] shadow-md rounded-2xl text-center"/>
     </div>
     <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
              City
         </label>
       <input disabled={disable} value={employeeDetails.permanentCity} onChange={(e) => {
          // Allow only alphabetic characters and backspace
          if (/^[a-zA-Z]*$/.test(e.target.value) || !e.target.value) {
            handleEmployeeDetailsChange(e);
          }
        }} type='text'
       name="permanentCity" autoComplete="off" className="w-full h-12 border-[1px] shadow-md rounded-2xl text-center"/>
     </div>
     <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
              State
         </label>
       <input disabled={disable} value={employeeDetails.permanentState} onChange={(e) => {
          // Allow only alphabetic characters and backspace
          if (/^[a-zA-Z\s]*$/.test(e.target.value) || !e.target.value) {
            handleEmployeeDetailsChange(e);
          }
        }} name="permanentState" type='text'
       autoComplete="off" className="w-full h-12 border-[1px] shadow-md rounded-2xl text-center"/>
     </div>
            </div>
          </div>

          <div className='w-full flex flex-col gap-4'>
        
            <div className='flex place-items-start'><p className='text-lg font-bold'>Qualification</p></div>

            <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-4 gap-x-8'>
            <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
              School
         </label>
       <input disabled={disable} value={employeeDetails.SchoolSSC} onChange={(e) => {
          // Allow only alphabetic characters and backspace
          if (/^[a-zA-Z\s]*$/.test(e.target.value) || !e.target.value) {
            handleEmployeeDetailsChange(e);
          }
        }} name="SchoolSSC" type='text'
       autoComplete="off" className="w-full h-12 border-[1px] shadow-md rounded-2xl text-center"/>
     </div>
     <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
              SSC
         </label>
       <input disabled={disable} value={employeeDetails.SSC} onChange={handleEmployeeDetailsChange} type='text'
       name="SSC" autoComplete="off" className="w-full h-12 border-[1px] shadow-md rounded-2xl text-center"/>
     </div>
     <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
              Year of Passing
         </label>
       <input disabled={disable} value={employeeDetails.YearOfPassingSSC} type='number' onChange={(e) => {
        const newValue = e.target.value;
        if (!newValue || newValue.length <= 4) {
          handleEmployeeDetailsChange(e);
        }
      }}  
       name="YearOfPassingSSC" autoComplete="off" className="w-full h-12 border-[1px] shadow-md rounded-2xl text-center"/>
     </div>
     <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
              Percentage
         </label>
       <input disabled={disable} value={employeeDetails.ScoreSSC} onChange={handleEmployeeDetailsChange} type='number' name="ScoreSSC" autoComplete="off" 
       onBlur={handleInputBlur} className="w-full h-12 border-[1px] shadow-md rounded-2xl text-center"/>
     </div>
     <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
              College
         </label>
       <input disabled={disable} value={employeeDetails.CollegeHSC} onChange={(e) => {
          // Allow only alphabetic characters and backspace
          if (/^[a-zA-Z\s]*$/.test(e.target.value) || !e.target.value) {
            handleEmployeeDetailsChange(e);
          }
        }} name="CollegeHSC" autoComplete="off" 
       type='text' className="w-full h-12 border-[1px] shadow-md rounded-2xl text-center"/>
     </div>
     <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
              HSC
         </label>
       <input disabled={disable} value={employeeDetails.HSC} onChange={handleEmployeeDetailsChange} name="HSC" autoComplete="off" type='text'
       className="w-full h-12 border-[1px] shadow-md rounded-2xl text-center"/>
     </div>
     <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
              Year of Passing
         </label>
       <input disabled={disable} value={employeeDetails.YearOfPassingHSC} type='number' onChange={(e) => {
        const newValue = e.target.value;
        if (!newValue || newValue.length <= 4) {
          handleEmployeeDetailsChange(e);
        }
      }}  
       name="YearOfPassingHSC" autoComplete="off" className="w-full h-12 border-[1px] shadow-md rounded-2xl text-center"/>
     </div>
     <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
          Percentage
         </label>
       <input disabled={disable} value={employeeDetails.ScoreHSC} onChange={handleEmployeeDetailsChange} name="ScoreHSC" type='number' onBlur={handleInputBlur}
       autoComplete="off" className="w-full h-12 border-[1px] shadow-md rounded-2xl text-center"/>
     </div>
     <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
              University
         </label>
       <input disabled={disable} value={employeeDetails.UniversityUG} onChange={(e) => {
          // Allow only alphabetic characters and backspace
          if (/^[a-zA-Z\s]*$/.test(e.target.value) || !e.target.value) {
            handleEmployeeDetailsChange(e);
          }
        }} name="UniversityUG" type='text'
       autoComplete="off" className="w-full h-12 border-[1px] shadow-md rounded-2xl text-center"/>
     </div>
     <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
              UG
         </label>
       <input disabled={disable} value={employeeDetails.UG} onChange={handleEmployeeDetailsChange} name="UG" autoComplete="off" type='text'
       className="w-full h-12 border-[1px] shadow-md rounded-2xl text-center"/>
     </div> 
     <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
              Year of Passing
         </label>
       <input disabled={disable} value={employeeDetails.YearOfPassingUG} onChange={(e) => {
        const newValue = e.target.value;
        if (!newValue || newValue.length <= 4) {
          handleEmployeeDetailsChange(e);
        }
      }}   name="YearOfPassingUG" type='number'
       autoComplete="off" className="w-full h-12 border-[1px] shadow-md rounded-2xl text-center"/>
     </div>
     <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
          Percentage
         </label>
       <input disabled={disable} value={employeeDetails.ScoreUG} onChange={handleEmployeeDetailsChange} name="ScoreUG" autoComplete="off" type='number'
       onBlur={handleInputBlur} className="w-full h-12 border-[1px] shadow-md rounded-2xl text-center"/>
     </div>
     <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
              University
         </label>
       <input disabled={disable} value={employeeDetails.UniversityPG} onChange={(e) => {
          // Allow only alphabetic characters and backspace
          if (/^[a-zA-Z\s]*$/.test(e.target.value) || !e.target.value) {
            handleEmployeeDetailsChange(e);
          }
        }} name="UniversityPG" type='text'
       autoComplete="off" className="w-full h-12 border-[1px] shadow-md rounded-2xl text-center"/>
     </div>
     <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
              PG
         </label>
       <input disabled={disable} value={employeeDetails.PG} name="PG" onChange={handleEmployeeDetailsChange} autoComplete="off" type='text'
       className="w-full h-12 border-[1px] shadow-md rounded-2xl text-center"/>
     </div> 
     <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
              Year of Passing
         </label>
       <input disabled={disable} value={employeeDetails.YearOfPassingPG} onChange={(e) => {
        const newValue = e.target.value;
        if (!newValue || newValue.length <= 4) {
          handleEmployeeDetailsChange(e);
        }
      }}   name="YearOfPassingPG" type='number'
       autoComplete="off" className="w-full h-12 border-[1px] shadow-md rounded-2xl text-center"/>
     </div>
     <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
          Percentage
         </label>
       <input disabled={disable} value={employeeDetails.ScorePG} onChange={handleEmployeeDetailsChange} name="ScorePG" type='number'
       onBlur={handleInputBlur} autoComplete="off" className="w-full h-12 border-[1px] shadow-md rounded-2xl text-center"/>
     </div>
            </div>

          </div>

        </div>

        <div className='w-full flex flex-col gap-4 border p-4 shadow-containerShadow rounded-2xl'>
      
          <div className='flex place-items-start'><p className='text-lg font-bold'>Bank Details</p></div>
  
          <div className='grid grid-cols-2 gap-y-4 gap-x-8'>
          <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
          Employee Name
         </label>
       <input disabled={disable} value={payrollDetails.FacultyName} onChange={(e) => {
          // Allow only alphabetic characters and backspace
          if (/^[a-zA-Z\s]*$/.test(e.target.value) || !e.target.value) {
            handlePayrollDetailsChange(e);
          }
        }} name="FacultyName" type='text'
       autoComplete="off" className="w-full h-12 border-[1px] shadow-md rounded-2xl text-center"/>
     </div>
     <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
          Bank Name
         </label>
       <input disabled={disable} value={employeeDetails.BankName} onChange={(e) => {
          // Allow only alphabetic characters and backspace
          if (/^[a-zA-Z\s]*$/.test(e.target.value) || !e.target.value) {
            handleEmployeeDetailsChange(e);
          }
        }} name="BankName" autoComplete="off" type='text'
       className="w-full h-12 border-[1px] shadow-md rounded-2xl text-center"/>
     </div>
     <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
          IFSC Code
         </label>
       <input disabled={disable} value={employeeDetails.IFSCCode} onChange={(e) => {
        const newValue = e.target.value;
        if (!newValue || newValue.length <= 11) {
          handleEmployeeDetailsChange(e);
        }
      }} name="IFSCCode" autoComplete="off" type='text'
       className="w-full h-12 border-[1px] shadow-md rounded-2xl text-center"/>
     </div>
     <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
          Employee ID
         </label>
       <input disabled={disable} value={payrollDetails.FacultyId} onChange={handlePayrollDetailsChange} name="FacultyId" autoComplete="off" type='number'
       className="w-full h-12 border-[1px] shadow-md rounded-2xl text-center"/>
     </div>
     <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
          Bank Ac.No
         </label>
       <input type="number" disabled={disable} value={employeeDetails.BankACNo} onChange={handleEmployeeDetailsChange} name="BankACNo" 
       autoComplete="off" className="w-full h-12 border-[1px] shadow-md rounded-2xl text-center"/> 
     </div>
     <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
          Branch
         </label>
       <input disabled={disable} value={employeeDetails.Branch} onChange={handleEmployeeDetailsChange} name="Branch" autoComplete="off" type="text"
       className="w-full h-12 border-[1px] shadow-md rounded-2xl text-center"/>
     </div>
          </div>
  
        </div>

        <div className='w-full flex flex-col gap-4 border p-4 shadow-containerShadow rounded-2xl'>
      
          <div className='flex place-items-start'><p className='text-lg font-bold'>Payroll Details</p></div>
  
          <div className='grid grid-cols-2 gap-y-4 gap-x-8'>
            
            <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
          PF No
         </label>
       <input disabled={disable} value={employeeDetails.PFNo} onChange={handleEmployeeDetailsChange} name="PFNo" autoComplete="off" type='text'
       className="w-full h-12 border-[1px] shadow-md rounded-2xl text-center"/>
     </div>
     <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
          EPF
         </label>
       <input disabled={disable} value='' autoComplete="off" onChange={handlePayrollDetailsChange} name="" 
       className="w-full h-12 border-[1px] shadow-md rounded-2xl text-center"/>
     </div>
     <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
          ESI No
         </label>
       <input disabled={disable} value={employeeDetails.ESINo} onChange={handleEmployeeDetailsChange} name="ESINo" autoComplete="off" type="number"
       className="w-full h-12 border-[1px] shadow-md rounded-2xl text-center"/>
     </div>
     <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
          UAN No
         </label>
       <input disabled={disable} value={employeeDetails.UANNo} onChange={(e) => {
        const newValue = e.target.value;
        if (!newValue || newValue.length <= 12) {
          handleEmployeeDetailsChange(e);
        }
      }} name="UANNo" autoComplete="off" type="number"
       className="w-full h-12 border-[1px] shadow-md rounded-2xl text-center"/>
     </div>
     <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
          STD Days
         </label>
       <input disabled={disable} value={payrollDetails.STDDays} onChange={handlePayrollDetailsChange} name="STDDays" autoComplete="off" type="number"
       className="w-full h-12 border-[1px] shadow-md rounded-2xl text-center"/>
     </div>
     <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
          State Bonus
         </label>
       <input disabled={disable} value={payrollDetails.StatBonus} onChange={handlePayrollDetailsChange} name="StatBonus" autoComplete="off" type="number"
       className="w-full h-12 border-[1px] shadow-md rounded-2xl text-center"/>
     </div>
     <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
          Basic Allowance
         </label>
       <input disabled={disable} value={payrollDetails.Basic} name="Basic" type="number" className="w-full h-12 border-[1px] shadow-md rounded-2xl text-center" autoComplete="off"/>
     </div>
     <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
          Professional Tax
         </label>
       <input disabled={disable} value={payrollDetails.ProfessionalTax} onChange={handlePayrollDetailsChange} name="ProfessionalTax" autoComplete="off" type="number"
       className="w-full h-12 border-[1px] shadow-md rounded-2xl text-center"/>
     </div>
     <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
          Special Allowance
         </label>
       <input disabled={disable} value={payrollDetails.SpecialAllowance} onChange={handlePayrollDetailsChange} name="SpecialAllowance" type="number"
       autoComplete="off" className="w-full h-12 border-[1px] shadow-md rounded-2xl text-center"/>
     </div>
     <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
          House Rent Allowance
         </label>
       <input disabled={disable} value={payrollDetails.HouseRentAllowance} onChange={handlePayrollDetailsChange} name="HouseRentAllowance" type="number"
       autoComplete="off" className="w-full h-12 border-[1px] shadow-md rounded-2xl text-center"/>
     </div>
          </div>
  
        </div>
  
      </div>
    )
}
/*All images document*/
const UploadDocuments = ({ fileImages, setFileImages,disable }) => {   ///was made by Abhishek 
  const photoInputRef = useRef();
  const aadhaarInputRef = useRef();     
  const panInputRef = useRef();
  const resumeInputRef = useRef();
  const UGcertificateInputRef = useRef();
  const PGcertificateInputRef = useRef();
  const cvInputRef = useRef();
  const addDocumentInputRef = useRef();

  function handleFileChange(event, currFileName) {
    
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setFileImages((prevState) => ({
        ...prevState,
        [currFileName]: reader.result,
      }));
    };
    reader.readAsDataURL(file);
  }

  const handleRemoveImage = (currFileName) => {
    setFileImages((prevState) => ({
      ...prevState,
      [currFileName]: '',
    }));
  };

  const handleDrop = (event, currFileName) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setFileImages((prevState) => ({
        ...prevState,
        [currFileName]: reader.result,
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const documentFields = [
    { ref: photoInputRef, name: "photo", label: "Passport Size Photo" },
    { ref: aadhaarInputRef, name: "aadhaar", label: "Aadhaar Card" },
    { ref: panInputRef, name: "pan", label: "Pan Card" },
    { ref: resumeInputRef, name: "resume", label: "Resume" },
    { ref: UGcertificateInputRef, name: "UGcertificate", label: "UG Certificate" },
    { ref: PGcertificateInputRef, name: "PGcertificate", label: "PG Certificate" },
    { ref: cvInputRef, name: "cv", label: "CV" },
    { ref: addDocumentInputRef, name: "addDocument", label: "Additional Document" },
  ];

  return (
    <form className='w-full rounded-2xl border-[1px] flex h-fit p-4 flex-col gap-6 shadow-containerShadow'  >
      <div className='flex place-items-start'>
        <p className='text-lg font-bold'>Documentation</p>
      </div>
      <div className='grid gap-4 w-full grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center' >
        {documentFields.map(({ ref, name, label }) => (
          <div
            key={name}
            className="w-full h-full border-[1px] rounded-3xl flex items-center flex-col gap-3 p-3 justify-between max-w-60"
            onDragOver={handleDragOver}
            onDrop={(event) => handleDrop(event, name)}
          >
            <div
              className="w-full h-36 border-[1px] rounded-2xl shadow-xl flex items-center justify-center max-w-56 relative"
              onClick={() => ref.current.click()}
            >
              {fileImages[name] ? (
                <div className="relative w-full h-full">
                  <img src={fileImages[name]} alt={name} className="object-cover w-full h-full" />
                  <button
                   disabled={disable}
                    type="button"
                    className="absolute top-1 right-1 bg-red-600 text-white rounded-full p-1 cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      const confirmDelete = window.confirm('Are you sure you want to delete this item?');
                      if (confirmDelete){
                        handleRemoveImage(name)
                     ;}
                    }}
                  >
                    <IoMdClose className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <>
                  <input
                    ref={ref}
                    accept="image/*"
                    type="file"
                    style={{ display: "none" }}
                    onChange={(event) => handleFileChange(event, name)}
                    disabled={disable}
                  />
                  <IoIosAdd style={{ fontSize: "3.646vw", color: " #A6A6A6" }} />
                </>
              )}
            </div>
            <p className="text-lg text-center w-full">{label}</p>
          </div>
        ))}
      </div>
    </form>
  );
}


export const EmployeeProfilePopup = () => {
  //bringing the particular employee data through useParams after clicking
  const { employeeId, employeeRole } = useParams();
  // const [employeeUploadFiles,setEmployeeUploadFiles] = useState({
  //   photo: "",
  //   aadhaar:"",
  //   pan:"",
  //   resume:"",
  //   UGcertificate:"",
  //   PGcertificate:"",
  //   cv:"",
  //   addDocument:"",
  // })
  //state for enabling the inputs to edit
  const [disable,setDisable] = useState(true);
  const [employeeDetails,setEmployeeDetails]=useState();
  const [payrollDetails,setPayrollDetails] = useState([]);
  //Extracting info of the perticular id from json
  useEffect(()=>{
    async function getEmployeeDetails() {
      try {
          const response = await fetch(
            "http://localhost:4000/allEmployeeDetailsArr"
          );
          const detailsOfEmployees = await response.json();
          let filteredDetails = detailsOfEmployees.filter(employee=>String(employee.employeeCustomId)===String(employeeId))
          setEmployeeDetails(filteredDetails[0])
        const response3 = await fetch(
          `http://localhost:4000/PayrollDetails/?employeeCustomId=${employeeId}`
        )
        const detailsOfPayroll = await response3.json();
        if(detailsOfPayroll.length!==0){
           setPayrollDetails(detailsOfPayroll[0])
        }
        
       
      } catch (err) {
        console.log(err);
      }
    }
    getEmployeeDetails();
  },[employeeId,employeeRole]);
  
  const handleInputBlur = (event)=>{
    // Get the input value
    let inputValue = event.target.value.trim();

    // Check if the input value is not empty
    if (inputValue !== '') {
      // Format the input value to two decimal places
      const formattedValue = parseFloat(inputValue).toFixed(2);
      
      // Update the input value with the formatted value
      event.target.value = formattedValue;
      setEmployeeDetails(prevDetails => {
       return {
         ...prevDetails,
         [event.target.name] : event.target.value
       }
     })
    }
 }
 // Function to handle changes in employee details
 const handleEmployeeDetailsChange = (e) => {
  setEmployeeDetails((prevDetails) => ({
    ...prevDetails,
    [e.target.name]: e.target.value,
  }));
};

// Function to handle changes in payroll details
const handlePayrollDetailsChange = (e) => {
  setPayrollDetails((prevDetails) => ({
    ...prevDetails,
    [e.target.name]: e.target.value,
  }));
};
console.log(employeeDetails)
  return (
   <>
      {(employeeDetails && payrollDetails) ?(<div className="flex flex-col gap-4 w-full overflow-y-hidden rounded-2xl">
        <EmployeeDetailsButtons setDisable={setDisable} disable={disable} employeeDetails={employeeDetails} payrollDetails={payrollDetails}/>
        <div className='w-full overflow-y-scroll scrollbarnone flex flex-col gap-4'>

          <PrimaryDetails employeeDetails={employeeDetails}  handleEmployeeDetailsChange={handleEmployeeDetailsChange} disable={disable}></PrimaryDetails>

          <SecondaryDetails employeeDetails={employeeDetails}
          handleEmployeeDetailsChange={handleEmployeeDetailsChange}
          handlePayrollDetailsChange={handlePayrollDetailsChange}
          payrollDetails={payrollDetails} disable={disable} 
          handleInputBlur={handleInputBlur}>
          </SecondaryDetails>

          <UploadDocuments fileImages={employeeDetails} setFileImages={setEmployeeDetails} disable={disable}></UploadDocuments>

        </div>

    </div>):''}
    </>
  )

}
export default EmployeeProfilePopup;