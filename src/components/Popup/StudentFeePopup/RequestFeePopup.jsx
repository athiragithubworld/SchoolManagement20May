import React from "react";
import { useState } from "react";
import classes from "../../../styles/RequestFeePopup.module.css";
import { BsEmojiSmile } from "react-icons/bs";
import { GrAttachment } from "react-icons/gr";
import { IoSend } from "react-icons/io5";

const RequestFeePopup = ({
  requestId,
  handleClose,
  tableData,
  handleAlert,
}) => {
  const [requestFeesData, setRequestFeesData] = useState({
    campaignName: "",
    messageType: "",
    reciever: "",
    message: "",
    studentId: "",
  });

  const handleInputChange = (event) => {
    setRequestFeesData((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };

  //Function to save requested fee details to json
  const submitHandler = async () => {
    if (
      !requestFeesData.campaignName ||
      !requestFeesData.messageType ||
      !requestFeesData.reciever ||
      !requestFeesData.message
    ) {
      alert("Please fill all details!!");
      console.log(requestFeesData);
      return;
    }
    try {
      await fetch("http://localhost:4000/RequestedFeesList", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...requestFeesData, studentId: requestId }), // Replace with your actual data
      });
      // alert("Request sent");
      handleAlert("success", "Request sent!!");
    } catch (err) {
      console.log(err);
      alert("Error!!");
    }
    handleClose();
  };

  return (
    <div className={classes.popup}>
      <div className={classes.container}>
        <span className={classes.title}>Compose Campaign</span>
        <span className={classes.no}>
          No of Selection: {requestId === "All" ? tableData.length : 1}
        </span>
      </div>
      <div className={classes.Frame}>
        <div className={classes.frame}>
          <span className={classes.campaign}>
            <span style={{ fontSize: "18px" }}>Campaign Name</span>
            <span>
              <input
                name="campaignName"
                type="text"
                placeholder="School Fee Semester One"
                onChange={handleInputChange}
                autoComplete="off"
              />
            </span>
          </span>
          <span className={classes.Message}>
            <span style={{ fontSize: "18px" }}>Message Type</span>
            <span className={classes.two}>
              <span className={classes.box}>
                <input
                  type="checkbox"
                  name="messageType"
                  onChange={handleInputChange}
                  value="Sms"
                />
                <span>Sms</span>
              </span>
              <span className={classes.box}>
                <input
                  type="checkbox"
                  name="messageType"
                  onChange={handleInputChange}
                  value="Email"
                />
                <span>Email</span>
              </span>
              <span className={classes.box}>
                <input
                  type="checkbox"
                  name="messageType"
                  onChange={handleInputChange}
                  value="Whatsapp"
                />
                <span>Whatsapp</span>
              </span>
            </span>
          </span>
          <span className={classes.to}>
            <span style={{ fontSize: "18px" }}>Send To:</span>
            <span className={classes.third}>
              <span className={classes.check}>
                <input
                  type="checkbox"
                  name="reciever"
                  onChange={handleInputChange}
                  value="Gardians"
                />
                <span>Parents/Guardians</span>
              </span>
              <span className={classes.check}>
                <input
                  type="checkbox"
                  name="reciever"
                  onChange={handleInputChange}
                  value="Students"
                />
                <span>Students</span>
              </span>
              <span className={classes.check}>
                <input
                  type="checkbox"
                  name="reciever"
                  onChange={handleInputChange}
                  value="Faculty"
                />
                <span>Faculty</span>
              </span>
            </span>
          </span>
        </div>
        <div className={classes.segmented}>
          {/* <div className={classes.text}>Text here</div> */}
          <textarea
            type="text"
            placeholder="Text here"
            // value={inputText}
            onChange={handleInputChange}
            name="message"
            className={`bg-[#f0f5ff] h-full outline-none resize-none`}
          />
          <span className={`${classes.bar} justify-end`}>
            {/* <input
              type="text"
              placeholder="Text here"
              value={inputText}
              onChange={handleInputChange}
              className={classes.input}
            /> */}
            <span className={classes.attach}>
              <GrAttachment />
            </span>
            <span className={classes.emoji}>
              <BsEmojiSmile />
            </span>
            <button
              className={`${classes.send} flex justify-center items-center`}
              onClick={submitHandler}
            >
              <IoSend />
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default RequestFeePopup;
