import classes from "../../../styles/Step.module.css";

export default function Step3({ closeModal }) {
  function handleOnChange() {
    // e.preventDefault();
    // if (newColumn.length === 0) {
    //   alert("Please enter a valid column name!");
    //   return;
    // }
    // const fieldDetails = {
    //   label: newColumn,
    //   value: newColumn.replace(/\s+/g, "_").toLowerCase(),
    // };
    // handleSalaryColumn(fieldDetails);
    // setNewColumn("");
  }

  function handleOnClose() {
    closeModal();
  }
  return (
    <form className={classes.payrollForm}>
      <div>
        <h5 className={classes.heading}>Step 3: Options</h5>
      </div>
      <div className={classes.inputContainerStep3}>
        <label>Narration</label>
        <input
          className={classes.inputdetails}
          type="text"
          placeholder="Salary for Payroll
        "
        />
      </div>
      <div className={classes.optionButton}>
        <label>Transfer Via</label>
        <input id="NEFT/RTGS" type="radio" value="NEFT/RTGS" name="Transfer" />
        <label htmlFor="NEFT/RTGS">NEFT/RTGS</label>
        <input id="imps" type="radio" value="IMPS" name="Transfer" />
        <label htmlFor="imps">IMPS</label>
      </div>
    </form>
  );
}
