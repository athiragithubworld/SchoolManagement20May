import {useEffect,useState} from 'react';
import styles from '../../styles/MainComponent.module.css'
import EnrollmentButtons from "../../components/Buttons/EnrollmentButtons/EnrollmentButtons"
import EnrollmentTable from '../../components/Tables/EnrollmentTable/EnrollmentTable';
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";

// const pathname = useLocation().pathname;



const EnrollmentDashboard = () => {

const [refetch, setRefetch] = useState(false);

  
  function handleEnrollRefetch() {
    
    setRefetch((prev) => !prev);
  }

    useEffect(()=>{
        document.title="Admission"
        return ()=>{
          document.title="School"
        };
    }, []);
  
  
      
      const EnrollmentColumnArr = [
        {
          label: "Enroll.no",
          value: "enrollNumber",
          downicon: <MdOutlineKeyboardArrowDown />,
          upicon: <MdOutlineKeyboardArrowUp />,
        },
        {
          label: "Name",
          value: "firstName",
          downicon: <MdOutlineKeyboardArrowDown />,
          upicon: <MdOutlineKeyboardArrowUp />,
        },
        {
          label: "Class",
          value: "class",
          downicon: <MdOutlineKeyboardArrowDown />,
          upicon: <MdOutlineKeyboardArrowUp />,
        },
        {
          label: "Father's Name",
          value: "fatherName",
          downicon: <MdOutlineKeyboardArrowDown />,
          upicon: <MdOutlineKeyboardArrowUp />,
        },
        {
          label: "Phone No",
          value: "fatherMobileNo",
          downicon: <MdOutlineKeyboardArrowDown />,
          upicon: <MdOutlineKeyboardArrowUp />,
        },
        {
          label: "Status",
          value: "status",
          downicon: "",
          upicon: "",
        },
      ];
     

      const [enrollmentColumn, setEnrollmentColumn] = useState(EnrollmentColumnArr);
      const [enrollmentdetails, setEnrollmentDetails] =useState([]);
      
      
    function handleDeleteEnrollDetails() {
      setEnrollmentDetails([]) 
    }
   
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:4000/StudentEnrollDetails"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();

        setEnrollmentDetails(jsonData);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [refetch]);

const handleAddStudentDetails = (newDetails) => {
  const updatedDetailsArray = [...enrollmentdetails];
  updatedDetailsArray.push({
    // id: Math.random(),
    ...newDetails,
  });
  setEnrollmentDetails(updatedDetailsArray);
  setRefetch(!refetch)
  };
  
//   function handleUpdate(){
// setRefetch(!refetch);
//   }

  return (
    <div
      // className={styles.container}
      className="flex flex-col gap-4 w-full overflow-hidden rounded-2xl"
    >
      <EnrollmentButtons
        // handleEnrollColumn={handleEnrollColumn}
        enrollmentdetails={enrollmentdetails}
        handleDeleteEnrollDetails={handleDeleteEnrollDetails}
        setEnrollmentDetails={setEnrollmentDetails}
        handleAddStudentDetails={handleAddStudentDetails}
        setRefetch={setRefetch}
        // handleUpdate={handleUpdate}
      />
      <EnrollmentTable
        enrollmentColumn={enrollmentColumn}
        enrollmentdetails={enrollmentdetails}
        // handleEnrollRefetch={handleEnrollRefetch}
        setEnrollmentDetails={setEnrollmentDetails}
        setRefetch={setRefetch}
      />
    </div>
  );
}

export default EnrollmentDashboard
