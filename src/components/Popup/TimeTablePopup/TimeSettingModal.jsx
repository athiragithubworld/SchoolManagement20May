import React, { useRef } from "react"; // Importing necessary dependencies from React
import classes from "../../../styles/TimeSettingModal.module.css"; // Importing CSS module for styling
import TimeTableTimePicker from "../../TimePicker/TimeTableTimePicker";

const timeSetting =[{label:"School Time"},{label:"Break Time"},{label:"Lunch Time"}];

// Functional component TimeSettingModal
export default function TimeSettingModal({closeModal}) {

  const timeSettingRef = useRef();
  timeSettingRef.current = timeSetting;
  function handleOnClose() {
  closeModal()
}

  return (
    <div className={classes.container}>
      <form>
        <h3>Time Table</h3>
        <div className={classes.settingbody}>
          {timeSettingRef.current.map((option) => (
            <>
              <div className={classes.schooltime}>
                <label className={classes.settingname}>{option.label}</label>{" "}
                <div className={classes.inputTimePicker}>
                  <TimeTableTimePicker />
                </div>
                <label
                  className={`${classes.settingname} ${classes["to_label"]}`}
                >
                  To
                </label>{" "}
                <div className={classes.inputTimePicker}>
                  <TimeTableTimePicker />
                </div>
              </div>
            </>
          ))}
          <div>
            <div className={classes.classduration}>
              <label className={classes.settingname}>Class Duration</label>
              <div className={classes.inputTimePicker}>
                <TimeTableTimePicker duration={true} />
              </div>
              <label
                style={{ visibility: "hidden" }}
                className={`${classes.settingname} ${classes["to_label"]}`}
              >
                To
              </label>{" "}
              <TimeTableTimePicker hidden={true} />
            </div>
          </div>
        </div>
        {/* <button className={classes.submitbutton}>Submit</button>{" "} */}
        <span className={classes.parentbutton}>
          <button className={classes.submitbutton} onClick={handleOnClose}>
            Close
          </button>
          <button className={classes.submitbutton}>Submit</button>
        </span>
      </form>
    </div>
  );
}
