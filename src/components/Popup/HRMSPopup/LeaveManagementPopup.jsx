//THIS COMPONENT WAS CREATED BY HAIDER

import React from "react";

// import profile1 from "../../../assets/images/profile1.png";

export const LeaveManagementPopup = ({
  showNotification,
  selectedEmployee,
}) => {
  const LeaveManagementPopupField = [
    {
      name: "Date",
      value: selectedEmployee.leaveDate,
    },
    {
      name: "Applied On",
      value: selectedEmployee.appliedOn,
    },
    {
      name: "Status",
      value: selectedEmployee.status,
    },
    {
      name: "Leave Type",
      value: selectedEmployee.leaveType,
    },
  ];

  const PopupField = ({ detail }) => {
    return (
      <div className="flex items-center gap-x-2">
        <div className="w-[100px] h-[52px] flex items-center font-medium text-lg">
          {detail.name}
        </div>
        <div className="w-full h-[52px] p-4 border-[1px] shadow-md rounded-2xl text-base">
          {detail.value}
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="w-[705px] flex flex-col gap-[34px] p-[34px] border-[1px] rounded-2xl bg-white">
        <div className="flex flex-col gap-6">
          <div className="flex w-full justify-between">
            <div className="flex gap-[6px] justify-center items-center">
              <img
                src="/assets/images/profile1.png"
                className="h-10 w-10"
              ></img>
              <div className="flex flex-col">
                <span className=" text-lg font-bold">
                  {selectedEmployee.employeeName}
                </span>
                <span>Support Staff</span>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <span className="text-xs">2 days</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {LeaveManagementPopupField.map((detail) => (
              <PopupField key={detail.name} detail={detail}></PopupField>
            ))}
            <div className="flex items-center col-span-full gap-x-2">
              <div className="w-[80px] h-[52px] flex items-center font-medium text-base">
                Cause Of Leave
              </div>
              <div className="w-full h-[52px] p-4 border-[1px] shadow-md rounded-2xl text-sm">
                {selectedEmployee.leaveType}
              </div>
            </div>

            <div className="flex items-center col-span-full gap-x-2">
              <div className="w-[80px] h-[52px] flex items-center font-medium text-base">
                Reply Back
              </div>
              <div className="w-full h-[52px] p-4 border-[1px] shadow-md rounded-2xl text-sm">
                {selectedEmployee.leaveType}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-[14px]">
          <button
            className={`p-2 w-32 h-10 bg-red-400 text-white rounded-2xl disabled:opacity-50`}
            disabled={
              selectedEmployee.status === "Approved" ||
              selectedEmployee.status === "Denied"
            }
            onClick={() =>
              showNotification(
                "failure",
                `${selectedEmployee.employeeName}'s leave rejected`,
                selectedEmployee.id
              )
            }
          >
            Reject
          </button>
          <button
            className="p-2 w-32 h-10 bg-green-600 text-white rounded-2xl disabled:opacity-50"
            disabled={
              selectedEmployee.status === "Approved" ||
              selectedEmployee.status === "Denied"
            }
            onClick={() =>
              showNotification(
                "success",
                `${selectedEmployee.employeeName}'s leave accepted`,
                selectedEmployee.id
              )
            }
          >
            Accept
          </button>
        </div>
      </div>
    </>
  );
};

export default LeaveManagementPopup;
