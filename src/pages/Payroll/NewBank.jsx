import React, { useState,useEffect } from 'react'
import classes from '../../styles/PayrollDashboard.module.css';
import PayrollTable from '../../components/Tables/PayrollTable/PayrollTable';
import  PayrollButton from '../../components/Buttons/PayrollButtons/PayrollButtons';
import Modal from '../../components/Modal/Modal';
import TransferTypePopup from "../../components/Popup/PayrollPopup/TransferTypePopup";


const salaryColumnArr = [
  {label: "S.no", value:"id" },
  {label: "Name", value:"facultyName" },
  {label: "Employee No",  value:" facultyId" },
  {label: "Bank", value:"bankName" },
  {label: "Branch",  value:"branch" },
  {label: "IFSC Code", value:"ifsc" },
  {label: "ACC.No", value:" bankAc" },
  {label: "Amount", value:"amount" },
];
export default function NewBank() {


    useEffect(() => {
      document.title = "Payroll"; // Set the title to 'Page Title'
      return () => {
        document.title = "School"; // Reset the title
      };
    }, []);
  
    const [facultySalarydetails, setFacultySalaryDetails] = useState({});
  
    const [salaryColumn, setSalaryColumn] = useState(salaryColumnArr);
  
    const handleSalaryColumn = (newColumn) => {
      setSalaryColumn(columns=>[...columns,newColumn])
    }
    const handleAddPayDetails = (newSalaryDetails) => {
      const updatedDetailsArray = [...facultySalarydetails];
      updatedDetailsArray.push({
        id: Math.random(),
        ...newSalaryDetails,
      });
      setFacultySalaryDetails(updatedDetailsArray);
    };
    function handleUpdateEachRowDetails(updatedRowDetails, updateId) {
      const index = facultySalarydetails.findIndex(
        (data) => data.id === updateId
      );
      facultySalarydetails[index] = {
        id: facultySalarydetails[index].id,
        ...updatedRowDetails,
      };
    }
    
  function handleDeleteFacultySalaryDetails() {
    setFacultySalaryDetails([])
    
  }
  function handleDeleteEachRowDetails(id) {
    const updatedpayDetails = facultySalarydetails.filter((detail) => {
      return detail.id !== Number(id);
    });
    setFacultySalaryDetails(updatedpayDetails);
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/PayrollDetails");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        
        console.log(jsonData);
        setFacultySalaryDetails(jsonData);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  },[]);
  
    return (
      <div className="flex flex-col gap-4 w-full h-full overflow-hidden rounded-2xl">
        <PayrollButton
          handleSalaryColumn={handleSalaryColumn}
          handleDeleteFacultySalaryDetails={handleDeleteFacultySalaryDetails}
          handleAddNew={handleAddPayDetails}
        />

        <PayrollTable
          salaryColumn={salaryColumn}
          facultySalarydetails={facultySalarydetails}
          handleDeleteEachRowDetails={handleDeleteEachRowDetails}
          handleUpdateEachRowDetails={handleUpdateEachRowDetails}
        />

        <TransferTypePopup />
      </div>
    );
  }
  
