import { useEffect, useState } from "react";
import styles from "../../styles/MainComponent.module.css";
import EnrollmentButtons from "../../components/Buttons/EnrollmentButtons/EnrollmentButtons";
import EnrollmentTable from "../../components/Tables/EnrollmentTable/EnrollmentTable";
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import ExamListButtons from "../../components/Buttons/ExamListButtons/ExamListButtons";
import ExamListTable from "../../components/Tables/ExamListTable/ExamListTable";

// const pathname = useLocation().pathname;

const ExamList = () => {
  const [refetch, setRefetch] = useState(false);

  function handleEnrollRefetch() {
    setRefetch((prev) => !prev);
  }

  useEffect(() => {
    document.title = "Exam List";
    return () => {
      document.title = "School";
    };
  }, []);

  const ExamListColumnArr = [
    {
      label: "S.No",
      value: "SNo",
      downicon: <MdOutlineKeyboardArrowDown />,
      upicon: <MdOutlineKeyboardArrowUp />,
    },
    {
      label: "Classes",
      value: "classes1,classes2,classes3",
      downicon: <MdOutlineKeyboardArrowDown />,
      upicon: <MdOutlineKeyboardArrowUp />,
    },
    {
      label: "Exam Title",
      value: "examTitle",
      downicon: <MdOutlineKeyboardArrowDown />,
      upicon: <MdOutlineKeyboardArrowUp />,
    },
    {
      label: "Term Name",
      value: "termName",
      downicon: <MdOutlineKeyboardArrowDown />,
      upicon: <MdOutlineKeyboardArrowUp />,
    },
    {
      label: "Start Date",
      value: "startDate",
      downicon: <MdOutlineKeyboardArrowDown />,
      upicon: <MdOutlineKeyboardArrowUp />,
    },
    {
      label: "End Date",
      value: "endDate",
      downicon: <MdOutlineKeyboardArrowDown />,
      upicon: <MdOutlineKeyboardArrowUp />,
    },
    {
      label: "Timings",
      value: "timings",
      downicon: <MdOutlineKeyboardArrowDown />,
      upicon: <MdOutlineKeyboardArrowUp />,
    },
  ];

  const [examListColumn, setExamListColumn] = useState(ExamListColumnArr);
  const [examList, setExamList] = useState([]);

  function handleDeleteEnrollDetails() {
    setExamList([]);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/examList");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();

        setExamList(jsonData);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [refetch]);

  const handleAddExamDetails = (newDetails) => {
    const updatedDetailsArray = [...examList];
    updatedDetailsArray.push({
      // id: Math.random(),
      ...newDetails,
    });
    setExamList(updatedDetailsArray);
    setRefetch(!refetch);
  };

  

  return (
    <div
      // className={styles.container}
      className="flex flex-col gap-4 w-full overflow-hidden rounded-2xl"
    >
      <ExamListButtons
        
        examList={examList}
        handleDeleteEnrollDetails={handleDeleteEnrollDetails}
        setExamList={setExamList}
        handleAddExamDetails={handleAddExamDetails}
        setRefetch={setRefetch}
        
      />
      <ExamListTable
        examListColumn={examListColumn}
        examList={examList}
        
        // setEnrollmentDetails={setEnrollmentDetails}
        // setRefetch={setRefetch}
      />
    </div>
  );
};

export default ExamList;
