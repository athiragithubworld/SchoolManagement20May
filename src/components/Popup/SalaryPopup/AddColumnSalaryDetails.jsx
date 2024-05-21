import { useState } from "react"; // Importing necessary dependencies from React
import classes from "../../../styles/AddColumnAndDeleteSalaryDetails.module.css"; // Importing CSS module for styling




// Functional component TimeSettingModal
export default function AddColumnSalaryDetails({
  handleSalaryColumn,
  closeModal,
}) {
  const [newColumn, setNewColumn] = useState("");

  function handleOnChange(e) {
    e.preventDefault();
    if (newColumn.length === 0) {
      alert("Please enter a valid column name!");
      return;
    }
    const fieldDetails = {
      label: newColumn,
      value: newColumn.replace(/\s+/g, "_").toLowerCase(),
    };

    handleSalaryColumn(fieldDetails);
    setNewColumn("");
  }

  function handleOnClose() {
    closeModal();
  }

  return (
    <div className={classes.container}>
      <form>
        <h4>Add Column</h4>
        <div>
          <label>Enter Column Name </label>
          <div>
            <input
              type="text"
              value={newColumn}
              onChange={(e) => setNewColumn(e.target.value)}
            />
          </div>
        </div>
        <span className={classes.parentbutton}>
          <button className={classes.submitbutton} onClick={handleOnClose}>
            Close
          </button>
          <button className={classes.submitbutton} onClick={handleOnChange}>
            Submit
          </button>
        </span>
      </form>
    </div>
  );
}

