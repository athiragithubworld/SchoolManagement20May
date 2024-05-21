// Created by Swati
import { useEffect, useState } from "react"; // Importing necessary dependencies from React
import classes from "../../../styles/PayrollDetailsForm.module.css";
import { AiOutlineVerticalLeft, AiOutlineVerticalRight } from "react-icons/ai";

// Functional component PayrollDetailsForm
export default function PayrollDetailsForm({
  newBankTransferData,
  employeeList,
  handlePrevious,
  saveHandler,
}) {
  const [formData, setFormData] = useState({
    payroll: "",
    transferType: "",
    bank: newBankTransferData.selectedBank,
    branch: "",
    valueDate: "",
    status: "",
    employeesCount: newBankTransferData.selectedEmployees.length,
    totalAmount: 0,
    IFSCCode: "",
    debitAcc: "",
  });

  useEffect(() => {
    const total = newBankTransferData.selectedEmployees.reduce(
      (sum, emp) => sum + Number(emp.amount),
      0
    );
    setFormData({ ...formData, totalAmount: total });
  }, [newBankTransferData.selectedEmployees]);

  //Function to handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  //Function to handle onclick of finish button
  const submitHandler = () => {
    console.log(formData);
    if (
      !formData.payroll ||
      !formData.bank ||
      !formData.branch ||
      !formData.IFSCCode ||
      !formData.debitAcc
    ) {
      alert("Please fill all fields !!");
    } else if (formData.employeesCount == 0) {
      alert("please select employees!!");
    } else {
      saveHandler(formData);
    }
  };

  return (
    <>
      <div
        className={`${classes.formWrapper}  max-h-[250px]  overflow-y-scroll`}
      >
        <form className="overflow-y-scroll scrollbarnone">
          <span
            className={`${classes.main} lg:flex-row md:flex-row flex-col scrollbarnone`}
          >
            <span className={classes.left}>
              <span className={classes.labelInputWrapper}>
                <label>Payroll</label>
                <input
                  name="payroll"
                  value={formData.payroll}
                  onChange={handleChange}
                  type="text"
                  required
                />
              </span>
              <span className={classes.labelInputWrapper}>
                <label>Bank</label>
                <input
                  name="bank"
                  type="text"
                  required
                  value={formData.bank}
                  onChange={handleChange}
                />
              </span>
              <span className={classes.labelInputWrapper}>
                <label>Value Date</label>
                <input
                  name="valueDate"
                  type="number"
                  value={formData.valueDate}
                  onChange={handleChange}
                  required
                />
              </span>
              <span className={classes.labelInputWrapper}>
                <label>Employees Count</label>
                <input
                  name="employeesCount"
                  type="number"
                  required
                  value={formData.employeesCount}
                  readOnly
                />
              </span>
              <span className={classes.labelInputWrapper}>
                <label>IFSC Code</label>
                <input
                  name="IFSCCode"
                  type="text"
                  value={formData.IFSCCode}
                  onChange={handleChange}
                  required
                />
              </span>
            </span>
            <span className={classes.right}>
              <span className={classes.labelInputWrapper}>
                <label>Transfer Type</label>
                <input
                  name="transferType"
                  type="text"
                  value={formData.transferType}
                  onChange={handleChange}
                  required
                />
              </span>
              <span className={classes.labelInputWrapper}>
                <label>Branch</label>
                <input
                  name="branch"
                  type="text"
                  value={formData.branch}
                  onChange={handleChange}
                  required
                />
              </span>
              <span className={classes.labelInputWrapper}>
                <label>Status</label>
                <input
                  name="status"
                  type="text"
                  value={formData.status}
                  onChange={handleChange}
                  required
                />
              </span>
              <span className={classes.labelInputWrapper}>
                <label>Total Amount</label>
                <input
                  name="totalAmount"
                  type="number"
                  required
                  value={formData.totalAmount}
                  readOnly
                />
              </span>
              <span className={classes.labelInputWrapper}>
                <label>Debit Account No</label>
                <input
                  name="debitAcc"
                  type="number"
                  value={formData.debitAcc}
                  onChange={handleChange}
                  required
                />
              </span>
            </span>
          </span>
        </form>
      </div>
      {/* Buttons */}
      <span className="w-full flex justify-center gap-5">
        <button
          className="p-[5px] bg-white flex justify-center items-center w-[138px] h-10 g-2.5 rounded-[14px] border"
          onClick={handlePrevious}
        >
          <span>
            <AiOutlineVerticalRight />
          </span>
          <span>Previous</span>
        </button>
        <button
          type="submit"
          className="p-[5px] bg-[#009dff] text-white flex justify-center items-center h-10 g-2.5 rounded-[14px] border w-[138px]"
          onClick={submitHandler}
        >
          <span>Finish</span>
          <span>
            <AiOutlineVerticalLeft />
          </span>
        </button>
      </span>
    </>
  );
}
