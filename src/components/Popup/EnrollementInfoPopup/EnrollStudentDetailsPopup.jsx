

import React from "react";
import InputCustomDropdown from "../../../ui/InputCustomDropDown";

function InputField({
  label,
  className,
  changeHandler,
  value,
  alphabetChangeHandler,
}) {
  const genderOption = ["Male", "Female", "Others"];
  const classOption = [
    "Pre KG",
    "LKG",
    "UKG",
    "1st",
    "2nd",
    "3rd",
    "4th",
    "5th",
    "6th",
    "7th",
    "8th",
    "9th",
    "10th",
    "11th",
    "12th",
  ];
  const bloodGroupOption = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
  const statusOption = ["Status", "Pending", "Approved", "Denied"];

  return (
    <div className="flex gap-1 sm:w-full lg:w-[30%] md:w-[45%] w-full">
      <label className="my-auto w-[100px]">{label}</label>
      {(label === "First Name" ||
        label === "Middle Name" ||
        label === "Last Name" ||
        label === "Mother Tongue" ||
        label === "Previous School" ||
        label === "Caste" ||
        label === "Religion") && (
        <input
          className={`shrink-0 bg-white rounded-2xl shadow-primary h-[53px] w-[80%] lg:w-[190px] md:w-[190px] outline-none ${className} text-center`}
          onChange={alphabetChangeHandler}
          name={
            label.charAt(0).toLowerCase() + label.slice(1).replace(/\s+/g, "")
          }
          autoComplete="off"
          value={value}
          type="text"
        />
      )}
      {label === "Status" && (
        <InputCustomDropdown
          label="Status"
          value={value}
          onChange={(option) =>
            changeHandler({ name: "status", value: option })
          }
          options={statusOption}
        />
      )}
      {label === "Class" && (
        <InputCustomDropdown
          label="Class"
          value={value}
          onChange={(option) => changeHandler({ name: "class", value: option })}
          options={classOption}
          buttonStyling="flex items-center shrink-0 bg-white rounded-2xl shadow-primary pr-3 h-[53px] w-[100%] lg:w-[190px] md:w-[190px] outline-none ${className} text-center"
          containerStyling="w-[80%] lg:w-[190px] md:w-[190px]"
          optionStyling="items-center shrink-0 bg-white rounded-2xl  w-[70%] lg:w-[190px] md:w-[190px] outline-none absolute h-[120px] overflow-x-auto scrollbarnone z-10 mt-1  bg-white border border-gray-300  shadow-md  "
        />
      )}
      {label === "Gender" && (
        <InputCustomDropdown
          label="Gender"
          value={value}
          onChange={(option) =>
            changeHandler({ name: "gender", value: option })
          }
          options={genderOption}
        />
      )}
      {label === "Blood Group" && (
        <InputCustomDropdown
          label="Blood Group"
          value={value}
          onChange={(option) =>
            changeHandler({ name: "bloodGroup", value: option })
          }
          options={bloodGroupOption}
        />
      )}
      {label === "DOB" && (
        <input
          type="date"
          className={`shrink-0 bg-white rounded-2xl shadow-primary pr-3 h-[53px] w-[80%] lg:w-[190px] md:w-[190px] outline-none ${className} text-center`}
          onChange={changeHandler}
          name={
            label.charAt(0).toLowerCase() + label.slice(1).replace(/\s+/g, "")
          }
          autoComplete="off"
          value={value}
        />
      )}
      {label === "Aadhaar Number" && (
        <input
          type="number"
          className={`shrink-0 bg-white rounded-2xl shadow-primary h-[53px] w-[80%] lg:w-[190px] md:w-[190px] outline-none ${className} text-center`}
          onChange={changeHandler}
          name={
            label.charAt(0).toLowerCase() + label.slice(1).replace(/\s+/g, "")
          }
          autoComplete="off"
          value={value?.slice(0, 12)}
        />
      )}
      {label === "EMIS No" && (
        <input
          type="number"
          className={`shrink-0 bg-white rounded-2xl shadow-primary h-[53px] w-[80%] lg:w-[190px] md:w-[190px] outline-none ${className} text-center`}
          onChange={changeHandler}
          name={
            label.charAt(0).toLowerCase() + label.slice(1).replace(/\s+/g, "")
          }
          autoComplete="off"
          value={value}
        />
      )}
      {label === "Phone No" && (
        <input
          type="number"
          className={`shrink-0 bg-white rounded-2xl shadow-primary h-[53px] w-[80%] lg:w-[190px] md:w-[190px] outline-none ${className} text-center`}
          onChange={changeHandler}
          name={
            label.charAt(0).toLowerCase() + label.slice(1).replace(/\s+/g, "")
          }
          autoComplete="off"
          value={value.slice(0, 10)}
        />
      )}
    </div>
  );
}

