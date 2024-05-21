import { useState } from "react"; // Importing necessary dependencies from React
import classes from "../../../styles/AddColumnAndDeleteSalaryDetails.module.css"; // Importing CSS module for styling

// Functional component TimeSettingModal
export default function DeleteFacultySalaryDetails({
  handleDeleteFacultySalaryDetails,
  closeModal,
})
{
  function handleDelete(e) {
    e.preventDefault();
    handleDeleteFacultySalaryDetails();
    closeModal();
  }

  function handleCloseModal(e) {
    e.preventDefault();
    closeModal();
  }

  return (
    <div className={classes.container}>
      <form>
        <h4>Delete Details</h4>
        <div>
          <label>Are you sure you want to delete all details ?</label>
        </div>
        <span className={classes.parentbutton}>
          <button className={classes.submitbutton} onClick={handleDelete}>
            Yes
          </button>
          <button className={classes.submitbutton} onClick={handleCloseModal}>
            No
          </button>
        </span>
      </form>
    </div>
  );
}
