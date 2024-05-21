import React, { useState } from "react";
import { TiLeaf } from "react-icons/ti";

//PROPS COMING FROM STUDENTLIST->STUDENTLISTSTEPS POPUP
export default function ParentDetailsPopup({parentDetails,setParentDetails}) {

  function changeHandler(event){
    setParentDetails( prevDetails => {
      return {
        ...prevDetails,
        [event.target.name] : event.target.value
      }
    })
  }

  function alphabetChangeHandler(event){

    if (/^[a-zA-Z\s]*$/.test(event.target.value)) {
      setParentDetails( prevDetails => {
        return {
          ...prevDetails,
          [event.target.name] : event.target.value
        }
      })
    }
  }

  return ( 
    <div className="flex flex-col justify-between p-2 bg-white rounded-3xl w-full max-md:px-5 gap-4 h-[400px] overflow-y-scroll scrollbarnone">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-4 gap-x-4 place-content-between">

          <div className="flex text-base text-black w-full gap-2">
              <label className="my-auto w-[100px]">Father Name</label>
              <input className={`w-full rounded-2xl shadow-primary h-[43px] p-3 text-center`}
                onChange={alphabetChangeHandler}
                name="FatherName"
                autoComplete="off"
                value={parentDetails["FatherName"]}
              />
          </div>

          <div className="flex text-base text-black w-full gap-2">
              <label className="my-auto w-[100px]">Mobile No.</label>
              <input className={`w-full rounded-2xl shadow-primary h-[43px] p-3 text-center`}
                type="number"
                onChange={changeHandler}
                name="FatherMobileNo"
                autoComplete="off"
                value={parentDetails["FatherMobileNo"].slice(0,10)}
              />
          </div>

          <div className="flex text-base text-black w-full gap-2">
              <label className="my-auto w-[100px]">Email</label>
              <input className={`w-full rounded-2xl shadow-primary h-[43px] p-3 text-center`}
                type="email"
                onChange={changeHandler}
                name="FatherEmail"
                autoComplete="off"
                value={parentDetails["FatherEmail"]}
              />
          </div>

          <div className="flex text-base text-black w-full gap-2">
              <label className="my-auto w-[100px]">Occupation</label>
              <input className={`w-full rounded-2xl shadow-primary h-[43px] p-3 text-center`}
                onChange={alphabetChangeHandler}
                name="FatherOccupation"
                autoComplete="off"
                value={parentDetails["FatherOccupation"]}
              />
          </div>



          <div className="flex text-base text-black w-full gap-2">
              <label className="my-auto w-[100px]">Mother Name</label>
              <input className={`w-full rounded-2xl shadow-primary h-[43px] p-3 text-center`}
                onChange={alphabetChangeHandler}
                name="MotherName"
                autoComplete="off"
                value={parentDetails["MotherName"]}
              />
          </div>

          <div className="flex text-base text-black w-full gap-2">
              <label className="my-auto w-[100px]">Mobile No.</label>
              <input className={`w-full rounded-2xl shadow-primary h-[43px] p-3 text-center`}
                type="number"
                onChange={changeHandler}
                name="MotherMobileNo"
                autoComplete="off"
                value={parentDetails["MotherMobileNo"].slice(0,10)}
              />
          </div>

          <div className="flex text-base text-black w-full gap-2">
              <label className="my-auto w-[100px]">Email</label>
              <input className={`w-full rounded-2xl shadow-primary h-[43px] p-3 text-center`}
                type="email"
                onChange={changeHandler}
                name="MotherEmail"
                autoComplete="off"
                value={parentDetails["MotherEmail"]}
              />
          </div>

          <div className="flex text-base text-black w-full gap-2">
              <label className="my-auto w-[100px]">Occupation</label>
              <input className={`w-full rounded-2xl shadow-primary h-[43px] p-3 text-center`}
                onChange={alphabetChangeHandler}
                name="MotherOccupation"
                autoComplete="off"
                value={parentDetails["MotherOccupation"]}
              />
          </div>



          <div className="flex text-base text-black w-full gap-2">
              <label className="my-auto w-[100px]">Guardian Name</label>
              <input className={`w-full rounded-2xl shadow-primary h-[43px] p-3 text-center`}
                onChange={alphabetChangeHandler}
                name="GuardianName"
                autoComplete="off"
                value={parentDetails["GuardianName"]}
              />
          </div>

          <div className="flex text-base text-black w-full gap-2">
              <label className="my-auto w-[100px]">Mobile No.</label>
              <input className={`w-full rounded-2xl shadow-primary h-[43px] p-3 text-center`}
                type="number"
                onChange={changeHandler}
                name="GuardianMobileNo"
                autoComplete="off"
                value={parentDetails["GuardianMobileNo"].slice(0,10)}
              />
          </div>

          <div className="flex text-base text-black w-full gap-2">
              <label className="my-auto w-[100px]">Email</label>
              <input className={`w-full rounded-2xl shadow-primary h-[43px] p-3 text-center`}
                type="email"
                onChange={changeHandler}
                name="GuardianEmail"
                autoComplete="off"
                value={parentDetails["GuardianEmail"]}
              />
          </div>

          <div className="flex text-base text-black w-full gap-2">
              <label className="my-auto w-[100px]">Occupation</label>
              <input className={`w-full rounded-2xl shadow-primary h-[43px] p-3 text-center`}
                onChange={alphabetChangeHandler}
                name="GuardianOccupation"
                autoComplete="off"
                value={parentDetails["GuardianOccupation"]}
              />
          </div>
      
      </div>

      <div className="flex w-full flex-col gap-3">
          <div className="flex text-base text-black w-full gap-2 h-[45px]">
            <label className="my-auto w-[100px] lg:w-[90px]">Current Address</label>
            <input type="text"
              className=" w-full bg-white rounded-xl shadow-primary h-[42px] p-3 text-center"
              onChange={changeHandler}
              name = "CurrentAddress"
              autoComplete="off"
              value={parentDetails["CurrentAddress"]}
            />
          </div>
          <div className="flex w-full gap-2 justify-between text-base text-black">
            <div className="flex gap-2 w-1/3">
              <label className="my-auto w-[90px] lg:w-[80px]">Pin Code</label>
              <input className="shrink-0 bg-white rounded-xl shadow-primary h-[42px] text-center"
                type="number"
                onChange={changeHandler}
                name = "CurrentPinCode"
                autoComplete="off"
                value={parentDetails["CurrentPinCode"].slice(0,6)}
              />
            </div>
            <div className="flex gap-2 w-1/3">
              <label className="my-auto w-[90px] lg:w-[80px]">City</label>
              <input className="shrink-0 bg-white rounded-xl shadow-primary h-[42px] text-center"
                type="text" 
                onChange={alphabetChangeHandler}
                name = "CurrentCity"
                autoComplete="off"
                value={parentDetails["CurrentCity"]}
              />
            </div>
            <div className="flex gap-2 w-1/3">
              <label className="my-auto w-[90px] lg:w-[80px]">State</label>
              <input className="shrink-0 bg-white rounded-xl shadow-primary h-[42px] text-center"
                type="text" 
                onChange={alphabetChangeHandler}
                name = "CurrentState"
                autoComplete="off"
                value={parentDetails["CurrentState"]}
              />
            </div>
          </div>
      </div>

      <div className="flex w-full flex-col gap-3">
          <div className="flex text-base text-black w-full gap-2 h-[45px]">
            <label className="my-auto w-[100px] lg:w-[90px]">Permanent Address</label>
            <input type="text"
              className=" w-full bg-white rounded-xl shadow-primary h-[42px] p-3 text-center"
              onChange={changeHandler}
              name = "PermanentAddress"
              autoComplete="off"
              value={parentDetails["PermanentAddress"]}
            />
          </div>
          <div className="flex w-full gap-2 justify-between text-base text-black">
            <div className="flex gap-2 w-1/3">
              <label className="my-auto w-[90px] lg:w-[80px]">Pin Code</label>
              <input className="shrink-0 bg-white rounded-xl shadow-primary h-[42px] text-center"
                type="number"
                onChange={changeHandler}
                name = "PermanentPinCode"
                autoComplete="off"
                value={parentDetails["PermanentPinCode"].slice(0,6)}

              />
            </div>
            <div className="flex gap-2 w-1/3">
              <label className="my-auto w-[90px] lg:w-[80px]">City</label>
              <input className="shrink-0 bg-white rounded-xl shadow-primary h-[42px] text-center"
                type="text" 
                onChange={alphabetChangeHandler}
                name = "PermanentCity"
                autoComplete="off"
                value={parentDetails["PermanentCity"]}
              />
            </div>
            <div className="flex gap-2 w-1/3">
              <label className="my-auto w-[90px] lg:w-[80px]">State</label>
              <input className="shrink-0 bg-white rounded-xl shadow-primary h-[42px] text-center"
                type="text" 
                onChange={alphabetChangeHandler}
                name = "PermanentState"
                autoComplete="off"
                value={parentDetails["PermanentState"]}
              />
            </div>
          </div>
      </div>
    </div>

  );
}
