import classes from "../../../styles/EnrollmentPopup.module.css"; // Importing CSS module for styling
import { useState, useEffect } from "react";
import StudentListPagination from "../../../ui/StudentListPagination";
import { GoDownload } from "react-icons/go";
import { AiOutlineVerticalLeft, AiOutlineVerticalRight } from "react-icons/ai";
import EnrollStudentDetailsPopup from "./EnrollStudentDetailsPopup";
import EnrollStudentParentDetailsPopup from "./EnrollStudentParentDetailsPopup";
import EnrollStudentDocumentsPopup from "./EnrollStudentDocumentsPopup";
import usePopupDownloader from "../../CustomHooks/DownloadPopup";

// Functional component TimeSettingModal
export default function EnrollStudentSteps({
  closeModal,

  enrollmentdetails,
  enrollSelectedStudentData,
  setEnrollmentDetails,
}) {
  const [step, setStep] = useState(1);
  const [showModal, setShowModal] = useState(true);
  const [documents, setDocuments] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  // State for enrollment number, initialized with the last enrollment number from props or default value 101
  const enrollmentLastDataNumber = enrollmentdetails[
    enrollmentdetails.length - 1
  ]?.enrollNumber
    ? enrollmentdetails[enrollmentdetails.length - 1]?.enrollNumber + 1
    : 101;

  //State to manage enrollment number
  const [enrollNumber, setEnrollNumber] = useState(enrollmentLastDataNumber);
  const [enrollStudentList, setEnrollStudentList] = useState({});

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

  //Handle Popup details - FUNCTIONALITY FOR SAVE BUTTON WAS ADDED BY Athira
  const [enrollstudentDetails, setEnrollStudentDetails] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    class: "",
    aadharCardNo: "",
    gender: "",
    dOB: "",
    motherTongue: "",
    bloodGroup: "",
    previousSchool: "",
    emisNo: "",
    phoneNo: "",
    caste: "",
    religion: "",
    status: "",
    enrollNumber: enrollNumber,
  });
  const [parentDetails, setParentDetails] = useState({
    fatherName: "",
    motherName: "",
    fatherMobileNo: "",
    motherMobileNo: "",
    fatherEmail: "",
    motherEmail: "",
    currentAddress: "",
    currentAddressPinCode: "",
    currentAddressCity: "",
    currentAddressState: "",
    permanentAddress: "",
    permanentAddressPinCode: "",
    permanentAddressCity: "",
    permanentAddressState: "",
  });

  useEffect(() => {
    if (
      (enrollstudentDetails.length !== 0 && parentDetails.length !== 0) ||
      fileImages.length !== 0
    ) {
      setEnrollStudentList({
        ...enrollstudentDetails,
        ...parentDetails,
        ...fileImages,
      });
    }
  }, [enrollstudentDetails, parentDetails, fileImages]);

  const tabs = [
    { label: "Student Details" },
    { label: "Parents Details" },
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

  const uploadFileHandler = (fileName, imageUrl) => {
    setFileImages((prevState) => ({
      ...prevState,
      [fileName]: imageUrl,
    }));
  };

  //Handle deleting all documents
  const deleteHandler = () => {
    setFileImages(fileNames);
  };

  const handlePrevious = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1) % tabs.length);
    if (step === 3) {
      // console.log("Cancel");
      closeModal();
    } else {
      setStep(step - 1);
    }
  };

  // Function to handle selection of student data for enrollment
  function enrollSelectStudentDataHandler() {
    if (enrollSelectedStudentData && enrollSelectedStudentData.length !== 0) {
      setEnrollNumber(enrollSelectedStudentData[0].enrollNumber);
      const {
        fatherName,
        motherName,
        guardianName,
        fatherMobileNo,
        motherMobileNo,
        guardianMobileNo,
        fatherEmail,
        motherEmail,
        guardianEmail,
        fatherOccupation,
        motherOccupation,
        guardianOccupation,
        currentAddress,
        currentAddressPinCode,
        currentAddressCity,
        currentAddressState,
        permanentAddress,
        permanentAddressPinCode,
        permanentAddressCity,
        permanentAddressState,
      } = enrollSelectedStudentData[0];

      setEnrollStudentDetails({
        id: enrollSelectedStudentData[0].id,
        firstName: enrollSelectedStudentData[0].firstName,
        middleName: enrollSelectedStudentData[0].middleName,
        lastName: enrollSelectedStudentData[0].lastName,
        class: enrollSelectedStudentData[0].class,

        gender: enrollSelectedStudentData[0].gender,
        dOB: enrollSelectedStudentData[0].dOB,
        motherTongue: enrollSelectedStudentData[0].motherTongue,
        bloodGroup: enrollSelectedStudentData[0].bloodGroup,
        previousSchool: enrollSelectedStudentData[0].previousSchool,
        aadhaarNumber: enrollSelectedStudentData[0].aadhaarNumber,
        eMISNo: enrollSelectedStudentData[0].eMISNo,
        status: enrollSelectedStudentData[0].status,
        enrollNumber: enrollSelectedStudentData[0].enrollNumber,
        phoneNo: enrollSelectedStudentData[0].phoneNo,
        caste: enrollSelectedStudentData[0].caste,
        religion: enrollSelectedStudentData[0].religion,
      });
      setParentDetails({
        fatherName,
        motherName,
        guardianName,
        fatherMobileNo,
        motherMobileNo,
        guardianMobileNo,
        fatherEmail,
        motherEmail,
        guardianEmail,
        fatherOccupation,
        motherOccupation,
        guardianOccupation,
        currentAddress,
        currentAddressPinCode,
        currentAddressCity,
        currentAddressState,
        permanentAddress,
        permanentAddressPinCode,
        permanentAddressCity,
        permanentAddressState,
      });
      setFileImages({
        aadhaar: enrollSelectedStudentData[0].aadhaar,
        academic: enrollSelectedStudentData[0].academic,
        tc: enrollSelectedStudentData[0].tc,
        birth: enrollSelectedStudentData[0].birth,
        residential: enrollSelectedStudentData[0].residential,
        photo: enrollSelectedStudentData[0].photo,
        domicile: enrollSelectedStudentData[0].domicile,
        document: enrollSelectedStudentData[0].document,
      });
    }
  }

  // Effect to handle changes in selected student data
  useEffect(() => {
    enrollSelectStudentDataHandler();
  }, [enrollSelectedStudentData]);

  //handle AddNew
  const handleAddEnrollDetails = (newDetails) => {
    const updatedDetailsArray = [...enrollmentdetails];
    const filterdata = enrollmentdetails.filter(
      (data) => data.enrollNumber !== newDetails.enrollNumber
    );

    filterdata.push({
      ...newDetails,
    });

    setEnrollmentDetails(filterdata);
  };

  async function submitHandler(enrollStudentList) {
    // Fields to check for emptiness along with their corresponding names
    const fieldsToCheck = [
      { value: enrollStudentList.firstName, name: "First Name" },
      { value: enrollStudentList.lastName, name: "Last Name" },
      { value: enrollStudentList.gender, name: "Gender" },
      { value: enrollStudentList.class, name: "Class" },
      { value: enrollStudentList.phoneNo, name: "Phone Number" },
      { value: enrollStudentList.status, name: "Status" },
      { value: parentDetails.fatherName, name: "Father's Name" },
      { value: parentDetails.fatherMobileNo, name: "Father's Mobile Number" },
    ];

    // Check if any field in fieldsToCheck is empty
    for (const field of fieldsToCheck) {
      if (field.value === "") {
        // Show alert message mentioning the field name
        alert(`Please fill in the '${field.name}' field`);
        // Return back without submitting
        return;
      }
    }

    // Check validation of values
    if (enrollStudentList.aadhaarNumber.length < 12) {
      alert("Enter Valid Aadhar Number");
      return;
    }
    if (enrollStudentList.phoneNo.length < 10) {
      alert("Enter Valid Student Phone Number");
      return;
    }
    if (enrollStudentList.fatherMobileNo.length < 10) {
      alert("Enter Valid Father Phone Number");
      return;
    }
    if (enrollStudentList.motherMobileNo.length < 10) {
      alert("Enter Valid Mother Phone Number");
      return;
    }
    if (enrollStudentList.currentAddressPinCode.length < 6) {
      alert("Enter Valid Current Pin Code");
      return;
    }
    if (enrollStudentList.permanentAddressPinCode.length < 6) {
      alert("Enter Valid Permanent Pin Code");
      return;
    }

    await postFormData(enrollStudentList);

    handleAddEnrollDetails(enrollStudentList);
  }

  // Function to post form data to server
  const postFormData = async (formData) => {
    // Include enroll number in formData

    formData.enrollNumber = enrollNumber;

    const filteredEnrollNumber =
      enrollSelectedStudentData?.length > 0
        ? enrollSelectedStudentData[0].enrollNumber
        : 0;

    // // Determine base URL and request method
    let BASE_URL = "http://localhost:4000/StudentEnrollDetails";
    let query;

    // Check if enrollSelectedStudentData and enrollSelectedStudentData[0] exist and have an id
    if (
      enrollSelectedStudentData &&
      enrollSelectedStudentData[0] &&
      enrollSelectedStudentData[0].id
    ) {
      BASE_URL += `/${enrollSelectedStudentData[0].id}`;
      query = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      };
    } else {
      query = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      };
    }

    // // Determine base URL and request method
    // let BASE_URL = "http://localhost:4000/StudentEnrollDetails";

    // let query = {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formData),
    // };

    // // If editing existing enrollment, modify URL and method
    // if (filteredEnrollNumber === enrollNumber) {
    //   BASE_URL += `/${enrollSelectedStudentData[0].id}`;
    //   query.method = "PUT";
    // }

    // Fetch data from server
    try {
      const response = await fetch(BASE_URL, query);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      // setRefetch((prev) => !prev);
      alert("Data is saved");
      // // Reset formState to initial state
      // handleEnrollRefetch();
      closeModal();
      // handleUpdateStudent()

      // Update enrollment number after successful data submission
      setEnrollNumber((prevEnrollNumber) => prevEnrollNumber + 1);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleDelete = () => {
    let id =
      Array.isArray(enrollSelectedStudentData) &&
      enrollSelectedStudentData.length !== 0
        ? enrollSelectedStudentData[0]?.id ?? 0
        : 0;

    const confirmation = window.confirm("Do you want to delete ?");

    if (confirmation) {
      if (id) {
        fetch(`http://localhost:4000/StudentEnrollDetails/${id}`, {
          //for deleting data in the table
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(null),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("Success: in deleting", data);

            //  delete from the use state array
            const filterdata = enrollmentdetails.filter(
              (item) => item.enrollNumber !== data.enrollNumber
            );
            setEnrollmentDetails(filterdata);

            //  closing the modal
            closeModal(true);

            alert("data is deleted");

            // handleAlert("success","Data row is deleted");
          })
          .catch((error) => {
            console.error("Error:", error);
          });
        handleDeletion();
      } else {
        deleteHandler();
      }
    } else {
      return;
    }
  };

  // download export file
  const downloadFile = usePopupDownloader();
  const exportToExcel = () => {
    let id =
      Array.isArray(enrollSelectedStudentData) &&
      enrollSelectedStudentData.length !== 0
        ? enrollSelectedStudentData[0]?.id ?? 0
        : 0;
    if (id) {
      const {
        aadhaar,
        academic,
        tc,
        birth,
        residential,
        photo,
        domicile,
        document,
        ...studentData
      } = enrollSelectedStudentData[0];

      const data = studentData;

      downloadFile(
        data,
        `${enrollSelectedStudentData[0].firstName +
        " " +
        enrollSelectedStudentData[0].lastName
        } - Enrollment Detail`
      );
    } else {

      const {
        aadhaar,
        academic,
        tc,
        birth,
        residential,
        photo,
        domicile,
        document,
        ...enrollStudentData
      } = enrollStudentList;

      
      const newStudent = enrollStudentData
      if (
        enrollStudentList.firstName &&
        enrollStudentList.lastName  &&
        enrollStudentList.gender  &&
        enrollStudentList.doB  &&
        enrollStudentList.prevSchool &&
        enrollStudentList.enrollNumber &&
        enrollStudentList.status &&
        enrollStudentList.fatherName  &&
        enrollStudentList.fatherMobileNo
      ) {
         downloadFile(
           newStudent,
           `${
             enrollStudentList.firstName + " " + enrollStudentList.lastName
           } - Enrollment Detail`
         );
      }
      else {
        alert("Please fill all the fields");
      }
       
    }
  };

  return (
    // <Modal handleClose={closeModal} isOpen={showModal}>
    <div className={classes.container}>
      <StudentListPagination
        setStep={setStep}
        step={step}
        activeIndex={activeIndex}
        handleTabClick={handleTabClick}
      />
      {step === 3 && (
        <div className="flex gap-5 justify-between w-[100%] max-md:flex-wrap">
          <div className="my-auto text-lg font-bold leading-5 text-black">
            {/* Documentation */}
          </div>
          <div className="flex gap-4">
            <div className="flex justify-center items-center p-1 w-10 h-10 bg-white rounded-2xl border border-solid border-stone-300 cursor-pointer">
              <GoDownload
                // className={` group-hover:text-white h-5 w-[17.1px] text-[#a6a6a6]`}
                onClick={exportToExcel}
              />
            </div>
            <div
              className="flex justify-center items-center px-1  w-10 h-10 bg-white rounded-2xl border border-solid border-stone-300 cursor-pointer"
              onClick={handleDelete}
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5f66847653e76712da56d2bfde5da274b4507639bcf05e4eed81b7395b70442b?apiKey=8d87b58e79fa4e2d9738c0aa2c095387&"
                className="w-6 aspect-square"
              />
            </div>
          </div>
        </div>
      )}
      {step === 1 && (
        <EnrollStudentDetailsPopup
          enrollstudentDetails={enrollstudentDetails}
          setEnrollStudentDetails={setEnrollStudentDetails}
        />
      )}
      {step === 2 && (
        <EnrollStudentParentDetailsPopup
          parentDetails={parentDetails}
          setParentDetails={setParentDetails}
          // enrollStudentList={enrollStudentList}
          // enrollSelectedStudentData={enrollSelectedStudentData}
        />
      )}
      {step === 3 && (
        <EnrollStudentDocumentsPopup
          step={2}
          currentStep={step}
          fileImages={fileImages}
          setFileImages={setFileImages}
          uploadFileHandler={uploadFileHandler}
        />
      )}
      <span className={classes.parentbutton}>
        {step === 3 && (
          <button
            className={classes.previousbutton}
            onClick={handlePrevious}
            // disabled={step === 1}
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
                gap: "20px",
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
            onClick={() => submitHandler(enrollStudentList)}
          >
            <span> Save</span>
          </button>
        )}
      </span>
    </div>
    // </Modal>
  );
}
