// Created bt Athira

import { Divider } from "antd";
import * as React from "react";

// EventCard component renders a card for each event.
const EventCard = ({ title, description, link }) => (
  <div className="justify-center w-[299px]  shrink-0  p-[8px] mt-2 text-black-500 bg-white rounded-[14px] border border-solid shadow-primary border-stone-300 sm:p-[8px]">
    <p className=" ">
      <span className="font-bold  sm:text-customtext">{title}</span>
      <span
        className=" text-[#848484] sm:text-base"
      >
        {description}
      </span>
      <a
        href={link}
        className=" inline-block leading-5 text-customblue sm:text-base"
      >
        {link}
      </a>
    </p>
  </div>
);

// Sample event data
const events = [
  {
    title: "12th result is live :-",
    description: "To check the result ",
    link: "go on mahresult.nic.in",
    day: "today",
  },
  {
    title: "12th result is live :-",
    description: "To check the result ",
    link: "go on mahresult.nic.in",
    day: "today",
  },
  {
    title: "12th result is live :-",
    description: "To check the result ",
    link: "go on mahresult.nic.in",
    day: "today",
  },
  {
    title: "12th result is live :-",
    description: "To check the result ",
    link: "go on mahresult.nic.in",
    day: "today",
  },
  {
    title: "12th result is live :-",
    description: "To check the result ",
    link: "go on mahresult.nic.in",
    day: "today",
  },
  {
    title: "12th result is live :-",
    description: "To check the result ",
    link: "go on mahresult.nic.in",
    day: "today",
  },
  {
    title: "10th result will be live :-",
    description: "To check the result ",
    link: "go on mahresult.nic.in",
    day: "upcoming",
  },
  {
    title: "10th result will be live :-",
    description: "To check the result ",
    link: "go on mahresult.nic.in",
    day: "upcoming",
  },
  {
    title: "10th result will be live :-",
    description: "To check the result ",
    link: "go on mahresult.nic.in",
    day: "upcoming",
  },
  {
    title: "10th result will be live :-",
    description: "To check the result ",
    link: "go on mahresult.nic.in",
    day: "upcoming",
  },
  {
    title: "10th result will be live :-",
    description: "To check the result ",
    link: "go on mahresult.nic.in",
    day: "upcoming",
  },
];

function NoticeBoard() {
  const [todayActive, setTodayActive] = React.useState(true);
  //initially today's events will be shown
  const [filteredEvents, setFilteredEvents] = React.useState(
    events.filter((event) => event.day === "today")
  );

  //filter the events based on day
  const filterData = (day) => {
    if (day === "today") {
      setTodayActive(true);
      setFilteredEvents(events.filter((event) => event.day === "today"));
    } else {
      setTodayActive(false);
      setFilteredEvents(events.filter((event) => event.day === "upcoming"));
    }
  };

  return (
    <div className="flex flex-col p-4 text-customtext leading-5 bg-white rounded-[20px] shadow-containerShadow md:max-h-[22rem]  lg:min-h-[215px] col-span-full  ">
      {/* sm:px-6 sm:pt-6 px-4 pt-4 pb-8 */}
      <h2 className="text-customtext font-bold text-black sm:text-customtext">
        Notice board
      </h2>

      {/* Today's events and Upcoming events section */}
      <div className="flex flex-col gap-2 justify-center p-1 mt-2 font-bold text-center bg-[#F0F5FF] rounded-[12px] shadow-inner sm:flex-row sm:gap-2 sm:p-2 sm:mt-6">
        <div
          className={`w-1/2 text-ellipsis cursor-pointer text-[14px] ${
            todayActive
              ? " flex-1 justify-center p-2 text-white bg-customblue rounded-[14px] shadow-sm sm:py-3"
              : " my-auto text-black "
          }`}
          onClick={() => filterData("today")}
        >
          Today's events
        </div>
        <div
          className={`w-1/2 text-ellipsis text-[14px] cursor-pointer  ${
            todayActive
              ? " my-auto text-black "
              : " flex-1 justify-center p-2 text-white bg-customblue rounded-[14px] shadow-sm sm:py-3"
          }`}
          onClick={() => filterData("upcoming")}
        >
          Upcoming events
        </div>
      </div>

      {/* Events section */}
      <section className="mt-2 space-y-3 sm:mt-3 max-[1280px]:flex  gap-2 overflow-x-auto sm:space-y-5 overflow-y-auto  max-h-[300px] scrollbarnone">
        {filteredEvents.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </section>
    </div>
  );
}

export default NoticeBoard;
