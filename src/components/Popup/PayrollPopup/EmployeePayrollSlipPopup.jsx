// Done by Athira

import classes from "../../../styles/EmployeePayrollSlipPopup.module.css";
import EmployeePayrollSlipTablePopup from "./EmployeePayrollSlipTablePopup";


export default function EmployeePayrollSlipPopup() {
  return (
    <div className={classes.parentContainer}>
      {/* Container for the payroll slip */}
      <div className={classes.feesRecieptContainer}>
        {/* Heading section for the payroll slip */}
        <div className={classes.feeHeading}>
          <div>EMPLOYEE PAYROLL SLIP</div>
          <span>From Date __/__/____ to __/__/____ </span>
        </div>

        {/* Section for displaying employee details */}
        <div className={classes.employeeDetails}>
          <h6>Employee Details</h6>
          <label>Name : ____________________________</label>
          <label>Employee ID : _________________________</label>
          <label>Designation : __________________________</label>
        </div>

        {/* Section for displaying attendance details */}
        <div className={classes.StudentDetails}>
          <h6>Attendance Details</h6>
          <label>Total Working Days : ___________________________</label>
          <label>Present Days : _____________________________</label>
        </div>

        {/* Container for displaying the employee payroll slip table */}
        <div className={classes.feeAmountDetailsContainer}>
          <EmployeePayrollSlipTablePopup />
        </div>
      </div>
    </div>
  );


  
}

