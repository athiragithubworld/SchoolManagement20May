
//THIS COMPONENT WAS CREATED BY HAIDER
//functionality is created by gunjan

import React, { useState,useEffect } from 'react'

export const ClassRepresentativePopup = ({setShowClassRepresentativePopup,previousClassRepresentative}) => {
    const [filteredClassListDetails,setFilteredClassListDetails] = useState([]);
    const [newClassRepresentative,setNewClassRepresentative] = useState();
    useEffect(() => {
        // document.title = "Student List"; // Set the title to 'Page Title'
         const fetchData = async () => {
           try {
             const response = await fetch("http://localhost:4000/ClassManagementDashboardStudentList");
             if (!response.ok) {
               throw new Error("Failed to fetch data");
             }
             const jsonData = await response.json();
             let filterData = jsonData.filter(student=>{
               return student.className===previousClassRepresentative.className && student.section===previousClassRepresentative.section})
             setFilteredClassListDetails(filterData);             
           } catch (error) {
             console.log(error.message);
           }
         };
         fetchData();
        /* return () => {
           document.title = "School"; // Reset the title
         };*/
       },[previousClassRepresentative]);
    const handleChangeClassRepresentative = (studentDetail)=>{
          const filteredList = filteredClassListDetails.map(student=>{
            if(student.id===studentDetail.id){
                return {...student, classRepresentative:'Yes'}
            }
            else{return {...student,classRepresentative:'No'}}
          }) 
          setFilteredClassListDetails(filteredList);
          setNewClassRepresentative(studentDetail);  
    }
    const handleSave = ()=>{
        if(newClassRepresentative!==undefined){
        const promise1 = fetch(`http://localhost:4000/ClassManagementDashboardStudentList/${previousClassRepresentative.id}`,{
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({...previousClassRepresentative,classRepresentative:'No'})
        })
        const promise2 = fetch(`http://localhost:4000/ClassManagementDashboardStudentList/${newClassRepresentative.id}`,{
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({...newClassRepresentative,classRepresentative:'Yes'})
        })
        Promise.all([promise1,promise2])
        .then((res)=>console.log('Successfully updated',res))
        .catch((err)=>console.error('Failed to update',err))}
          setShowClassRepresentativePopup(false)
    }
    
  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
        <table className="flex flex-col gap-3 w-[1116px] rounded-3xl p-4 table-inner-shadow bg-white overflow-auto">

            <h2 className=' text-xl font-bold'>Student List</h2>

            <thead>

            <tr className="w-full h-[74px] rounded-2xl flex border-[1px] items-center justify-between bg-blue-100 p-3 shadow-md">

                <th className="w-56 h-fit text-sm lg:text-lg text-center font-normal">Student Name</th>
                <th className="w-36 h-fit text-sm lg:text-lg text-center font-normal">Roll No</th>
                <th className="w-36 h-fit text-sm lg:text-lg text-center font-normal">Gender</th>
                <th className="w-36 h-fit text-sm lg:text-lg text-center font-normal">Percentage</th>
                <th className="w-36 h-fit text-sm lg:text-lg text-center font-normal">Select Monitor</th>

            </tr>

            </thead>

            <tbody className="flex flex-col gap-4 w-full overflow-y-scroll table-scrollbar py-1 h-tbodyheight">
                {filteredClassListDetails.map(cRlistDetail=>(
                <tr key={cRlistDetail.id} 
                className="w-full h-[52px] rounded-2xl flex border-[1px] items-center justify-between p-3 shadow-md bg-white">

                    <td className="w-56 h-fit text-sm lg:text-lg text-center font-normal flex items-center gap-2 justify-center">
                        <img className='h-10 w-10 rounded-full' src="https://img.icons8.com/officel/16/bolivian-girl.png" alt="bolivian-girl"/>
                        {cRlistDetail.name}
                    </td>
                    <td className="w-36 h-fit text-sm lg:text-lg text-center font-normal">{cRlistDetail.rollNo}</td>
                    <td className="w-36 h-fit text-sm lg:text-lg text-center font-normal">{cRlistDetail.gender}</td>
                    <td className="w-36 h-fit text-sm lg:text-lg text-center font-normal">{`${cRlistDetail.attendancePercent}%`}</td>
                    <td className="w-36 h-fit flex justify-center items-center font-bold">
                     {cRlistDetail.classRepresentative==='No'? <img
                            onClick={()=>handleChangeClassRepresentative(cRlistDetail)}
                            className="h-6 w-6 rounded-full"
                            src="https://img.icons8.com/forma-regular/24/star.png"
                            alt="star-emoji"
                        /> :
                        <img
                        className="h-6 w-6 rounded-full"
                        src="https://img.icons8.com/emoji/48/star-emoji.png"
                        alt="star-emoji"/>
                }
                    </td>
                </tr>
                ))}

            </tbody>

            <div className='flex w-full place-content-center'>
                <button className='p-2 w-32 h-10 bg-blue-500 text-white rounded-2xl' onClick={handleSave}>Save</button>
            </div>

        </table>
    </div>
  )
}

export default ClassRepresentativePopup;
