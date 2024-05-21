

import React, { useState } from "react";



export default function EnrollStudentParentDetailsPopup({
  parentDetails,
  setParentDetails,
}) {
  function changeHandler(event) {
    setParentDetails((prevDetails) => ({
      ...prevDetails,
      [event.target.name]: event.target.value,
    }));
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
          <input
            className={`w-full rounded-2xl shadow-primary h-[43px] p-3 text-center`}
            onChange={alphabetChangeHandler}
            name="fatherName"
            autoComplete="off"
            value={parentDetails["fatherName"]}
          />
        </div>

        <div className="flex text-base text-black w-full gap-2">
          <label className="my-auto w-[100px]">Mobile No.</label>
          <input
            className={`w-full rounded-2xl shadow-primary h-[43px] p-3 text-center`}
            type="number"
            onChange={changeHandler}
            name="fatherMobileNo"
            autoComplete="off"
            value={
              parentDetails.fatherMobileNo
                ? parentDetails.fatherMobileNo.slice(0, 10)
                : ""
            }
          />
        </div>

        <div className="flex text-base text-black w-full gap-2">
          <label className="my-auto w-[100px]">Email</label>
          <input
            className={`w-full rounded-2xl shadow-primary h-[43px] p-3 text-center`}
            type="email"
            onChange={changeHandler}
            name="fatherEmail"
            autoComplete="off"
            value={parentDetails["fatherEmail"]}
          />
        </div>

        <div className="flex text-base text-black w-full gap-2">
          <label className="my-auto w-[100px]">Occupation</label>
          <input
            className={`w-full rounded-2xl shadow-primary h-[43px] p-3 text-center`}
            onChange={alphabetChangeHandler}
            name="fatherOccupation"
            autoComplete="off"
            value={parentDetails["fatherOccupation"]}
          />
        </div>

        <div className="flex text-base text-black w-full gap-2">
          <label className="my-auto w-[100px]">Mother Name</label>
          <input
            className={`w-full rounded-2xl shadow-primary h-[43px] p-3 text-center`}
            onChange={alphabetChangeHandler}
            name="motherName"
            autoComplete="off"
            value={parentDetails["motherName"]}
          />
        </div>

        <div className="flex text-base text-black w-full gap-2">
          <label className="my-auto w-[100px]">Mobile No.</label>
          <input
            className={`w-full rounded-2xl shadow-primary h-[43px] p-3 text-center`}
            type="number"
            onChange={changeHandler}
            name="motherMobileNo"
            autoComplete="off"
            value={
              parentDetails.motherMobileNo
                ? parentDetails.motherMobileNo.slice(0, 10)
                : ""
            }
          />
        </div>

        <div className="flex text-base text-black w-full gap-2">
          <label className="my-auto w-[100px]">Email</label>
          <input
            className={`w-full rounded-2xl shadow-primary h-[43px] p-3 text-center`}
            type="email"
            onChange={changeHandler}
            name="motherEmail"
            autoComplete="off"
            value={parentDetails["motherEmail"]}
          />
        </div>

        <div className="flex text-base text-black w-full gap-2">
          <label className="my-auto w-[100px]">Occupation</label>
          <input
            className={`w-full rounded-2xl shadow-primary h-[43px] p-3 text-center`}
            onChange={alphabetChangeHandler}
            name="motherOccupation"
            autoComplete="off"
            value={parentDetails["motherOccupation"]}
          />
        </div>

        <div className="flex text-base text-black w-full gap-2">
          <label className="my-auto w-[100px]">Guardian Name</label>
          <input
            className={`w-full rounded-2xl shadow-primary h-[43px] p-3 text-center`}
            onChange={alphabetChangeHandler}
            name="guardianName"
            autoComplete="off"
            value={parentDetails["guardianName"]}
          />
        </div>

        <div className="flex text-base text-black w-full gap-2">
          <label className="my-auto w-[100px]">Mobile No.</label>
          <input
            className={`w-full rounded-2xl shadow-primary h-[43px] p-3 text-center`}
            type="number"
            onChange={changeHandler}
            name="guardianMobileNo"
            autoComplete="off"
            value={
              parentDetails.guardianMobileNo
                ? parentDetails.guardianMobileNo.slice(0, 10)
                : ""
            }
          />
        </div>

        <div className="flex text-base text-black w-full gap-2">
          <label className="my-auto w-[100px]">Email</label>
          <input
            className={`w-full rounded-2xl shadow-primary h-[43px] p-3 text-center`}
            type="email"
            onChange={changeHandler}
            name="guardianEmail"
            autoComplete="off"
            value={parentDetails["guardianEmail"]}
          />
        </div>

        <div className="flex text-base text-black w-full gap-2">
          <label className="my-auto w-[100px]">Occupation</label>
          <input
            className={`w-full rounded-2xl shadow-primary h-[43px] p-3 text-center`}
            onChange={alphabetChangeHandler}
            name="guardianOccupation"
            autoComplete="off"
            value={parentDetails["guardianOccupation"]}
          />
        </div>
      </div>

      <div className="flex w-full flex-col gap-3">
        <div className="flex text-base text-black w-full gap-2 h-[45px]">
          <label className="my-auto w-[100px] lg:w-[90px]">
            Current Address
          </label>
          <input
            type="text"
            className=" w-full bg-white rounded-xl shadow-primary h-[42px] p-3 text-center"
            onChange={changeHandler}
            name="currentAddress"
            autoComplete="off"
            value={parentDetails["currentAddress"]}
          />
        </div>
        <div className="flex w-full gap-2 justify-between text-base text-black">
          <div className="flex gap-2 w-1/3">
            <label className="my-auto w-[90px] lg:w-[80px]">Pin Code</label>
            <input
              className="shrink-0 bg-white rounded-xl shadow-primary h-[42px] text-center"
              type="number"
              onChange={changeHandler}
              name="currentAddressPinCode"
              autoComplete="off"
              value={
                parentDetails.currentAddressPinCode
                  ? parentDetails.currentAddressPinCode.slice(0, 6)
                  : ""
              }
            />
          </div>
          <div className="flex gap-2 w-1/3">
            <label className="my-auto w-[90px] lg:w-[80px]">City</label>
            <input
              className="shrink-0 bg-white rounded-xl shadow-primary h-[42px] text-center"
              type="text"
              onChange={alphabetChangeHandler}
              name="currentAddressCity"
              autoComplete="off"
              value={parentDetails["currentAddressCity"]}
            />
          </div>
          <div className="flex gap-2 w-1/3">
            <label className="my-auto w-[90px] lg:w-[80px]">State</label>
            <input
              className="shrink-0 bg-white rounded-xl shadow-primary h-[42px] text-center"
              type="text"
              onChange={alphabetChangeHandler}
              name="currentAddressState"
              autoComplete="off"
              value={parentDetails["currentAddressState"]}
            />
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col gap-3">
        <div className="flex text-base text-black w-full gap-2 h-[45px]">
          <label className="my-auto w-[100px] lg:w-[90px]">
            Permanent Address
          </label>
          <input
            type="text"
            className=" w-full bg-white rounded-xl shadow-primary h-[42px] p-3 text-center"
            onChange={changeHandler}
            name="permanentAddress"
            autoComplete="off"
            value={parentDetails["permanentAddress"]}
          />
        </div>
        <div className="flex w-full gap-2 justify-between text-base text-black">
          <div className="flex gap-2 w-1/3">
            <label className="my-auto w-[90px] lg:w-[80px]">Pin Code</label>
            <input
              className="shrink-0 bg-white rounded-xl shadow-primary h-[42px] text-center"
              type="number"
              onChange={changeHandler}
              name="permanentAddressPinCode"
              autoComplete="off"
              value={
                parentDetails.permanentAddressPinCode
                  ? parentDetails.permanentAddressPinCode.slice(0, 6)
                  : ""
              }
            />
          </div>
          <div className="flex gap-2 w-1/3">
            <label className="my-auto w-[90px] lg:w-[80px]">City</label>
            <input
              className="shrink-0 bg-white rounded-xl shadow-primary h-[42px] text-center"
              type="text"
              onChange={alphabetChangeHandler}
              name="permanentAddressCity"
              autoComplete="off"
              value={parentDetails["permanentAddressCity"]}
            />
          </div>
          <div className="flex gap-2 w-1/3">
            <label className="my-auto w-[90px] lg:w-[80px]">State</label>
            <input
              className="shrink-0 bg-white rounded-xl shadow-primary h-[42px] text-center"
              type="text"
              onChange={alphabetChangeHandler}
              name="permanentAddressState"
              autoComplete="off"
              value={parentDetails["permanentState"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}















