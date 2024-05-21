// Created By Athira

import profile1 from "../../../src/assets/images/profile1.png";
import profile2 from "../../../src/assets/images/profile2.png";



// FacultyCard component renders a card for each faculty member on leave.
const FacultyCard = ({ name, role, image, leaveReason }) => {
  return (
    <div className="faculty-card flex gap-2 p-1 h-[106px] rounded-2xl shrink-0">
      <img
        src={image}
        alt={`${name}'s profile picture`}
        className="shrink-0 w-[3.75rem] h-[3.75rem] rounded-full"
      />
      <div className="flex flex-col">
        <div className="text- font-bold leading-7">
          <span className="leading-6 text-black">{name}</span> <br />{" "}
          <span className="leading-6 text-black">{role}</span>{" "}
        </div>
        <div className="text-sm leading-4 text-zinc-500">
          Cause of leave:- {leaveReason}{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

// FacultyOnLeave component displays a section showing faculty members on leave.
const FacultyOnLeave = () => {
  // Sample data for faculty on leave.
  const facultyData = [
    {
      name: "Suchita",
      role: "Mathematics teacher",
      image: profile1,
      leaveReason: "Going for Wedding",
    },
    {
      name: "Bob",
      role: "Science teacher",
      image: profile2,
      leaveReason: "Going for Wedding",
    },
    {
      name: "Suchita",
      role: "Mathematics teacher",
      image: profile1,
      leaveReason: "Going for Wedding",
    },
    {
      name: "Bob",
      role: "Science teacher",
      image: profile2,
      leaveReason: "Going for Wedding",
    },
    {
      name: "Bob",
      role: "Science teacher",
      image: profile2,
      leaveReason: "Going for Wedding",
    },
  ];

  return (
    <section className="flex col-span-full  flex-col p-4 bg-white rounded-[20px] shadow-containerShadow w-full">
      <h2 className="text-customtext font-bold leading-6 text-black">
        Employees On leave
      </h2>
      <div className="faculty-cards flex gap-2 mt-2 overflow-x-auto scrollbarnone">
        {/* Mapping over facultyData to render FacultyCard for each faculty member */}
        {facultyData.map((faculty, index) => (
          <div key={index} className="faculty-card-wrapper shrink-0">
            {/* Render FacultyCard component with data for each faculty member */}
            <FacultyCard
              name={faculty.name}
              role={faculty.role}
              image={faculty.image}
              leaveReason={faculty.leaveReason}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FacultyOnLeave;

