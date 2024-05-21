import { useState, useEffect } from "react";
// import styles from "../../../styles/EnrollmentTable.module.css";
import Modal from "../../Modal/Modal";
// import EnrollDetailsPopup from "../../../components/Popup/EnrollementInfoPopup/EnrollDetailsPopup";
import EnrollStudentSteps from "../../Popup/EnrollementInfoPopup/EnrollStudentSteps";
import { useNavigate } from "react-router-dom";

const ExamListTable = ({
  examListColumn,
  examList,
  // setEnrollmentDetails,
  // handleEnrollRefetch,
}) => {
  const [isAddNew, setISAddNew] = useState(false);
  const [enrollSelectedStudentData, setEnrollSelectedStudentData] = useState(
    []
  );


  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState("");
  const [sortExamList, setSortedExamList] = useState([]);

  // Update sortedExamList when attendanceRegdetails, sortBy, or sortOrder changes
  useEffect(() => {
    if (examList.length === 0) {
      setSortedExamList([]);
    } else {
      // Copy examList to sort
      const sortedData = examList.slice().sort((a, b) => {
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
      setSortedExamList(sortedData);
    }
  }, [examList, sortBy, sortOrder]);

  // Function to handle sorting when clicking on table headers
  const handleSort = (key) => {
    
    if (sortBy === key) {
      //  setSortOrder(sortOrder === "asc" ? "asc" : "desc");
    } else {
      setSortBy(key);
      
    }
  };


  const closeModal = () => {
    setISAddNew(false);
  };

  // function openModalRowData(data) {
  //   console.log("Popup data", data);
  //   const enrollSudentRowData = examList.filter(
  //     (row) => row.enrollNumber === data.enrollNumber
  //   );
  //   setISAddNew(true);
  //   setEnrollSelectedStudentData(enrollSudentRowData);
  // }

  return (
    <>
      <div
        className={`p-3 shadow-containerShadow md:shadow-containerShadow w-full h-full rounded-[1.25rem] scrollbarnone`}
      >
        <div className="flex flex-col overflow-hidden">
          <div className="scrollbarnone overflow-x-auto sm:-mx-5 lg:-mx-7">
            <div className="inline-block min-w-full sm:px-5 lg:px-7">
              <div className="overflow-hidden">
                <table className="w-full flex flex-col gap-[10px]">
                  <thead className="pr-2">
                    <tr className="w-full p-3 h-[74px] rounded-[14px] flex border-[1px] items-center justify-between bg-blue-100  shadow-md cursor-pointer">
                      {examListColumn.map(
                        ({ label, value, downicon, upicon }) => {
                          return (
                            <div
                              key={label}
                              className="flex w-40 justify-center items-center gap-[4px] cursor-pointer "
                            >
                              <th
                                className={` h-fit text-customtext font-bold text-center`}
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

                                    handleSort(value);
                                  }}
                                >
                                  {downicon}
                                </span>
                              </div>
                            </div>
                            // <th
                            //   className={`w-40 h-fit text-customtext font-bold text-center`}
                            //   key={label}
                            // >
                            //   {label}
                            // </th>
                          );
                        }
                      )}
                    </tr>
                  </thead>

                  <tbody className="flex flex-col gap-[10px] w-full overflow-y-auto SCROLLBAR h-tbodyheight py-1 pr-2">
                    {sortExamList.length != 0 &&
                      Array.isArray(sortExamList) &&
                      sortExamList.map((data) => {
                        return (
                          <tr
                            className="w-full p-3 h-[52px] rounded-[14px] flex border-[1px] items-center justify-between shadow-md cursor-pointer"
                            key={data.examId}
                            // onClick={() => openModalRowData(data)}
                          >
                            <td className="w-40  h-fit text-customtxet lg:text-customtext text-center font-normal">
                              {/* {`${data.classes1,data.classes2,data.classes3}`} */}
                            </td>
                            <td className="w-40  h-fit text-customtxet lg:text-customtext text-center font-normal">
                              {data.firstName}
                            </td>
                            <td className="w-40  h-fit text-customtxet lg:text-customtext text-center font-normal">
                              {data.class}
                            </td>
                            <td className="w-40  h-fit text-customtxet lg:text-customtext text-center font-normal">
                              {data.fatherName}
                            </td>
                            <td className="w-40  h-fit text-customtxet lg:text-customtext text-center font-normal">
                              {data.fatherMobileNo}
                            </td>
                            <td className="w-40  h-fit text-customtxet lg:text-customtext text-center font-normal place-content-center flex">
                              <div
                                // style={{ ...getStatusColor(data.status) }}
                                className=" rounded-xl w-[90px] h-[30px] px-2 py-1 flex justify-center items-center"
                              >
                                {data.status}
                              </div>
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
      <Modal handleClose={closeModal} isOpen={isAddNew}>
        <EnrollStudentSteps
          // handleAddNew={handleAddNew}
          closeModal={closeModal}
          examList={examList}
          enrollSelectedStudentData={enrollSelectedStudentData}
          // setEnrollmentDetails={setEnrollmentDetails}
        />
      </Modal>
    </>
  );
};
export default ExamListTable;
