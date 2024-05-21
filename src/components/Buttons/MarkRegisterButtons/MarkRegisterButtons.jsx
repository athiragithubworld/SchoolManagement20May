//By Athira

import { useState } from "react";
import classes from "../../../styles/MarkRegisterButton.module.css";
import { RiDeleteBin5Line } from "react-icons/ri";
import { MdOutlineFileDownload } from "react-icons/md";
import { GoShareAndroid } from "react-icons/go";
import { PiNotePencilLight } from "react-icons/pi";

export default function MarkRegisterButtons() {
  return (
    <div className={classes.buttoncontainer}>
     
      <span>
        <select className={classes.salarydetails_leftbutton} id="class">
          <option value="">Class </option>
          <option value="class1">Class 1</option>
          <option value="class2">Class 2</option>
          <option value="class3">Class 3</option>
        </select>

        <span>
          <select className={classes.salarydetails_leftbutton} id="section">
            <option value="section">Term </option>
            <option value="section1">Term 1</option>
            <option value="section2">Term 2</option>
            <option value="section3">Term 3</option>
          </select>
        </span>
        <span>
          <select className={classes.salarydetails_leftbutton} id="section">
            <option value="section">Year </option>
            <option value="section1">2024</option>
            <option value="section2">2023</option>
            <option value="section3">2022</option>
          </select>
        </span>
      </span>
      {/*
       * Container for edit, modal, and share buttons.
       */}

      <span>
        <button className={classes.salarydetails_rightbutton}>
          <PiNotePencilLight size={23} />
        </button>
        <button className={classes.salarydetails_rightbutton}>
          <GoShareAndroid size={23} />
        </button>
        <span>
          <button className={classes.salarydetails_rightbutton}>
            <RiDeleteBin5Line size={23} />
          </button>
          <button className={classes.salarydetails_rightbutton}>
            <MdOutlineFileDownload size={23} />
          </button>
         
        </span>
      </span>
    </div>
  );
}
