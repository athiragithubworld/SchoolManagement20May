import React from "react";
import { useDrag } from "react-dnd"; // Importing useDrag hook from react-dnd library
import classes from "../../../styles/Faculty.module.css"; // Importing CSS module for styling

// Functional component FacultyItem with props { id, name, subject, className, image }
export default function FacultyItem({ id, name, subject, className, image }) {
  // Destructuring properties from useDrag hook
  const [{ isDragging }, drag] = useDrag({
    type: "FACULTY_ITEM", // Declaring the type of draggable item
    item: { id, name, subject, className, image }, // Data associated with the draggable item
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(), // Collecting state whether item is being dragged or not
    }),
  });

  return (
    <div
      ref={drag} // Attaching drag handler to this div
      className={`${classes.facultydetails} ${classes[className]}`} // Setting class names for styling
      style={{ opacity: isDragging ? "1" : "1"  }}
    >
      <div>
        <img className={classes.facultyphoto} src={image} alt={name} />{" "}
        {/* Displaying faculty photo */}
      </div>
      <div>
        <div className={classes.facultysubject}>{subject}</div>{" "}
        {/* Displaying faculty subject */}
        <div className={classes.facultyname}>{name}</div>{" "}
        {/* Displaying faculty name */}
      </div>
    </div>
  );
}
