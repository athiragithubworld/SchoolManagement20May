import * as React from "react";
import { useState } from "react";
import { GiConsoleController } from "react-icons/gi";

//PROPS COMING FROM STUDENTLIST->STUDENTLISTSTEPS POPUP


export default function StudentDetails({studentDetails,setStudentDetails}) {

  function changeHandler(event){
    setStudentDetails( prevDetails => {
      return {
        ...prevDetails,
        [event.target.name] : event.target.value
      }
    })
  }

  function alphabetChangeHandler(event){
    // console.log(studentDetails);

    if (/^[a-zA-Z\s]*$/.test(event.target.value)) {
      setStudentDetails( prevDetails => {
        return {
          ...prevDetails,
          [event.target.name] : event.target.value
        }
      })
    }
  }



  return (
    <section className="flex flex-col bg-white rounded-3xl max-w-[955px] max-md:px-5 h-[400px] lg:h-fit overflow-y-scroll p-2 scrollbarnone">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-3">

          <div className="flex gap-1">
            <label className="my-auto w-[77px]">First Name</label>
            <input
              // placeholder="First Name"
              type="text"
              className={`shrink-0 bg-white rounded-2xl shadow-primary h-[53px] w-[190px] outline-none p-3 text-center`}
              onChange={alphabetChangeHandler}
              name = "FirstName"
              autoComplete="off"
              value={studentDetails["FirstName"]}
              />
          </div>

          <div className="flex gap-1">
            <label className="my-auto w-[77px]">Middle Name</label>
            <input
              // placeholder="Middle Name"
              className={`shrink-0 bg-white rounded-2xl shadow-primary h-[53px] w-[190px] outline-none p-3 text-center`}
              onChange={alphabetChangeHandler}
              name = "MiddleName"
              autoComplete="off"
              value={studentDetails["MiddleName"]}
              />
          </div>

          <div className="flex gap-1">
            <label className="my-auto w-[77px]">Last Name</label>
            <input
              // placeholder="Last Name"
              className={`shrink-0 bg-white rounded-2xl shadow-primary h-[53px] w-[190px] outline-none p-3 text-center`}
              onChange={alphabetChangeHandler}
              name = "LastName"
              autoComplete="off"
              value={studentDetails["LastName"]}
              />
          </div>


          <div className="flex gap-1">
            <label className="my-auto w-[77px]">Class</label>
            <div className={`bg-white rounded-2xl shadow-primary h-[53px] w-[190px] outline-none text-center flex justify-center items-center`}>
                <select
                  placeholder
                  className="h-[40px] w-[150px] text-center"
                  onChange={changeHandler}
                  name = "Class"
                  autoComplete="off"
                  value={studentDetails["Class"]}
                >
                    <option >Select</option>
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

          <div className="flex gap-1">
            <label className="my-auto w-[77px]">Section</label>
            <div className={`bg-white rounded-2xl shadow-primary h-[53px] w-[190px] outline-none text-center flex justify-center items-center`}>
                <select
                  placeholder
                  className="h-[40px] w-[150px] text-center"
                  onChange={changeHandler}
                  name = "Section"
                  autoComplete="off"
                  value={studentDetails["Section"]}
                >
                  <option placeholder>Select</option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                  <option value="D">D</option>
                  <option value="E">E</option>
                </select>
            </div>
          </div>

          <div className="flex gap-1">
            <label className="my-auto w-[77px]">Roll No</label>
            <input
              // placeholder="Roll No"
              type="number"
              min="100" max="999" required
              className={`shrink-0 bg-white rounded-2xl shadow-primary h-[53px] w-[190px] outline-none p-3 text-center`}
              onChange={changeHandler}
              name = "RollNo"
              autoComplete="off"
              value={studentDetails["RollNo"]}
              />
          </div>


          <div className="flex gap-1">
            <label className="my-auto w-[77px]">Gender</label>
            <div className={`bg-white rounded-2xl shadow-primary h-[53px] w-[190px] outline-none text-center flex justify-center items-center`}>
              <select 
                placeholder
                name="Gender"
                value={studentDetails["Gender"]}
                onChange={changeHandler}
                className="h-[40px] w-[150px] text-center">
                  <option placeholder>Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Others">Others</option>
              </select>
            </div>
          </div>

          <div className="flex gap-1">
            <label className="my-auto w-[77px]">DOB</label>
            <input
              type="date"
              className={`shrink-0 bg-white rounded-2xl shadow-primary h-[53px] w-[190px] outline-none p-3 text-center`}
              onChange={changeHandler}
              name = "DOB"
              autoComplete="off"
              value={studentDetails["DOB"]}
              />
          </div>

          <div className="flex gap-1">
            <label className="my-auto w-[77px]">Mother Tongue</label>
            <input
              // placeholder="Mother Tongue"
              className={`shrink-0 bg-white rounded-2xl shadow-primary h-[53px] w-[190px] outline-none p-3 text-center`}
              onChange={alphabetChangeHandler}
              name = "MotherTongue"
              autoComplete="off"
              value={studentDetails["MotherTongue"]}
              />
          </div>


          <div className="flex gap-1">
            <label className="my-auto w-[77px]">Blood Group</label>
            <div className={`bg-white rounded-2xl shadow-primary h-[53px] w-[190px] outline-none text-center flex justify-center items-center`}>
              <select
                placeholder
                className="h-[40px] w-[150px] text-center"
                onChange={changeHandler}
                name = "BloodGroup"
                autoComplete="off"
                value={studentDetails["BloodGroup"]}
              >
                <option placeholder>Select</option>
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

          <div className="flex gap-1">
            <label className="my-auto w-[77px]">Disability</label>
            <input
              // placeholder="Disability"
              className={`shrink-0 bg-white rounded-2xl shadow-primary h-[53px] w-[190px] outline-none p-3 text-center`}
              onChange={alphabetChangeHandler}
              name = "Disability"
              autoComplete="off"
              value={studentDetails["Disability"]}
              />
          </div>

          <div className="flex gap-1">
            <label className="my-auto w-[77px]">Aadhar Card No.</label>
            <input
              type="number"
              className={`shrink-0 bg-white rounded-2xl shadow-primary h-[53px] w-[190px] outline-none p-3 text-center`}
              onChange={changeHandler}
              name = "AadharCardNo"
              autoComplete="off"
              value={studentDetails["AadharCardNo"].slice(0,12)}
              />
          </div>


          <div className="flex gap-1">
            <label className="my-auto w-[77px]">Phone No.</label>
            <input
              // placeholder="Phone No."
              type="number"
              className={`shrink-0 bg-white rounded-2xl shadow-primary h-[53px] w-[190px] outline-none p-3 text-center`}
              onChange={changeHandler}
              name = "PhoneNo"
              autoComplete="off"
              value={studentDetails["PhoneNo"].slice(0,10)}
              />
          </div>

          <div className="flex gap-1">
            <label className="my-auto w-[77px]">Caste</label>
            <input
              // placeholder="Cast"
              className={`shrink-0 bg-white rounded-2xl shadow-primary h-[53px] w-[190px] outline-none p-3 text-center`}
              onChange={alphabetChangeHandler}
              name = "Caste"
              autoComplete="off"
              value={studentDetails["Caste"]}
              />
          </div>

          <div className="flex gap-1">
            <label className="my-auto w-[77px]">Religion</label>
            <input
              // placeholder="Religion"
              className={`shrink-0 bg-white rounded-2xl shadow-primary h-[53px] w-[190px] outline-none p-3 text-center`}
              onChange={alphabetChangeHandler}
              name = "Religion"
              autoComplete="off"
              value={studentDetails["Religion"]}
              />
          </div>

      </div>

    </section>
  );
}
