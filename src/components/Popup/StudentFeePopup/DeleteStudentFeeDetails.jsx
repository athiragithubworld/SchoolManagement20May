import React, { useState } from "react"; // Importing necessary dependencies from React
import classes from "../../../styles/ViewTableRowDetails.module.css"; // Importing CSS module for styling
import { MdOutlineFileDownload } from "react-icons/md";
import { HiPencil } from "react-icons/hi";
import { RiDeleteBin5Line } from "react-icons/ri";

// Functional component TimeSettingModal
export default function DeleteStudentFeeDetails({
  handleDeleteEachFeeDetails,
  updateEachFeeDetails,
  closeModal,
  rowDetails,
  selectedRowId,
}) {
  const url = "http://localhost:4000/StudentFeeDetails";
  const [showModal, setShowModal] = useState(false);
  const [edit, setEdit] = useState(false);
  const [className, setClassName] = useState(rowDetails.className);
  const [amount, setAmount] = useState(rowDetails.amount);
  const [tution, setTution] = useState(rowDetails.tution);
  const [books, setBooks] = useState(rowDetails.books);
  const [uniform, setUniform] = useState(rowDetails.uniform);
  const [transport, setTransport] = useState(rowDetails.transport);
  const [total, setTotal] = useState(rowDetails.total);
  // function handleDeleteFacultySalaryDetails(e) {
  //   e.preventDefault();
  //   if (newColumn.length === 0) {
  //     alert("Please enter a valid column name!");
  //     return;
  //   }
  //   handleDeleteFacultySalaryDetails(newColumn);
  //   setNewColumn("");
  // }

  function handleDelete(event) {
    event.preventDefault();
    handleDeleteEachFeeDetails();
    closeModal(false);
  }

  function handleCloseModal(event) {
    event.preventDefault();
    closeModal(false);
  }

  function clickDelete(event) {
    event.preventDefault();
    setShowModal(true);
  }

  function clickEdit(event) {
    event.preventDefault();
    setEdit(true);
  }

  async function submitHandler(event) {
    event.preventDefault();
    const updatedRowDetails = {
      className,
      amount,
      tution,
      books,
      uniform,
      transport,
      total,
    };
    // const total = parseFloat(data.tution) + parseFloat(data.books) + parseFloat(data.uniform) + parseFloat(data.transport)+parseFloat(data.amount);
    const response = await fetch("http://localhost:4000/StudentFeeDetails");
    const data = await response.json();
    const index = data.findIndex((data) => data.id === selectedRowId);
    const updatedData = [...data];
    updatedData[index] = {
      id: data[index].id,
      ...updatedRowDetails,
    };
    await fetch("http://localhost:4000/StudentFeeDetails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });
    closeModal(false);
  }

  return (
    <div className={classes.new}>
      {/* <h4>Fees Details</h4> */}
      {!showModal && (
        <form className={classes.viewForm}>
          <div className={classes.admin}>
            <h4>{edit ? "Edit Fee Details" : "Fee Details"}</h4>
            <span className={classes.Button}>
              <button className={classes.salarydetails_rightbutton}>
                <MdOutlineFileDownload />
              </button>
              <button
                className={classes.salarydetails_rightbutton}
                // onClick={() => setIsOpenAddColumn(true)}
                onClick={clickEdit}
              >
                <HiPencil />
              </button>
              <button
                className={classes.salarydetails_rightbutton}
                onClick={clickDelete}
                // onClick={() => setIsOpenDeleteFaculty(true)}
              >
                <RiDeleteBin5Line />
              </button>
            </span>
          </div>
          <span className={classes.main}>
            <span className={classes.left}>
              <span>
                <label>Class Name</label>
                <input
                  type="text"
                  id="class"
                  value={className}
                  disabled={edit ? false : true}
                  onChange={(event) => setClassName(event.target.value)}
                />
              </span>
              <span>
                <label>Amount Fee</label>
                <input
                  type="number"
                  id="amount"
                  value={amount}
                  disabled={edit ? false : true}
                  onChange={(event) => setAmount(event.target.value)}
                />
              </span>
              <span>
                <label>Tution Fee</label>
                <input
                  type="number"
                  id="tution"
                  value={tution}
                  disabled={edit ? false : true}
                  onChange={(event) => setTution(event.target.value)}
                />
              </span>
            </span>
            <span className={classes.right}>
              <span>
                <label>Books Fee</label>
                <input
                  type="number"
                  id="books"
                  value={books}
                  disabled={edit ? false : true}
                  onChange={(event) => setBooks(event.target.value)}
                />
              </span>

              <span>
                <label>Uniform Fee</label>
                <input
                  type="number"
                  id="uniform"
                  value={uniform}
                  disabled={edit ? false : true}
                  onChange={(event) => setUniform(event.target.value)}
                />
              </span>
              <span>
                <label>Transport Fee</label>
                <input
                  type="number"
                  id="transport"
                  value={transport}
                  disabled={edit ? false : true}
                  onChange={(event) => setTransport(event.target.value)}
                />
              </span>
            </span>
          </span>
          <span className={classes.mainTotal}>
            <label>Total</label>
            <input
              type="number"
              id="total"
              value={total}
              disabled={edit ? false : true}
              onChange={(event) => setTotal(event.target.value)}
            />
          </span>
          <span className={classes.parentbutton}>
            <button className={classes.button} onClick={handleCloseModal}>
              Cancel
            </button>
            {edit && (
              <button className={classes.submitbutton} onClick={submitHandler}>
                Submit
              </button>
            )}
          </span>
        </form>
      )}

      {showModal && (
        <form className={classes.deleteForm}>
          <div className={classes.deleteHeader}>
            <label>Do you want to delete this row ?</label>
          </div>
          <span className={classes.parentbutton}>
            <button className={classes.deletebutton} onClick={handleDelete}>
              Delete
            </button>
            <button className={classes.submitbutton} onClick={handleCloseModal}>
              Close
            </button>
          </span>
        </form>
      )}
    </div>
  );
}