function EnrollStudentDetailsPopup({
  enrollstudentDetails,
  setEnrollStudentDetails,
}) {
  
  function alphabetChangeHandler(event) {
    // console.log(studentDetails);

    if (/^[a-zA-Z\s]*$/.test(event.target.value)) {
      setEnrollStudentDetails((prevDetails) => {
        return {
          ...prevDetails,
          [event.target.name]: event.target.value,
        };
      });
    }
  }

  function changeHandler(eventOrCustom) {
    const isCustom =
      typeof eventOrCustom === "object" && "name" in eventOrCustom;
    const name = isCustom ? eventOrCustom.name : eventOrCustom.target.name;
    const value = isCustom ? eventOrCustom.value : eventOrCustom.target.value;

    setEnrollStudentDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  }

  const inputFields = [
    { label: "First Name" },
    { label: "Middle Name" },
    { label: "Last Name" },
    { label: "Class" },
    { label: "Aadhaar Number" },
    { label: "Gender" },
    { label: "DOB" },
    { label: "Mother Tongue" },
    { label: "Blood Group" },
    { label: "Previous School" },
    { label: "EMIS No" },
    { label: "Phone No" },
    { label: "Caste", className: "whitespace-nowrap" },
    { label: "Religion", className: "whitespace-nowrap" },
    { label: "Status", className: "leading-5" },
  ];

 

  return (
    <section className="flex flex-col bg-white rounded-3xl max-w-full max-md:px-5 h-[324px] overflow-y-scroll scrollbarnone">
      <div className="flex gap-3 justify-between px-px mt-3 text-base leading-5 text-black md:flex-wrap flex-wrap">
        {inputFields.slice(0, 3).map((field, index) => (
          <InputField
            changeHandler={changeHandler}
            alphabetChangeHandler={alphabetChangeHandler}
            key={index}
            label={field.label}
            className={field.className}
            value={
              enrollstudentDetails[
                field.label.charAt(0).toLowerCase() +
                  field.label.slice(1).replace(/\s+/g, "")
              ] || ""
            }
          />
        ))}
      </div>
      <div className="flex gap-3 justify-between px-px mt-3 text-base leading-5 text-black md:flex-wrap flex-wrap">
        {inputFields.slice(3, 6).map((field, index) => (
          <InputField
            changeHandler={changeHandler}
            alphabetChangeHandler={alphabetChangeHandler}
            key={index}
            label={field.label}
            className={field.className}
            value={
              enrollstudentDetails[
                field.label.charAt(0).toLowerCase() +
                  field.label.slice(1).replace(/\s+/g, "")
              ] || ""
            }
          />
        ))}
      </div>
      <div className="flex gap-3 justify-between px-px mt-2 text-base leading-5 text-black md:flex-wrap flex-wrap">
        {inputFields.slice(6, 9).map((field, index) => (
          <InputField
            changeHandler={changeHandler}
            alphabetChangeHandler={alphabetChangeHandler}
            key={index}
            label={field.label}
            className={field.className}
            value={
              enrollstudentDetails[
                field.label.charAt(0).toLowerCase() +
                  field.label.slice(1).replace(/\s+/g, "")
              ] || ""
            }
          />
        ))}
      </div>
      <div className="flex gap-3 justify-between px-px mt-2 text-base leading-5 text-black md:flex-wrap flex-wrap">
        {inputFields.slice(9, 12).map((field, index) => (
          <InputField
            changeHandler={changeHandler}
            alphabetChangeHandler={alphabetChangeHandler}
            key={index}
            label={field.label}
            className={field.className}
            value={
              enrollstudentDetails[
                field.label.charAt(0).toLowerCase() +
                  field.label.slice(1).replace(/\s+/g, "")
              ] || ""
            }
          />
        ))}
      </div>
      <div className="flex gap-3 justify-between px-px mt-2 text-base leading-5 text-black md:flex-wrap flex-wrap">
        {inputFields.slice(12).map((field, index) => (
          <InputField
            changeHandler={changeHandler}
            alphabetChangeHandler={alphabetChangeHandler}
            key={index}
            label={field.label}
            className={field.className}
            value={
              enrollstudentDetails[
                field.label.charAt(0).toLowerCase() +
                  field.label.slice(1).replace(/\s+/g, "")
              ] || ""
            }
          />
        ))}
      </div>
    </section>
  );
}

export default EnrollStudentDetailsPopup;
