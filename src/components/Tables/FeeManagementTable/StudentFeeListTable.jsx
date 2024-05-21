//table layout by athira, filters added by swati, name and pnr popup added by gunjan
//funtionality of adding,updating done by Abhishek
import { AiOutlinePrinter } from "react-icons/ai";
import { useEffect, useState } from "react";
import Modal from "../../Modal/Modal";
import RequestFeePopup from "../../Popup/StudentFeePopup/RequestFeePopup";
import FeeCollectionPopup from "../../Popup/StudentFeePopup/FeeCollectionPopup";
import FeesRecieptPopup from "../../Popup/StudentFeePopup/FeesRecieptPopup";
import NameAndPNRPopup from "../../Popup/StudentFeePopup/NameAndPNRPopup";
import profile from "../../../assets/images/table-profile.webp";
import Notification from "../../../ui/Notification";
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";

const StudentListTable = ({
  tableData,
  filterOption,
  handleUpdateEachRowDetails,
  handleRefetch,
}) => {
  const [showRequestFeePopup, setShowRequestFeePopup] = useState(false);
  const [showFeeCollectionPopup, setShowFeeCollectionPopup] = useState(false);
  const [showFeeRecieptPopup, setShowFeeRecieptPopup] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState({});
  //name and PR popup added
  const [showNameAndPNRPopup, setShowNameAndPNRPopup] = useState(false);
  const [tableRowData, setTableRowData] = useState([]);
  const [requestId, setRequestId] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertkey, setAlertKey] = useState(0);
  const [getStatus, setGetStatus] = useState();
  const [message, setMessage] = useState("");

  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState("");
  const [sortedStudentFeeList, setSortedStudentFeeList] = useState([]);

  // Update sortedAttendanceRegDetails when attendanceRegdetails, sortBy, or sortOrder changes
  useEffect(() => {
    if (tableData.length === 0) {
      setSortedStudentFeeList([]);
    } else {
      // Copy StudentFeeList to sort
      const sortedData = tableData.slice().sort((a, b) => {
        const aValue = a[sortBy];
        const bValue = b[sortBy];

        // Determine sorting order based on sortOrder
        if (sortOrder === "asc") {
          return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
        } else {
          return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
        }
      });

      setSortedStudentFeeList(sortedData);
    }
  }, [tableData, sortBy, sortOrder]);

  // Function to handle sorting when clicking on table headers
  const handleSort = (key) => {
    if (sortBy === key) {
      //  setSortOrder(sortOrder === "asc" ? "asc" : "desc");
    } else {
      setSortBy(key);
      // setSortOrder("asc");
    }
  };

  // useEffect(()=>{
  //   fetchData();
  // },[handleUpdateEachRowDetails])

  // function to get color based on filters
  function getColor(status) {
    switch (status) {
      case "Paid":
        return "bg-[#edffdd] rounded-xl border-[#0a8100] text-[#0a8100]";
      case "Unpaid":
        return "bg-[#ffdbd9] rounded-xl border-[#bf0000] text-[#bf0000]";
      default:
        return {};
    }
  }

  // function to close all modals
  const closeModal = () => {
    setShowRequestFeePopup(false);
    setShowFeeCollectionPopup(false);
    setShowFeeRecieptPopup(false);
    setShowNameAndPNRPopup(false);
  };

  //function to show fee reciept and set its data
  const handleFeeReciept = (studentDetails) => {
    setSelectedStudent(studentDetails);
    setShowFeeRecieptPopup(true);
  };

  const handleRowData = (student) => {
    //function for sending data to popup
    const pendingFee =
      student.pendingFee === 0
        ? student.pendingFee
        : parseFloat(student.totalFees) - parseFloat(student.totalPaid);
    // console.log(pendingFee);
    const details = {
      id: student.id,
      name: student.name,
      section: student.section,
      date: student.date,
      className: student.className,
      concession: student.concession,
      // pendingFee: parseFloat(student.totalFees) - parseFloat(student.totalPaid),
      pendingFee: pendingFee,
      totalPaid: parseFloat(student.totalPaid),
      totalFees: parseFloat(student.totalFees),
      status: student.status,
      amount: parseFloat(student.amount),
      idNo: student.idNo,
      tutionFee: student.tutionFee,
      uniformFee: student.uniformFee,
      booksFee: student.booksFee,
      transportFee: student.transportFee,
      hostelFee: student.hostelFee,
      busFee: student.busFee,
    };
    setTableRowData(details);
    console.log(details.pendingFee);
    // console.log("inside fee list table")
  };

  const updateEachFeeDetails = (updatedRowDetails, id) => {
    handleUpdateEachRowDetails(updatedRowDetails, id);
  };

  const handleDataRefetch = () => {
    handleRefetch();
  };

  const handleAlert = (status, mess) => {
    //for showing notification success or failure
    setShowAlert(true);
    setGetStatus(status);
    setAlertKey((prev) => prev + 1);
    setMessage(mess);
  };

  return (
    <>
      <div
        className={`p-3 shadow-containerShadow md:shadow-containerShadow w-full h-full rounded-[1.25rem] scrollbarnone`}
      >
        <div className="flex flex-col overflow-hidden">
          <div className="overflow-x-auto scrollbarnone sm:-mx-5 lg:-mx-7">
            <div className="inline-block min-w-full  sm:px-5 lg:px-7">
              <div className="overflow-hidden">
                <table className="w-full flex flex-col gap-[10px]">
                  <thead className="pr-2">
                    <tr className="w-full p-3 h-[60px] rounded-[14px] flex border-[1px] items-center justify-between bg-blue-100  shadow-md ">
                      <div className="flex w-32 justify-center items-center gap-[4px] cursor-pointer ">
                        <th
                          className={` h-fit text-customtext font-[580] text-center`}
                          onClick={() => {
                            setSortOrder(sortOrder === "asc" ? "desc" : "asc");
                            handleSort("name");
                          }}
                        >
                          Name
                        </th>
                        <div>
                          <span
                            className="cursor-pointer"
                            onClick={() => {
                              setSortOrder("asc");
                              handleSort("name");
                            }}
                          >
                            <MdOutlineKeyboardArrowUp />
                          </span>
                          <span
                            className="cursor-pointer"
                            onClick={() => {
                              setSortOrder("desc");

                              handleSort("name");
                            }}
                          >
                            <MdOutlineKeyboardArrowDown />
                          </span>
                        </div>
                      </div>

                      {/* <th
                        className={`w-32 h-fit text-custom text-center font-[580]`}
                      >
                        Name
                      </th> */}

                      <div className="flex w-32 justify-center items-center gap-[4px] cursor-pointer ">
                        <th
                          className={` h-fit text-customtext font-[580] text-center`}
                          onClick={() => {
                            setSortOrder(sortOrder === "asc" ? "desc" : "asc");
                            handleSort("idNo");
                          }}
                        >
                          ID No
                        </th>
                        <div>
                          <span
                            className="cursor-pointer"
                            onClick={() => {
                              setSortOrder("asc");
                              handleSort("idNo");
                            }}
                          >
                            <MdOutlineKeyboardArrowUp />
                          </span>
                          <span
                            className="cursor-pointer"
                            onClick={() => {
                              setSortOrder("desc");

                              handleSort("idNo");
                            }}
                          >
                            <MdOutlineKeyboardArrowDown />
                          </span>
                        </div>
                      </div>
                      {/* <th
                        className={`w-32 h-fit text-custom text-center font-[580]`}
                      >
                        ID No
                      </th> */}

                      <div className="flex w-32 justify-center items-center gap-[4px] cursor-pointer ">
                        <th
                          className={` h-fit text-customtext font-[580] text-center`}
                          onClick={() => {
                            setSortOrder(sortOrder === "asc" ? "desc" : "asc");
                            handleSort("date");
                          }}
                        >
                          Date
                        </th>
                        <div>
                          <span
                            className="cursor-pointer"
                            onClick={() => {
                              setSortOrder("asc");
                              handleSort("date");
                            }}
                          >
                            <MdOutlineKeyboardArrowUp />
                          </span>
                          <span
                            className="cursor-pointer"
                            onClick={() => {
                              setSortOrder("desc");

                              handleSort("date");
                            }}
                          >
                            <MdOutlineKeyboardArrowDown />
                          </span>
                        </div>
                      </div>
                      <div className="flex w-32 justify-center items-center gap-[4px] cursor-pointer ">
                        <th
                          className={` h-fit text-customtext font-[580] text-center`}
                          onClick={() => {
                            setSortOrder(sortOrder === "asc" ? "desc" : "asc");
                            handleSort("totalPaid");
                          }}
                        >
                          Total Paid
                        </th>
                        <div>
                          <span
                            className="cursor-pointer"
                            onClick={() => {
                              setSortOrder("asc");
                              handleSort("totalPaid");
                            }}
                          >
                            <MdOutlineKeyboardArrowUp />
                          </span>
                          <span
                            className="cursor-pointer"
                            onClick={() => {
                              setSortOrder("desc");

                              handleSort("totalPaid");
                            }}
                          >
                            <MdOutlineKeyboardArrowDown />
                          </span>
                        </div>
                      </div>
                      <div className="flex w-32 justify-center items-center gap-[4px] cursor-pointer ">
                        <th
                          className={` h-fit text-customtext font-[580] text-center`}
                          onClick={() => {
                            setSortOrder(sortOrder === "asc" ? "desc" : "asc");
                            handleSort("totalDues");
                          }}
                        >
                          Total Dues
                        </th>
                        <div>
                          <span
                            className="cursor-pointer"
                            onClick={() => {
                              setSortOrder("asc");
                              handleSort("totalDues");
                            }}
                          >
                            <MdOutlineKeyboardArrowUp />
                          </span>
                          <span
                            className="cursor-pointer"
                            onClick={() => {
                              setSortOrder("desc");

                              handleSort("totalDues");
                            }}
                          >
                            <MdOutlineKeyboardArrowDown />
                          </span>
                        </div>
                      </div>
                      {/* <th
                        className={`w-32 h-fit text-custom text-center font-[580]`}
                      >
                        Total Dues
                      </th> */}
                      <div className="flex w-32 justify-center items-center gap-[4px] cursor-pointer ">
                        <th
                          className={` h-fit text-customtext font-[580] text-center`}
                          onClick={() => {
                            setSortOrder(sortOrder === "asc" ? "desc" : "asc");
                            handleSort("totalFees");
                          }}
                        >
                          Total Fees
                        </th>
                        <div>
                          <span
                            className="cursor-pointer"
                            onClick={() => {
                              setSortOrder("asc");
                              handleSort("totalFees");
                            }}
                          >
                            <MdOutlineKeyboardArrowUp />
                          </span>
                          <span
                            className="cursor-pointer"
                            onClick={() => {
                              setSortOrder("desc");

                              handleSort("totalFees");
                            }}
                          >
                            <MdOutlineKeyboardArrowDown />
                          </span>
                        </div>
                      </div>
                      {/* <th
                        className={`w-32 h-fit text-custom text-center font-[580]`}
                      >
                        Total Fees
                      </th> */}
                      {filterOption === "All Students" && ( //filterOption is props from pages/studentlist
                        <th
                          className={`w-32 h-fit text-custom text-center font-[580]`}
                        >
                          Status
                        </th>
                      )}
                      {filterOption !== "All Students" && (
                        <th
                          className={`w-32 h-fit text-custom text-center font-[580]`}
                        >
                          Request
                        </th>
                      )}
                      {filterOption === "Unpaid" && (
                        <>
                          <th
                            className={`w-32 h-fit text-custom text-center font-[580]`}
                          >
                            Collect
                          </th>
                        </>
                      )}
                    </tr>
                  </thead>

                  <tbody className="flex flex-col gap-[10px] w-full overflow-y-auto SCROLLBAR h-tbodyheight py-1 pr-2">
                    {sortedStudentFeeList.length !== 0 &&
                      Array.isArray(sortedStudentFeeList) &&
                      sortedStudentFeeList.map((student) => {
                        //tableData is props from pages/studentlist
                        return (
                          <tr
                            className="w-full p-3 h-[52px] rounded-[14px] flex border-[1px] items-center justify-between shadow-md cursor-pointer"
                            key={student.id}
                            onClick={() => {
                              setShowNameAndPNRPopup(true);
                              setSelectedStudent(student);
                            }}
                          >
                            <td className="w-32 h-fit text-customtext text-center ">
                              <div className="flex gap-2 self-stretch  leading-5 text-center text-customblack">
                                <img
                                  loading="lazy"
                                  src={profile}
                                  alt={`Avatar of student`}
                                  className="shrink-0 rounded-full aspect-square w-[40px] h-[40px]"
                                />{" "}
                                <div className="my-auto">{student.name}</div>{" "}
                              </div>{" "}
                            </td>
                            <td className="w-32 h-fit text-customtext text-center ">
                              {student.idNo}
                            </td>
                            <td className="w-32 h-fit text-customtext text-center ">
                              {student.date}
                            </td>
                            <td className="w-32 h-fit text-customtext text-center  text-green-700">
                              &#8377; {student.totalPaid}
                            </td>
                            <td className="w-32 h-fit text-customtext text-center  text-red-800">
                              &#8377;{" "}
                              {student.pendingFee === 0
                                ? student.pendingFee
                                : student.totalFees - student.totalPaid}
                            </td>
                            <td className="w-32 h-fit text-customtext text-center ">
                              &#8377; {student.totalFees}
                            </td>
                            {filterOption === "All Students" && (
                              <td className="w-32 h-fit text-customtext text-center font-normal flex justify-center">
                                <button
                                  className={`w-20 px-2 py-1 ml-3 border-[1px] ${getColor(
                                    student.status
                                  )}`}
                                >
                                  {student.status}
                                </button>
                              </td>
                            )}
                            {filterOption === "Unpaid" && (
                              <>
                                <td className="w-32 h-fit text-customtext text-center font-normal flex justify-center">
                                  <button
                                    className={`w-[90px] px-2 py-1 border-2 rounded-xl  bg-blue-200 border-blue-500 text-blue-500 flex justify-center items-center ml-3`}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setShowRequestFeePopup(true);
                                      setRequestId(student.idNo);
                                    }}
                                  >
                                    Request
                                  </button>
                                </td>
                                <td className="w-32 h-fit text-customtext text-center font-normal flex justify-center">
                                  <button
                                    className={`w-[90px] px-2 py-1 border-2 rounded-xl  bg-blue-200 border-blue-500 text-blue-500 flex justify-center items-center ml-4`}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setShowFeeCollectionPopup(true);
                                      handleRowData(student);
                                    }}
                                  >
                                    Collect
                                  </button>
                                </td>
                              </>
                            )}
                            {filterOption === "Paid" && (
                              <td className="w-32 h-fit text-customtext text-center font-normal flex justify-center gap-2">
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleFeeReciept(student);
                                  }}
                                  className={`w-[90px] px-2 py-1 rounded-xl  bg-[#eeeeee] flex justify-center items-center ml-4 gap-2 border border-[#c4c4c4]
                              `}
                                >
                                  <AiOutlinePrinter className="text-gray-400 text-lg border" />
                                  <span>Print</span>
                                </button>
                              </td>
                            )}
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Popups will open based on buttons clicked */}
      <Modal handleClose={closeModal} isOpen={showRequestFeePopup}>
        <RequestFeePopup
          requestId={requestId}
          handleClose={closeModal}
          handleAlert={handleAlert}
        />
      </Modal>
      <Modal handleClose={closeModal} isOpen={showFeeCollectionPopup}>
        <FeeCollectionPopup
          handleDataRefetch={handleDataRefetch}
          feeRowData={tableRowData}
          updateEachFeeDetails={updateEachFeeDetails}
          handleAlert={handleAlert}
          handleClose={closeModal}
        />
      </Modal>
      <Modal handleClose={closeModal} isOpen={showFeeRecieptPopup}>
        <FeesRecieptPopup paidStudentData={selectedStudent} />
      </Modal>
      <Modal handleClose={closeModal} isOpen={showNameAndPNRPopup}>
        <NameAndPNRPopup paidStudentData={selectedStudent} />
      </Modal>
      <Notification
        status={getStatus}
        message={message}
        showAlert={showAlert}
        setShowAlert={setShowAlert}
        alertkey={alertkey}
      />
    </>
  );
};

export default StudentListTable;
