//This component is created by Athira.
//made responsive by sravanthi
//updated functionality by gunjan
import classes from "../../../../styles/EnrollmentPopup.module.css"; // Importing CSS module for styling
import { useState } from "react";
// import Modal from "../../Modal/Modal";
import { AiOutlineVerticalLeft, AiOutlineVerticalRight } from "react-icons/ai";

import EmployeeListPagination from "../../../../ui/EmployeeListPagination";
import EmployeeListDocuments from "./EmployeeListDocuments";
import EmployeeProfileDetailsPopup from "./EmployeeProfileDetailsPopup";
import EducationDetailsPopup from "./EducationDetailsPopup";
import BankDetailsPopupPage from "./BankDetailsPopupPage";
import usePopupDownloader from "../../../CustomHooks/DownloadPopup";

// Functional component EmployeeListMainPopup
export default function EmployeeListMainPopup({handleClose,allEmployeeDetail}) {
  
  const [step, setStep] = useState(1);
  const [showModal, setShowModal] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [profileData,setProfileData] = useState([{
    FirstName: "",
    MiddleName: "",
    LastName: "",
    MobileNoPrimary:"",
    MobileNoSecondary:"",
    Email:'',
    Gender:'',
    DOB:'',
    MotherTongue:'',
    AadharCardNo:'',
    PanCardNo:'',
    Religion:'',
    Designation:'',
    Role:'',
    Qualification:'',
    PrimarySubject:'',
    SecondarySubject:'',
    currentAddress:'',
    currentPincode:'',
    currentCity:'',
    currentState:'',
    permanentAddress:'',
    permanentPincode:'',
    permanentCity:'',
    permanentState:''

  }]);
  const [educationData, setEducationData] = useState([
    {DateOfJoining:'',
    Experience:'',
    PreLeavedSchool:'',
    SSC:'',
    HSC:'',
    UG:'',
    PG:'',
    SchoolSSC:'',
    CollegeHSC:'',
    UniversityUG:'',
    UniversityPG:'',
    ScoreSSC:'',
    ScoreHSC:'',
    ScoreUG:'',
    ScorePG:'',
    YearOfPassingSSC:'',
    YearOfPassingHSC:'',
    YearOfPassingUG:'',
    YearOfPassingPG:'',
    }
  ]);
  const [bankData,setBankData] = useState([{
    BankName:'',
    BankACNo:'',
    IFSCCode:'',
    Branch:'',
    BankAdd:'',
    CIFNo:'',
    PFNo:'',
    UANNo:'',
    ESINo:''

  }]);
  const fileNames = {
    photo:"",
    aadhaar: "",
    pan: "",
    resume: "",
    UGcertificate: "",
    PGcertificate: "",
    cv: "",
    addDocument:""
  };
 
  // Array of tabs for the popup
  const tabs = [
    { label: "Profile Details" },
    { label: "Education Details" },
    { label: "Bank Details" },
    { label: "Documents" },
  ];
  const [fileImages, setFileImages] = useState(fileNames);
  const downloadFile = usePopupDownloader();
  
  const exportToExcel = () => {
    downloadFile(
      {...profileData,...educationData,...bankData},
      "Employee Details",
    );
  };
  // Function to handle moving to the next step
  const handleNext = (step) => {
    if(step===1){
      const requiredFields = Object.keys(profileData[0]).filter(field => field !== 'MiddleName');
      console.log(profileData)
      const emptyFields = requiredFields.filter(field => !profileData[field]);
     
      if (emptyFields.length > 0) {
        alert('Please fill all the required fields.');
        emptyFields.forEach(field => {
          const inputElement = document.getElementsByName(field)[0];
          if (inputElement) {
            inputElement.classList.add('ring-2' ,'ring-red-400');
          }
        });
  
        return; // Prevent advancement if any required field (except MiddleName) is empty
      }
    }
    setActiveIndex((prevIndex) => (prevIndex + 1) % tabs.length);
    setStep((prevIndex) => prevIndex + 1);
  };
  const uploadFileHandler = (fileName, imageUrl) => {
    setFileImages((prevState) => ({
      ...prevState,
      [fileName]: imageUrl,
    }));
  };

  //Function to post the data 
  const handleSave = async(event)=>{
    event.preventDefault();
    //validations 
    // if(profileData.MobileNoPrimary && profileData.MobileNoPrimary.length!==10){alert('Mobile number should be exactly 10 digits long.'); return}
    // if(profileData.MobileNoSecondary && profileData.MobileNoSecondary.length!==10){alert('Emargency contact number should be exactly 10 digits long.'); return}
    // if(profileData.AadharCardNo && profileData.AadharCardNo.length!==12){alert('Aadhar Number should be exactly 12 digits long.'); return}
    // if(profileData.PanCardNo && profileData.PanCardNo.length!==10){alert('Pan Number should be exactly 10 digits long.'); return}
    // if(profileData.currentPincode && profileData.currentPincode.length!==6){alert('Current Pincode should be exactly 6 digits long.'); return}
    // if(profileData.permanentPincode && profileData.permanentPincode.length!==6){alert('Permanent Pincode should be exactly 6 digits long.'); return}
    // if(bankData.IFSCCode && bankData.IFSCCode.length!==11){alert('IFSC code should be exactly 11 character long.'); return}
    // if(bankData.UANNo && bankData.UANNo.length!==12){alert('UAN number should be exactly 12 character long.'); return}
    // if(educationData.YearOfPassingHSC && educationData.YearOfPassingHSC.length!==4){alert('Year of Passing HSC should be exactly 4 digits long.'); return}
    // if(educationData.YearOfPassingHSC && educationData.YearOfPassingSSC.length!==4){alert('Year of Passing HSC should be exactly 4 digits long.'); return}
    // if(educationData.YearOfPassingHSC && educationData.YearOfPassingUG.length!==4){alert('Year of Passing HSC should be exactly 4 digits long.'); return}
    // if(educationData.YearOfPassingHSC && educationData.YearOfPassingPG.length!==4){alert('Year of Passing HSC should be exactly 4 digits long.'); return}
   let allDetails;

      allDetails={
        employeeCustomId:String((allEmployeeDetail && allEmployeeDetail.length>0)?(Number(allEmployeeDetail[allEmployeeDetail.length-1].employeeCustomId) + 1) : 101),
        FirstName: profileData.FirstName,
        MiddleName: profileData.MiddleName,
        LastName: profileData.LastName,
        MobileNoPrimary:profileData.MobileNoPrimary,
        MobileNoSecondary:profileData.MobileNoSecondary,
        Email:profileData.Email,
        Gender:profileData.Gender,
        DOB:profileData.DOB,
        MotherTongue:profileData.MotherTongue,
        AadharCardNo:profileData.AadharCardNo,
        PanCardNo:profileData.PanCardNo,
        Religion:profileData.Religion,
        Designation:profileData.Designation,
        Role:profileData.Role,
        Qualification:profileData.Qualification,
        PrimarySubject:profileData.PrimarySubject,
        SecondarySubject:profileData.SecondarySubject,
        currentAddress:profileData.currentAddress,
        currentPincode:profileData.currentPincode,
        currentCity:profileData.currentCity,
        currentState:profileData.currentState,
        permanentAddress:profileData.permanentAddress,
        permanentPincode:profileData.permanentPincode,
        permanentCity:profileData.permanentCity,
        permanentState:profileData.permanentState,
        DateOfJoining:educationData.DateOfJoining,
       Experience:educationData.Experience,
       PreLeavedSchool:educationData.PreLeavedSchool,
    SSC:educationData.SSC,
    HSC:educationData.HSC,
    UG:educationData.UG,
    PG:educationData.PG,
    SchoolSSC:educationData.SchoolSSC,
    CollegeHSC:educationData.CollegeHSC,
    UniversityUG:educationData.UniversityUG,
    UniversityPG:educationData.UniversityPG,
    ScoreSSC:educationData.ScoreSSC,
    ScoreHSC:educationData.ScoreHSC,
    ScoreUG:educationData.ScoreUG,
    ScorePG:educationData.ScorePG,
    YearOfPassingSSC:educationData.YearOfPassingSSC,
    YearOfPassingHSC:educationData.YearOfPassingHSC,
    YearOfPassingUG:educationData.YearOfPassingUG,
    YearOfPassingPG:educationData.YearOfPassingPG,
    BankName:bankData.BankName,
    BankACNo:bankData.BankACNo,
    IFSCCode:bankData.IFSCCode,
    Branch:bankData.Branch,
    BankAdd:bankData.BankAdd,
    CIFNo:bankData.CIFNo,
    PFNo:bankData.PFNo,
    UANNo:bankData.UANNo,
    ESINo:bankData.ESINo,
    photo:fileImages.photo,
    aadhaar: fileImages.aadhaar,
    pan: fileImages.pan,
    resume: fileImages.resume,
    cv: fileImages.cv,
    UGcertificate: fileImages.UGcertificate,
    PGcertificate: fileImages.PGcertificate,
    addDocument:fileImages.addDocument
       }

  try{
  // now posting data to allEmployees List
  const allEmployeeDetailsResponse = await fetch("http://localhost:4000/allEmployeeDetailsArr", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(allDetails),
  }); 
  if (allEmployeeDetailsResponse.ok) {
    const allEmployeeData = await allEmployeeDetailsResponse.json();
    console.log('Successfully Added All Employees', allEmployeeData);
    alert('Data Saved Successfully');
    handleClose();
  } else {
    console.error('Failed to fetch all employee details');
  }}
    catch(error){console.error('Failed to post',error)}
  
  }
  // Function to handle tab click
  const handleTabClick = (index) => {
    setActiveIndex(index);
    setStep(index + 1);
  };

 /* // Function to close the modal
  const closeModal = () => {
    
      setShowModal(false);
    
  }*/
    
    // Function to handle moving to the previous step
    const handlePrevious = () => {
      setActiveIndex((prevIndex) => (prevIndex - 1) % tabs.length);
      if (step === 4) {
        handleClose();
        //closeModal();
      } else {
        setStep(step - 1);
      }
    };

    //Function to delete all file Images
    const handleDeleteFileImages = (e) => {
      e.stopPropagation();
      const confirmDelete = window.confirm('Are you sure you want to delete this item?');
      if (confirmDelete){
      setFileImages((prevFileImages) => {
        const updatedFileImages = {};
        Object.keys(prevFileImages).forEach(key => {
          updatedFileImages[key] = ''; // Set each key to an empty string
        });
        return updatedFileImages;
      });}
    };
    
    return (
      // <Modal handleClose={closeModal} isOpen={showModal}>
      <div className={" flex flex-col justify-center items-center shadow-containerShadow w-full h-full rounded-[20px] p-[34px] gap-[34px] bg-white max-md:max-w-full max-md:h-[600px]" }>
        <div className=" w-full flex flex-col gap-[18px] h-full">
        {/* Rendering pagination component */}
        <EmployeeListPagination
          setStep={setStep}
          step={step}
          activeIndex={activeIndex}
          handleTabClick={handleTabClick}
        />
        {/* Render the popup according to the step number */}
        {step === 1 && <EmployeeProfileDetailsPopup  profileData={profileData} setProfileData={setProfileData}/> }
        {step === 2 && <EducationDetailsPopup educationDataSaved={educationData} setEducationData={setEducationData}/>}
        {step === 3 && <BankDetailsPopupPage setBankData={setBankData} bankData={bankData}/>}
        {step === 4 && 
        <>
         <div className="flex gap-5 justify-between w-[100%] max-md:flex-wrap">
                  <div className="my-auto text-lg font-bold leading-5 text-black">
                  </div>
                  <div className="flex gap-4">
                    <div onClick={()=>exportToExcel()} className="flex justify-center items-center p-1 w-10 h-10 bg-white rounded-lg border border-solid border-stone-300 cursor-pointer">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b50d8c894c9877507fadd3e9b090e9deb1b6d12dcb3d62662b77c4268fa4daf?apiKey=8d87b58e79fa4e2d9738c0aa2c095387&"
                        className="aspect-[0.96] fill-neutral-500 w-[23px]"
                      />
                    </div>
                    <div onClick={handleDeleteFileImages} className="flex justify-center items-center px-1  w-10 h-10 bg-white rounded-2xl border border-solid border-stone-300 cursor-pointer">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5f66847653e76712da56d2bfde5da274b4507639bcf05e4eed81b7395b70442b?apiKey=8d87b58e79fa4e2d9738c0aa2c095387&"
                        className="w-6 aspect-square"
                      />
                    </div>
                  </div>
              </div>
        <EmployeeListDocuments fileImages={fileImages} uploadFileHandler={uploadFileHandler}/>
        </>}</div>
        {/* Render buttons based on the current step */}
        <span className={classes.parentbutton}>
          {step !== 1 && step !== 4 && (
            <button className={classes.previousbutton} onClick={handlePrevious}>
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

          {/* Render cancel button if it's the last step */}

          {step === 4 && (
            <button className={classes.previousbutton} onClick={handleClose}>
              <span
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "30px",
                }}
              >
                Cancel
              </span>
            </button>
          )}

          {/* Render next button if it's not the last step */}
          {step !== 4 && (
            <button className={classes.submitbutton} onClick={()=>handleNext(step)}>
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
          {/* Render save button if it's the last step */}
          {step === 4 && (
            <button className={classes.submitbutton} onClick={handleSave}>
              <span> Save</span>
            </button>
          )}
        </span>
      </div>
      // </Modal>
    );
  }
