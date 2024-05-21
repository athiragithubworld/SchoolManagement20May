// This page is done by swati

import * as React from "react";

// Component for displaying absentees cards
const AbsentCard = ({ image, name, reason }) => (
  <div className="flex  shrink-0 sm:flex-row gap-2 justify-center items-center p-2 mt-2 text-base leading-5 text-black bg-white rounded-[14px] border border-solid shadow-primary border-stone-300">
    <img
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/cdaa8169c37980864fdb0ae850a0cf0cdcb9c7161f0c843a5072ddac1b68b5ee?apiKey=7b4c0e65abcd487b9370f5f2f53431d0&"
      alt="Birthday person"
      className="shrink-0 self-stretch aspect-square w-[40px] h-[40px] sm:w-[40px]"
    />
    <div className="flex justify-between items-center">
      <div className="flex-1 flex-col  w-[180px] my-auto text-wrap text-sm text-left sm:text-left">
        <span className="font font-bold ">{name}</span>
        <p className="flex-1 my-auto text-wrap text-sm text-left sm:text-left text-[#828282]">
          {/* Cause of leave :- {reason} */}
          {reason}
        </p>
      </div>
      <div className="text-[#3c3c3c] ">3 days leave</div>
    </div>
  </div>
);

const ClassManagementAbsentees = () => {
  // Data for absentees
  const absentData = [
    {
      image: "/assets/images/profile2.png",
      name: "Suchita",
      reason: "Sick Leave",
      day: "yesterday",
    },
    {
      image: "/assets/images/profile1.png",
      name: "Suchita",
      reason: "Sick Leave",
      day: "yesterday",
    },
    {
      image: "/assets/images/profile1.png",
      name: "Suchita",
      reason: "Sick Leave",
      day: "yesterday",
    },
    {
      image: "/assets/images/profile1.png",
      name: "Suchita",
      reason: "Sick Leave",
      day: "yesterday",
    },
    {
      image: "/assets/images/profile1.png",
      name: "Suchita",
      reason: "Sick Leave",
      day: "yesterday",
    },
    {
      image: "/assets/images/profile1.png",
      name: "Alice",
      reason: "Sick Leave",
      day: "today",
    },
    {
      image: "/assets/images/profile1.png",
      name: "Alice",
      reason: "Going for wedding",
      day: "today",
    },
    {
      image: "/assets/images/profile1.png",
      name: "Alice",
      reason: "Going for wedding",
      day: "today",
    },
    {
      image: "/assets/images/profile1.png",
      name: "Alice",
      reason: "Going for wedding",
      day: "today",
    },
    {
      image: "/assets/images/profile1.png",
      name: "Alice",
      reason: "Going for wedding",
      day: "today",
    },
  ];
  //Data initially set to today's absentees
  const [filteredAbsenteesData, setFilteredAbsenteesData] = React.useState(
    absentData.filter((person) => person.day === "today")
  );
  //state to handle toggle
  const [todayActive, setTodayActive] = React.useState(true);

  //filter the data based on day
  const filterData = (day) => {
    if (day === "today") {
      setTodayActive(true);
      setFilteredAbsenteesData(
        absentData.filter((person) => person.day === "today")
      );
    } else {
      setTodayActive(false);
      setFilteredAbsenteesData(
        absentData.filter((person) => person.day === "yesterday")
      );
    }
  };

  return (
    <div className="flex flex-col p-4 bg-white rounded-[20px] shadow-containerShadow leading-[120%] col-span-full shrink-0 md:max-h-[390px] lg:min-h-[12rem] h-full">
      <h2 className="text-customtext font-bold text-black">Absent</h2>

      {/* Header with yesterday and today header */}
      <div className="flex flex-col sm:flex-row gap-1 justify-center p-1 mt-3 text-base text-center whitespace-nowrap bg-blue-50 rounded-[14px] shadow-inner">
        <div
          className={`cursor-pointer ${
            todayActive
              ? "w-1/2 my-auto text-black text-ellipsis"
              : "bg-customblue text-white justify-center shadow-sm rounded-[14px] flex-1 p-2"
          }`}
          onClick={() => filterData("yesterday")}
        >
          Yesterday Absent
        </div>
        <div
          className={`cursor-pointer ${
            todayActive
              ? "bg-customblue text-white justify-center shadow-sm rounded-[14px] flex-1 p-2"
              : "w-1/2 my-auto text-black text-ellipsis"
          }`}
          onClick={() => filterData("today")}
        >
          Today Absent
        </div>
      </div>

      {/* List of absentees */}
      <div className="max-[1280px]:flex  gap-2 overflow-x-auto overflow-y-auto scrollbarnone max-h-[300px]">
        {filteredAbsenteesData.map((person, index) => (
          <AbsentCard
            key={index}
            image={person.image}
            name={person.name}
            reason={person.reason}
          />
        ))}
      </div>
    </div>
  );
};

export default ClassManagementAbsentees;
