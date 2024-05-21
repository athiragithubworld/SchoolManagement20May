// Created by Athira
//added functionality in print button by gunjan
import classes from "../../../styles/NameAndPNRPopup.module.css";
import { GoShareAndroid } from "react-icons/go";
import { AiOutlinePrinter } from "react-icons/ai";
import Modal from "../../Modal/Modal";
import FeesRecieptPopup from "./FeesRecieptPopup";
import { useState } from "react";
import { useEffect } from "react";

// Array containing column labels and values for student fee details
const StudentFeeColumnArr = [
  { label: "Receipt No", value: "receiptNo" },
  { label: "Fees Type", value: "feestype" },
  { label: "Academic Year", value: "academicYear" },
  { label: "Cancellation charges", value: "cancellationCharges" },
  { label: "Amount", value: "amount" },
  { label: "Payment Mode", value: "paymentMode" },
  { label: "Date", value: "date" },
  { label: "Status", value: "status" },
  // { label: "Receipt", value: "receipt" },
];

// Array containing student fee details
/*const StudentFeeDetailsArr = [
    {
        receiptNo: 18750,
        feestype: "Exam Fee",
        academicYear: 2024,
        cancellationCharges: 0,
        amount: 800,
        paymentMode: "Online",
        date: "18-3-2024",
        status: "Approved",
        // receipt: <AiOutlinePrinter />,
    },
    {
        receiptNo: 18751,
        feestype: "Tuition Fee",
        academicYear: 2024,
        cancellationCharges: 0,
        amount: 2500,
        paymentMode: "Cash",
        date: "20-3-2024",
        status: "Approved",
        //receipt: <AiOutlinePrinter />,
    },
    {
        receiptNo: 18752,
        feestype: "Library Fee",
        academicYear: 2024,
        cancellationCharges: 0,
        amount: 300,
        paymentMode: "Card",
        date: "22-3-2024",
        status: "Pending",
        // receipt: <AiOutlinePrinter />,
    },
    {
        receiptNo: 18753,
        feestype: "Sports Fee",
        academicYear: 2024,
        cancellationCharges: 0,
        amount: 500,
        paymentMode: "Online",
        date: "25-3-2024",
        status: "Approved",
        // receipt: <AiOutlinePrinter />,
    },
    {
        receiptNo: 18753,
        feestype: "Sports Fee",
        academicYear: 2024,
        cancellationCharges: 0,
        amount: 500,
        paymentMode: "Online",
        date: "25-3-2024",
        status: "Approved",
        //receipt: <AiOutlinePrinter />,
    },
    {
        receiptNo: 18753,
        feestype: "Sports Fee",
        academicYear: 2024,
        cancellationCharges: 0,
        amount: 500,
        paymentMode: "Online",
        date: "25-3-2024",
        status: "Approved",
        //receipt: <AiOutlinePrinter />,
    },
    {
        receiptNo: 18753,
        feestype: "Sports Fee",
        academicYear: 2024,
        cancellationCharges: 0,
        amount: 500,
        paymentMode: "Online",
        date: "25-3-2024",
        status: "Approved",
        //receipt: <AiOutlinePrinter />,
    },
    {
        receiptNo: 18753,
        feestype: "Sports Fee",
        academicYear: 2024,
        cancellationCharges: 0,
        amount: 500,
        paymentMode: "Online",
        date: "25-3-2024",
        status: "Approved",
        // receipt: <AiOutlinePrinter />,
    },
    {
        receiptNo: 18753,
        feestype: "Sports Fee",
        academicYear: 2024,
        cancellationCharges: 0,
        amount: 500,
        paymentMode: "Online",
        date: "25-3-2024",
        status: "Approved",
        // receipt: <AiOutlinePrinter />,
    },
];*/

export default function NameAndPNRPopup({ paidStudentData }) {
  const [showFeeRecieptPopup, setShowFeeRecieptPopup] = useState(false);
  const [filteredStudentFeeDetails, setFilteredStudentFeeDetails] = useState(
    []
  );
  const [receipt, setReceipt] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/NameAndPNRList");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        const filteredData = jsonData.filter((data) => {
          return data.id === paidStudentData.id;
        });
        setFilteredStudentFeeDetails(filteredData);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [paidStudentData.id]);
  const closeModal = () => {
    setShowFeeRecieptPopup(false);
  };
  const handleFeeReciept = (feeReceipt) => {
    setShowFeeRecieptPopup(true);
    setReceipt(feeReceipt);
  };
  return (
    <>
      <div className={classes.mainContainer}>
        <div className={classes.headingContainer}>
          <h4>Name and PNR</h4>
          {/* Container for icon buttons */}
          <div className={classes.iconButtons}>
            <button className={classes.faculty_classbutton}>
              <GoShareAndroid size={23} />
            </button>
          </div>
        </div>
        {/* Container for table */}
        <div className={classes.tableContainer}>
          <table>
            <thead>
              <tr>
                {/* Mapping over column labels to create table headers */}
                {StudentFeeColumnArr.map((column, index) => (
                  <th key={index}>{column.label}</th>
                ))}
                <th>Receipt</th>
              </tr>
            </thead>
            <tbody>
              {/* Mapping over student fee details to create table rows */}
              {filteredStudentFeeDetails.map((fee, index) => (
                <tr key={index}>
                  {StudentFeeColumnArr.map((column, index) => (
                    <>
                      <td key={index}>
                        {/* Mapping over column values to create table cells */}
                        {column.value === "amount"
                          ? `₹${fee[column.value]}`
                          : fee[column.value]}
                      </td>
                    </>
                  ))}
                  <td>
                    {fee.status === "Approved" ? (
                      <button onClick={() => handleFeeReciept(fee)}>
                        {" "}
                        <AiOutlinePrinter />
                      </button>
                    ) : (
                      <button>
                        {" "}
                        <AiOutlinePrinter className="text-gray-500" />
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Modal handleClose={closeModal} isOpen={showFeeRecieptPopup}>
        <FeesRecieptPopup paidStudentData={paidStudentData} receipt={receipt} />
      </Modal>
    </>
  );
}
