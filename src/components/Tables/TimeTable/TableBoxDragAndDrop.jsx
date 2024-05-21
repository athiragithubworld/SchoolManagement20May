import { useState, useEffect } from "react"; // Importing useState hook from React
import classes from "../../../styles/TimeTableGrid.module.css"; // Importing CSS module for styling
import { useDrop, useDrag } from "react-dnd"; // Importing useDrop and useDrag hooks from react-dnd library

// Functional component TableBoxDragAndDrop
export default function TableBoxDragAndDrop({
  day,
  timing,
  handleTimeTableDetails,
  filteredData,
}) {
  const [faculty, setFaculty] = useState({}); // State to hold the faculty details

  // useDrop hook to handle dropping of faculty details onto this box
  const [{ isOver }, drop] = useDrop({
    accept: "FACULTY_ITEM", // Specifying the accepted type of draggable item
    drop: (item) => {
      // Function called when item is dropped
      // setFaculty(item); // Setting the dropped faculty details

      // Add day and time properties to the item object
      const updatedItem = {
        ...item,
        day: day,
        timing: timing,
      };
      setFaculty(updatedItem);
      handleTimeTableDetails(updatedItem); // Callback function to update parent
    },
  });

  // useDrag hook to make this box draggable
  const [{ isDragging }, drag] = useDrag({
    type: "FACULTY_ITEM", // Declaring the type of draggable item
    item: { ...faculty }, // Data associated with the draggable item
    end: (item) => {
      // Function called when dragging ends
      setFaculty({}); // Resetting the faculty details after dragging end

      handleTimeTableDetails({ ...item }, "del"); // Callback function to update parent
    },
    collect: (monitor) => ({
      // Collecting state whether item is being dragged or not
      isDragging: !!monitor.isDragging(),
    }),
  });

  // Extracting subject from faculty details and converting to lowercase
  const subject = faculty?.subject?.toLowerCase();

  useEffect(() => {
    // Filter the data based on day and time

    const filterData = filteredData
      .map((obj) =>
        Object.values(obj).filter(
          (val) =>
            val &&
            typeof val === "object" &&
            val.day == day &&
            val.timing == timing
        )
      )
      .flat()[0];
    if (filterData) {
      setFaculty(filterData);
    } else {
      setFaculty([]);
    }
  }, [filteredData, day, timing]);
  // console.log("object")

  return (
    <td ref={drag}>
      {" "}
      {/* Attaching drag handler to this table cell */}
      <div ref={drop} className={`${classes.facultytime} ${classes[subject]}`}>
        {/* Attaching drop handler to this div */}
        <div className={classes.profileDetails}>
          <div>
            {faculty?.image && ( // Displaying faculty image if available
              <img
                className={classes.facultyphoto}
                src={faculty.image}
                alt="profile"
              />
            )}
          </div>
          <div className={classes.facultyname}>{faculty?.name}</div>
        </div>
        {/* Displaying faculty name */}
        <div className={classes.facultysubject}>{faculty?.subject}</div>{" "}
        {/* Displaying faculty subject */}
      </div>
    </td>
  );
}
