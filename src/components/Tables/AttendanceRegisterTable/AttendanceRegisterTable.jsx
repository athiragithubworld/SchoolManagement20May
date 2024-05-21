// this component did by sravanthi
import { useState , useEffect } from "react";
import styles from "../../../styles/AttendanceRegisterTable.module.css";

const Table = ({ // Props from pages/attendanceRegister 
  attendanceRegColumn, 
  attendanceRegdetails, 
  selectedRows, 
  setSelectedRows
 }) => {
   const [sortBy, setSortBy] = useState(null);
   const [sortOrder, setSortOrder] = useState("");
   const [sortedAttendanceRegDetails, setSortedAttendanceRegDetails] = useState(
     []
   );

   // Update sortedAttendanceRegDetails when attendanceRegdetails, sortBy, or sortOrder changes
   useEffect(() => {
     if (attendanceRegdetails.length === 0) {
       setSortedAttendanceRegDetails([]);
     } else {
       // Copy attendanceRegdetails to sort
       const sortedData = attendanceRegdetails.slice().sort((a, b) => {
         const aValue = a[sortBy];
         const bValue = b[sortBy];

         // Determine sorting order based on sortOrder
         if (sortOrder === "asc") {
           return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
         } else {
           // console.log("des");
           return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
         }
       });

       //  console.log("sortdata", sortedData);
       setSortedAttendanceRegDetails(sortedData);
     }
   }, [attendanceRegdetails, sortBy, sortOrder]);

   // Function to handle sorting when clicking on table headers
   const handleSort = (key) => {
    
     if (sortBy === key) {
      //  setSortOrder(sortOrder === "asc" ? "asc" : "desc");
     } else {
       setSortBy(key);
       // setSortOrder("asc");
     }
   };

   // Function to toggle row selection
   const toggleRowSelection = (id) => {
     // Check if the row is already selected
     const isSelected = selectedRows.includes(id);
     // If  selected, remove it from the selectedRows array
     if (isSelected) {
       setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
     } else {
       // If not, add it to the selectedRows array
       setSelectedRows([...selectedRows, id]);
     }
   };
   // Function to handle row click
   const handleRowClick = (id) => {
     toggleRowSelection(id);
     console.log(
       "Selected row details:",
       attendanceRegdetails.find((row) => row.id === id)
     );
   };

   return (
     // this container from athira
     <>
       <div
         className={`p-3 shadow-containerShadow md:shadow-containerShadow w-full h-full rounded-[1.25rem] scrollbarnone`}
       >
         <div className="flex flex-col overflow-hidden">
           <div className="scrollbarnone overflow-x-auto sm:-mx-5 lg:-mx-7">
             <div className="inline-block min-w-full sm:px-5 lg:px-7">
               <div className="overflow-hidden">
                 <table className="w-full flex flex-col gap-[10px]">
                   <thead className="pr-2">
                     <tr className="w-full p-3 h-[74px] rounded-[14px] flex border-[1px] items-center justify-between bg-blue-100  shadow-md">
                       {/* label from pages/attendanceRegister*/}
                       {attendanceRegColumn.map(
                         ({ label, value, downicon, upicon }) => {
                           return (
                             <div
                               key={label}
                               className="flex w-40 justify-center items-center gap-[4px] cursor-pointer "
                             >
                               <th
                                 className={` h-fit text-customtext  font-[580] text-center`}
                                 onClick={() => {
                                   setSortOrder(
                                     sortOrder === "asc" ? "desc" : "asc"
                                   );
                                   handleSort(value);
                                 }}
                               >
                                 {label}
                               </th>
                               <div>
                                 <span
                                   className="cursor-pointer"
                                   onClick={() => {
                                   
                                      setSortOrder("asc");
                                     handleSort(value);
                                   }}
                                 >
                                   {upicon}
                                 </span>
                                 <span
                                   className="cursor-pointer"
                                   onClick={() => {
                                      setSortOrder("desc");
                                      
                                     handleSort(value);
                                   }}
                                 >
                                   {downicon}
                                 </span>
                               </div>
                             </div>
                           );
                         }
                       )}
                     </tr>
                   </thead>

                   <tbody className="flex flex-col gap-[10px] w-full overflow-y-auto SCROLLBAR h-tbodyheight py-1 pr-2">
                     {/* data is comming from json server */}
                     {sortedAttendanceRegDetails.length !== 0 &&
                       Array.isArray(sortedAttendanceRegDetails) &&
                       sortedAttendanceRegDetails.map((data) => {
                         const isSelected = selectedRows.includes(data.id);
                         return (
                           <tr
                             key={data.id}
                             className={`w-full p-3 h-[52px] rounded-[14px] flex border-[1px] items-center justify-between shadow-md ${
                               isSelected ? styles.selectedRow : ""
                             }`}
                             onClick={() => handleRowClick(data.id)}
                           >
                             {/* <td className="w-40  h-fit text-customtext lg:text-customtext text-center font-normal ">
                               {index + 1}
                             </td> */}
                             <td className="w-40  h-fit text-customtext  text-center ">
                               <div className="flex gap-2 self-stretch text-lg leading-5 text-center text-black">
                                 <img
                                   src={data.image}
                                   className="shrink-0 rounded-full aspect-square w-[40px]"
                                 />
                                 <div className="my-auto">
                                   {data.studentName}
                                 </div>
                               </div>
                             </td>
                             <td className="w-40  h-fit text-customtext  text-center ">
                               {data.rollNo}
                             </td>
                             <td className="w-40  h-fit text-customtext  text-center ">
                               {data.totalWorking}
                             </td>
                             <td className="w-40  h-fit text-customtext  text-center ">
                               {data.present}
                             </td>
                             <td className="w-40  h-fit text-customtext  text-center ">
                               {data.absent}
                             </td>
                             <td className="w-40  h-fit text-customtext  text-center ">
                               {data.percent}
                             </td>
                           </tr>
                         );
                       })}
                   </tbody>
                 </table>
               </div>
             </div>
           </div>
         </div>
       </div>
     </>
   );
 };

export default Table;









