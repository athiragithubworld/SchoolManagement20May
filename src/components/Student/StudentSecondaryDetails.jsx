
//THIS COMPONENT WAS CREATED BY HAIDER


import React from 'react'


//PROPS COMING FROM STUDENTDETAIL PAGE
export const SecondaryDetails = ({editable,selectedStudent,setSelectedStudent }) => {

  function changeHandler(event){
    setSelectedStudent( prevDetails => {
      return {
        ...prevDetails,
        [event.target.name] : event.target.value
      }
    })
  }

  function alphabetChangeHandler(event){

    if (/^[a-zA-Z\s]*$/.test(event.target.value)) {
      setSelectedStudent( prevDetails => {
        return {
          ...prevDetails,
          [event.target.name] : event.target.value
        }
      })
    }
  }

  return (
    <div className='w-full rounded-2xl border-[1px] flex h-fit p-4 flex-col gap-6 shadow-containerShadow'>

      <div className='w-full flex flex-col gap-5'>
    
        <div className='flex place-items-start'><p className='text-lg font-bold'>Parent Details</p></div>

        <div className='grid grid-cols-2 lg:grid-cols-3 gap-4 lg:justify-between'>

          <div className='flex flex-col gap-4'>

            <div className='flex items-center gap-1'>
                <div className='w-32 h-fit flex items-center font-medium text-left text-base'>Father Name</div>
                <input 
                readOnly={!editable}
                autoComplete='off'
                className="w-full h-12 border-[1px] shadow-primary rounded-2xl p-2 text-center"
                name = "FatherName"
                onChange={alphabetChangeHandler}
                value={selectedStudent["FatherName"]}
                />
            </div>

            <div className='flex items-center gap-1'>
                <div className='w-32 h-fit flex items-center font-medium text-left text-base'>MobileNo</div>
                <input 
                readOnly={!editable}
                autoComplete='off'
                type='number'
                className="w-full h-12 border-[1px] shadow-primary rounded-2xl p-2 text-center"
                name = "FatherMobileNo"
                onChange={changeHandler}
                value={selectedStudent["FatherMobileNo"]?.slice(0,10)}
                />
            </div>

            <div className='flex items-center gap-1'>
                <div className='w-32 h-fit flex items-center font-medium text-left text-base'>E-mail</div>
                <input 
                readOnly={!editable}
                autoComplete='off'
                type='email'
                className="w-full h-12 border-[1px] shadow-primary rounded-2xl p-2 text-center"
                name = "FatherEmail"
                onChange={changeHandler}
                value={selectedStudent["FatherEmail"]}
                />
            </div>

            <div className='flex items-center gap-1'>
                <div className='w-32 h-fit flex items-center font-medium text-left text-base'>Occupation</div>
                <input 
                readOnly={!editable}
                autoComplete='off'
                className="w-full h-12 border-[1px] shadow-primary rounded-2xl p-2 text-center"
                name = "FatherOccupation"
                onChange={alphabetChangeHandler}
                value={selectedStudent["FatherOccupation"]}
                />
            </div>

          </div>


          <div className='flex flex-col gap-4'>

            <div className='flex items-center gap-1'>
                <div className='w-32 h-fit flex items-center font-medium text-left text-base'>Mother Name</div>
                <input 
                readOnly={!editable}
                autoComplete='off'
                className="w-full h-12 border-[1px] shadow-primary rounded-2xl p-2 text-center"
                name = "MotherName"
                onChange={alphabetChangeHandler}
                value={selectedStudent["MotherName"]}
                />
            </div>

            <div className='flex items-center gap-1'>
                <div className='w-32 h-fit flex items-center font-medium text-left text-base'>MobileNo</div>
                <input 
                readOnly={!editable}
                autoComplete='off'
                type='number'
                className="w-full h-12 border-[1px] shadow-primary rounded-2xl p-2 text-center"
                name = "MotherMobileNo"
                onChange={changeHandler}
                value={selectedStudent["MotherMobileNo"]?.slice(0,10)}
                />
            </div>

            <div className='flex items-center gap-1'>
                <div className='w-32 h-fit flex items-center font-medium text-left text-base'>E-mail</div>
                <input 
                readOnly={!editable}
                autoComplete='off'
                type='email'
                className="w-full h-12 border-[1px] shadow-primary rounded-2xl p-2 text-center"
                name = "MotherEmail"
                onChange={changeHandler}
                value={selectedStudent["MotherEmail"]}
                />
            </div>

            <div className='flex items-center gap-1'>
                <div className='w-32 h-fit flex items-center font-medium text-left text-base'>Occupation</div>
                <input 
                readOnly={!editable}
                autoComplete='off'
                className="w-full h-12 border-[1px] shadow-primary rounded-2xl p-2 text-center"
                name = "MotherOccupation"
                onChange={alphabetChangeHandler}
                value={selectedStudent["MotherOccupation"]}
                />
            </div>

          </div>


          <div className='flex flex-col gap-4'>

              <div className='flex items-center gap-1'>
                  <div className='w-32 h-fit flex items-center font-medium text-left text-base'>Guardian Name</div>
                  <input 
                  readOnly={!editable}
                  autoComplete='off'
                  className="w-full h-12 border-[1px] shadow-primary rounded-2xl p-2 text-center"
                  name = "GuardianName"
                  onChange={alphabetChangeHandler}
                  value={selectedStudent["GuardianName"]}
                  />
              </div>

              <div className='flex items-center gap-1'>
                  <div className='w-32 h-fit flex items-center font-medium text-left text-base'>MobileNo</div>
                  <input 
                  readOnly={!editable}
                  autoComplete='off'
                  type='number'
                  className="w-full h-12 border-[1px] shadow-primary rounded-2xl p-2 text-center"
                  name = "GuardianMobileNo"
                  onChange={changeHandler}
                  value={selectedStudent["GuardianMobileNo"]?.slice(0,10)}
                  />
              </div>

              <div className='flex items-center gap-1'>
                  <div className='w-32 h-fit flex items-center font-medium text-left text-base'>E-mail</div>
                  <input 
                  readOnly={!editable}
                  autoComplete='off'
                  type='email'
                  className="w-full h-12 border-[1px] shadow-primary rounded-2xl p-2 text-center"
                  name = "GuardianEmail"
                  onChange={changeHandler}
                  value={selectedStudent["GuardianEmail"]}
                  />
              </div>

              <div className='flex items-center gap-1'>
                  <div className='w-32 h-fit flex items-center font-medium text-left text-base'>Occupation</div>
                  <input 
                  readOnly={!editable}
                  autoComplete='off'
                  className="w-full h-12 border-[1px] shadow-primary rounded-2xl p-2 text-center"
                  name = "GuardianOccupation"
                  onChange={alphabetChangeHandler}
                  value={selectedStudent["GuardianOccupation"]}
                  />
              </div>

          </div>

        </div>

      </div>

      <div className='w-full flex flex-col gap-5'>
    
          <div className='flex place-items-start w-full'><p className='text-lg font-bold'>Current Address</p></div>

          <div className='flex items-center w-full gap-1'>
              <div className='w-[100px] h-fit flex items-center font-medium text-left'>Address</div>
              <input
              readOnly={!editable}
              autoComplete='off'
              className="w-full h-12 border-[1px] shadow-primary rounded-2xl p-2 text-center"
              name = "CurrentAddress"
              onChange={changeHandler}
              value={selectedStudent["CurrentAddress"]}
              />
          </div>

          <div className='flex flex-wrap gap-4 justify-between'>
            
              <div className="flex gap-1 items-center">
                <label className="w-[130px] h-fit flex items-center font-medium text-left text-base">Pin Code</label>
                <input className="w-full h-12 border-[1px] shadow-primary rounded-2xl p-2 text-center"
                  readOnly={!editable}
                  type="number"
                  onChange={changeHandler}
                  name = "CurrentPinCode"
                  autoComplete="off"
                  value={selectedStudent["CurrentPinCode"]?.slice(0,6)}
                />
              </div>

              <div className="flex gap-1 items-center">
                <label className="w-[130px] h-fit flex items-center font-medium text-left text-base">City</label>
                <input className="w-full h-12 border-[1px] shadow-primary rounded-2xl p-2 text-center"
                  readOnly={!editable}
                  type="text" 
                  onChange={alphabetChangeHandler}
                  name = "CurrentCity"
                  autoComplete="off"
                  value={selectedStudent["CurrentCity"]}
                />
              </div>

              <div className="flex gap-1 items-center">
                <label className="w-[130px] h-fit flex items-center font-medium text-left">State</label>
                <input className="w-full h-12 border-[1px] shadow-primary rounded-2xl p-2 text-center"
                  readOnly={!editable}
                  type="text" 
                  onChange={alphabetChangeHandler}
                  name = "CurrentState"
                  autoComplete="off"
                  value={selectedStudent["CurrentState"]}
                />
              </div>

          </div>

      </div>

      <div className='w-full flex flex-col gap-4'>
    
        <div className='flex place-items-start'><p className='text-lg font-bold'>Permanent Address</p></div>

        <div className='flex items-center w-full gap-1'>
            <div className='w-[100px] h-fit flex items-center font-medium text-left'>Address</div>
            <input 
            readOnly={!editable}
            autoComplete='off'
            className="w-full h-12 border-[1px] shadow-primary rounded-2xl p-2 text-center"
            name = "PermanentAddress"
            onChange={changeHandler}
            value={selectedStudent["PermanentAddress"]}
            />
        </div>

        <div className='flex flex-wrap gap-4 justify-between'>

            <div className="flex gap-1 items-center">
              <label className="w-[130px] h-fit flex items-center font-medium text-left text-base">Pin Code</label>
              <input className="w-full h-12 border-[1px] shadow-primary rounded-2xl p-2 text-center"
                readOnly={!editable}
                type="number"
                onChange={changeHandler}
                name = "PermanentPinCode"
                autoComplete="off"
                value={selectedStudent["PermanentPinCode"]?.slice(0,6)}
              />
            </div>

            <div className="flex gap-1 items-center">
              <label className="w-[130px] h-fit flex items-center font-medium text-left text-base">City</label>
              <input className="w-full h-12 border-[1px] shadow-primary rounded-2xl p-2 text-center"
                readOnly={!editable}
                type="text" 
                onChange={alphabetChangeHandler}
                name = "PermanentCity"
                autoComplete="off"
                value={selectedStudent["PermanentCity"]}
              />
            </div>

            <div className="flex gap-1 items-center">
              <label className="w-[130px] h-fit flex items-center font-medium text-left">State</label>
              <input className="w-full h-12 border-[1px] shadow-primary rounded-2xl p-2 text-center"
                readOnly={!editable}
                type="text" 
                onChange={alphabetChangeHandler}
                name = "PermanentState"
                autoComplete="off"
                value={selectedStudent["PermanentState"]}
              />
            </div>
          
        </div>

      </div>

    </div>
  )
}

export default SecondaryDetails;