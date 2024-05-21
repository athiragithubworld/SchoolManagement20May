
//THIS COMPONENT WAS CREATED BY HAIDER


import React from 'react';

const classRepresentativeDetails = [
    {
        name: "Sandeep",
        status: "Present",
        attendancePercent: "98%",
        classRepresentative: "",
    },
    {
        name: "Sandeep",
        status: "Present",
        attendancePercent: "98%",
        classRepresentative: "",
    },
    {
        name: "Sandeep",
        status: "Present",
        attendancePercent: "98%",
        classRepresentative: "",
    },
    {
        name: "Sandeep",
        status: "Present",
        attendancePercent: "98%",
        classRepresentative: "",
    },
    {
        name: "Sandeep",
        status: "Present",
        attendancePercent: "98%",
        classRepresentative: "",
    }
]

export const ClassRepresentative = ({
  classRepresentativeDetails,
                  selectedClassRepresentative,
                  setShowClassRepresentativePopup
}) => {
  return (
    <div className="flex flex-col col-span-full gap-3 w-full h-full rounded-[20px] p-4 shadow-containerShadow overflow-y-scroll scrollbarnone mb-1">
      <table className=" overflow-y-scroll h-[266px] flex flex-col gap-3">
        <thead className="font-bold text-start text-lg pr-2">
          Class Representative
        </thead>

        <tbody className="flex flex-col gap-3 w-full overflow-y-scroll table-scrollbar scrollbarnone h-full py-1 pr-2">
          {classRepresentativeDetails?.map((classRepresentativeDetail) => (
            <tr
              key={classRepresentativeDetail.id}
              className="w-full h-[56px] rounded-2xl flex border items-center justify-between p-2 shadow-md bg-white cursor-pointer"
              onClick={() => {
                selectedClassRepresentative(classRepresentativeDetail);
                setShowClassRepresentativePopup(true);
              }}
            >
              <td className="w-40 h-fit text-[18px] text-center font-bold flex items-center gap-2">
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://img.icons8.com/officel/16/bolivian-girl.png"
                  alt="bolivian-girl"
                />
                {classRepresentativeDetail.name}
              </td>
              <td className="w-32 h-fit text-[18px] text-center font-bold">
                {classRepresentativeDetail.status}
              </td>
              <td className="w-20 h-fit text-[18px] text-center font-bold">
                {`${classRepresentativeDetail.attendancePercent}`}
              </td>
              <td className="w-20 h-fit text-[18px] text-center font-bold">
                {classRepresentativeDetail.classRepresentative === "Yes" ? (
                  <img
                    className="h-6 w-6 rounded-full"
                    src="https://img.icons8.com/emoji/48/star-emoji.png"
                    alt="star-emoji"
                  />
                ) : (
                  ""
                )}
              </td>
            </tr>
          ))}

          {/* <tr
            className="w-full h-[56px] rounded-[14px] flex border items-center justify-between p-2 shadow-md bg-white cursor-pointer"
            onClick={() => setShowClassRepresentativePopup(true)}
          >
            <td className="w-40 h-fit text-[18px] text-center font-bold flex items-center gap-2">
              <img
                className="h-10 w-10 rounded-full"
                src="https://img.icons8.com/officel/16/bolivian-girl.png"
                alt="bolivian-girl"
              />
              <span>Rahul Kumar</span>
            </td>
            <td className="w-32 h-fit text-[18px] text-center font-bold">
              Absent
            </td>
            <td className="w-20 h-fit text-[18px] text-center font-bold">
              99%
            </td>
            <td className="w-20 h-fit flex justify-center items-center font-bold">
              <img
                className="h-6 w-6 rounded-full"
                src="https://img.icons8.com/emoji/48/star-emoji.png"
                alt="star-emoji"
              />
            </td>
  </tr>*/}
        </tbody>
      </table>
    </div>
  );
};

export default ClassRepresentative;