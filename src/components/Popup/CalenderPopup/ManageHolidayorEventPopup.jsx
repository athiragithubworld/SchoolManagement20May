import { useState } from "react"


const ManageHolidayorEventPopup = ({onClose}) => {

    const [mode,setMode] = useState("holiday");
  return (
    <div className="flex flex-col bg-white w-[641px] h-[421px] rounded-3xl p-8 gap-6">
        <h2 className="font-bold text-base">Manage Holidays or Event</h2>
      <div className="flex justify-center gap-12 text-lg">
        <span className="flex items-center gap-1">
        <input type="radio" name="holiday" className="h-5 w-5" value="holiday" checked={mode === "holiday"} onChange={(e)=>setMode(e.target.value)} /> <label htmlFor="holiday" className="">Holiday</label>
        </span>
        <span className="flex items-center gap-1">
        <input type="radio" name="event" className="h-5 w-5" value="event" checked={mode === "event"} onChange={(e)=>setMode(e.target.value)}/> <label htmlFor="event">Event</label>
        </span>
      </div>
      <div className="flex  items-center justify-between text-lg">
        <label htmlFor="holidayType">Holiday Type</label>
        <select className="w-[449px] rounded-xl p-2 shadow-primary h-12">
            <option value="">Festival</option>
            <option value="">National</option>
            <option value="">Govt.</option>
        </select>
      </div>
      <div className="flex  items-center justify-between text-lg">
        <label htmlFor="holidayName">Name</label>
        <input type="text" name="holidayName"
         className="w-[449px] rounded-xl p-2 shadow-primary h-12"
         placeholder="Holiday Name"
         />
      </div>
      <div className="flex justify-between gap-6 text-lg">
        <div className="flex items-center justify-between w-[55%]">
            <label>From Date</label>
            <input type="date"  className="w-44 rounded-xl p-2 shadow-primary h-12"  />
        </div>
        <div className="flex items-center w-[45%] justify-between">
            <label>To Date</label>
            <input type="date"  className="w-44 rounded-xl p-2 shadow-primary h-12"  />
        </div>
      </div>
      <div className="flex justify-center gap-4 text-lg items-center">
        <button className="border-[1px] border-[#A6A6A6] w-32 h-10 text-lg p-2 rounded-xl" onClick={()=>onClose()}>Cancel</button>
        <button className="text-white bg-[#009dff] w-32 h-10 p-2 rounded-xl" onClick={()=>onClose()}>Save</button>
      </div>
    </div>
  )
}

export default ManageHolidayorEventPopup
