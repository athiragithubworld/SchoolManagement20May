// Created by Athira, functionality by Swati.
import classes from "../../../styles/Step.module.css"; // Importing CSS module for styling
import { AiOutlineVerticalLeft } from "react-icons/ai";
import { useLocation } from "react-router-dom";

export default function Step1({
  setSelectedBank,
  handleNext,
  handleSelectingBank,
}) {
  const pathname = useLocation().pathname;

  //Function to handle select input change
  function handleChange(event) {
    setSelectedBank(event.target.value);
  }

  //Function to handle onclick of next button
  function submitHandler() {
    handleSelectingBank();
    handleNext();
  }

  return (
    <>
      <form className={classes.payrollForm}>
        <div>
          <h5 className={classes.heading}>Step 1: Transfer Type</h5>
          <ul className={classes.radiobuttonparent}>
            {pathname == "/payOuts" && (
              <li>
                <input
                  type="radio"
                  id="directDebit"
                  value="directDebit"
                  name="step1"
                />
                <label>Direct Debit</label>
              </li>
            )}
            <li>
              <input type="radio" />
              <label>
                Employees can have account in different banks in this transfer
              </label>
            </li>

            <li>
              <input type="radio" />
              <label>Employees to have account in same bank</label>
            </li>
          </ul>
          <div className={classes.inputContainerStep1}>
            <label>Bank Template</label>
            <select className={classes.dropdownbutton} onChange={handleChange}>
              <option value="SBI Bank"> SBI Bank </option>
              <option value="Canara Bank">Canara Bank</option>
              <option value="HDFC Bank">HDFC Bank</option>
              <option value="Federal Bank">Federal Bank</option>
            </select>
          </div>
        </div>
      </form>
      {/* buttons */}
      <span className="w-full flex justify-center gap-5">
        <button
          className="p-[5px] bg-[#009dff] text-white flex justify-center items-center w-[138px] h-10 gap-2 rounded-[14px] border"
          onClick={submitHandler}
        >
          <span>Next</span>
          <span>
            <AiOutlineVerticalLeft />
          </span>
        </button>
      </span>
    </>
  );
}
