// Created by swati , table implemented by Athira

import { useEffect, useState } from "react";
import Modal from "../../Modal/Modal";
// import styles from "../../../styles/StudentFeeTable.module.css";
import DeleteStudentFeeDetails from "../../Popup/StudentFeePopup/DeleteStudentFeeDetails";
import AddNewFeeDetails from "../../Popup/StudentFeePopup/AddNewFeeDetails";
import Notification from "../../../ui/Notification";

// Component for rendering the student fee table
const FeeConfigurationTable = ({
  studentFeeColumn,
  studentFeedetails,
  handleDeleteEachRowDetails,
  handleUpdateEachRowDetails,
}) => {
  // State variables for managing modal visibility and row details
  const [modalOpen, setModalOpen] = useState(false);
  const [rowId, setRowId] = useState(undefined);
  const [rowDetails, setRowDetails] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [alertKey, setAlertKey] = useState(0);
  const [getStatus, setGetStatus] = useState();
  const [message, setMessage] = useState("");

  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState("");
  const [sortedFeeConfiguration, setSortedFeeConfiguration] = useState([]);

  // Update sortedAttendanceRegDetails when attendanceRegdetails, sortBy, or sortOrder changes
  useEffect(() => {
    if (studentFeedetails.length === 0) {
      setSortedFeeConfiguration([]);
    } else {
      // Copy studentFeedetails to sort
      const sortedData = studentFeedetails.slice().sort((a, b) => {
        const aValue = a[sortBy];
        const bValue = b[sortBy];

        // Determine sorting order based on sortOrder
        if (sortOrder === "asc") {
          return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
        } else {
          // console.log("des");
          return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
        }
      });

      //  console.log("sortdata", sortedData);
      setSortedFeeConfiguration(sortedData);
    }
  }, [studentFeedetails, sortBy, sortOrder]);

  // Function to handle sorting when clicking on table headers
  const handleSort = (key) => {
    //  console.log("sortkey", key);
    //  console.log("order", sortOrder);
    if (sortBy === key) {
      //  setSortOrder(sortOrder === "asc" ? "asc" : "desc");
    } else {
      setSortBy(key);
      // setSortOrder("asc");
    }
  };

  // Function to open the modal and set row details
  const openModal = (data) => {
    setModalOpen(true);
    setRowId(data.id);
    const details = {
      id: data.id,
      className: data.className,
      section: data.section,
      admission: data.admission,
      tution: data.tution,
      books: data.books,
      uniform: data.uniform,
      transport: data.transport,
      total: data.total,
      admissionForm: data.admissionForm,
      tcfees: data.tcfees,
      annual: data.annual,
    };
    setRowDetails(details);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalOpen(false);
  };

  const handleDeleteEachFeeDetails = (rowId) => {
    handleDeleteEachRowDetails(rowId);
  };

  // Function to handle updating of each fee details row
  const updateEachFeeDetails = (updatedRowDetails, rowId) => {
    handleUpdateEachRowDetails(updatedRowDetails, rowId);
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
                    <tr className="w-full p-3 h-[60px] rounded-[14px] flex border-[1px] items-center justify-between bg-blue-100  shadow-md">
                      {studentFeeColumn.map(
                        ({ label, value, downicon, upicon }) => {
                          return (
                            <div
                              key={label}
                              className="flex w-40 justify-center items-center gap-[4px] cursor-pointer "
                            >
                              <th
                                className={` h-fit text-customtext font-[580] text-center`}
                                onClick={() => {
                                  setSortOrder(
                                    sortOrder === "asc" ? "desc" : "asc"
                                  );
                                  handleSort(value);
                                }}
                              >
                                {label}
                              </th>
                              <div>
                                <span
                                  className="cursor-pointer"
                                  onClick={() => {
                                    setSortOrder("asc");
                                    handleSort(value);
                                  }}
                                >
                                  {upicon}
                                </span>
                                <span
                                  className="cursor-pointer"
                                  onClick={() => {
                                    setSortOrder("desc");
                                    // setSortOrder(
                                    //   sortOrder === "asc" ||
                                    //     sortOrder === "" ||
                                    //     sortOrder === undefined
                                    //     ? "desc"
                                    //     : setSortedAttendanceRegDetails(
                                    //         attendanceRegdetails
                                    //       )
                                    // );
                                    handleSort(value);
                                  }}
                                >
                                  {downicon}
                                </span>
                              </div>
                            </div>
                            // <th
                            //   key={label}
                            //   className={`w-40 h-[19px] text-customtext font-bold text-center text-lg`}
                            // >
                            //   {label}
                            // </th>
                          );
                        }
                      )}
                    </tr>
                  </thead>

                  <tbody className="flex flex-col gap-[10px] w-full overflow-y-auto SCROLLBAR h-tbodyheight py-1 pr-2">
                    {/* Render table rows */}
                    {sortedFeeConfiguration.length !== 0 &&
                      Array.isArray(sortedFeeConfiguration) &&
                      sortedFeeConfiguration.map((data, index) => {
                        const total =
                          parseFloat(data.tution) +
                          parseFloat(data.books) +
                          parseFloat(data.uniform) +
                          parseFloat(data.transport) +
                          parseFloat(data.admission) +
                          parseFloat(data.tcfees) +
                          parseFloat(data.admissionForm);
                        return (
                          <tr
                            key={index}
                            className="w-full p-3 h-[52px] rounded-[14px] flex border-[1px] items-center justify-between shadow-md cursor-pointer"
                            onClick={() => openModal(data)}
                          >
                            <td className="w-40 text-customtext  text-center ">
                              {data.className} {data.section}
                            </td>
                            {/* <td className="w-40 h-fit text-customtext  text-center ">
                              {data.amount}
                            </td> */}
                            <td className="w-40 h-fit text-customtext  text-center ">
                              {data.tution}
                            </td>
                            <td className="w-40 h-fit text-customtext  text-center ">
                              {data.books}
                            </td>
                            <td className="w-40 h-fit text-customtext  text-center ">
                              {data.uniform}
                            </td>
                            <td className="w-40 h-fit text-customtext  text-center ">
                              {data.transport}
                            </td>
                            <td className="w-40 h-fit text-customtext  text-center ">
                              Rs.{total}
                            </td>
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

      {/* Render the modal for deleting student fee details */}
      <Modal handleClose={closeModal} isOpen={modalOpen}>
        <AddNewFeeDetails
          handleDeleteEachFeeDetails={handleDeleteEachFeeDetails}
          updateEachFeeDetails={updateEachFeeDetails}
          closeModal={closeModal}
          rowDetails={rowDetails}
          handleAlert={handleAlert}
        />
      </Modal>
      <Notification
        status={getStatus}
        message={message}
        showAlert={showAlert}
        setShowAlert={setShowAlert}
        alertKey={alertKey}
      />
    </>
  );
};

export default FeeConfigurationTable;
