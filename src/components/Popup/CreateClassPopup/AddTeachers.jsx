// created by sravanthi
import React, { useState } from "react";
import { MdExpandMore } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import abc from "../../../assets/images/profile1.png"; // Example image, replace as needed

// Define teacher options including subject
const teacherOptions = [
  { text: "john", role: "Class Teacher", image: abc },
  { text: "John Doe", subject: "Mathematics", image: abc },
  { text: "Jane Smith", subject: "Science", image: abc },
];

const AddTeachers = ({ allSubjects }) => {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [openSubject, setOpenSubject] = useState(null);

  const handleSelectOption = (subjectIndex, option) => {
    const updatedOptions = { ...selectedOptions, [subjectIndex]: option };
    setSelectedOptions(updatedOptions);
    setOpenSubject(null);
  };

  const toggleDropdown = (index) => {
    setOpenSubject(openSubject === index ? null : index);
  };

  return (
    <section className="flex flex-col justify-between gap-[16px] w-full rounded-[14px] cursor-pointer">
      {allSubjects
        .reduce((rows, subject, index) => {
          if (index % 4 === 0) rows.push([]);
          rows[rows.length - 1].push(subject);
          return rows;
        }, [])
        .map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex gap-3 justify-between text-zinc-600 max-md:flex-wrap"
          >
            {row.map((subject, columnIndex) => (
              <div key={`${rowIndex}-${columnIndex}`} className="relative">
                <div
                  className="flex gap-[8px] justify-between p-[8px] h-[52px] text-center whitespace-nowrap bg-white rounded-[14px] shadow-md cursor-pointer relative"
                  onClick={() => toggleDropdown(rowIndex * 4 + columnIndex)}
                >
                  <div className="flex justify-center items-center w-[178px] text-center">
                    {selectedOptions[rowIndex * 4 + columnIndex] ? (
                      <>
                        <img
                          src={
                            selectedOptions[rowIndex * 4 + columnIndex].image
                          }
                          alt={selectedOptions[rowIndex * 4 + columnIndex].text}
                          className="w-8 h-8 mr-2"
                        />
                        <div className="flex flex-col">
                          <span>
                            {selectedOptions[rowIndex * 4 + columnIndex].text}
                          </span>
                          <span className="text-gray-500">
                            {selectedOptions[rowIndex * 4 + columnIndex].role ||
                              `${subject.name} Teacher`}
                          </span>
                        </div>
                      </>
                    ) : (
                      subject.name
                    )}
                  </div>
                  <div className="flex justify-center items-center rounded-[4px]">
                    <MdExpandMore size={24} />
                  </div>
                </div>
                {openSubject === rowIndex * 4 + columnIndex && (
                  <div className="absolute left-0 gap-[6px] mt-1 flex flex-col w-[100%] bg-white border-gray-200 rounded-[14px] shadow-primary z-10">
                    {teacherOptions.map((option, optionIndex) => (
                      <div
                        key={optionIndex}
                        className="p-2 gap-2 shadow-primary m-1 rounded-[14px] hover:bg-blue-100"
                        onClick={() =>
                          handleSelectOption(rowIndex * 4 + columnIndex, option)
                        }
                      >
                        <div className="flex items-center justify-start gap-4">
                          {option.image && (
                            <img
                              src={option.image}
                              alt={option.text}
                              className="w-8 h-8"
                            />
                          )}
                          <div className="flex flex-col shrink-0">
                            <span className="text-gray-900 font-bold">
                              {option.text}
                            </span>
                            {/* Set role as "Class Teacher" for the first option */}
                            {option.role === "Class Teacher" ? (
                              <span className="text-gray-500">
                                {option.role}
                              </span>
                            ) : (
                              <span className="text-gray-500">
                                {subject.name} Teacher
                              </span>
                            )}
                          </div>
                          {option.role === "Class Teacher" && (
                            <FaStar className="text-yellow-500 ml-4" />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {row.length < 4 && <div className="flex-grow" />}
          </div>
        ))}
    </section>
  );
};

export default AddTeachers;
