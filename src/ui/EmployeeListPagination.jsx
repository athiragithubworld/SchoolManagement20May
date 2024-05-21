// Created by Athira
import React from "react";

// Functional component for rendering individual tab button
const TabButton = ({ children, isActive, onClick }) => (
  <div
    className={`justify-center px-3 py-2 bg-white rounded-2xl border border-solid shadow-sm w-[181px] cursor-pointer ${
      isActive
        ? "text-customblue border-customblue"
        : "text-zinc-400 border-stone-300"
    }`}
    onClick={onClick}
  >
    {children}
  </div>
);

// Array of tab labels
const tabs = [
  { label: "Profile Details" },
  { label: "Education Details" },
  { label: "Bank Details" },
  { label: "Documents" },
];

// Array defining loader positions for each tab
const loaderPositions = [
  { left: "0%", width: "182px" },
  { left: "27.5%", width: "182px" },
  { left: "54.4%", width: "182px" },
  { left: "78.5%", width: "182px" },
];

const EmployeeListPagination = ({ activeIndex, handleTabClick }) => {
  return (
    <div className="flex flex-col justify-between w-full">
      {/* Navigation tabs */}
      <nav className="flex gap-5 justify-between w-full text-xl font-bold leading-6 text-center max-md:flex-wrap max-w-full">
        {/* Render each tab button */}
        {tabs.map((tab, index) => (
          <TabButton
            key={tab.label}
            isActive={index === activeIndex}
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </TabButton>
        ))}
      </nav>
      {/* Loader for indicating active tab */}
      <div className="relative w-full mt-4 bg-zinc-100 rounded-[99px] max-md:pr-5 max-md:max-w-full h-[8px]">
        {/* Loader indicator */}
        <div
          className="absolute h-full  bg-customblue rounded-3xl"
          style={loaderPositions[activeIndex]}
        />
        {/* Spacer */}
        <div className="h-2" />
      </div>
    </div>
  );
};

export default EmployeeListPagination;
