import React, { useEffect, useState } from "react"; // Importing necessary dependencies from React
import classes from "../../../styles/AddColumnAndDeleteSalaryDetails.module.css"; // Importing CSS module for styling
import { useLocation } from "react-router-dom";

// Functional component TimeSettingModal
export default function DeleteFacultySalaryDetails({
  handleDeleteFacultySalaryDetails,
  closeModal,
  deleteTimetableHandler,
}) {
  const pathName = useLocation().pathname;

  const [heading, setHeading] = useState("Delete Details");
  const [message, setMessage] = useState(
    "Are you sure you want to delete all details ?"
  );


  useEffect(() => {
    if (pathName === "/addtimetable" || pathName === "/updatetimetable") {
      setHeading("Confirm Deletion");
      setMessage("Do you want to remove the previous data saved ?");
    } else if (pathName === "/salarydetails") {
      setHeading("Remove Salary Details?");
      setMessage("Are you sure you want to delete all details ?");
    }
  }, [pathName]);

  function handleDelete(e) {
    e.preventDefault();
    if (pathName === "/addtimetable" || pathName === "/updatetimetable") {
      deleteTimetableHandler(true);

    }
    else if (pathName === "/salarydetails") {
      handleDeleteFacultySalaryDetails();
    }
    closeModal();
  }

  function handleCloseModal(e) {
    e.preventDefault();
    closeModal();
  }

  return (
    <div className={classes.container}>
      <form>
        <h4>{heading}</h4>
        <div>
          <label>{message}</label>
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
