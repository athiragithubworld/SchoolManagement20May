// import React from "react";
import classes from "../../../styles/EmployeePayrollSlipPopup.module.css";

const EmployeePayrollSlipTablePopup = () => {
  const earnings = [
    { name: "Basic Salary", amount: 8093.0 },
    { name: "Conveyance allowance", amount: 0.0 },
    { name: "HRA", amount: 0.0 },
    { name: "Loyalty Bonus", amount: 0.0 },
    { name: "Medical Allowance", amount: 0.0 },
    { name: "Paid Leave", amount: 0.0 },
    { name: "Stipend", amount: 0.0 },
  ];

  const deductions = [
    { name: "Professional Tax", amount: 80.0 },
    { name: "Conveyance Deposit", amount: 4167.0 },
    { name: "Income Tax", amount: 4167.0 },
    { name: "Provident Fund", amount: 4167.0 },
  ];

  const calculateTotal = (items) => {
    return items.reduce((total, item) => total + item.amount, 0);
  };

  const totalEarnings = calculateTotal(earnings);
  const totalDeductions = calculateTotal(deductions);

  const Table = ({ data }) => {
    return (
      <table>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className={classes.itemName}>{item.name} :</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <>
      <div className={classes.gridContainer}>
        <div className={classes.gridItem}>
          <h3>Earnings</h3>
          <Table data={earnings} title="Earnings" />
        </div>
        <div className={classes.gridItem}>
          <h3>Deductions</h3>
          <Table data={deductions} title="Deductions" />
        </div>
      </div>
      <div className={classes.totalContainer}>
        <p>
          <strong>Total Earnings:- {totalEarnings}</strong>
        </p>
        <p>
          <strong>Total Deductions:- {totalDeductions}</strong>
        </p>
      </div>
    </>
  );
};

export default EmployeePayrollSlipTablePopup;
