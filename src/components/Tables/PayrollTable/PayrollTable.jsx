
//THIS COMPONENT WAS CREATED BY HAIDER EXCEPT FOR THE FUNCTIONALITIES


import React, { useEffect, useRef, useState } from 'react';
import classes from '../../../styles/PayrollTable.module.css';
// import DeleteEachRow from"../../Popup/PayrollPopup/DeleteEachRow"
import Modal from "../../Modal/Modal"


//PROPS COMING FROM PAYROLLDASHBOARD PAGE
export default function PayrollTable({
  salaryColumn,
  facultySalarydetails,
  handleDeleteEachRowDetails,
  handleUpdateEachRowDetails,
}) {
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortedFacultySalaryDetails, setSortedFacultySalaryDetails] = useState([]);
  const [selectedFaculty, setSelectedFaculty] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [rowId, setRowId] = useState(undefined);
  const [rowDetails, setRowDetails] = useState({});
  const [selectedRow, setSelectedRow] = useState(null);
  // console.log("del data", facultySalarydetails);

  useEffect(() => {
    if (facultySalarydetails.length === 0) {
      setSortedFacultySalaryDetails([]);
    } else {
      setSortedFacultySalaryDetails(facultySalarydetails);
    }

    if (sortBy) {
      const sortedData = facultySalarydetails.slice().sort((a, b) => {
        const aValue = a[sortBy];
        const bValue = b[sortBy];

        if (sortOrder === "asc") {
          // console.log("x");
          return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
        } else {
          return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
          // console.log("y");
        }
      });
      // console.log("sorted", sortedData);
      setSortedFacultySalaryDetails(sortedData);
      // sortedFacultySalaryDetails.current.value=sortedData
      return () => {
        setSortedFacultySalaryDetails(facultySalarydetails);
      };
    }
  }, [sortBy, sortOrder, facultySalarydetails]);

  const handleSort = (key) => {
    // console.log("Sorting by:", key);
    if (sortBy === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(key);
      setSortOrder("asc");
    }
  };
  const handleRowDoubleClick = (faculty) => {
    setSelectedRow(faculty);
    setModalOpen(true);
  };
  // console.log("salarycol",salaryColumn)
  const handleRowClick = (faculty) => {
    setSelectedFaculty(faculty);
    // setIsPopupOpen(true);
    setModalOpen(true);
    setRowId(faculty.id);
    const details = {
      id:faculty.id,
      facultyName: faculty.facultyName,
      facultyId: faculty.facultyId,
      ifsc: faculty.ifsc,
      bankName: faculty.bankName,
      basic:faculty.amount,
      bankAc: faculty.bankAc,
     branch:faculty.branch,
    };
    setRowDetails(details);
  };
  // const handleClosePopup = () => {
  //   setIsPopupOpen(false);
  // };
  const closeModal = () => {
    setModalOpen(false);
  };
  const handleDeleteEachpayDetails = () => {
    if (selectedRow) {
      handleDeleteEachRowDetails(selectedRow.id,rowId);
      setModalOpen(false);
    }
  };
  const updateEachpayDetails = (updatedRowDetails) => {
    // handleUpdateEachRowDetails(updatedRowDetails, rowId);
    if (selectedRow) {
      handleUpdateEachRowDetails(updatedRowDetails, selectedRow.id,rowId);
      setModalOpen(false);
    }
  };
  // let downArrow = "\u2B18"; 
  // let upArrow = "\u2B19"; 
  return (
    <div
      className={`p-3 shadow-containerShadow md:shadow-containerShadow w-full h-full rounded-[1.25rem] scrollbarnone`}
    >
      <div className="flex flex-col overflow-hidden">
        <div className="overflow-x-auto scrollbarnone sm:-mx-5 lg:-mx-7">
          <div className="inline-block min-w-full  sm:px-5 lg:px-7">
            <div className="overflow-hidden">
              <table className="w-full flex flex-col gap-[10px]">
                <thead className="pr-2">
                  <tr className="w-full h-[74px] rounded-[14px] flex border-[1px] items-center justify-between bg-blue-100 p-3 shadow-md">
                    {salaryColumn.map(({ label, value }) => (
                      <th
                        key={value}
                        onClick={() => handleSort(value)}
                        className="w-32 h-fit text-lg text-center font-bold"
                      >
                        {label}

                        {/* <span className={classes.arrowLength}>
                                {Adjust the font size here}
                                { 
                                  {sortOrder === "asc" && sortBy === value
                                    ? upArrow
                                    : downArrow}
                                }
                              </span> */}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody className="flex flex-col gap-[10px] w-full overflow-y-auto SCROLLBAR h-tbodyheight py-1 pr-2">
                  {/* <div className={classes.scrolldata}> */}

                  {Array.isArray(sortedFacultySalaryDetails) &&
                    sortedFacultySalaryDetails.map((faculty, index) => (
                      <tr
                        className="w-full h-[52px] rounded-[14px] flex border-[1px] items-center justify-between p-3 shadow-md bg-white shrink-0"
                        key={faculty.id}
                        onClick={() => handleRowClick(faculty)}
                        onDoubleClick={() => handleRowDoubleClick(faculty)}
                      >
                        <td className="w-32 h-fit text-lg text-center font-normal">
                          {index + 1}
                        </td>
                        <td className="w-32 h-fit text-lg text-center font-normal">
                          {faculty.FacultyName}
                        </td>
                        <td className="w-32 h-fit text-lg text-center font-normal">
                          {faculty.FacultyId}
                        </td>
                        <td className="w-32 h-fit text-lg text-center font-normal">
                          {faculty.BankName}
                        </td>
                        <td className="w-32 h-fit text-lg text-center font-normal">
                          {faculty.Branch}
                        </td>
                        <td className="w-32 h-fit text-lg text-center font-normal">
                          {faculty.IFSCCode}
                        </td>
                        <td className="w-32 h-fit text-lg text-center font-normal">
                          {faculty.BankAcNo}
                        </td>
                        <td className="w-32 h-fit text-lg text-center font-normal">
                          ₹{parseFloat(faculty.Basic) + parseFloat(faculty.StatBonus)}
                        </td>
                      </tr>
                    ))}
                  {/* </div> */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

{/* <Modal handleClose={closeModal} isOpen={modalOpen}>
        <DeleteEachRow
          handleDeleteEachpayDetails={handleDeleteEachpayDetails}
          updateEachpayDetails={updateEachpayDetails}
          closeModal={closeModal}
          rowDetails={rowDetails}
          selectedRow={selectedRow}
        />
      </Modal> */}