// Navbar design done by swati and css by haider
import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import { useState, useRef, useEffect, useContext } from "react";
import Calendar from "../../components/Navbar/Calendar";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import styles from "../../styles/Navbar.module.css";
import { useLocation, useNavigate, Link } from "react-router-dom";
// import SortIcon from "@mui/icons-material/Sort";
import help_icon from "../../assets/images/help_Icon.png";
import notification_icon from "../../assets/images/notification_Icon.png";
import navbar_pofile from "../../assets/images/navbar_profile.png";
import { MdOutlineSort } from "react-icons/md";
import AuthContext from "../../contextApi/auth-context";

const NavbarComponent = ({ toggleSidebar }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname; // Get the current path
  const authCntxt = useContext(AuthContext);
  const navigate = useNavigate();
  const navHeadings = {
    "/dashboard": "Dashboard",
    //Attendance
    "/studentAttendance": "Student Attendance", // Get the corresponding heading based on the path
    "/attendanceRegister": "Attendance Register",
    "/attendanceSummary": "Attendance Summary",
    //students

    //Payroll
    "/payroll": "List of Payroll",
    "/newBank": "Payroll Payments",
    "/payouts": "Payroll Payments",
    //Fee Management
    "/studentFeeList": "Student Fee",
    "/feeConfiguration": "Student Fee",
    "/student/studentList": "Student List",
    //Timetable
    "/viewtimetable": "Timetable",
    "/addtimetable": "Timetable",
    "/updatetimetable": "Timetable",
    //Admission
    "/admission": "Enrollment Info",
    //Class Management
    "/classmanagementdasboard": "Class Management",
    "/createClass": "Class Management",
    //HRMS
    "/employeeattendance": "Employee Attendance",
    "/employeeattendance/leavemanagement": "Leave Management",
    "/employeeList": "Employee List",
  };
  const currentHeading = navHeadings[currentPath];
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowProfileDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  //function to handle profile dropdown
  function toggleDropdown() {
    setShowProfileDropdown((prevState) => !prevState);
  }

  const logout = () => {
    console.log("logout");
  };

  const handleLogout = () => {
    authCntxt.logout();
    navigate("/login");
  };

  //CSS THROUGH TAILWIND WAS UPDATED BY HAIDER

  return (
    <div className="w-full flex h-[70px] items-center justify-between p-6 gap-2">
      {/* left part of navbar containing menu icon, logo of school and title of page */}
      <div className="flex w-fit h-[70px] gap-6 items-center justify-center">
        <div className="flex justify-center items-center w-fit">
          <div className="cursor-pointer" onClick={toggleSidebar}>
            <MdOutlineSort />
          </div>
        </div>

        <div className="w-[40px] h-[50px] flex justify-center items-center cursor-pointer">
          <Link to="/dashboard">
            <img
              className=""
              src="https://i.pinimg.com/736x/36/ff/21/36ff21ef5363c46b8fadf5785263278c.jpg"
              alt="god"
            />
          </Link>
        </div>

        <div className="w-fit h-[40px] flex justify-center items-center">
          <h1 className="lg:text-2xl text-lg font-bold">{currentHeading}</h1>
        </div>
      </div>

      {/* center part of navbar containing searchbar */}
      <div className=" lg:w-[305px] md:w-52 w-28 h-[35px] border-[1px] border-blue-300 rounded-lg flex items-center justify-between p-3">
        <input
          type="text"
          placeholder="Search in site"
          className={` w-[calc(100%-19px)] h-[22px] text-lg outline-none`}
        />
        <img
          src="data:image/png;base64,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"
          alt="search"
          className="w-[19px] h-[19px] cursor-pointer"
        />
      </div>

      {/* right part of navbar containing calendar icon, date, day, help, notification and profile image */}
      <div className="w-fit h-[70px] flex gap-4 justify-center items-center">
        <Calendar />

        <div className="w-[40px] h-[40px] flex justify-center items-center rounded-xl gap-4 border bg-gray-100 cursor-pointer">
          <img src={help_icon} className="w-[24px] h-[24px]" />
        </div>

        <div className="w-[40px] h-[40px] flex justify-center items-center rounded-xl border bg-gray-100 cursor-pointer">
          <img src={notification_icon} className="w-[24px] h-[24px]" />
        </div>

        <div className={styles.profile} onClick={toggleDropdown} ref={ref}>
          <img
            className="w-12 h-12 border bg-blue-100 rounded-full cursor-pointer"
            src={navbar_pofile}
            alt="profile"
          />
          {/* profile dropdown */}
          {showProfileDropdown && (
            <div className={`${styles.profiledropdown} bg-[#fff]`}>
              <ul>
                <li className=" hover:bg-[#009dfd] hover:text-white">
                  Profile
                </li>
                <li className=" hover:bg-[#009dfd] hover:text-white">
                  Settings
                </li>
                <li
                  className=" hover:bg-[#009dfd] hover:text-white"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleLogout();
                  }}
                >
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavbarComponent;
