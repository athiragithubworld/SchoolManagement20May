import  { useState } from "react"; // Importing necessary dependencies from React
import classes from "../../../styles/DeleteEachRow.module.css";
import { MdOutlineFileDownload } from "react-icons/md";
import { HiPencil } from "react-icons/hi";
import { RiDeleteBin5Line } from "react-icons/ri";

// Functional component TimeSettingModal
export default function DeleteEachRow({
  handleDeleteEachpayDetails,
  updateEachpayDetails,
  closeModal,
  rowDetails,
  selectedRowId,
}) {
  const [showModal, setShowModal] = useState(false);
  const [edit, setEdit] = useState(false);
  const [facultyName, setFacultyName] = useState(rowDetails.facultyName);
    const [bankName, setBankName] = useState(rowDetails.bankName);
    const [facultyId, setFacultyId] = useState(rowDetails.facultyId);
    const [bankAc, setBankAc] = useState(rowDetails.bankAc);
    const [esi, setEsi] = useState(rowDetails.esi);
    const[lop,setLop]=useState(rowDetails.lop);
    const [std, setStd] = useState(rowDetails.std);
    const [pf, setPf] = useState(rowDetails.pf);
    const[basic,setBasic]=useState(rowDetails.basic);
    const [stat,setStat]=useState(rowDetails.stat);
    const [provident,setProvident]=useState(rowDetails.provident);
    const [house,setHouse]=useState(rowDetails.house);
    const[special,setSpecial]=useState(rowDetails.special);
    const[professional,setProfessional]=useState(rowDetails.professional);
    const[income,setIncome]=useState(rowDetails.income);
    const[ifsc,setIfsc]=useState(rowDetails.ifsc);
    const[branch,setBranch]=useState(rowDetails.branch);
    const[amount,setAmount]=useState(rowDetails.amount);



  function handleDelete(event) {
    event.preventDefault();
    handleDeleteEachpayDetails();
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
      facultyId,facultyName,bankAc,bankName,basic,branch,stat,pf,professional,provident,special,house,esi,amount,ifsc,lop,std,income
    };
  updateEachpayDetails(selectedRowId, updatedRowDetails);
  closeModal(false);
}

  return (
    <div className={classes.new}>
      {!showModal && (
    <form className={classes.viewform}> 
      <div className={classes.admin}>
      <h4>{edit ? "Edit Payroll Details" : "Payroll Details"}</h4>
      <span className={classes.Button}>
              <button className={classes.salarydetails_rightbutton}>
                <MdOutlineFileDownload />
              </button>
              <button
                className={classes.salarydetails_rightbutton}
                onClick={clickEdit}
              >
                <HiPencil />
              </button>
              <button
                className={classes.salarydetails_rightbutton}
                onClick={clickDelete}
              >
                <RiDeleteBin5Line />
              </button>
            </span>
      </div>
      <div className={classes.main}>
        <span className={classes.top}>
          <span className={classes.head}>
            <span className={classes.left}>
              <label>Faculty Name</label>
              <input
                style={{ marginLeft: "10px" }}
                type="text"
                value={facultyName}
                readOnly={edit ? false : true}
                onChange={(e) => setFacultyName(e.target.value)}
                required
              />
            </span>
             <span className={classes.mid}>
              <label>Bank Name</label>
              <select className={classes.select}
              value={bankName}
              readOnly={edit ? false : true}
                onChange={(e) => setBankName(e.target.value)}
                required
              >
                <option value="" disabled selected>
                  Bank Name
                </option>
                <option  value="State Bank Of India">State Bank Of India</option>
                <option   value="ICICI">ICICI </option>
                <option   value="Union Bank Of India">Union Bank Of India</option>
              </select>
            </span> 
            
            <span className={classes.right}>
              <label>ESI No</label>
              <input
                style={{ marginLeft: "10px" }}
                type="number"
                value={esi}
                readOnly={edit ? false : true}
                onChange={(e) => setEsi(e.target.value)}
                required
              />
            </span>
          </span>
          <span className={classes.head}>
          <span className={classes.left}>
            <label>Faculty Id</label>
            <input
              style={{ marginLeft: "10px" }}
              type="number"
              value={facultyId}
              readOnly={edit ? false : true}
              onChange={(e) => setFacultyId(e.target.value)}
              required
            />
          </span>
          <span className={classes.mid}>
            <label>BankAC.NO</label>
            <input
              style={{ marginLeft: "10px" }}
              type="number"
              value={bankAc}
              readOnly={edit ? false : true}
              onChange={(e) => setBankAc(e.target.value)}
              required
            />
          </span>
          <span className={classes.right}>
            <label>LOP Days</label>
            <input
              style={{ marginLeft: "10px" }}
              type="number"
              value={lop}
              readOnly={edit ? false : true}
              onChange={(e) => setLop(e.target.value)}
              required
            />
          </span>
          </span>
          <span className={classes.head}>
          <span className={classes.left}>
            <label>Income Tax</label>
            <input
              style={{ marginLeft: "10px" }}
              type="number"
              value={income}
              readOnly={edit ? false : true}
              onChange={(e) => setIncome(e.target.value)}
              required
            />
          </span>
          <span className={classes.mid}>
            <label>STD Days</label>
            <input
              style={{ marginLeft: "10px" }}
              type="number"
              value={std}
              readOnly={edit ? false : true}
              onChange={(e) => setStd(e.target.value)}
              required
            />
          </span>
          <span className={classes.right}>
            <label>PF.NO</label>
            <input
              style={{ marginLeft: "10px" }}
              type="number"
              value={pf}
              readOnly={edit ? false : true}
              onChange={(e) => setPf(e.target.value)}
              required
            />
          </span>
          </span>
        </span>
        <span className={classes.down}>
          <span className={classes.head}>
            <span className={classes.left}>
              <label>Basic</label>
              <input
                style={{ marginLeft: "10px" }}
                type="number"
                value={basic}
                readOnly={edit ? false : true}
                onChange={(e) => setBasic(e.target.value)}
                required
              />
            </span>
            <span className={classes.mid}>
              <label>Stat Bonus</label>
              <input
                style={{ marginLeft: "10px" }}
                type="number"
                value={stat}
              readOnly={edit ? false : true}
                onChange={(e) => setStat(e.target.value)}
                required
              />
            </span>
            <span className={classes.right}>
              <label>Provident Fund</label>
              <input
                style={{ marginLeft: "10px" , width:"17vw" }}
                type="number"
                value={provident}
                readOnly={edit ? false : true}
                onChange={(e) => setProvident(e.target.value)}
                required
              />
            </span>
          </span>
          <span className={classes.head}>
            <span className={classes.left}>
              <label>House Rent Allowance</label>
              <input
                style={{ marginLeft: "10px" }}
                type="number"
                value={house}
              readOnly={edit ? false : true}
                onChange={(e) => setHouse(e.target.value)}
                required
              />
            </span>
            <span className={classes.mid}>
              <label>Special Allowance</label>
              <input
                style={{ marginLeft: "10px" }}
                type="number"
                value={special}
              readOnly={edit ? false : true}
                onChange={(e) => setSpecial(e.target.value)}
                required
              />
            </span>
            <span className={classes.right}>
              <label>Professional Tax</label>
              <input
                style={{ marginLeft: "10px", width:"17vw" }}
                type="number"
                value={professional}
              readOnly={edit ? false : true}
                onChange={(e) => setProfessional(e.target.value)}
                required
              />
            </span>
          </span>
        </span> 
      </div> 
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