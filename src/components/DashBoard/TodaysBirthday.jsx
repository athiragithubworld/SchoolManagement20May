// Created bt Athira

import * as React from "react";

// Component for displaying birthday cards
const BirthdayCard = ({ image, message, name, designation,isSelected,onClick }) => (
  <div className={`flex flex-col w-[299px] shrink-0 sm:flex-row gap-2 justify-center items-center p-2 mt-2 text-base leading-5 text-black ${isSelected ? 'bg-sky-200':'bg-white'} rounded-[14px] border border-solid shadow-primary  border-stone-300`}
  onClick={onClick}
  >
    <img
      src={image}
      alt="Birthday person"
      className="shrink-0 self-stretch aspect-square rounded-[50px] w-[40px] h-[40px] sm:w-[40px]"
    />
    <div className="flex-1 w-full  my-auto  text-sm ">
      <div className="flex gap-4 ">
        <span className="pr-9">{name}</span>
        <span className="text-[#848484] text-center">{designation}</span>
      </div>
    </div>
    {/* <img
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/68792f9b72aad35e0ae89fec99b82b3f6656300e50017d153519667ea8409458?apiKey=22ffeeb12a7e4b579f845cd7c80146cd&"
      alt=""
      className="shrink-0 self-stretch my-auto w-4 aspect-square"
    /> */}
  </div>
);

