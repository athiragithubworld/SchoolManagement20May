// Created by Athira
//made responsive by sravanthi
//updated functionality by gunjan

// Define a functional component EducationDetailsForm that receives educationData as props

function EducationDetailsForm({ educationData, handleChange,educationDataSaved,handleInputBlur}) {
  return (
    <>
      {/* Map over educationData array to render input fields for each education */}
      {educationData.map((education, index) => (
        <div
          key={index}
          className="flex gap-5 justify-center mt-4 text-base leading-5 text-customblack max-md:flex-wrap max-md:mb-2 max-sm:justify-start maxsm:w-full"
        >
          {/* Input field for school */}
          <div className="flex gap-2 text-center whitespace-nowrap">
            <label
              htmlFor={`${education.type}-school`}
              className="gap-0 my-auto w-[67px] max-sm:-ml-2"
            >
              {education.type}
            </label>
            <input
            type='text'
              id={`${education.type}-school`}
              autoComplete="off"
              className="shrink-0 gap-0 bg-white  text-center rounded-2xl shadow-primary h-[52px] w-[170px] max-md:ml-[2.1rem] max-sm:w-[410px] "
              onChange={(e) => {
                // Allow only alphabetic characters
                if (/^[a-zA-Z\s]*$/.test(e.target.value) || !e.target.value) {
                  handleChange(e);
                }}}
              name={`${education.type}${education.degree}`}
              value={educationDataSaved[`${education.type}${education.degree}`]}
            />
          </div>
          <div className="flex gap-2 text-center whitespace-nowrap">
            <label
              htmlFor={`${education.type}-degree`}
              className="gap-0 my-auto w-[32px] "
            >
              {education.degree}
            </label>
            <input
              id={`${education.type}-degree`}
              type='text'
              autoComplete="off"
              className="shrink-0 gap-0 bg-white rounded-2xl text-center shadow-primary h-[52px] w-[170px] max-md:ml-[2.5rem] max-sm:w-[410px] max-sm:ml-[65px]"
              onChange={(e) => {
                // Allow only alphabetic characters
                if (/^[a-zA-Z\s]*$/.test(e.target.value) || !e.target.value) {
                  handleChange(e);
                }}}
              name={education.degree}
              value={educationDataSaved[education.degree]}
            />
          </div>
          {/* Input field for year of passing */}
          <div className="flex gap-2">
            <label htmlFor={`${education.type}-year`} className="gap-0 my-auto w-[50px] max-md:ml-1  max-sm:ml-0">
              Year of Passing
            </label>
            <input
            type='number'
              id={`${education.type}-year`}
              autoComplete="off"
              className="shrink-0 gap-0 bg-white text-center rounded-2xl shadow-primary h-[52px] w-[170px] max-sm:w-[410px]  max-sm:ml-[2.9rem] max-md:ml-[3rem]"
              onChange={(e) => {
                const newValue = e.target.value;
                if (!newValue || newValue.length <= 4) {
                  handleChange(e);
                }
              }}
              name={`YearOfPassing${education.degree}`}
              value={educationDataSaved[`YearOfPassing${education.degree}`]}
            />
          </div>
          {/* Input field for score */}
          <div className="flex gap-2 whitespace-nowrap">
            <label
              htmlFor={`${education.type}-score`}
              className="gap-0 my-auto w-[77px]"
            >
              Percentage
            </label>
            <input
            type="number"
              id={`${education.type}-score`}
              autoComplete="off"
              className="shrink-0  mb-1 mr-1 gap-0 bg-white rounded-2xl shadow-primary  text-center h-[52px] w-[170px] max-md:ml-[2.5rem] max-sm:w-[410px] max-sm:ml-[60px]"
              onChange={handleChange}
              onBlur={handleInputBlur}
              name={`Score${education.degree}`}
              value={educationDataSaved[`Score${education.degree}`]}
            />
          </div>
        </div>
      ))}
    </>
  );
}


// Define a functional component EducationDetailsPopup
function EducationDetailsPopup({educationDataSaved,setEducationData}) {
  // Define educationData array with educational details
  const educationData = [
    { type: "School", degree: "SSC" },
    { type: "College", degree: "HSC" },
    { type: "University", degree: "UG" },
    { type: "University", degree: "PG" },
  ];
  //to store the user input values
  const handleChange = (event)=>{
    setEducationData(prevDetails => {
      return {
        ...prevDetails,
        [event.target.name] : event.target.value
      }
    })
  }
  const handleInputBlur = (event)=>{
     // Get the input value
     let inputValue = event.target.value.trim();

     // Check if the input value is not empty
     if (inputValue !== '') {
       // Format the input value to two decimal places
       const formattedValue = parseFloat(inputValue).toFixed(2);
       
       // Update the input value with the formatted value
       event.target.value = formattedValue;
       setEducationData(prevDetails => {
        return {
          ...prevDetails,
          [event.target.name] : event.target.value
        }
      })
     }
  }
  return (
    <div className="overflow-y-auto scrollbarnone border-radius-[20px] max-md:flex-wrap max-md:h-[300px] ">
      {/* Section for additional details */}
      <section className="flex gap-5 justify-between max-md:flex-wrap mt-1">
        <div className="flex gap-2">
          <label
            htmlFor="date-of-joining"
            className="gap-0 my-auto text-lg leading-6 text-customblack w-[100px]"
          >
            Date Of Joining
          </label>
           <input
          type="date"
           value={educationDataSaved.DateOfJoining}
           className="justify-center p-3 text-base leading-5 max-sm:mt-1 max-md:mt-1  max-sm:w-[410px] max-md:w-[470px] whitespace-nowrap bg-white rounded-2xl shadow-primary text-neutral-400"
           onChange={handleChange}
           autoComplete="off"
           name="DateOfJoining"
          />
        </div>
        {/* Input field for experience */}
        <div className="flex gap-2 leading-[120%]">
          <label
            htmlFor="experience"
            className="gap-0 my-auto text-lg text-customblack w-[100px]"
          >
            Experience
          </label>
          <input
          type="text"
            id="experience"
            className="justify-center p-3 text-base bg-white rounded-2xl shadow-primary text-neutral-400 max-sm:w-[410px] max-md:w-[470px]  max-md:mr-1 max-sm:mr-0"
            onChange={handleChange}
            name='Experience'
            value={educationDataSaved.Experience}
          />
        </div>
        {/* Input field for pre-leaved school */}
        <div className="flex gap-2 mr-1">
          <label
            htmlFor="pre-leaved-school"
            className="gap-0 my-auto text-lg leading-6 text-customblack w-[100px]"
          >
            Pre-Leaved School
          </label>
          <input
          type='text'
            id="pre-leaved-school"
            className="justify-center p-3 text-base leading-5 whitespace-nowrap bg-white rounded-2xl shadow-primary text-neutral-400 max-md:w-[470px] max-sm:w-[410px]"
            onChange={handleChange}
            name='PreLeavedSchool'
            value={educationDataSaved.PreLeavedSchool}
          />
        </div>
      </section>
      {/* Title for education qualifications */}
      <h2 className="gap-0 mt-4 text-lg font-bold leading-5 text-customblack max-md:flex-wrap max-md:max-w-full">
        Qualification
      </h2>
      {/* Render EducationDetailsForm component with educationData */}
      <EducationDetailsForm educationData={educationData} handleChange={handleChange} educationDataSaved={educationDataSaved} handleInputBlur={handleInputBlur}/>
    </div>
  );
}

export default EducationDetailsPopup;
