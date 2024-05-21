// created by swathi
// functionality by sravanthi
import classes from "../../../styles/EnrollmentPopup.module.css"; // Importing CSS module for styling
import { useState } from "react";
import Modal from "../../Modal/Modal";
import { AiOutlineVerticalLeft, AiOutlineVerticalRight } from "react-icons/ai";
import CreateClassPagination from "../../../ui/CreateClassPagination";
import CreateClassPopup from "./CreateClassPopup";
import AddTeachers from "./AddTeachers";
import AddSubjectPopup from "./AddSubjectPopup";
import AddStudentPopup from "./AddStudentPopup";

const initialSubjects = [
  { name: "Mathematics" },
  { name: "Science" },
  { name: "Hindi" },
  { name: "Telugu" },
  { name: "English" },
  { name: "Social" },
  { name: "P.T" },
  { name: "Sanskrit" },
  { name: "Spanish" },
  { name: "French" },
  { name: "Music" },
];

export default function ContainerPopup({ handleClose }) {
  const [step, setStep] = useState(1);
  const [showModal, setShowModal] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [allSubjects, setAllSubjects] = useState(initialSubjects);
  const [selectedSubjects, setSelectedSubjects] = useState([]);

  const tabs = [
    { label: "Create Class" },
    { label: "Add Students" },
    { label: "Add Subject" },
    { label: "Select Teacher" },
  ];

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % tabs.length);
    setStep((prevIndex) => prevIndex + 1);
  };

  const handleTabClick = (index) => {
    console.log(index);
    setActiveIndex(index);
    setStep(index + 1);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handlePrevious = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1) % tabs.length);
    if (step === 4) {
      closeModal();
    } else {
      setStep(step - 1);
    }
  };

  return (
    <Modal handleClose={closeModal} isOpen={showModal}>
      <div className={classes.container}>
        <CreateClassPagination
          setStep={setStep}
          step={step}
          activeIndex={activeIndex}
          handleTabClick={handleTabClick}
        />
        {/* Render the popup according to the step number */}
        {step === 1 && <CreateClassPopup />}
        {step === 2 && <AddStudentPopup />}
        {step === 3 && (
          <AddSubjectPopup
            allSubjects={allSubjects}
            setAllSubjects={setAllSubjects}
            setSelectedSubjects={setSelectedSubjects}
          />
        )}
        {step === 4 && <AddTeachers allSubjects={selectedSubjects} />}

        <span className={classes.parentbutton}>
          {step !== 1 && step !== 4 && (
            <button className={classes.previousbutton} onClick={handlePrevious}>
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

          {step === 4 && (
            <button className={classes.previousbutton} onClick={closeModal}>
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

          {step !== 4 && (
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

          {step === 4 && (
            <button className={classes.submitbutton}>
              <span> Save</span>
            </button>
          )}
        </span>
      </div>
    </Modal>
  );
}
