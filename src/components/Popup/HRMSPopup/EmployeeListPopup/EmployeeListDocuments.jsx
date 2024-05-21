// Created by Swati 
//made responsive by sravanthi
//updated functionality by gunjan
//updated functionality and converted to tailwind by Abhishek
import { useRef } from "react";
import { IoIosAdd } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

export default function EmployeeListDocuments({ fileImages, uploadFileHandler }) {
  const inputRefs = {
    photo: useRef(),
    aadhaar: useRef(),
    pan: useRef(),
    resume: useRef(),
    ug: useRef(),
    pg: useRef(),
    cv: useRef(),
    document: useRef(),
  };

  function handleFileChange(event, currFileName) {
    event.preventDefault();
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      uploadFileHandler(currFileName, reader.result);
    };
    reader.readAsDataURL(file);
  }

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event, currFileName) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      uploadFileHandler(currFileName, reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleDragLeave = (currentFileName) => {
    uploadFileHandler(currentFileName, "");
  };

  const documentTypes = [
    { ref: inputRefs.photo, name: "photo", label: "Passport size Photo" },
    { ref: inputRefs.aadhaar, name: "aadhaar", label: "Aadhaar Card" },
    { ref: inputRefs.pan, name: "pan", label: "PAN Card" },
    { ref: inputRefs.resume, name: "resume", label: "Resume" },
    { ref: inputRefs.ug, name: "UGcertificate", label: "UG Certificate" },
    { ref: inputRefs.pg, name: "PGcertificate", label: "PG Certificate" },
    { ref: inputRefs.cv, name: "cv", label: "CV" },
    { ref: inputRefs.document, name: "addDocument", label: "Add Document" },
  ]

  return (
    <form className="overflow-y-auto h-[400px] md:h-auto lg:h-[350px] object-contain">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 object-contain">
        {documentTypes.map(({ ref, name, label }) => (
          <div key={name} className="border rounded-xl p-2 relative">
            <div
              className="flex justify-center items-center rounded-xl shadow-primary h-28 cursor-pointer relative object-contain"
              onClick={() => ref.current.click()}
              onDragOver={handleDragOver}
              onDrop={(event) => handleDrop(event, name)}
              onDragLeave={() => handleDragLeave(name)}
            >
              {fileImages[name] && (
                <>
                  <img src={fileImages[name]} alt={name} className="w-full h-full object-cover" />
                  <button
                  type="button"
                    className="absolute top-1 right-1 bg-red-600 text-white cursor-pointer rounded-full p-1"
                    onClick={(e) => {
                      e.stopPropagation();
                      const confirmDelete = window.confirm('Are you sure you want to delete this item?');
                      if (confirmDelete){
                        uploadFileHandler(name, "");
                      }
                     
                    }}
                  >
                    <IoMdClose className="w-4 h-4" />
                  </button>
                </>
              )}
              <input
                ref={ref}
                accept="image/*"
                type="file"
                className="hidden"
                onChange={(event) => handleFileChange(event, name)}
              />
              {!fileImages[name] && (
                <div className="flex items-center justify-center h-full">
                  <IoIosAdd className="text-gray-400 text-6xl" />
                </div>
              )}
            </div>
            <p className="text-center mt-2">{label}</p>
          </div>
        ))}
      </div>
    </form>
  );
}
