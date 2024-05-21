
//THIS COMPONENT WAS CREATED BY HAIDER


import React from 'react'

const leaveTypes = [
    { label : "Sick Leave"},
    { label : "Casual Leave"},
    { label : "Earned Leave"},
    { label : "National Leave"},
]

const LeaveCard = ({leaveHeading}) => {
    return (
        <div className='flex  xl:flex-col p-4 gap-6 rounded-2xl bg-white shadow-md border w-60 xl:w-full h-44 xl:h-fit'>
            
            <div>
                <p className='font-bold text-lg'>{leaveHeading.label}</p>
                <p className='font-normal text-sm'>(12 days)</p>
            </div>

            <div className='flex flex-col text-base gap-2'>

                <div className='flex justify-between gap-1 items-center'>
                    <span>Available Leave</span>
                    <span>6</span>
                </div>

                <div className='flex justify-between gap-1 items-center'>
                    <span>Taken Leave</span>
                    <span>6</span>
                </div>

                <div className='border border-black border-opacity-30'></div>

                <div className='flex justify-between gap-1 leaveApprovedColor'>
                    <span>Approved</span>
                    <span>3</span>
                </div>

            </div>

        </div>
    )
}

export const LeaveManagementInfo = () => {
  return (
    <div className='flex flex-col gap-3 rounded-3xl p-4 table-inner-shadow w-full xl:w-[25%] h-[46%] xl:h-full'>

        <h2 className='font-bold text-xl'>Type of Leave</h2>

        <div className='flex flex-row flex-wrap xl:flex-nowrap xl:flex-col justify-between xl:justify-start gap-6 overflow-y-scroll p-2 h-full xl:h-leaveTypeHeight w-full scrollbarnone'>
            {
                leaveTypes.map((leaveType,index)=> 
                    (<LeaveCard leaveHeading={leaveType}></LeaveCard>)
                )
            }
        </div>

        
    </div>
  )
}

export default LeaveManagementInfo;