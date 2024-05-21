
//THIS COMPONENT WAS CREATED BY HAIDER


import React, { useState } from 'react'
import profile from "../../assets/women-profile.webp"
import styles from "../../styles/AttendanceRegisterButtons.module.css";


//PROPS COMING FROM STUDENTDETAIL PAGE
export const PrimaryDetails = ({selectedStudent,editable,setSelectedStudent}) => {

  function changeHandler(event){
    setSelectedStudent( prevDetails => {
      return {
        ...prevDetails,
        [event.target.name] : event.target.value
      }
    })
  }

  function alphabetChangeHandler(event){

    if (/^[a-zA-Z\s]*$/.test(event.target.value)) {
      setSelectedStudent( prevDetails => {
        return {
          ...prevDetails,
          [event.target.name] : event.target.value
        }
      })
    }
  }

  // console.log("inside primary details",selectedStudent);

  return (
    <div className=" w-full rounded-2xl flex h-fit p-4 border-[1px] justify-between shadow-containerShadow">
      <div className="flex justify-center items-center w-1/6">
        <img
          className="w-[153px] rounded-full"
          alt="person-female--v2"
          src={profile}
        />
      </div>

      <div className="grid grid-cols-2 xl:grid-cols-3 w-5/6 gap-y-4 gap-x-4">
        <div className="flex items-center gap-1">
          <div className="w-[86px] h-fit flex items-center font-medium text-left text-base">
            First Name
          </div>
          <input
            readOnly={!editable}
            autoComplete="off"
            className="w-full h-12 shadow-primary rounded-2xl p-2 text-center"
            name="FirstName"
            onChange={alphabetChangeHandler}
            value={selectedStudent["FirstName"]}
          />
        </div>

        <div className="flex items-center gap-1">
          <div className="w-[86px] h-fit flex items-center font-medium text-left text-base">
            Middle Name
          </div>
          <input
            readOnly={!editable}
            autoComplete="off"
            className="w-full h-12 shadow-primary rounded-2xl p-2 text-center"
            name="MiddleName"
            onChange={alphabetChangeHandler}
            value={selectedStudent["MiddleName"]}
          />
        </div>

        <div className="flex items-center gap-1">
          <div className="w-[86px] h-fit flex items-center font-medium text-left text-base">
            Last Name
          </div>
          <input
            readOnly={!editable}
            autoComplete="off"
            className="w-full h-12 shadow-primary rounded-2xl p-2 text-center"
            name="LastName"
            onChange={alphabetChangeHandler}
            value={selectedStudent["LastName"]}
          />
        </div>

        <div className="flex items-center gap-1">
          <div className="w-[86px] h-fit flex items-center font-medium text-left text-base">
            Class
          </div>
          <div className="w-full h-12 shadow-primary rounded-2xl p-2 text-center flex justify-center items-center">
            <select
              disabled={!editable}
              className="w-[80%] text-center text-black"
              onChange={changeHandler}
              name="Class"
              autoComplete="off"
              value={selectedStudent["Class"]}
            >
              <option value="Pre Kg">Pre KG</option>
              <option value="LKG">LKG</option>
              <option value="UKG">UKG</option>
              <option value="1st">1st</option>
              <option value="2nd">2nd</option>
              <option value="3rd">3rd</option>
              <option value="4th">4th</option>
              <option value="5th">5th</option>
              <option value="6th">6th</option>
              <option value="7th">7th</option>
              <option value="8th">8th</option>
              <option value="9th">9th</option>
              <option value="10th">10th</option>
              <option value="11th">11th</option>
              <option value="12th">12th</option>
            </select>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <div className="w-[86px] h-fit flex items-center font-medium text-left text-base">
            Section
          </div>
          <div className="w-full h-12 shadow-primary rounded-2xl p-2 text-center flex justify-center items-center">
            <select
              disabled={!editable}
              className="w-[80%] text-center text-black"
              onChange={changeHandler}
              name="Section"
              autoComplete="off"
              value={selectedStudent["Section"]}
            >
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
            </select>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <div className="w-[86px] h-fit flex items-center font-medium text-left text-base">
            Roll No
          </div>
          <input
            type="number"
            readOnly={!editable}
            autoComplete="off"
            className="w-full h-12 shadow-primary rounded-2xl p-2 text-center"
            name="RollNo"
            onChange={changeHandler}
            value={selectedStudent["RollNo"]}
          />
        </div>

        <div className="flex items-center gap-1">
          <div className="w-[86px] h-fit flex items-center font-medium text-left text-base">
            Gender
          </div>
          <div className="w-full h-12 shadow-primary rounded-2xl p-2 text-center flex justify-center items-center">
            <select
              disabled={!editable}
              name="Gender"
              value={selectedStudent["Gender"]}
              onChange={changeHandler}
              className="w-[80%] text-center text-black"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </select>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <div className="w-[86px] h-fit flex items-center font-medium text-left text-base">
            DOB
          </div>
          <input
            type="date"
            readOnly={!editable}
            className="w-full h-12 shadow-primary rounded-2xl p-2 text-center"
            name="DOB"
            onChange={changeHandler}
            value={selectedStudent["DOB"]}
          />
        </div>

        <div className="flex items-center gap-1">
          <div className="w-[86px] h-fit flex items-center font-medium text-left text-base">
            Mother Tongue
          </div>
          <input
            readOnly={!editable}
            autoComplete="off"
            className="w-full h-12 shadow-primary rounded-2xl p-2 text-center"
            name="MotherTongue"
            onChange={alphabetChangeHandler}
            value={selectedStudent["MotherTongue"]}
          />
        </div>

        <div className="flex items-center gap-1">
          <div className="w-[86px] h-fit flex items-center font-medium text-left text-base">
            Blood Group
          </div>
          <div className="w-full h-12 shadow-primary rounded-2xl p-2 text-center flex justify-center items-center">
            <select
              disabled={!editable}
              className="w-[80%] text-center text-black"
              onChange={changeHandler}
              name="BloodGroup"
              autoComplete="off"
              value={selectedStudent["BloodGroup"]}
            >
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <div className="w-[86px] h-fit flex items-center font-medium text-left text-base">
            Disability
          </div>
          <input
            readOnly={!editable}
            autoComplete="off"
            className="w-full h-12 shadow-primary rounded-2xl p-2 text-center"
            name="Disability"
            onChange={alphabetChangeHandler}
            value={selectedStudent["Disability"]}
          />
        </div>

        <div className="flex items-center gap-1">
          <div className="w-[86px] h-fit flex items-center font-medium text-left text-base">
            Aadhar Card No.
          </div>
          <input
            readOnly={!editable}
            autoComplete="off"
            type="number"
            className="w-full h-12 shadow-primary rounded-2xl p-2 text-center"
            name="AadharCardNo"
            onChange={changeHandler}
            value={selectedStudent["AadharCardNo"]?.slice(0, 12)}
          />
        </div>

        <div className="flex items-center gap-1">
          <div className="w-[86px] h-fit flex items-center font-medium text-left text-base">
            Phone No
          </div>
          <input
            readOnly={!editable}
            autoComplete="off"
            type="number"
            className="w-full h-12 shadow-primary rounded-2xl p-2 text-center"
            name="PhoneNo"
            onChange={changeHandler}
            value={selectedStudent["PhoneNo"]?.slice(0, 10)}
          />
        </div>

        <div className="flex items-center gap-1">
          <div className="w-[86px] h-fit flex items-center font-medium text-left text-base">
            Caste
          </div>
          <input
            readOnly={!editable}
            autoComplete="off"
            className="w-full h-12 shadow-primary rounded-2xl p-2 text-center"
            name="Caste"
            onChange={alphabetChangeHandler}
            value={selectedStudent["Caste"]}
          />
        </div>

        <div className="flex items-center gap-1">
          <div className="w-[86px] h-fit flex items-center font-medium text-left text-base">
            Religion
          </div>
          <input
            readOnly={!editable}
            autoComplete="off"
            className="w-full h-12 shadow-primary rounded-2xl p-2 text-center"
            name="Religion"
            onChange={alphabetChangeHandler}
            value={selectedStudent["Religion"]}
          />
        </div>
      </div>
    </div>
  );
}

export default PrimaryDetails;