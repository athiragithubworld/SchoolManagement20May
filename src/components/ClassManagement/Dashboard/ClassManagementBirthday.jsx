// Created by Athira functionality by swati

import * as React from "react";

// Component for displaying birthday cards
const BirthdayCard = ({ image, message, name, designation, onClick, isSelected,wishes }) => (
  <div
    className={`flex flex-col shrink-0 sm:flex-row gap-2 justify-center items-center p-2 mt-2 text-base leading-5 text-black rounded-[14px] border border-solid shadow-primary border-stone-300 cursor-pointer ${isSelected ? 'bg-sky-200' : 'bg-white'}`}
    onClick={onClick}
  >
    <img
      src={image}
      alt="Birthday person"
      className="shrink-0 self-stretch aspect-square rounded-[50px] w-[40px] h-[40px] sm:w-[40px]"
    />
    <div className="flex-1 w-full my-auto text-sm">
      <div className="flex justify-between pr-[60px]">
        <span className="pr-9">{name}</span>
        <span className="text-[#848484] text-center">{designation}</span>
      </div>
      {message && <div className="mt-2 text-gray-500">{isSelected && wishes.message ? wishes.message: "" }</div>}
    </div>
  </div>
);

const EmployeeBirthdayCard = ({ image, message, name, designation}) => (
  <div
    className={`flex flex-col shrink-0 sm:flex-row gap-2 justify-center items-center p-2 mt-2 text-base leading-5 text-black rounded-[14px] border border-solid shadow-primary border-stone-300 cursor-pointer `}
  >
    <img
      src={image}
      alt="Birthday person"
      className="shrink-0 self-stretch aspect-square rounded-[50px] w-[40px] h-[40px] sm:w-[40px]"
    />
    <div className="flex-1 w-full my-auto text-sm">
      <div className="flex justify-between pr-[60px]">
        <span className="pr-9">{name}</span>
        <span className="text-[#848484] text-center">{designation}</span>
      </div>
      {message && <div className="mt-2 text-gray-500">{}</div>}
    </div>
  </div>
);

const ClassManagementBirthday = () => {
  // Data for birthdays
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
     designation: "",
   },
   {
     image:
       "https://cdn.builder.io/api/v1/image/assets/TEMP/ff07657ecadba96e31799a95dd9e8ca4030350fc88b5ff1aa3d6a911ad71a768?apiKey=22ffeeb12a7e4b579f845cd7c80146cd&",
     message: "Today is Jane's Birthday. Wish Her!",
     role: "student",
     name: "Dipak Saiwal",
     designation: "",
   },
   {
     image:
       "https://cdn.builder.io/api/v1/image/assets/TEMP/ff07657ecadba96e31799a95dd9e8ca4030350fc88b5ff1aa3d6a911ad71a768?apiKey=22ffeeb12a7e4b579f845cd7c80146cd&",
     message: "Today is Jane's Birthday. Wish Her!",
     role: "student",
     name: "Dipak Saiwal",
     designation: "",
   },
   {
     image:
       "https://cdn.builder.io/api/v1/image/assets/TEMP/ff07657ecadba96e31799a95dd9e8ca4030350fc88b5ff1aa3d6a911ad71a768?apiKey=22ffeeb12a7e4b579f845cd7c80146cd&",
     message: "Today is Jane's Birthday. Wish Her!",
     role: "student",
     name: "Dipak Saiwal",
     designation: "",
   },
   {
     image:
       "https://cdn.builder.io/api/v1/image/assets/TEMP/ff07657ecadba96e31799a95dd9e8ca4030350fc88b5ff1aa3d6a911ad71a768?apiKey=22ffeeb12a7e4b579f845cd7c80146cd&",
     message: "Today is Jane's Birthday. Wish Her!",
     role: "student",
     name: "Dipak Saiwal",
     designation: "",
   },
 ];
  //Data initially set to student's birthday
  const [filteredRolesData, setFilteredRolesData] = React.useState(
    birthdayData.filter((person) => person.role === "student")
  );
  //state to handle toggle
  const [studentActive, setStudentActive] = React.useState(true);
  const [selectedCardIndex, setSelectedCardIndex] = React.useState(null);
  //for storing messages
  const [blessing,setBlessing] = React.useState("");
  const [bdayData,setBdayData] = React.useState(birthdayData);
  const [wishes,setWishes] = React.useState({id:"", message:""});

  const handleBlessing = () => {
    if (selectedCardIndex !== null) {
      const newBirthdayData = [...bdayData];
      setBdayData(newBirthdayData);
      setWishes({id:selectedCardIndex,message:blessing});
      filterData(studentActive ? "student" : "employee");
      setBlessing("");
    }
  };

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

  return (
    <div className="flex flex-col p-4 bg-white rounded-[20px] shadow-containerShadow leading-[120%] col-span-full shrink-0 md:max-h-[380px] lg:min-h-[16.25rem]">
      <h2 className="text-customtext font-bold text-black">
        {`Today's birthdays`}
      </h2>

      {/* Header with faculty and student sections */}
      <div className="flex flex-col sm:flex-row gap-1 justify-center p-1 mt-3 text-base  text-center whitespace-nowrap bg-blue-50 rounded-[14px] shadow-inner">
        <div
          className={`cursor-pointer ${
            studentActive
              ? "w-1/2 my-auto text-black text-ellipsis"
              : "bg-customblue text-white justify-center shadow-sm rounded-[14px] flex-1 p-2"
          }`}
          onClick={() => filterData("employee")}
        >
          Employees
        </div>
        <div
          className={`cursor-pointer ${
            studentActive
              ? "bg-customblue text-white justify-center shadow-sm rounded-[14px] flex-1 p-2"
              : "w-1/2 my-auto text-black text-ellipsis"
          }`}
          onClick={() => filterData("student")}
        >
          Student
        </div>
      </div>

      {/* List of birthday cards */}
      <div className="max-[1280px]:flex gap-2 overflow-x-auto xl:overflow-y-auto scrollbarnone max-h-[300px]">
        {filteredRolesData.map((birthday, index) => (
          birthday.role === "student"? (<BirthdayCard
            key={index}
            image={birthday.image}
            message={birthday.message}
            name={birthday.name}
            designation={birthday.designation}
            onClick={()=>setSelectedCardIndex(index)}
            isSelected={selectedCardIndex === index}
            wishes={wishes.id === index ? wishes :""}
          />) : (<EmployeeBirthdayCard 
          key={index}
            image={birthday.image}
            message={birthday.message}
            name={birthday.name}
            designation={birthday.designation}
          />)
        ))}
      </div>

      {/* Footer with blessing message and send button */}
      <div className="flex flex-col sm:flex-row gap-1 justify-between p-2 mt-3 text-center bg-blue-50 rounded-[14px] shadow-sm">
        <input className="my-auto text-xl text-ellipsis bg-blue-50 text-zinc-500" placeholder="Give them blessings" onChange={(e)=>setBlessing(e.target.value)} value={blessing}/>
          {/* Give them blessings */}
        
        <button className="flex gap-2 justify-center px-3 py-2 text-sm text-white whitespace-nowrap bg-customblue rounded-[14px]" onClick={handleBlessing}>
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

export default ClassManagementBirthday;
