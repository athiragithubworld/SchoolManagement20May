import React from 'react'
import { FaStar } from "react-icons/fa";
// function TeacherCard({ teacher }) {
//     return (
//       <div className="flex gap-2 p-2 bg-white rounded-2xl shadow-sm ">
//         <img
//           loading="lazy"
//           src={teacher.image}
//           alt={`${teacher.name}'s profile picture`}
//           className="shrink-0 my-auto w-10 aspect-square"
//         />
//         <div className='shirnk-0 flex-grow'>
//           <span >{teacher.name}</span>
//           <br />
//           <span >{teacher.role}</span>
//           {teacher.role==='Class Teacher' && (
//             <FaStar className="text-yellow-500 " />
//           )}
//         </div>
//       </div>
//     );
//   }

function TeacherCard({ teacher }) {
  return (
    <div className="flex gap-2 p-2 hover:bg-blue-100 rounded-[14px] shadow-primary  w-full md:w-[calc(50% - 1rem)]">
      {/* w-[319px] */}
      <div className="flex items-center">
        <img
          loading="lazy"
          src={teacher.image}
          alt={`${teacher.name}'s profile picture`}
          className="shrink-0 my-auto w-[40px] h-[40px] aspect-square"
        />
      </div>
      <div className="flex-grow flex gap-4 justify-between">
        {" "}
        {/* Add gap-0 class here */}
        <div className="flex flex-col">
          <span className="leading-6 font-bold">{teacher.name}</span>
          <span className="leading-6 text-black">{teacher.role}</span>
        </div>
        {teacher.role === "Class Teacher" && (
          <FaStar className="text-yellow-500 self-center ml-1" />
        )}
      </div>
    </div>
  );
}
const Teachers = () => {
    const teachers = [
        {
          name: "Suchita",
          role: "Class Teacher",
          image: "https://cdn.builder.io/api/v1/image/assets/TEMP/cdaa8169c37980864fdb0ae850a0cf0cdcb9c7161f0c843a5072ddac1b68b5ee?apiKey=7b4c0e65abcd487b9370f5f2f53431d0&",
        },
        {
          name: "Suchita",
          role: "Mathematics teacher",
          image: "https://cdn.builder.io/api/v1/image/assets/TEMP/cdaa8169c37980864fdb0ae850a0cf0cdcb9c7161f0c843a5072ddac1b68b5ee?apiKey=7b4c0e65abcd487b9370f5f2f53431d0&",
        },
        {
          name: "Suchita",
          role: "Mathematics teacher",
          image: "https://cdn.builder.io/api/v1/image/assets/TEMP/cdaa8169c37980864fdb0ae850a0cf0cdcb9c7161f0c843a5072ddac1b68b5ee?apiKey=7b4c0e65abcd487b9370f5f2f53431d0&",
        },
        {
          name: "Suchita",
          role: "Mathematics teacher",
          image: "https://cdn.builder.io/api/v1/image/assets/TEMP/cdaa8169c37980864fdb0ae850a0cf0cdcb9c7161f0c843a5072ddac1b68b5ee?apiKey=7b4c0e65abcd487b9370f5f2f53431d0&",
        },
        {
          name: "Suchita",
          role: "Mathematics teacher",
          image: "https://cdn.builder.io/api/v1/image/assets/TEMP/9ddf2318c69506a45588c0655f48d8768e3ffe74822c3227a768b6695c639d28?apiKey=7b4c0e65abcd487b9370f5f2f53431d0&",
        },
        {
          name: "Suchita",
          role: "Mathematics teacher",
          image: "https://cdn.builder.io/api/v1/image/assets/TEMP/9ddf2318c69506a45588c0655f48d8768e3ffe74822c3227a768b6695c639d28?apiKey=7b4c0e65abcd487b9370f5f2f53431d0&",
        },
      ];
    
  return (
    <section className="flex  col-span-full flex-col p-4  text-black bg-white rounded-[20px] shadow-containerShadow w-full h-[266px]">
      <div className="flex flex-col gap-[12px] h-[97%]">
        <h2 className="text-xl flex max-md:max-w- font-bold gap-[12px] m-0">
          Teachers
        </h2>
        <div className="flex flex-col gap-[24px] p-2 text-lg  max-md:max-w-full overflow-y-scroll scrollbarnone">
          <div className="flex gap-5 justify-between max-md:flex-wrap shrink-0 ">
            <TeacherCard teacher={teachers[0]} />
            <TeacherCard teacher={teachers[1]} />
          </div>
          <div className="flex gap-5 justify-between  max-md:flex-wrap shrink-0">
            <TeacherCard teacher={teachers[2]} />
            <TeacherCard teacher={teachers[3]} />
          </div>
          <div className="flex gap-5 justify-between  max-md:flex-wrap shrink-0">
            <TeacherCard teacher={teachers[4]} />
            <TeacherCard teacher={teachers[5]} />
          </div>
          <div className="flex gap-5 justify-between  max-md:flex-wrap shrink-0">
            <TeacherCard teacher={teachers[4]} />
            <TeacherCard teacher={teachers[5]} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Teachers