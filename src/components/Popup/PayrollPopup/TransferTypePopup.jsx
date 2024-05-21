//Created by Athira, save functionality by Swati.
import Pagination from "../../../ui/Pagination";
import classes from "../../../styles/TransferTypePopup.module.css"; // Importing CSS module for styling
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import { useState, useEffect } from "react";
import NewBankTransferPopup from "./NewBankTransferPopup";
import Modal from "../../Modal/Modal";
import { useLocation } from "react-router-dom";

// Functional component to render popup based on step number for Payroll
export default function TransferTypePopup() {
  const [step, setStep] = useState(1);
  const [showModal, setShowModal] = useState(true);
  const pathname = useLocation().pathname;
  const [newBankTransferData, setNewBankTransferData] = useState({
    selectedBank: "",
    selectedEmployees: [],
    bankDetails: {},
  });
  const [selectedBank, setSelectedBank] = useState("SBI Bank");
  const [employeeList, setEmployeeList] = useState([]);
  const [selectedEmployees, setSelectedEmployees] = useState([]);
  const selectedEmployeeIds = [];

  const handlePrevious = () => {
    setStep(step - 1);
  };

  useEffect(() => {
    //fetch the data
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/PayrollDetails");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setEmployeeList(jsonData);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  //Function to handle onclick of next button
  const handleNext = () => {
    if (step === 3) {
      // alert("Data saved");
    } else {
      setStep(step + 1);
    }
  };

  //function to set data after selecting bank
  const handleSelectingBank = () => {
    setNewBankTransferData((prevData) => {
      return { ...prevData, selectedBank };
    });
  };

  //
  const handleSelectingEmployees = () => {
    setSelectedEmployees(selectedEmployees);
    setNewBankTransferData((prevData) => {
      return { ...prevData, selectedEmployees: selectedEmployeeIds };
    });
  };

  const closeModal = () => {
    setShowModal(false);
  };

  //Function to handle selecting employees when clicked on row.
  const selectEmployeeHandler = (emp) => {
    //If employee not selected add them
    if (selectedEmployeeIds.indexOf(emp) < 0) {
      selectedEmployeeIds.push(emp);
      //If already selected remove them
    } else {
      const index = selectedEmployeeIds.indexOf(emp);
      selectedEmployeeIds.splice(index, 1);
    }
  };

  //Function to save data in json.
  const saveHandler = async (formData) => {
    if (newBankTransferData.selectedEmployees.length === 0) {
      alert("Please select employees!!");
    } else {
      setNewBankTransferData((prevData) => {
        console.log({ ...prevData, bankDetails: formData });
        return { ...prevData, bankDetails: formData };
      });
      const res = await fetch(`http://localhost:4000/PaidEmployeeDetails`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          selectedBank: newBankTransferData.selectedBank,
          selectedEmployees: newBankTransferData.selectedEmployees,
          bankDetails: formData,
        }),
      });
      if (res.ok) {
        alert("Data saved!!");
        closeModal();
      } else {
        alert("Data not saved!!");
      }
    }
  };

  return (
    <Modal handleClose={closeModal} isOpen={showModal}>
      <div className={classes.container}>
        <Pagination setStep={setStep} step={step} />
        {step === 1 && (
          <Step1
            setSelectedBank={setSelectedBank}
            handleNext={handleNext}
            handleSelectingBank={handleSelectingBank}
          />
        )}
        {step === 2 && (
          <Step2
            employeeList={employeeList}
            selectEmployeeHandler={selectEmployeeHandler}
            handlePrevious={handlePrevious}
            handleNext={handleNext}
            handleSelectingEmployees={handleSelectingEmployees}
          />
        )}

        {step === 3 && pathname == "/newBank" && (
          <NewBankTransferPopup
            newBankTransferData={newBankTransferData}
            employeeList={employeeList}
            handlePrevious={handlePrevious}
            handleNext={handleNext}
            saveHandler={saveHandler}
          />
        )}
        {step === 3 && pathname == "/payouts" && (
          <Step3 step={3} currentStep={step} />
        )}
      </div>
    </Modal>
  );
}
