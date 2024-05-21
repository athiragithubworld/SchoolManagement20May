import React, { useState, useRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AiTwotoneCalendar } from "react-icons/ai";
import styles from "../../styles/Navbar.module.css";

const Calendar = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const ref = useRef(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowCalendar(false); // Hide the calendar after selecting a date
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowCalendar(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  const formatDate = (date) => {
    // Format date as desired (e.g., "MM/DD/YYYY")
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return `${date.getDate()} ${months[date.getMonth()]}`;
  };

  const formatDay = (date) => {
    // Format day as desired (e.g., "Monday")
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[date.getDay()];
  };

  return (
    <div
      style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
      onClick={() => setShowCalendar(!showCalendar)}
      ref={ref}
    >
      <div style={{ position: "relative", display: "inline-block" }}>
        <AiTwotoneCalendar className={styles.calendericon} />
        {showCalendar && (
          <div
            style={{
              position: "absolute",
              top: "calc(100% + 5px)", //have to do styling here based on the actual code
              left: 0,
              zIndex: 100,
            }}
          >
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              inline // Show the calendar interface without input field
            />
          </div>
        )}
      </div>
      <div className={styles.dateday} style={{ marginLeft: "10px" }}>
        <p id="day" className={`${styles.day} text-xs  lg:text-lg`}>
          {formatDay(selectedDate)}
        </p>
        <p id="date" className={`${styles.day} text-xs  lg:text-lg`}>
          {formatDate(selectedDate)}
        </p>
      </div>
    </div>
  );
};

export default Calendar;
