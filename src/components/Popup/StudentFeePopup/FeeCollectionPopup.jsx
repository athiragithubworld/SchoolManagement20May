import React, { useEffect, useRef } from "react";    ///made by Abhishek
import { useState } from "react";
import classes from "../../../styles/FeeCollectionPopup.module.css";
import { AiOutlinePrinter } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
import Modal from "../../Modal/Modal";
import FeesRecieptPopup from "./FeesRecieptPopup";

const FeeCollectionPopup = ({feeRowData,handleClose,updateEachFeeDetails, handleDataRefetch,handleAlert}) => {
  const [name, setName] = useState();
  const [date, setDate] = useState();
  const [className, setClassName] = useState();
  const [section, setSection] = useState();
  const [totalPaid, setTotalPaid] = useState();
  const [pendingFee, setPendingFee] = useState();
  // const pendingFeeRef = useRef();
  const [concession,setConcession] = useState();
  const [amount,setAmount] = useState();
  const [status,setStatus] = useState();
  const [id,setId] = useState();
  const [idNo,setIdNo] = useState();
  const [totalFees,setTotalFees] = useState();
  // const [fullTableData,setFullTableData] = useState([]);
  const [mode,setMode] = useState("online");
  const [showReciept,setShowReciept] = useState(false);

  async function fetchRowData(){
    try {
      
      setName(feeRowData.name);
          setDate(feeRowData.date);
          setClassName(feeRowData.className);
          setSection(feeRowData.section);
          setTotalPaid(feeRowData.totalPaid);
          setPendingFee(feeRowData.pendingFee);
          // pendingFeeRef.current= feeRowData.pendingFee;
          setConcession(feeRowData.concession);
          setAmount(feeRowData.amount);
          setStatus(feeRowData.status);
          setIdNo(feeRowData.idNo);
          setId(feeRowData.id);
          setTotalFees(feeRowData.totalFees);
    } catch (error) {
      console.log(error.message);
    }
  }
  
  useEffect(()=>{     
          
          fetchRowData();
          // console.log("inside popup useEffect");
       
  },[])

  const feeUpdateHandler=()=>{     //functionality for changing fee collection submit
     
       
        const formData = {
          id,
          name,
          date,
          status:(Number(pendingFee)-Number(amount))===0?'Paid':'Unpaid',
          pendingFee:(Number(pendingFee)-Number(amount)),
          totalPaid:(Number(totalPaid)+Number(amount)),
          className,
          section,
          concession,
          amount,
          idNo,
          totalFees,
          mode,
          tutionFee:feeRowData.tutionFee,
      uniformFee:feeRowData.uniformFee,
      booksFee:feeRowData.booksFee,
      transportFee:feeRowData.transportFee,
      hostelFee:feeRowData.hostelFee,
      busFee:feeRowData.busFee
        };
      
        postFormData(formData,id);
     
  }

  const postFormData=async(formData,id)=>{
          await formData;                
      fetch(`http://localhost:4000/StudentFeeList/${id}`, {    //for updating data in the table
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success: in feecollection",data);
                    
         
          // alert("Data is saved in fee collection");
          handleAlert("success","Data is saved in fee collection");
          handleClose(true);
          // window.location.reload();
          handleDataRefetch(true);   //handles page update in real time
        })
        .catch((error) => {
          console.error("Error:", error);
          handleAlert("fail","fee collection failed");
        });
        
        // updateEachFeeDetails(formData,id);
        // fetchTableData();
           
  }

const handleRadioChange=(e)=>{
  setMode(e.target.value);
  console.log(mode);
}

  return (
    <>
    <div className={`w-[800px] lg:w-[864px] h-[700px] ${classes.popup}`}>
      <div className={classes.heading}>Fee Collection</div>
      <div className={`lg:w-[796px] ${classes.main}`}>
        <span className={classes.top}>
          <span className={`gap-4 lg:gap-8 ${classes.first}`}>
            <span className={classes.left}>
              <label>Admission No:</label>
              <input
                type="text"
                value={idNo}
                placeholder="2028473"
                onChange={(e) => setIdNo(e.target.value)}
                required
              />
            </span>
            <span className={classes.right}>
              <label>Admission Year</label>
              <input
                type="text"
                value={date}
                placeholder="Admission Year"
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </span>
          </span>
          <span className={`gap-4 lg:gap-8 ${classes.first}`}>
            <span className={classes.left}>
              <label className="w-[110px]">Student Name </label>
              <input
                type="text"
                value={name}
                placeholder="name"
                onChange={(e) => setName(e.target.value)}
                required
                className=""
              />
            </span>
            <span className={classes.right}>
              <label>Roll No </label>
              <input
                type="number"
                value={id}
                placeholder="22"
                onChange={(e) => setId(e.target.value)}
                required
                
              />
            </span>
          </span>
          <span className={`gap-4 lg:gap-8 ${classes.first}`}>
            <span className={classes.left}>
              <label>Class</label>
              <input
                type="text"
                value={className}
                placeholder="Class"
                onChange={(e) => setClassName(e.target.value)}
                required
              />
            </span>
            <span className={classes.right}>
              <label>Section </label>
              <input
                type="text"
                value={section}
                placeholder="Section"
                // style={{marginLeft:"100px"}}
                onChange={(e) => setSection(e.target.value)}
                required
              />
            </span>
          </span>
          <span className={`gap-4 lg:gap-8 ${classes.first}`}>
            <span className={classes.left}>
              <label>Total Paid Fees </label>
              <input
                type="number"
                value={totalPaid}
                placeholder="Total"
                onChange={(e) => setTotalPaid(e.target.value)}
                required
              />
            </span>
            <span className={classes.right}>
              <label>Pending Fee </label>
              <input
                type="number"
                // value={pendingFeeRef.current}
                value={pendingFee}
                // ref={pendingFeeRef}
                placeholder="Pending"
                onChange={(e) => setPendingFee(e.target.value)}
                required
              />
            </span>
          </span>         
        </span>
       <span className={classes.last}>
          <span className={classes.one}>Fees Type</span>
          <span className={classes.third}>
            <span className={classes.check}>
              <input type="checkbox" />
              <TiTick className={classes.icon} />
              <span className={classes.checkboxlabel}>Uniform</span>
            </span>
            <span className={classes.check}>
              <input type="checkbox" />
              <TiTick className={classes.icon} />
              <span>Transport</span>
            </span>
            <span className={classes.check}>
              <input type="checkbox" />
              <TiTick className={classes.icon} />
              <span>Books</span>
            </span>
            <span className={classes.check}>
              <input type="checkbox" />
              <TiTick className={classes.icon} />
              <span>Annual</span>
            </span>
            <span className={classes.check}>
              <input type="checkbox" />
              <TiTick className={classes.icon} />
              <span>Admission</span>
            </span>
          </span>
        </span>
        <span className={classes.middle}>
          <span className={classes.one}>Payment Mode</span>
          <span className={classes.two}>
            <span className={classes.box}>
              <input type="radio" name="online" onClick={handleRadioChange} value="online" checked={mode === "online"} />
              <span>Online</span>
            </span>
            <span className={classes.box}>
              <input type="radio" name="netbanking" onClick={handleRadioChange} value="net banking" checked={mode === "net banking"} />
              <span>Net Banking</span>
            </span>
            <span className={classes.box}>
              <input type="radio" name="cash" onClick={handleRadioChange} value="cash"  checked={mode === "cash"}/>
              <span>Cash</span>
            </span>
          </span>
        </span>
      </div>
      <div className={classes.top}>
      <span className={`gap-4 lg:gap-8 ${classes.first}`}>
            <span className={classes.left}>
              <label className="w-[110px]">Concession/   Discount </label>
              <input
                type="number"
                value={concession}
                placeholder="Discount"
                onChange={(e) => setConcession(e.target.value)}
                required
                className="w-[65px]"
              />
            </span>
            <span className={classes.right}>
              <label>Total Amount </label>
              <input
                type="number"
                value={amount}
                placeholder="Total Amount"
                onChange={(e) => setAmount(e.target.value)}
                required
                
              />
            </span>
          </span>
      </div>
      <div className={classes.foot}>
        <button className={classes.print} onClick={()=>setShowReciept(true)}>
          <AiOutlinePrinter />
          Receipt
        </button>
        <button className={classes.collect} onClick={feeUpdateHandler}>Collect Fee</button>
      </div>
    </div>
    <Modal handleClose={handleClose} isOpen={showReciept}>
        <FeesRecieptPopup paidStudentData={feeRowData} receipt={feeRowData} />
    </Modal>
    </>
  );
};

export default FeeCollectionPopup;