const TodaysBirthday = () => {
  // Data for today's birthdays
  const birthdayData = [
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ff07657ecadba96e31799a95dd9e8ca4030350fc88b5ff1aa3d6a911ad71a768?apiKey=22ffeeb12a7e4b579f845cd7c80146cd&",
      message: "Today is Science teacher Bob's Birthday. Wish Him!",
      role: "employee",
      name: "Dipak Saiwal",
      designation: "Teacher",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ff07657ecadba96e31799a95dd9e8ca4030350fc88b5ff1aa3d6a911ad71a768?apiKey=22ffeeb12a7e4b579f845cd7c80146cd&",
      message: "Today is Math teacher Alice's Birthday. Wish Her!",
      role: "employee",
      name: "Dipak Saiwal",
      designation: "Teacher",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ff07657ecadba96e31799a95dd9e8ca4030350fc88b5ff1aa3d6a911ad71a768?apiKey=22ffeeb12a7e4b579f845cd7c80146cd&",
      message: "Today is English teacher Jane's Birthday. Wish Her!",
      role: "employee",
      name: "Dipak Saiwal",
      designation: "Teacher",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ff07657ecadba96e31799a95dd9e8ca4030350fc88b5ff1aa3d6a911ad71a768?apiKey=22ffeeb12a7e4b579f845cd7c80146cd&",
      message: "Today is English teacher Jane's Birthday. Wish Her!",
      role: "employee",
      name: "Dipak Saiwal",
      designation: "Teacher",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ff07657ecadba96e31799a95dd9e8ca4030350fc88b5ff1aa3d6a911ad71a768?apiKey=22ffeeb12a7e4b579f845cd7c80146cd&",
      message: "Today is English teacher Jane's Birthday. Wish Her!",
      role: "employee",
      name: "Dipak Saiwal",
      designation: "Teacher",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ff07657ecadba96e31799a95dd9e8ca4030350fc88b5ff1aa3d6a911ad71a768?apiKey=22ffeeb12a7e4b579f845cd7c80146cd&",
      message: "Today is Jane's Birthday. Wish Her!",
      role: "student",
      name: "Dipak Saiwal",
      designation: "Class - 10th A",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ff07657ecadba96e31799a95dd9e8ca4030350fc88b5ff1aa3d6a911ad71a768?apiKey=22ffeeb12a7e4b579f845cd7c80146cd&",
      message: "Today is Jane's Birthday. Wish Her!",
      role: "student",
      name: "Dipak Saiwal",
      designation: "Class - 10th A",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ff07657ecadba96e31799a95dd9e8ca4030350fc88b5ff1aa3d6a911ad71a768?apiKey=22ffeeb12a7e4b579f845cd7c80146cd&",
      message: "Today is Jane's Birthday. Wish Her!",
      role: "student",
      name: "Dipak Saiwal",
      designation: "Class - 10th A",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ff07657ecadba96e31799a95dd9e8ca4030350fc88b5ff1aa3d6a911ad71a768?apiKey=22ffeeb12a7e4b579f845cd7c80146cd&",
      message: "Today is Jane's Birthday. Wish Her!",
      role: "student",
      name: "Dipak Saiwal",
      designation: "Class - 10th A",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ff07657ecadba96e31799a95dd9e8ca4030350fc88b5ff1aa3d6a911ad71a768?apiKey=22ffeeb12a7e4b579f845cd7c80146cd&",
      message: "Today is Jane's Birthday. Wish Her!",
      role: "student",
      name: "Dipak Saiwal",
      designation: "Class - 10th A",
    },
  ];
  //Data initially set to student's birthday
  const [filteredRolesData, setFilteredRolesData] = React.useState(
    birthdayData.filter((person) => person.role === "student")
  );
  //state to handle toggle
  const [studentActive, setStudentActive] = React.useState(false);
  //filter the data based on roles
  const filterData = (role) => {
    if (role === "student") {
      setStudentActive(true);
      setFilteredRolesData(
        birthdayData.filter((person) => person.role === "student")
      );
    } else {
      setStudentActive(false);
      setFilteredRolesData(
        birthdayData.filter((person) => person.role === "employee")
      );
    }
  };

  const [blessing,setBlessing] = React.useState("");
  const [isSelected,setIsSelected] = React.useState(false);
  const [selectedIndex,setSelectedIndex] = React.useState("");

  const handleBessing=()=>{
    alert("blesssing has been sent");
    console.log(blessing);
    setBlessing("");
  }

  return (
    <div className="flex flex-col p-4 col-span-full  bg-white rounded-[20px] shadow-containerShadow leading-[120%] md:max-h-[26rem] lg:min-h-[15.25rem] ">
      <h2 className="text-customtext font-bold text-black">
        Today's birthdays
      </h2>

      {/* Header with faculty and student sections */}
      <div className="flex flex-col sm:flex-row gap-1 justify-center p-1 mt-3 text-base font-bold text-center  bg-[#F0F5FF] rounded-[12px] shadow-inner">
        <div
          className={`cursor-pointer w-1/2  text-ellipsis ${
            studentActive
              ? " my-auto text-black "
              : " text-[#FFFFFF] text-[16px] bg-customblue  justify-center shadow-sm rounded-[14px] flex-1 p-2"
          }`}
          onClick={() => filterData("faculty")}
        >
          Employees
        </div>
        <div
          className={`cursor-pointer w-1/2  text-ellipsis text-[14px] ${
            studentActive
              ? " text-white bg-customblue  justify-center shadow-sm rounded-[14px] flex-1 p-2"
              : " my-auto text-black "
          }`}
          onClick={() => filterData("student")}
        >
          Student
        </div>
      </div>

      {/* List of birthday cards */}
      <div className="max-[1280px]:flex  gap-2 overflow-x-auto overflow-y-auto scrollbarnone max-h-[300px]">
        {filteredRolesData.map((birthday, index) => (
          <BirthdayCard
            key={index}
            image={birthday.image}
            message={birthday.message}
            name={birthday.name}
            designation={birthday.designation}
            isSelected={selectedIndex === index}
            onClick={()=>setSelectedIndex(index)}
            
          />
        ))}
      </div>

      {/* Footer with blessing message and send button */}
      <div className="flex flex-col sm:flex-row gap-1 justify-between p-2 mt-3 text-center bg-blue-50 rounded-[12px] shadow-inner">
        {/* <div className="my-auto text-xl text-ellipsis text-[#848484]">
          Give them blessings
        </div> */}
        <input type="text" 
        placeholder="Give them blessing" 
        className="bg-blue-50"
        value={blessing}
        onChange={(e)=>setBlessing(e.target.value)}
        />
        <button className="flex gap-2 justify-center px-3 py-2 text-sm text-white whitespace-nowrap bg-customblue rounded-[14px]" onClick={handleBessing}>
          <span className="my-auto text-ellipsis">Send</span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/98a74848e56c4ca03ca2d4c9aa7f278b113e41ba4373273a0ccef169d199f34d?apiKey=22ffeeb12a7e4b579f845cd7c80146cd&"
            alt=""
            className="shrink-0 w-6 aspect-square"
          />
        </button>
      </div>
    </div>
  );
};

export default TodaysBirthday;
