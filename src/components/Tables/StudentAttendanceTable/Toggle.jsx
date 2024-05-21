import { useState } from "react";

import styles from "../../../styles/StudentsAttendanceTable.module.css";

const Toggle = () => {
  const [success, setSuccess] = useState(true);

  //function to change the status
  function clickHandler() {
    setSuccess((prevState) => !prevState);
  }

  return (
    <div
      onClick={clickHandler}
      className={
        success
          ? `${styles["toggle-btn"]} ${styles["success"]}`
          : styles["toggle-btn"]
      }
    >
      <div
        className={
          success
            ? `${styles["toggle-icon"]} ${styles["success-icon"]}`
            : styles["toggle-icon"]
        }
      ></div>
    </div>
  );
};

export default Toggle;
