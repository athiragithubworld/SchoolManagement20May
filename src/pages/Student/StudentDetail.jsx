
//THIS PAGE WAS CREATED BY HAIDER


import React, { useState,useEffect } from 'react'
import StudentDetailButtons from '../../components/Buttons/StudentDetailButtons/StudentDetailButtons';
import StudentPrimaryDetails from '../../components/Student/StudentPrimaryDetails';
import StudentSecondaryDetails from '../../components/Student/StudentSecondaryDetails';
import UploadStudentDocuments from '../../components/Student/UploadStudentDocuments';
import { useLocation } from 'react-router-dom';


export const StudentDetail = () => {

  const [studentUploadFiles,setStudentUploadFiles] = useState({
    photo: "",
    aadhar:"",
    pan:"",
    parentAadhar:"",
    birthCertificate:"",
    validity:"",
    migrationCertificate:"",
    tc:"",
    residentialCertificate:"",
    castCertificate:"",
    domicileCertificate:"",
    addDocument:""
  })

  const [editable , setEditable] = useState(false);

  const [selectedStudent,setSelectedStudent] = useState({});

  // const [editableData,setEditableData] = useState();

  const location = useLocation();

  const studentID = location.pathname.split('/').at(-1);

  useEffect(() => {
      const getData = async () => {
      try {
          const response = await fetch("http://localhost:4000/StudentListDetails");
          if (!response.ok) {
          throw new Error("Failed to fetch data");
          }
          const jsonData = await response.json();
          const studentData = jsonData.filter((data)=>data.StudentId==studentID);
          setSelectedStudent(studentData[0]);
      } catch (error) {
          console.log(error.message);
      }
      };
      getData();
  },[]);
 
  return (

    <div className="flex flex-col gap-4 w-full overflow-y-hidden">

        <StudentDetailButtons selectedStudent={selectedStudent} setEditable={setEditable} editable={editable}></StudentDetailButtons>

        <div className='w-full overflow-y-scroll scrollbarnone studentDetail-scrollbar flex flex-col gap-4'>

          <StudentPrimaryDetails editable={editable} selectedStudent={selectedStudent} setSelectedStudent={setSelectedStudent} ></StudentPrimaryDetails>

          <StudentSecondaryDetails editable={editable} selectedStudent={selectedStudent} setSelectedStudent={setSelectedStudent}></StudentSecondaryDetails>

          <UploadStudentDocuments selectedStudent={selectedStudent} fileImages={studentUploadFiles} setFileImages={setStudentUploadFiles}></UploadStudentDocuments>

        </div>

    </div>

  )

}

export default StudentDetail;