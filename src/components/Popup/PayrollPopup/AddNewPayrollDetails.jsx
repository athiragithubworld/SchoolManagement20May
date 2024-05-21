import React, { useState } from "react";
import classes from "../../../styles/AddNewPayrollDetails.module.css";
import { MdOutlineFileDownload } from "react-icons/md";
import { HiPencil } from "react-icons/hi";
import { RiDeleteBin5Line } from "react-icons/ri";


function InputField({ label,changeHandler}) {
  return (
    <div className="flex gap-1 items-center justify-center">
      <label className="w-[104px] h-fit flex">{label}</label>
      <input
        className={` bg-white rounded-[14px] shadow-primary h-[52px] outline-none px-4 text-center`}
        onChange={changeHandler}
        name = {label.split(" ").join('')}
      />
    </div>
  );
}


export default function AddNewSalaryDetails({ handleAddNew, closeModal,facultySalarydetails,setFacultySalaryDetails}) {

    // function handleOnChange(e) {
    //   e.preventDefault();
    //   if (!facultyName || !bankName || !facultyId || !bankAc || !esi ||!lop || !std ||!pf||!basic||!stat||!provident||!house||!special||!professional||!income) {
    //     alert("please fill the required feilds");
    //     return;
    //   }
    //   const newSalaryDetails = {facultyName,bankName,esi,
    //                             facultyId,bankAc,lop,
    //                             branch,ifsc,uan,
    //                             incomeTax,std,pf,
    //                             basic,stat,provident,
    //                             house,special,professional};
    //   handleAddNew(newSalaryDetails);
    //   closeModal(false);
    // }
  
    const [payrollDetails,setPayrollDetails]  = useState({
      FacultyName: "",
      BankName: "",
      ESINo: "",

      FacultyId:"",
      BankAcNo:"",
      LOPDays:"",

      Branch: "",
      IFSCCode: "",
      UANNo:"",

      IncomeTax:"",
      STDDays:"",
      PFNo :"",

      Basic:"",
      StatBonus:"",
      ProvidentFund:"",

      HouseRentAllowance:"",
      SpecialAllowance:"",
      ProfessionalTax:""
    })

    const inputFields = [
      { label: "Faculty Name" },
      { label: "Bank Name" },
      { label: "ESI No" },

      { label: "Faculty Id" },
      { label: "BankAc No" },
      { label: "LOP Days" },

      { label: "Branch" },
      { label: "IFSC Code" },
      { label: "UAN No" },

      { label: "Income Tax" },
      { label: "STD Days" },
      { label: "PF No" },

      { label: "Basic" },
      { label: "Stat Bonus"},
      { label: "Provident Fund"},

      { label: "House Rent Allowance"},
      { label: "Special Allowance"},
      { label: "Professional Tax"}
    ];

    function changeHandler(event){
      setPayrollDetails( prevDetails => {
        return {
          ...prevDetails,
          [event.target.name] : event.target.value
        }
      })
    }

    const handleAddPayrollDetails = (newDetails) => {
      const updatedDetailsArray = [...facultySalarydetails];
      updatedDetailsArray.push({
        id: Math.random(),
        ...newDetails,
      });
      console.log(updatedDetailsArray);
      setFacultySalaryDetails(updatedDetailsArray);
    };
    
    async function submitHandler(payrollDetails){
      // console.log("Hellooo");
      if(!payrollDetails.FacultyName || !payrollDetails.BankName || !payrollDetails.ESINo || 
        !payrollDetails.FacultyId || !payrollDetails.BankAcNo || !payrollDetails.LOPDays || 
        !payrollDetails.Branch || !payrollDetails.IFSCCode || !payrollDetails.UANNo || 
        !payrollDetails.IncomeTax || !payrollDetails.STDDays || !payrollDetails.PFNo || 
        !payrollDetails.Basic || !payrollDetails.StatBonus || !payrollDetails.ProvidentFund || 
        !payrollDetails.HouseRentAllowance || !payrollDetails.SpecialAllowance || !payrollDetails.ProfessionalTax ){
        alert("please fill the required feilds");
        return;
      }
      const response = await fetch("http://localhost:4000/PayrollDetails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payrollDetails)
      });
      // console.log(payrollDetails);
      alert("Data Saved");
      closeModal();
      handleAddPayrollDetails(payrollDetails);
    }

    

    function handleCloseModal(e) {
      e.preventDefault();
      closeModal(false);
    }

  return (
    <div className={`${classes.new} flex-col`}>

      <form>

        <div className={classes.admin}>
          <h4>Add New Payroll Details</h4>
        </div>

        <div className="grid grid-cols-3 gap-6">

          {inputFields.map((field, index) => (
            <InputField changeHandler={changeHandler}
              key={index}
              label={field.label}
            />
          ))}

        </div> 
        
      </form>

      <div className="flex gap-4 justify-center">
            <button className={classes.button} onClick={handleCloseModal}>
              Cancel
            </button>
            <button className={classes.submitbutton} onClick={()=>submitHandler(payrollDetails)}>
                  Save
            </button>
      </div>
      
    </div>
  );
}
