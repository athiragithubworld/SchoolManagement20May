import  { useState } from "react"; // Importing necessary dependencies from React
import classes from "../../../styles/AddNewFeeDetails.module.css"; // Importing CSS module for styling
import { BsThreeDotsVertical } from "react-icons/bs";
import { useRef, useEffect } from "react";
import { GoDownload } from "react-icons/go";
import { RiDeleteBin6Line } from "react-icons/ri";
// import { AiOutlinePrinter } from "react-icons/ai";
import { PiNotePencilLight } from "react-icons/pi";
import usePopupDownloader from "../../CustomHooks/DownloadPopup";
///////Made by Abhishek Kumar//////

// Functional component TimeSettingModal
export default function AddNewFeeDetails({  closeModal,rowDetails,handleAddNew,updateEachFeeDetails,handleDeleteEachFeeDetails,handleAlert,studentFeedetails }) {
  const [className, setClassName] = useState();
  const [section, setSection] = useState();
  const [admissionForm,setAdmissionForm] = useState();
  const [tcfees,setTcfees] = useState();
  const [annual,setAnnual] = useState();
  const [admission,setAdmission] = useState();
  const [tution, setTution] = useState();
  const [books, setBooks] = useState();
  const [uniform, setUniform] = useState();
  const [transport, setTransport] = useState();
  const [feeEdit,setFeeEdit] = useState(false);
  const [feeDate,setFeeDate] = useState();   //adds current date to the data set
  const download = usePopupDownloader();

  useEffect(()=>{                                   //function to show popup with row details
    if(rowDetails){    
        setClassName(rowDetails.className);
        setSection(rowDetails.section);
        setAdmission(rowDetails.admission);
        setAdmissionForm(rowDetails.admissionForm);

        setAnnual(rowDetails.annual);

        setBooks(rowDetails.books);

        setTransport(rowDetails.transport);

        setUniform(rowDetails.uniform);

        setTution(rowDetails.tution);

        setTcfees(rowDetails.tcfees);
        setFeeEdit(true);  
        
        setFeeDate(rowDetails.date);      
  }
  if(!rowDetails)
    { let presentDate = new Date();
      let final = presentDate.toLocaleDateString();
      setFeeDate(final);
    }

   
       
    
},[])

  
 

  const handleSubmit=(e)=>{
    e.preventDefault();
   
    if (
      className &&
      section &&
      tution &&
      books &&
      uniform &&
      transport &&
      admission &&
      admissionForm &&
      tcfees &&
     annual
    ) {
      // Prepare form data
      const formData = {
        className,
        section,
        tution,
        uniform,
        books,
        transport,
        admission ,
      admissionForm ,
      tcfees ,
     annual,
     feeDate
      };
     let id = null;
      if(rowDetails)
        {
          id = rowDetails.id ;
        }
      // Call the function to post form data
      postFormData(formData,id);    
      
    } else {
      alert("Please fill in all required fields");
    }
  }

  function handleCloseModal() {   
    closeModal(false);
  }

   // Function to post form data after adding or updating
   const postFormData = (formData,id) => {
    if(id!==null){                           
      fetch(`http://localhost:4000/StudentFeeDetails/${id}`, {    //for updating data in the table
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          
          closeModal(true);
         
         handleAlert("success","Data is updated");
        })
        .catch((error) => {
          console.error("Error:", error);
          handleAlert("fail","Failed to update data");
        });
        
        updateEachFeeDetails(formData,id);
    }
       else
        {  
          let showPost = true;
          for(let i=0;i<studentFeedetails.length;i++)   //for checking if the class and section already exist in the table
            {
              if(studentFeedetails[i].className === formData.className && studentFeedetails[i].section === formData.section)
                {
                  alert("class and section already exist,change class or section");
                  showPost=false;
                }
            }            

            if(showPost)
                    { fetch("http://localhost:4000/StudentFeeDetails", {
                       method: "POST",
                       headers: {
                         "Content-Type": "application/json",
                       },
                       body: JSON.stringify(formData),
                     })
                       .then((response) => response.json())
                       .then((data) => {
                         console.log("Success:", data);

                         closeModal(true);
                         // handleRefetch();
                         handleAlert("success", "Data is posted");
                         // alert("data is posted");
                       })
                       .catch((error) => {
                         console.error("Error:", error);
                         handleAlert("fail", "Failed to save data");
                       });
      
      handleAddNew(formData);}
    }
  };

  const handleDelete=(id)=>{
    const confirm = window.confirm("Are you sure you want to delete this");
    if(confirm === true){
      if(id!==null){
        fetch(`http://localhost:4000/StudentFeeDetails/${id}`, {    //for deleting data in the table
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(null),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success: in deleting",data);
          
          closeModal(true);
         
         
          handleAlert("success","Data row is deleted");
        })
        .catch((error) => {
          console.error("Error:", error);
          handleAlert("fail","Failed to delete data");
        });
        handleDeleteEachFeeDetails(id);
      }}
  }


  const feeEditHandler=()=>{   //function for removing read only mode in popup
      setFeeEdit(!feeEdit);
  }

  const handleDowload=()=>{   //for handling downloads with specific heading
    if(rowDetails){
      const name = `student_feeinfo`;
    const heading =`fee display table`;
    download(rowDetails,name,heading);
  }
  }

  //Function for the top right button popup

  function IconButton({ className }) {
    const [showDropdown, setShowDropdown] = useState(false);
    const ref = useRef(null);
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          setShowDropdown(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);

    return (
      <div className="flex flex-col" ref={ref}>
       <div
          onClick={() => setShowDropdown((prevState) => !prevState)}
          className={`flex justify-center items-center p-2 w-10 h-10 bg-white rounded-2xl border border-solid border-stone-300 cursor-pointer ${className}`}
        >
       <BsThreeDotsVertical/>
        </div>
        {showDropdown && (
          <div className="flex flex-col z-10 justify-left pl-2 pr-2 pt-2 pb-2 text-lg leading-9 whitespace-nowrap bg-white rounded-2xl border border-solid border-stone-300 absolute mt-12 ml-[-80px]">
            <div
              className={`group flex gap-2 justify-between rounded-xl items-center cursor-pointer hover:bg-[#009dfd] hover:text-white p-1 hover:pl-2 hover:pr-2`}
            >
              <div onClick={handleDowload}>Download</div>
             
              <GoDownload
                className={` group-hover:text-white h-5 w-[17.1px] text-[#a6a6a6]`}
              />
            </div>
          {rowDetails &&  <div onClick={feeEditHandler}
              className={`group flex gap-2 justify-between rounded-xl items-center cursor-pointer hover:bg-[#009dfd] hover:text-white p-1 hover:pl-2 hover:pr-2`}
            >
              <div>Edit</div>
             
              <PiNotePencilLight
                className={` group-hover:text-white h-5 w-[17.1px] text-[#a6a6a6]`}
              />
            </div>}
            <div
              className={`group flex gap-2 justify-between rounded-xl items-center cursor-pointer hover:bg-[#009dfd] hover:text-white p-1 hover:pl-2 hover:pr-2`}
            >
              <div className="" onClick={()=>handleDelete(rowDetails.id)}>Delete</div>
             
              <RiDeleteBin6Line
                className={`group-hover:text-white h-5 w-[17.1px] text-[#a6a6a6]`}
              />
            </div>
          </div>
        )}
      </div>
    );
  }



  return (
    <div className="flex-col bg-white w-[850px] lg:w-[900px] h-[563px] p-6 rounded-3xl">
      <div className="w-[800px] lg:w-[832px] h-[421px]">
        <form className="">
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-lg">Add New Fees Details</h4>
            <IconButton className="" />
          </div>
          <div className="flex-col w-[800px] lg:w-[832px] h-[357px] mt-2">
            <div className="flex w-full gap-6 mb-6 ">
              <div className="flex w-1/2 items-center justify-between">
                <label>Class</label>
                <select 
                className='shadow-primary rounded-2xl p-3 border text-center border-gray-300 w-56 lg:w-64'     //Option mode disabled for now
                  style={{ marginLeft: "10px" }}
                  onChange={(e) => setClassName(e.target.value)}
                  required
                  value={className}
                  disabled={feeEdit}
                  // defaultValue={"UKG"}
                >
                  <option value="" selected>
                    Class Name
                  </option>
                  <option value="Pre KG" className="">Pre KG</option>
                  <option value="LKG">LKG</option>
                  <option value="UKG">UKG</option>
                  <option value="1st">1st</option>
                  <option value="2nd">2nd</option>
                  <option value="3rd">3rd</option>
                  <option value="4th">4th</option>
                  <option value="5th">5th</option>
                  <option value="6th">6th</option>
                  <option value="7th">7th</option>
                  <option value="8th">8th</option>
                  <option value="9th">9th</option>
                  <option value="10th">10th</option>
                  <option value="11th">11th</option>
                  <option value="12th">12th</option>
                </select>

                {/* <input
                  type="text"
                  value={className}
                  placeholder="Class Name"
                  onChange={(e) => setClassName(e.target.value)}
                  required
                  className="shadow-primary rounded-2xl p-3 border text-center border-gray-300 w-56 lg:w-64"
                  readOnly={feeEdit}
                  autoComplete="off"
                /> */}
              </div>
              <div className="flex w-1/2 h-14 items-center justify-between">
                <label>Section</label>
                <select 
                className='shadow-primary rounded-2xl p-3 border text-center border-gray-300 w-56 lg:w-64'     //Option mode disabled for now
                  style={{ marginLeft: "10px" }}
                  onChange={(e) => setSection(e.target.value)}
                  required
                  value={section}
                  disabled={feeEdit}
                  // defaultValue={"A"}
                >
                  <option value="" selected>Select Section</option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                  <option value="D">D</option>
                  <option value="E">E</option>
                </select>
                {/* <input
                  type="text"
                  value={section}
                  placeholder="A"
                  onChange={(e) => setSection(e.target.value)}
                  required
                  className="shadow-primary text-center rounded-2xl p-3 border border-gray-300 w-56 lg:w-64"
                  readOnly={feeEdit}
                  autoComplete="off"
                /> */}
              </div>
            </div>
            <div className="w-full gap-6 flex mb-6">
              <div className="flex w-1/2 h-14 items-center justify-between">
                <label className="w-28">Admission Form Fees </label>
                <input
                  type="number"
                  value={admissionForm}
                  placeholder="1200"
                  onChange={(e) => setAdmissionForm(e.target.value)}
                  required
                  className="shadow-primary text-center rounded-2xl p-3 border border-gray-300 w-56 lg:w-64"
                  readOnly={feeEdit}
                  autoComplete="off"
                />
              </div>

              <div className="flex w-1/2 h-14 items-center justify-between">
                <label>TC Fees</label>
                <input
                  type="number"
                  value={tcfees}
                  placeholder="200"
                  onChange={(e) => setTcfees(e.target.value)}
                  required
                  className="shadow-primary text-center rounded-2xl p-3 border border-gray-300 w-56 lg:w-64"
                  readOnly={feeEdit}
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="w-full gap-6 flex mb-6">
              <div className="flex w-1/2 h-14 items-center justify-between">
                <label>Admission Fees</label>
                <input
                  style={{ marginLeft: "10px" }}
                  type="number"
                  value={admission}
                  placeholder="1400"
                  onChange={(e) => setAdmission(e.target.value)}
                  required
                  className="shadow-primary rounded-2xl p-3 w-56 lg:w-64 border border-gray-300 text-center"
                  readOnly={feeEdit}
                  autoComplete="off"
                />
              </div>
              <div className="flex w-1/2 h-14 items-center justify-between">
                <label>Annual Fees</label>
                <input
                  type="number"
                  value={annual}
                  placeholder="20000"
                  onChange={(e) => setAnnual(e.target.value)}
                  required
                  className="shadow-primary rounded-2xl p-3 w-56 text-center lg:w-64 border border-gray-300"
                  readOnly={feeEdit}
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="w-full gap-6 flex mb-6">
              <div className="flex w-1/2 h-14 items-center justify-between">
                <label>Books Fees</label>
                <input
                  type="number"
                  value={books}
                  placeholder="2400"
                  onChange={(e) => setBooks(e.target.value)}
                  required
                  className="shadow-primary text-center rounded-2xl p-3 border border-gray-300 w-56 lg:w-64"
                  readOnly={feeEdit}
                  autoComplete="off"
                />
              </div>
              <div className="flex w-1/2 h-14 items-center justify-between">
                <label>Transportation Fees</label>
                <input
                  type="number"
                  value={transport}
                  placeholder="1350"
                  onChange={(e) => setTransport(e.target.value)}
                  required
                  className="shadow-primary text-center rounded-2xl p-3 border border-gray-300 w-56 lg:w-64"
                  readOnly={feeEdit}
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="w-full gap-6 flex mb-6">
              <div className="flex w-1/2 h-14 items-center justify-between">
                <label>Uniform Fees</label>
                <input
                  style={{ marginLeft: "10px" }}
                  type="number"
                  value={uniform}
                  placeholder="1200"
                  onChange={(e) => setUniform(e.target.value)}
                  required
                  className="shadow-primary text-center rounded-2xl p-3 border border-gray-300 w-56 lg:w-64"
                  readOnly={feeEdit}
                  autoComplete="off"
                />
              </div>
              <div className="flex w-1/2 h-14 items-center justify-between">
                <label>Tuition Fees</label>
                <input
                  type="number"
                  value={tution}
                  placeholder="4500"
                  onChange={(e) => setTution(e.target.value)}
                  required
                  className="shadow-primary text-center rounded-2xl p-3 border border-gray-300 w-56 lg:w-64"
                  readOnly={feeEdit}
                  autoComplete="off"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="flex items-center justify-center mt-8 gap-4">
        <button
          className="w-32 border-[1px] border-[#A6A6A6] p-2 rounded-xl"
          onClick={handleCloseModal}
        >
          Cancel
        </button>
        <button
          className="w-32 border-1 bg-[#009dff] text-white p-2 rounded-xl"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
