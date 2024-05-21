import React, { useState } from "react";
import { TiTick } from "react-icons/ti";
import custom from "../../styles/Sidebar.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Sidebar = ({ isVisible }) => {
  // State to manage the open/close state of each accordion item
  const [accordionItems, setAccordionItems] = useState([
    {
      imageURL:
        "https://tse4.mm.bing.net/th?id=OIP.xLnoqc3enK8DORScF3G_LgHaHa&pid=Api&P=0&h=220",
      title: "Attendance",
      isOpen: false,
      options: [
        "Student Attendance",
        "Attendance register",
        "Attendance Summary",
      ],
    },
    {
      imageURL:
        "https://tse1.mm.bing.net/th?id=OIP.2JNpOJcnwaXp9cdmg9RbbAHaHa&pid=Api&P=0&h=220",
      title: "Admission Management",
      isOpen: false,
      options: ["Students List"],
    },
    {
      imageURL:
        "https://tse4.mm.bing.net/th?id=OIP.7iiu7rkKcxHxBdmmxc0NfQHaFj&pid=Api&P=0&h=220",
      title: "Payroll",
      isOpen: false,
      options: ["Payroll List", "New Bank Transfer", "Payouts"],
    },
    {
      imageURL:
        "https://tse2.mm.bing.net/th?id=OIP.WZFN-O_pxtprBzCNGTRZfgHaHa&pid=Api&P=0&h=220",
      title: "Fee Management",
      isOpen: false,
      options: ["Student List", "Fee Configuration", "Fee Collection"],
    },
    {
      imageURL:
        "https://tse3.mm.bing.net/th?id=OIP.xZetRk6FUlf0WmM-0m4xGwHaFE&pid=Api&P=0&h=220",
      title: "Class Management",
      isOpen: false,
      options: [
        "Dashboard",
        "Time Table",
        "Attendance Register",
        "Student  List",
        "Create Class",
      ],
    },
    {
      imageURL:
        "https://tse1.mm.bing.net/th?id=OIP.2JNpOJcnwaXp9cdmg9RbbAHaHa&pid=Api&P=0&h=220",
      title: "HRMS",
      isOpen: false,
      options: ["Employee List", "Leave Management", "Employee Attendance"],
    },

    {
      imageURL:
        "https://tse1.mm.bing.net/th?id=OIP._4ogFvvjUJLFqs_Dv9ADOwHaHZ&pid=Api&P=0&h=220",
      title: "Timetable",
      isOpen: false,
      options: ["Add TimeTable ", "View TimeTable", "Update TimeTable"],
    },
    {
      imageURL:
        "https://tse1.mm.bing.net/th?id=OIP._4ogFvvjUJLFqs_Dv9ADOwHaHZ&pid=Api&P=0&h=220",
      title: "Calendar",
      isOpen: false,
      options: ["Holidays Or Events"],
    },
    {
      imageURL:
        "https://tse2.mm.bing.net/th?id=OIP.JfS1NAK8xgOwxUpuGxDXUAHaHN&pid=Api&P=0&h=220",
      title: "Exam Management",
      isOpen: false,
      options: [
        "Exam List",
        "Exam Hall Allotment",
        "Exam Schedule",
        "Mark Register",
      ],
    },
  ]);

  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  // Function to handle click on accordion item
  const handleAccordionClick = (index) => {
    const updatedAccordionItems = accordionItems.map((item, i) => {
      if (i === index) {
        // Toggle the open/close state of the clicked accordion item
        return { ...item, isOpen: !item.isOpen };
      } else {
        // Close other accordion items when one is clicked
        return { ...item, isOpen: false };
      }
    });
    setAccordionItems(updatedAccordionItems);
  };

  // Function to handle option selection
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    // routes for different options
    const routes = {
      //Students
      "Students List": "/admission",
      //attendance
      "Attendance register": "/attendanceRegister",
      "Student Attendance": "/studentAttendance",
      "Attendance Summary": "/attendanceSummary",
      //Fee Management
      "Student List": "/studentFeeList",
      "Fee Configuration": "/feeConfiguration",
      "Fee Collection": "/feeCollection",
      //Class Management
      Dashboard: "/classmanagementdashboard",
      "Time Table": "/addtimetable",
      "Attendance Register": "/attendanceRegister",
      "Student  List": "/student/studentList",
      "Create Class": "/createClass",
      // HRMS
      "Employee List": "/employeeList",
      "Leave Management": "/employeeMainList",
      "Employee Attendance": "/employeeattendance",
      //payroll
      "Payroll List": "/payroll",
      "New Bank Transfer": "/newBank",
      Payouts: "/payouts",
      //TimeTable
      "Add TimeTable ": "/addtimetable",
      "View TimeTable": "/viewtimetable",
      "Update TimeTable": "/updatetimetable",
      //calender
      "Holidays Or Events": "/calender",
      // Exam Management
      "Exam List": "/examList",
    };
    if (routes.hasOwnProperty(option)) {
      navigate(routes[option]);
    }
  };

  const onMouseLeave = () => {
    if (!isVisible) {
      const updatedAccordionItems = accordionItems.map((item, i) => {
        return { ...item, isOpen: false };
      });
      setAccordionItems(updatedAccordionItems);
    }
  };

  useEffect(() => {
    if (!isVisible) {
      const updatedAccordionItems = accordionItems.map((item, i) => {
        return { ...item, isOpen: false };
      });
      setAccordionItems(updatedAccordionItems);
    }
  }, [isVisible]);

  return (
    <div
      className={`${custom.sidebar} ${
        !isVisible ? custom.sidebarWidth : ""
      } hover:!w-[19vw]`}
      onMouseLeave={onMouseLeave}
    >
      <div
        id="accordion-color"
        data-accordion="collapse"
        data-active-classes="bg-customblue text-white dark:text-white"
        className={custom.accodianContainer}
      >
        {accordionItems.map((item, index) => (
          <div
            key={index}
            className={`${custom.features} shadow-primary rounded-xl mb-2`}
          >
            <h2 id={`accordion-color-heading-${index + 1}`}>
              <button
                type="button"
                className={`sidebar-menu w-full flex items-center justify-between p-3 outline-none font-medium rtl:text-right text-gray-900 shadow-sm rounded-xl dark:border-gray-700 hover:bg-customblue  hover:text-white ${
                  item.isOpen ? "bg-customblue text-white p-2" : ""
                } gap-3`}
                // className="sidebar-menu w-full flex items-center justify-between p-3 outline-none font-medium rtl:text-right text-gray-900 shadow-sm rounded-xl dark:border-gray-700 hover:bg-customblue  hover:text-white  gap-3 "
                aria-expanded={item.isOpen ? "true" : "false"}
                onClick={() => handleAccordionClick(index)}
              >
                <div className="flex gap-4" style={{ minWidth: "1rem" }}>
                  <img
                    src={item.imageURL}
                    className={custom.featuresdivimg}
                    alt="logo"
                  />
                  <div
                    className={`${custom.custom} ${
                      isVisible ? "visible" : "hidden"
                    }`}
                  >
                    {item.title}
                  </div>
                </div>
                <div
                  className={`${custom.iconContainer} ${
                    isVisible ? "visible" : "hidden"
                  }`}
                >
                  <svg
                    data-accordion-icon
                    className={`w-4 h-4 ${
                      !item.isOpen ? "rotate-180" : ""
                    } shrink-0`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </div>
              </button>
            </h2>
            <div
              id={`accordion-color-body-${index + 1}`}
              className={`${item.isOpen ? "block" : "hidden"} ${
                custom.childAccoridan
              }`}
              aria-labelledby={`accordion-color-heading-${index + 1}`}
            >
              <div className="border-t border-gray-300 mt-2"></div>
              <div className="p-2">
                <div className={custom.dropdowncontent}>
                  {item.options.map((option, optionIndex) => (
                    <div
                      key={optionIndex}
                      className={`${custom.dropdownoption} ${
                        selectedOption === option ? custom.selected : ""
                      }`}
                      onClick={() => handleOptionSelect(option)}
                    >
                      {option} <TiTick className={custom.Icon} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
