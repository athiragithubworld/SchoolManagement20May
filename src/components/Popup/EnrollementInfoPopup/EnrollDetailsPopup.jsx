import { useEffect, useState , useRef } from "react";
import classes from "../../../styles/EnrollDetailsPopup.module.css";
// import { AiOutlinePrinter } from "react-icons/ai";// Importing printer icon
// import { RiDeleteBin5Line } from "react-icons/ri";// Importing delete icon
// import { PiNotePencilLight } from "react-icons/pi";// Importing edit icon

import { GoDownload } from "react-icons/go";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";



export default function EnrollDetailsPopup({
  closeModal,
  enrollmentdetails,
  enrollSelectedStudentData,
  // handleEnrollRefetchdata,
  setEnrollmentDetails,
}) {
  // function having the design for menu icon(edit, share, delete).
  function IconButton({ className }) {
    const [showDropdown, setShowDropdown] = useState(false);
    const ref = useRef(null);
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          setShowDropdown(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);

    return (
      <div className="flex flex-col" ref={ref}>
        <div
          onClick={() => setShowDropdown((prevState) => !prevState)}
          className={`flex justify-center items-center p-2 w-10 h-10 bg-white rounded-2xl border border-solid border-stone-300 cursor-pointer ${className}`}
        >
          <img
            src={
              "https://cdn.builder.io/api/v1/image/assets/TEMP/71951dafcb37cb60651b14b34087ee7264766f4fab0c5ff297e941864f350c14?apiKey=8d87b58e79fa4e2d9738c0aa2c095387&"
            }
            alt=""
            className="w-6 aspect-square"
          />
        </div>
        {showDropdown && (
          <div className="flex flex-col justify-left pl-2 pr-2 pt-2 pb-2 text-lg leading-9 whitespace-nowrap bg-white rounded-2xl border border-solid border-stone-300 absolute mt-12 ml-[-80px]">
            <div
              className={`group flex gap-2 justify-between rounded-xl items-center cursor-pointer hover:bg-[#009dfd] hover:text-white p-1 hover:pl-2 hover:pr-2`}
            >
              <div>Download</div>
              {/* <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1abd5793beba4dce40c9b249b03a3c11548a27e0f16871929ff434fc2cee672?apiKey=8d87b58e79fa4e2d9738c0aa2c095387&"
                alt={`download icon`}
                className="shrink-0 my-auto w-6 aspect-square"
              /> */}
              <GoDownload
                className={` group-hover:text-white h-5 w-[17.1px] text-[#a6a6a6]`}
              />
            </div>
            <div
              className={`group flex gap-2 justify-between rounded-xl items-center cursor-pointer hover:bg-[#009dfd] hover:text-white p-1 hover:pl-2 hover:pr-2`}
            >
              <div className="" onClick={enrollEditHandler}>
                Edit
              </div>
              {/* <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/65a189dfb6f868722ac60d6733299f65ddf59f2dd6c99dc222528ac7b8f56d32?apiKey=8d87b58e79fa4e2d9738c0aa2c095387&"
                alt={`edit icon`}
                className="shrink-0 my-auto w-6 aspect-square fill-white"
              /> */}
              <FaRegEdit
                className={`group-hover:text-white h-5 w-[17.1px] text-[#a6a6a6]`}
              />
            </div>
            <div
              className={`group flex gap-2 justify-between rounded-xl items-center cursor-pointer hover:bg-[#009dfd] hover:text-white p-1 hover:pl-2 hover:pr-2`}
            >
              <div className="">Delete</div>
              {/* <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d999651e12724ea8e330f8f744c6e34186194cc7d53890eac88ba9070fe33388?apiKey=8d87b58e79fa4e2d9738c0aa2c095387&"
                alt={`delete icon`}
                className="shrink-0 my-auto w-6 aspect-square"
              /> */}
              <RiDeleteBin6Line
                className={`group-hover:text-white h-5 w-[17.1px] text-[#a6a6a6]`}
              />
            </div>
          </div>
        )}
      </div>
    );
  }

  // State for enrollment number, initialized with the last enrollment number from props or default value 101
  const enrollmentLastDataNumber = enrollmentdetails[
    enrollmentdetails.length - 1
  ]?.enrollNumber
    ? enrollmentdetails[enrollmentdetails.length - 1]?.enrollNumber + 1
    : 101;

  // State to manage enrollment number
  const [enrollNumber, setEnrollNumber] = useState(enrollmentLastDataNumber);

  // State to manage form data
  const [formState, setFormState] = useState({});

  const [isReadOnly, setIsReadOnly] = useState(false);

  // Function to handle selection of student data for enrollment
  function enrollSelectStudentDataHandler() {
    if (enrollSelectedStudentData && enrollSelectedStudentData.length !== 0) {
      setEnrollNumber(enrollSelectedStudentData[0].enrollNumber);

      setFormState(...enrollSelectedStudentData);

      setIsReadOnly(true);
    }
  }

  // Effect to handle changes in selected student data
  useEffect(() => {
    enrollSelectStudentDataHandler();
  }, [enrollSelectedStudentData]);

  // Function to handle input change in the form
  const handleInputChange = (e) => {
    setFormState((prevForm) => {
      return {
        ...prevForm,
        [e.target.name]: e.target.value,
      };
    });
  };

  // Function to handle closing the popup
  const handleOnClose = () => {
    closeModal();
  };

  //handle AddNew
  const handleAddEnrollDetails = (newDetails) => {
    console.log(newDetails,"enroll");

    const updatedDetailsArray = [...enrollmentdetails];
    const filterdata = enrollmentdetails.filter(
      (data) => data.enrollNumber !== newDetails.enrollNumber
    );

    filterdata.push({
      ...newDetails,
    });
    // console.log(updatedDetailsArray);
    setEnrollmentDetails(filterdata);
  };

  // Function to submit enrollment details
  async function submitEnrollDetailsHandler(formState) {
    // e.preventDefault();

    // Form validation
    if (
      !formState.firstName ||
      !formState.lastName ||
      !formState.fatherName ||
      !formState.fatherPhoneNumber
    ) {
      alert(
        "Please fill in all required fields (First Name, Last Name, Father Name, Father Phone Number)"
      );
      return;
    }

    // Call the function to post form data

    await postFormData(formState);

      handleAddEnrollDetails(formState);

    // Reset formState to initial state
    // await handleEnrollRefetchdata();

    
    
    setFormState({});
  }

  // Function to post form data to server
  const postFormData = async (formData) => {
    // Include enroll number in formData
    formData.enrollNumber = enrollNumber;

    const filteredEnrollNumber =
      enrollSelectedStudentData?.length > 0
        ? enrollSelectedStudentData[0].enrollNumber
        : 0;

    // Determine base URL and request method
    let BASE_URL = "http://localhost:4000/StudentEnrollDetails";

    let query = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    // If editing existing enrollment, modify URL and method
    if (filteredEnrollNumber === enrollNumber) {
      BASE_URL += `/${enrollSelectedStudentData[0].id}`;
      query.method = "PUT";
    } 

    // Fetch data from server
    try {
      const response = await fetch(BASE_URL, query);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      alert("Data is saved");
      // // Reset formState to initial state
      // handleEnrollRefetch();
      closeModal();

      // Update enrollment number after successful data submission
      setEnrollNumber((prevEnrollNumber) => prevEnrollNumber + 1);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Function to handle editing enrollment
  const enrollEditHandler = () => {
    setIsReadOnly(false);
  };

  return (
    <div
      className={`${classes.enrollContainer} gap-[15px] sm:gap-[20px] md:gap-[22px] lg:gap-[24px] `}
    >
      <div className={`${classes.enrollIdSection} w-full`}>
        {/* <div></div> */}
        <h4 className="flex justify-end w-3/5 text-right">
          Enrolement Number : {enrollNumber}
        </h4>
        <div
          className={`${classes.iconButtons} flex justify-end  w-2/5 text-right`}
        >
          <IconButton icon="{{ext_8}}" />
        </div>
      </div>
      {/* Form for entering student details */}
      <div
        className={`${classes.enrollStudentDetails} gap-[10px] sm:gap-[10px] md:gap-[14px] lg:gap-[16px] `}
      >
        <div className={classes.enrollSection}>
          <div className={`${classes.inputContainer} w-1/2`}>
            <label className="w-[85px] sm:w-[90px] md:w-[100px] lg:w-[132px] ">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formState.firstName}
              onChange={handleInputChange}
              readOnly={isReadOnly}
              className="w-[160px] sm:w-[170px] md:w-[200px] lg:w-[250px]"
            />
          </div>
          <div className={`${classes.inputContainer} w-1/2`}>
            <label className="w-[85px] sm:w-[90px] md:w-[100px] lg:w-[132px]">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formState.lastName}
              onChange={handleInputChange}
              readOnly={isReadOnly}
              className="w-[160px] sm:w-[170px] md:w-[200px] lg:w-[250px]"
            />
          </div>
        </div>
        <div className={classes.enrollSection}>
          <div className={`${classes.inputContainer} w-1/2`}>
            <label className="w-[85px] sm:w-[90px] md:w-[100px] lg:w-[132px]">
              Class
            </label>
            <input
              type="text"
              name="studentClass"
              placeholder="Student Class"
              value={formState.studentClass}
              onChange={handleInputChange}
              readOnly={isReadOnly}
              className="w-[160px] sm:w-[170px] md:w-[200px] lg:w-[250px]"
            />
          </div>
          <div className={`${classes.inputContainer} w-1/2`}>
            <label className="w-[85px] sm:w-[90px] md:w-[100px] lg:w-[132px]">
              Aadhaar Number
            </label>
            <input
              type="text"
              name="aadharNumber"
              placeholder="Aadhaar Number"
              value={formState.aadhaarNumber}
              onChange={handleInputChange}
              readOnly={isReadOnly}
              className="w-[160px] sm:w-[170px] md:w-[200px] lg:w-[250px]"
            />
          </div>
        </div>
        <div className={classes.enrollSection}>
          <div className={`${classes.inputContainer} w-1/2`}>
            <label className="w-[85px] sm:w-[90px] md:w-[100px] lg:w-[132px]">
              Gender
            </label>
            <select
              name="gender"
              value={formState.gender}
              onChange={handleInputChange}
              disabled={isReadOnly}
              className="w-[160px] sm:w-[170px] md:w-[200px] lg:w-[250px]"
            >
              <option value=""> Gender </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Others</option>
            </select>
          </div>
          <div className={classes.inputContainer}>
            <label className="w-[85px] sm:w-[90px] md:w-[100px] lg:w-[132px]">
              Date Of Birth
            </label>
            <input
              type="date"
              name="dob"
              placeholder="27-3-2024"
              value={formState.dateOfBirth}
              onChange={handleInputChange}
              readOnly={isReadOnly}
              className="w-[160px] sm:w-[170px] md:w-[200px] lg:w-[250px]"
            />
          </div>
        </div>
        <div className={classes.enrollSection}>
          <div className={classes.inputContainer}>
            <label className="w-[85px] sm:w-[90px] md:w-[100px] lg:w-[132px]">
              Father Name
            </label>
            <input
              type="text"
              name="fatherName"
              placeholder="Fathers Name"
              value={formState.fatherName}
              onChange={handleInputChange}
              readOnly={isReadOnly}
              className="w-[160px] sm:w-[170px] md:w-[200px] lg:w-[250px]"
            />
          </div>
          <div className={classes.inputContainer}>
            <label className="w-[85px] sm:w-[90px] md:w-[100px] lg:w-[132px]">
              Father Phone Number
            </label>
            <input
              type="text"
              name="fatherPhoneNumber"
              placeholder=" Father Phone number"
              value={formState.fatherPhoneNumber}
              onChange={handleInputChange}
              readOnly={isReadOnly}
              className="w-[160px] sm:w-[170px] md:w-[200px] lg:w-[250px]"
            />
          </div>
        </div>
        <div className={classes.enrollSection}>
          <div className={classes.inputContainer}>
            <label className="w-[85px] sm:w-[90px] md:w-[100px] lg:w-[132px]">
              Mother Name
            </label>
            <input
              type="text"
              name="mothername"
              placeholder="Mother's Name "
              value={formState.motherName}
              onChange={handleInputChange}
              readOnly={isReadOnly}
              className="w-[160px] sm:w-[170px] md:w-[200px] lg:w-[250px]"
            />
          </div>
          <div className={classes.inputContainer}>
            <label className="w-[85px] sm:w-[90px] md:w-[100px] lg:w-[132px]">
              Mother Phone Number
            </label>
            <input
              type="text"
              name="momPhone"
              placeholder=" Mother Phone number"
              value={formState.motherPhoneNumber}
              onChange={handleInputChange}
              readOnly={isReadOnly}
              className="w-[160px] sm:w-[170px] md:w-[200px] lg:w-[250px]"
            />
          </div>
        </div>

        <div className={classes.enrollSection}>
          <div className={classes.inputContainer}>
            <label className="w-[85px] sm:w-[90px] md:w-[100px] lg:w-[132px]">
              Previous School
            </label>
            <input
              type="text"
              name="previousSchool"
              placeholder=" Previous School"
              value={formState.previousSchool}
              onChange={handleInputChange}
              readOnly={isReadOnly}
              className="w-[160px] sm:w-[170px] md:w-[200px] lg:w-[250px]"
            />
          </div>
          <div className={classes.inputContainer}>
            <label className="w-[85px] sm:w-[90px] md:w-[100px] lg:w-[132px]">
              Religion
            </label>
            <input
              type="text"
              name="religion"
              placeholder=" Religion"
              value={formState.religion}
              onChange={handleInputChange}
              readOnly={isReadOnly}
              className="w-[160px] sm:w-[170px] md:w-[200px] lg:w-[250px]"
            />
          </div>
        </div>
        <div className={classes.enrollSection}>
          <div className={classes.inputContainer}>
            <label className="w-[85px] sm:w-[90px] md:w-[100px] lg:w-[132px]">
              Caste
            </label>
            <input
              type="text"
              name="caste"
              placeholder=" Caste"
              value={formState.caste}
              onChange={handleInputChange}
              readOnly={isReadOnly}
              className="w-[160px] sm:w-[170px] md:w-[200px] lg:w-[250px]"
            />
          </div>
          <div className={classes.inputContainer}>
            <label className="w-[85px] sm:w-[90px] md:w-[100px] lg:w-[132px]">
              Status
            </label>

            <select
              name="status"
              value={formState.status}
              onChange={handleInputChange}
              readOnly={isReadOnly}
              className="w-[160px] sm:w-[170px] md:w-[200px] lg:w-[250px]"
            >
              <option value=""> Status </option>
              <option value="Pending">Pending</option>
              <option value="Denied">Denied</option>
              <option value="Approved">Approved</option>
            </select>
          </div>
        </div>
        <div className={classes.enrollSection}>
          <div className={classes.inputContainer}>
            <label className="w-[85px] sm:w-[90px] md:w-[100px] lg:w-[132px]">
              EMIS Number
            </label>
            <input
              type="text"
              name="emis"
              placeholder=" EMIS Number"
              value={formState.emisNumber}
              onChange={handleInputChange}
              readOnly={isReadOnly}
              className="w-[160px] sm:w-[170px] md:w-[200px] lg:w-[250px]"
            />
          </div>
          <div className={classes.inputContainer}>
            <label className="w-[85px] sm:w-[90px] md:w-[100px] lg:w-[132px]">
              Blood Group
            </label>
            <input
              type="text"
              name="bloodGroup"
              placeholder="Blood Group"
              value={formState.bloodGroup}
              onChange={handleInputChange}
              readOnly={isReadOnly}
              className="w-[160px] sm:w-[170px] md:w-[200px] lg:w-[250px]"
            />
          </div>
        </div>
        <div className={classes.enrollSection}>
          <div className="flex items-center gap-[8px] w-full">
            <label className="flex items-center  h-[42px]text-left text-base w-[85px] sm:w-[90px] md:w-[100px] lg:w-[132px]">
              Current Address
            </label>
            <input
              type="text"
              name="currentAddress"
              placeholder="Current Address"
              value={formState.currentAddress}
              onChange={handleInputChange}
              readOnly={isReadOnly}
              className={`${classes.inputShadow} flex w-10/12 h-[42px] rounded-[14px] p-[14px] bg-white text-[#7c7c7c]  `}
            />
          </div>
        </div>
        <div className={classes.enrollSection}>
          <div className="flex items-center gap-[8px] w-full">
            <label className="flex items-center  h-[42px]text-left text-base w-[85px] sm:w-[90px] md:w-[100px] lg:w-[132px]">
              Permanent Address
            </label>
            <input
              type="text"
              name="permanentAddress"
              placeholder="Premanent Address"
              value={formState.premanentAddress}
              onChange={handleInputChange}
              readOnly={isReadOnly}
              className={`${classes.inputShadow} flex w-10/12 h-[42px] rounded-[14px] p-[14px] bg-white text-[#7c7c7c]  `}
            />
          </div>
        </div>
      </div>
      {/* Buttons for canceling and saving enrollment */}
      <div className={classes.enrollButtonClass}>
        <button onClick={handleOnClose} className={classes.cancelButton}>
          Cancel
        </button>
        <button
          className={classes.saveButton}
          onClick={() => submitEnrollDetailsHandler(formState)}
        >
          Save
        </button>
      </div>
    </div>
  );
}
