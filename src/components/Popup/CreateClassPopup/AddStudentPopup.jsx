import React from 'react'

//THIS COMPONENT WAS CREATED BY HAIDER

const addStudentsColumn = [
    {label: "Select"},
    {label: "Name"},
    {label: "Enrollment No"},
    {label: "Date"},
    {label: "Class"},
    {label: "Section"},
    {label: "Status"}
  ];

const addStudentsDetails = [
    {
        Name : "Virupma",
        EnrollmentNo : "1234",
        Date : "09/08/1990",
        Class : "10th",
        Section : "B",
        Status : "New Enrollment"
    },
    {
        Name : "Virupma",
        EnrollmentNo : "1234",
        Date : "09/08/1990",
        Class : "10th",
        Section : "B",
        Status : "New Enrollment"
    },
    {
        Name : "Virupma",
        EnrollmentNo : "1234",
        Date : "09/08/1990",
        Class : "10th",
        Section : "B",
        Status : "New Enrollment"
    },
    {
        Name : "Virupma",
        EnrollmentNo : "1234",
        Date : "09/08/1990",
        Class : "10th",
        Section : "B",
        Status : "New Enrollment"
    },
    {
        Name : "Virupma",
        EnrollmentNo : "1234",
        Date : "09/08/1990",
        Class : "10th",
        Section : "B",
        Status : "New Enrollment"
    },
    {
        Name : "Virupma",
        EnrollmentNo : "1234",
        Date : "09/08/1990",
        Class : "10th",
        Section : "B",
        Status : "New Enrollment"
    },
    {
        Name : "Virupma",
        EnrollmentNo : "1234",
        Date : "09/08/1990",
        Class : "10th",
        Section : "B",
        Status : "New Enrollment"
    },
    {
        Name : "Virupma",
        EnrollmentNo : "1234",
        Date : "09/08/1990",
        Class : "10th",
        Section : "B",
        Status : "New Enrollment"
    },
    {
        Name : "Virupma",
        EnrollmentNo : "1234",
        Date : "09/08/1990",
        Class : "10th",
        Section : "B",
        Status : "New Enrollment"
    },
    {
        Name : "Virupma",
        EnrollmentNo : "1234",
        Date : "09/08/1990",
        Class : "10th",
        Section : "B",
        Status : "New Enrollment"
    }
]

export const AddStudentPopup = () => {
  return (
    <table className="flex flex-col gap-3 w-full h-[446px] rounded-3xl p-4 table-inner-shadow">

        <thead className='mr-2'>

          <tr className="w-full h-[74px] rounded-2xl flex border items-center justify-between bg-blue-100 p-4 shadow-md">

            {
              addStudentsColumn.map(({ label, index }) => (
                <th key={index}
                className="w-32 h-fit text-lg text-center font-normal">

                    {label}

                </th>
              ))
            }

          </tr>

        </thead>

        <tbody className="flex flex-col gap-4 w-full overflow-y-scroll table-scrollbar h-full p-1">

            {addStudentsDetails.map((addStudentsDetail, index) => (
              <tr key={index} className="w-full h-[52px] rounded-2xl flex border-[1px] items-center justify-between p-3 shadow-md bg-white">
                
                <td className="w-32 h-fit text-[18px] text-center font-normal"><input type='checkbox'></input></td>
                <td className="w-32 h-fit text-[18px] text-center font-normal flex items-center gap-2">
                  <img className='h-10 w-10 rounded-full' src="https://img.icons8.com/officel/16/bolivian-girl.png" alt="bolivian-girl"/>
                  {addStudentsDetail.Name}
                </td>
                <td className="w-32 h-fit text-[18px] text-center font-normal">{addStudentsDetail.EnrollmentNo}</td>
                <td className="w-32 h-fit text-[18px] text-center font-normal">{addStudentsDetail.Date}</td>
                <td className="w-32 h-fit text-[18px] text-center font-normal">{addStudentsDetail.Class}</td>
                <td className="w-32 h-fit text-[18px] text-center font-normal">{addStudentsDetail.Section}</td>
                <td className="w-32 h-fit text-[18px] text-center font-normal">{addStudentsDetail.Status}</td>

              </tr>
            ))}

        </tbody>

    </table>
  )
}

export default AddStudentPopup;
