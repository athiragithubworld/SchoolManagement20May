import { useRef, useState } from "react";
import classes from "../../../styles/UploadDocumentsPopup.module.css";
import { IoIosAdd } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
//Made by Abhishek Kumar

export default function EnrollStudentDocumentsPopup({
  fileImages,
  setFileImages,
  uploadFileHandler,
}) {
  const aadhaarInputRef = useRef();
  const academicInputRef = useRef();
  const tcInputRef = useRef();
  const birthInputRef = useRef();
  const residentialInputRef = useRef();
  const photoInputRef = useRef();
  const domicileInputRef = useRef();
  const documentInputRef = useRef();

  function handleFileChange(event, currFileName) {
    event.preventDefault();
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      uploadFileHandler(currFileName, reader.result);
    };
    reader.readAsDataURL(file);

    // setFileImages((prevImages)=>([...prevImages ,file]))
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

  const handleRemoveImage = (currFileName) => {
     const confirmation = window.confirm(
       "Do you want to delete ?"
     );

     if (confirmation) {
       //  deleteData(id);
       uploadFileHandler(currFileName, null);
     } else {
       return;
     }
    // uploadFileHandler(currFileName, null);
  };

  const [documentTypes , setDocumentTypes] = useState([
    { name: "photo", label: "Passport size Photo", ref: photoInputRef },
    { name: "aadhaar", label: "Aadhaar Card", ref: aadhaarInputRef },
    { name: "academic", label: "Academic Transcript", ref: academicInputRef },
    { name: "tc", label: "T.C.", ref: tcInputRef },
    { name: "birth", label: "Birth Certificate", ref: birthInputRef },
    {
      name: "residential",
      label: "Residential Certificate",
      ref: residentialInputRef,
    },
    { name: "domicile", label: "Domicile Certificate", ref: domicileInputRef },
    { name: "document", label: "Add Document", ref: documentInputRef },
  ]);

  return (
    <form className={classes.payrollForm}>
      <div className="grid gap-4 w-full grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center h-[400px] overflow-scroll cursor-pointer scrollbarnone">
        {documentTypes.map(({ name, label, ref }) => (
          <div
            key={name}
            className="w-full h-full border-[1px] rounded-3xl flex items-center flex-col gap-3 p-3 justify-between max-w-60"
          >
            <div
              className="w-52 h-36 border-[1px] rounded-2xl shadow-xl flex items-center justify-center max-w-full overflow-hidden"
              onClick={() => ref.current.click()}
              onDragOver={handleDragOver}
              onDrop={(event) => handleDrop(event, name)}
            >
              {fileImages[name] ? (
                <div className="relative w-full h-full flex items-center justify-center">
                  <embed
                    src={fileImages[name]}
                    alt={name}
                    className="w-[calc(100% +1px)] h-full"
                  />
                  <button
                    type="button"
                    className="absolute top-1 right-1 bg-red-600 text-white rounded-full p-1"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemoveImage(name);
                    }}
                  >
                    <IoMdClose className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <>
                  <input
                    ref={ref}
                    accept="image/*, application/pdf/ "
                    type="file"
                    className="hidden"
                    onChange={(event) => handleFileChange(event, name)}
                  />
                  <IoIosAdd className="text-4xl text-gray-400" />
                </>
              )}
            </div>
            <p className="text-center mt-2">{label}</p>
          </div>
        ))}
      </div>
    </form>
  );
}
