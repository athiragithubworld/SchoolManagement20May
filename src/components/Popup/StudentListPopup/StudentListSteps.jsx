import classes from "../../../styles/EnrollmentPopup.module.css"; // Importing CSS module for styling
import { useState, useEffect } from "react";
import Modal from "../../Modal/Modal";
import { RiDeleteBin5Line } from "react-icons/ri";
// import Pagination from "../../../ui/Pagination";
import StudentListPagination from "../../../ui/StudentListPagination";
import StudentListDocuments from "./StudentListDocuments";
import ParentDetailsPopup from "./ParentDetailsPopup";
import StudentDetails from "./StudentDetailsPopup";
import { AiOutlineVerticalLeft, AiOutlineVerticalRight } from "react-icons/ai";

// Functional component TimeSettingModal
export default function StudentListSteps({ 
  handleClose,
  handleAddStudentDetails,
  studentListDetails,
  closeModal
}) {
  const [step, setStep] = useState(1);
  const [showModal, setShowModal] = useState(true);
  const [documents, setDocuments] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const tabs = [
    { label: "Student Details" },
    { label: "Parent Details" },
    { label: "Documents" },
  ];

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % tabs.length);
    setStep((prevIndex) => prevIndex + 1);
  };
  const handleTabClick = (index) => {
    setActiveIndex(index);
    setStep(index + 1);
  };

   //Handle uploading documents
  const fileNames = {
    aadhaar: "",
    academic: "",
    tc: "",
    birth: "",
    residential: "",
    photo: "",
    domicile: "",
    document: "",
  };
  const [fileImages, setFileImages] = useState(fileNames);
  const [selectedDocuments, setSelectedDocuments] = useState({
    aadhaar: false,
    academic: false,
    tc: false,
    birth: false,
    residential: false,
    photo: false,
    domicile: false,
    document: false,
  });
  const uploadFileHandler = (fileName, imageUrl) => {
    setFileImages((prevState) => ({
      ...prevState,
      [fileName]: imageUrl,
    }));
  };

  useEffect(() => {
    async function getDocuments() {
      try {
        const response = await fetch(
          "http://localhost:4000/StudentEnrollDetails"
        );
        const documents = await response.json();
        setDocuments(documents);
        // 
      } catch (err) {
        console.log(err);
      }
    }
    getDocuments();
  }, []);

  // const closeModal = () => {
  //   setShowModal(false);
  // };

  //Handle deleting all documents
  const deleteHandler = () => {
    setFileImages(fileNames);
  };

  const handlePrevious = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1) % tabs.length);
    if (step === 3) {
      console.log("Cancel");
      handleClose();
    } else {
      setStep(step - 1);
    }
  };

  //Handle Popup details - FUNCTIONALITY FOR SAVE BUTTON WAS ADDED BY HAIDER
  const [studentDetails,setStudentDetails]  = useState({
    FirstName: "",
    MiddleName: "",
    LastName: "",
    Class:"",
    Section:"",
    RollNo:"",
    Gender: "",
    DOB: "",
    MotherTongue:"",
    BloodGroup:"",
    Disability:"",
    AadharCardNo :"",
    PhoneNo:"",
    Caste:"",
    Religion:""
  })
  const [parentDetails,setParentDetails] = useState({
    FatherName: "",
    MotherName: "",
    GuardianName : "",

    FatherMobileNo: "",
    MotherMobileNo:"",
    GuardianMobileNo : "",

    FatherEmail:"",
    MotherEmail:"",
    GuardianEmail : "",

    FatherOccupation : "",
    MotherOccupation : "",
    GuardianOccupation : "",

    CurrentAddress: "",
    CurrentPinCode:"",
    CurrentCity:"",
    CurrentState:"",
    PermanentAddress: "",
    PermanentPinCode: "",
    PermanentCity: "",
    PermanentState: ""
  })
  const studentAllDetails = {...studentDetails,...parentDetails,StudentId: 1 + studentListDetails.length}

  async function submitHandler(studentAllDetails){

    if(studentAllDetails.AadharCardNo.length < 12)
      {
        alert("Enter Valid Aadhar Number");
        return;
      }
    if(studentAllDetails.PhoneNo.length < 10)
      {
        alert("Enter Valid Student Phone Number");
        return;
      }
    if(studentAllDetails.FatherMobileNo.length < 10)
      {
        alert("Enter Valid Father Phone Number");
        return;
      }
    if(studentAllDetails.MotherMobileNo.length < 10)
      {
        alert("Enter Valid Mother Phone Number");
        return;
      }
    if(studentAllDetails.GuardianMobileNo.length < 10)
      {
        alert("Enter Valid Guardian Phone Number");
        return;
      }
    if(studentAllDetails.CurrentPinCode.length < 6)
      {
        alert("Enter Valid Current Pin Code");
        return;
      }
    if(studentAllDetails.PermanentPinCode.length < 6)
      {
        alert("Enter Valid Permanent Pin Code");
        return;
      }


    const response = await fetch("http://localhost:4000/StudentListDetails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(studentAllDetails)
    });

    alert("Data Saved");
    closeModal();
    handleAddStudentDetails(studentAllDetails);
  }


  return (
      <div className={classes.container}>
        <StudentListPagination
          setStep={setStep}
          step={step}
          activeIndex={activeIndex}
          handleTabClick={handleTabClick}
        />
        {step === 3 && (
          <>
              <div className="flex gap-5 justify-between w-[100%] max-md:flex-wrap">
                  <div className="my-auto text-lg font-bold leading-5 text-black">
                  </div>
                  <div className="flex gap-4">
                    <div className="flex justify-center items-center p-1 w-10 h-10 bg-white rounded-lg border border-solid border-stone-300 cursor-pointer">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b50d8c894c9877507fadd3e9b090e9deb1b6d12dcb3d62662b77c4268fa4daf?apiKey=8d87b58e79fa4e2d9738c0aa2c095387&"
                        className="aspect-[0.96] fill-neutral-500 w-[23px]"
                      />
                    </div>
                    <div className="flex justify-center items-center px-1  w-10 h-10 bg-white rounded-2xl border border-solid border-stone-300 cursor-pointer">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5f66847653e76712da56d2bfde5da274b4507639bcf05e4eed81b7395b70442b?apiKey=8d87b58e79fa4e2d9738c0aa2c095387&"
                        className="w-6 aspect-square"
                      />
                    </div>
                  </div>
              </div>
          </>
        )}
        {step === 1 && (
          <StudentDetails
            studentDetails={studentDetails}
            setStudentDetails={setStudentDetails}
          />
        )}
        {step === 2 && (
          <ParentDetailsPopup
            parentDetails={parentDetails}
            setParentDetails={setParentDetails}
          />
        )}
        {step === 3 && (
          <StudentListDocuments
            step={2}
            currentStep={step}
            fileImages={fileImages}
            uploadFileHandler={uploadFileHandler}
          />
        )}
        <span className={classes.parentbutton}>
          {step === 3 && (
            <button
              className={classes.previousbutton}
              onClick={closeModal}
              disabled={step === 1}
            >
              <span>Cancel</span>
            </button>
          )}
          {step === 2 && (
            <button
              className={classes.previousbutton}
              onClick={handlePrevious}
              disabled={step === 1}
            >
              <span
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "30px",
                }}
              >
                <AiOutlineVerticalRight style={{ display: "inline" }} />
                Previous
              </span>
            </button>
          )}
          {step !== 3 && (
            <button className={classes.submitbutton} onClick={handleNext}>
              <span
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "30px",
                }}
              >
                {" "}
                Next
                <AiOutlineVerticalLeft style={{ display: "inline" }} />
              </span>
            </button>
          )}
          {step === 3 && (
            <button
              className={classes.submitbutton}
              onClick={() => submitHandler(studentAllDetails)}
            >
              <span> Save</span>
            </button>
          )}
        </span>
      </div>
  );
}
