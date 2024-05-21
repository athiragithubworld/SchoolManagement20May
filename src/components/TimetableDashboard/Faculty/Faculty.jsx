import  { useRef } from "react";
import classes from "../../../styles/Faculty.module.css";
import FacultyItem from "./FacultyItem";
import { useLocation } from "react-router-dom";
import profile1 from "../../../assets/images/profile1.png"

const facultyDetails = [
  {
    id: "1",
    name: "Sujitha",
    subject: "Maths",
    className: "maths", // Assuming you have a CSS class named "maths"
    image:profile1,
  },
  {
    id: "2",
    name: "Sujitha",
    subject: "Science",
    className: "science", // Assuming you have a CSS class named "science"
    image:profile1,
  },
  {
    id: "3",
    name: "Sujitha",
    subject: "Social",
    className: "social", // Assuming you have a CSS class named "social"
    image:profile1,
  },
  {
    id: "4",
    name: "Reshma Kumar",
    subject: "English",
    className: "english", // Assuming you have a CSS class named "english"
    image:profile1,
  },
  {
    id: "5",
    name: "Reshma Kumar",
    subject: "Hindi",
    className: "hindi", // Assuming you have a CSS class named "hindi"
    image:profile1,
  },
  {
    id: "6",
    name: "Krishna Priya",
    subject: "Hindi",
    className: "hindi", // Assuming you have a CSS class named "hindi"
    image:profile1,
  },

  {
    id: "7",
    name: "Krishna Priya",
    subject: "PT",
    className: "pt", // Assuming you have a CSS class named "hindi"
    image:profile1,
  },
];
  // console.log("object")

export default function Faculty() {
  const facultyDetailsRef = useRef([]);
  facultyDetailsRef.current = facultyDetails;

  const pathName = useLocation().pathname;

  return (
    <div
      className={classes.facultyContainer}
      style={{
        opacity: pathName === "/viewtimetable" ? 1 : 1,
        pointerEvents: pathName === "/viewtimetable" ? "none" : "auto",
      }}
    >
      <div className={classes.facultyheader}>Faculty</div>
      <div className={classes.facultyList}>
        {/* Render each faculty item with the FacultyItem component */}

        {facultyDetailsRef.current.map(
          ({ id, name, subject, className, image }) => (
            <FacultyItem
              key={id}
              id={id}
              name={name}
              subject={subject}
              className={className}
              image={image}
            />
          )
        )}
      </div>
    </div>
  );
}
