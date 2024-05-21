import React from "react";

const TabButton = ({ children, isActive, onClick }) => (
  <div
    className={`justify-center px-3 py-2 bg-white rounded-2xl border border-solid shadow-sm w-[181px] cursor-pointer ${
      isActive
        ? "text-sky-500 border-sky-500"
        : "text-zinc-400 border-stone-300"
    }`}
    onClick={onClick}
  >
    {children}
  </div>
);

const tabs = [
  { label: "Add Class" },
  { label: "Add Students" },
  { label: "Add Subject" },
  { label: "Add Teacher" },
];

const loaderPositions = [
  { left: "0%" },
  { left: "25%" },
  { left: "50%" },
  { left: "75%" },
];

const CreateClassPagination = ({ activeIndex, handleTabClick }) => {
  return (
    <div className="flex flex-col justify-between w-full">
      <nav className="flex gap-5 justify-between w-full text-xl font-bold leading-6 text-center max-md:flex-wrap max-w-full">
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
      <div className="relative w-full mt-4 bg-zinc-100 rounded-[99px] max-md:pr-5 max-md:max-w-full h-[8px]">
        <div
          className="absolute h-full w-1/4 bg-sky-500 rounded-3xl"
          style={loaderPositions[activeIndex]}
        />
        <div className="h-2" />
      </div>
    </div>
  );
};

export default CreateClassPagination;
