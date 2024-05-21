import React, { useState } from "react"; // Importing necessary dependencies from React
import classes from "../../../styles/PaymentStatementPopup.module.css"; // Importing CSS module for styling
// import { MdOutlineFileDownload } from "react-icons/md";
// import { RiDeleteBin5Line } from "react-icons/ri";

// Functional component TimeSettingModal
export default function PaymentStatement() {
  return (
    <div className={classes.new}>
      <form>
        <div className={classes.admin}>
          <h4>Payment Statement</h4>
          {/* <span
          // className={classes.Button}
          >
            <button className={classes.salarydetails_rightbutton}>
              <MdOutlineFileDownload />
            </button>
            <button
              className={classes.salarydetails_rightbutton}
              // onClick={() => setIsOpenDeleteFaculty(true)}
            >
              <RiDeleteBin5Line />
            </button>
          </span> */}
        </div>
        <span className={classes.main}>
          <span className={classes.left}>
            <span>
              <label>Batch ID</label>
              <input
                className={classes.input}
                style={{ marginLeft: "10px" }}
                type="text"
                value="ebc20349430"
                required
              />
            </span>
            <span>
              <label>Type</label>
              <input
                className={classes.input}
                type="text"
                value="Direct Debit"
                required
              />
            </span>
            <span>
              <label>Faculty count</label>
              <input
                className={classes.input}
                type="number"
                value="20"
                required
              />
            </span>
            <span>
              <label>Date</label>
              <input className={classes.input} type="date" required />
            </span>
          </span>
          <span className={classes.right}>
            <span>
              <label>File Name</label>
              <input
                className={classes.input}
                type="text"
                required
                value="SBINov2021.csv"
              />
            </span>
            <span>
              <label>Bank Name</label>
              <input
                className={classes.input}
                style={{ marginLeft: "10px" }}
                type="text"
                value="ICICI Bank"
                required
              />
            </span>
            <span>
              <label>Total</label>
              <input
                className={classes.input}
                type="number"
                required
                value="12,34,509,987"
              />
            </span>
            <span>
              <label>Status</label>
              <input
                className={classes.input}
                type="text"
                required
                value="COMPLETED"
              />
            </span>
          </span>
        </span>
      </form>
    </div>
  );
}
