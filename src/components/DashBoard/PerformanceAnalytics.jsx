// Created bt Athira


import profile from "../../../src/assets/images/profile1.png";


// Component for displaying performance analytics card
const PerformanceAnalyticsCard = ({ title, percentage, children }) => (
  <div className="flex flex-col m-2 p-2 mx-auto w-full h-full gap-[4px] rounded-[14px] border border-solid shadow-primary border-black border-opacity-10 max-md:mt-6">
    <div className="text-sm leading-4 text-black text-ellipsis">{title}</div>

    {children}
    <div className="flex gap-4 mt-1 items-center">
      <div className="w-full h-2 shadow-sm bg-[linear-gradient(0deg,rgba(0,0,0,0.10_0%,rgba(0,0,0,0.10)_100%),rgba(208,208,208,0.50))] rounded-[64.115px]">
        {/* Progress bar background */}
        <div
          className="h-2 bg-sky-500 shadow-sm rounded-[64.115px]"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div className="text-lg leading-5 text-black text-ellipsis">
        {percentage}%
      </div>
    </div>
  </div>
);

// Component for displaying faculty card
const FacultyCard = ({ name, leaveReason, avatarSrc, altText }) => (
  <div className="flex gap-[16px] mt-1 rounded-lg leading-[120%] w-full">
    <img
      loading="lazy"
      src={avatarSrc}
      alt={altText}
      className="shrink-0 my-auto w-8 aspect-square"
    />
    <div className="flex flex-col">
      <div className="text-lg font-bold text-black">{name}</div>
      <div className="text-sm text-zinc-500">{leaveReason}</div>
    </div>
  </div>
);

// Component for displaying absent rate card
const AbsentRateCard = ({ absentClassName }) => (
  <div className="flex gap-[19px] mt-1 rounded-lg leading-[120%] h-[45px] w-full">
    {/* <div className="flex "> */}
      <div className="text-lg font-bold text-black">{absentClassName}</div>
      {/* <div className="text-sm text-zinc-500">{absentClassName}</div> */}
    {/* </div> */}
  </div>
);

function PerformanceAnalytics() {
  // Sample faculty data
  const facultyData = [
    {
      name: "Suchita",
      leaveReason: "Cause of leave:- Going for Wedding",
      avatarSrc: profile,
      altText: "Avatar of Suchita",
    },
    {
      name: "Suchita",
      leaveReason: "Cause of leave:- Going for Wedding",
      avatarSrc: profile,
      altText: "Avatar of Suchita",
    },
  ];

  // Sample class data
  const classData = [
    {
      absentClassName: "Class 10th",
      section: "Section A",
    },
  ];

  return (
    <div className="flex col-span-full flex-col p-4  bg-white rounded-[20px] shadow-containerShadow  overflow-x-auto ">
      {/* py-4 pl-4 */}
      <h2 className="text-customtext font-bold leading-6 text-black max-md:max-w-full">
        Performance Analytics
      </h2>
      <div className="mt-1 max-md:max-w-full">
        {/* Performance analytics cards */}
        <div className="flex gap-4  max-md:flex-col max-md:gap-0 overflow-x-auto scrollbarnone ">
          <div className="flex flex-col shrink-0 w-[295px] max-md:ml-0 max-md:w-full">
            <PerformanceAnalyticsCard
              title="Most Leave faculty member"
              percentage={50}
            >
              <FacultyCard {...facultyData[0]} />
            </PerformanceAnalyticsCard>
          </div>
          <div className="flex flex-col shrink-0 w-[295px] max-md:ml-0 max-md:w-full">
            <PerformanceAnalyticsCard
              title="Most Leave faculty member"
              percentage={50}
            >
              {/* Faculty card */}
              <FacultyCard {...facultyData[0]} />
            </PerformanceAnalyticsCard>
          </div>
          <div className="flex flex-col shrink-0 w-[295px] max-md:ml-0 max-md:w-full">
            <PerformanceAnalyticsCard
              title="Most Absent rate class"
              percentage={25}
              // absentclassName="Class 10th"
            >
              <AbsentRateCard {...classData[0]} />
              {/* AbsentRate card */}
            </PerformanceAnalyticsCard>
          </div>
          <div className="flex flex-col shrink-0 w-[295px] max-md:ml-0 max-md:w-full">
            <PerformanceAnalyticsCard
              title="Most Leave faculty member"
              percentage={0}
            >
              <FacultyCard {...facultyData[1]} />
            </PerformanceAnalyticsCard>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PerformanceAnalytics;
