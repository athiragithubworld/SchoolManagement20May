// Created by Athira
//functionality done by Gunjan
import classes from "../../../styles/FeesReceiptPopup.module.css";

import barcodeImage from "../../../../src/assets/images/Barcode1.png";

// Functional component for Fees Receipt Popup
export default function FeesRecieptPopup({ paidStudentData, receipt }) {
  // Calculate total amount paid by the student
  //const totalAmount = paidStudentData.totalPaid;

  console.log(paidStudentData);
  return (
    <div className={classes.feesRecieptContainer}>
      {/* Container for fees receipt */}
      <div className={classes.feeHeading}>
        <h4>FEE RECEIPT</h4>
        <span>
          From Date {paidStudentData.date} to {paidStudentData.date}
        </span>
      </div>
      {/* Container for barcode and challan number */}
      <div className={classes.barcodeContainer}>
        {/* Container for challan number */}
        <div className={classes.challanNo}>
          <label>Challan No :</label>
          <p>10SCH8965</p>
        </div>
        {/* Container for barcode image */}
        <div className={classes.qrCodeImg}>
          <img src={barcodeImage}></img>
        </div>
      </div>
      <div className={classes.StudentDetails}>
        {/* Student details section */}
        <h6>Student Details</h6>
        <label>Name :{paidStudentData.name}</label>
        <label>Student ID : {paidStudentData.idNo}</label>
        <label>Class : {paidStudentData.studentClass || paidStudentData.className}</label>
        <label>Section : {paidStudentData.section}</label>
        <label>Contact No : {paidStudentData.contactNo}</label>
      </div>
      {/* Container for fee amount details */}
      <div className={classes.feeAmountDetailsContainer}>
        {/* Container for fee structure table */}
        <div className={classes.feeStructureTableContainer}>
          <table>
            <thead>
              <tr>
                <th>Fees</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {receipt ? (
                <>
                  <tr>
                    <td>Tution Fees :</td>
                    <td>
                      {receipt.feestype === "Tuition Fee" ? receipt.amount : 0}
                    </td>
                  </tr>
                  <tr>
                    <td>Hostel Fees :</td>
                    <td>
                      {receipt.feestype === "Hostel Fee" ? receipt.amount : 0}
                    </td>
                  </tr>
                  <tr>
                    <td>Books Fees :</td>
                    <td>
                      {receipt.feestype === "Books Fee" ? receipt.amount : 0}
                    </td>
                  </tr>
                  <tr>
                    <td>Bus Fees :</td>
                    <td>
                      {receipt.feestype === "Bus Fee" ? receipt.amount : 0}
                    </td>
                  </tr>
                  <tr>
                    <td>Sports Fees :</td>
                    <td>
                      {receipt.feestype === "Sports Fee" ? receipt.amount : 0}
                    </td>
                  </tr>
                  <tr>
                    <td>Exam Fees :</td>
                    <td>
                      {receipt.feestype === "Exam Fee" ? receipt.amount : 0}
                    </td>
                  </tr>
                  <tr>
                    <td>Library Fees :</td>
                    <td>
                      {receipt.feestype === "Library Fee" ? receipt.amount : 0}
                    </td>
                  </tr>

                  {/* <tr>
                <td>Paid Fees :</td>
                <td>{totalAmount}</td>
              </tr> */}
                </>
              ) : (
                // If no receipt, render default fee structure
                <>
                  <tr>
                    <td>Tution Fee :</td>
                    <td>
                      {paidStudentData.tutionFee
                        ? paidStudentData.tutionFee
                        : 0}
                    </td>
                  </tr>
                  <tr>
                    <td>Hostel Fees :</td>
                    <td>
                      {paidStudentData.hostelFee
                        ? paidStudentData.hostelFee
                        : 0}
                    </td>
                  </tr>
                  <tr>
                    <td>Books Fees :</td>
                    <td>
                      {paidStudentData.booksFee ? paidStudentData.booksFee : 0}
                    </td>
                  </tr>
                  <tr>
                    <td>Bus Fees :</td>
                    <td>
                      {paidStudentData.busFee ? paidStudentData.busFee : 0}
                    </td>
                  </tr>
                  <tr>
                    <td>Transport Fees :</td>
                    <td>
                      {paidStudentData.transportFee
                        ? paidStudentData.transportFee
                        : 0}
                    </td>
                  </tr>
                  <tr>
                    <td>Uniform Fees :</td>
                    <td>
                      {paidStudentData.uniformFee
                        ? paidStudentData.uniformFee
                        : 0}
                    </td>
                  </tr>

                  {/* <tr>
                <td>Paid Fees :</td>
                <td>{totalAmount}</td>
              </tr> */}
                </>
              )}
            </tbody>
            <tfoot>
              {" "}
              {/* Table footer for total amount paid */}
              <tr className={classes.totalrow}>
                <td>
                  <strong>Total Paid :</strong>
                </td>
                <td>
                  {/* <strong>{totalAmount.toFixed(2)}</strong> */}
                  <strong>{receipt ? receipt.amount : 20000}</strong>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}
