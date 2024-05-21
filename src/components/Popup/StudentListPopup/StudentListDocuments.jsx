import { useRef } from "react";
import { IoIosAdd } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

export default function StudentListDocuments({
  fileImages,
  uploadFileHandler,
}) {
  const inputRefs = {
    photo: useRef(),
    aadhaar: useRef(),
    pan: useRef(),
    parentAadhar: useRef(),
    birthCertificate: useRef(),
    validity: useRef(),
    migrationCertificate: useRef(),
    tc: useRef(),
    residentialCertificate: useRef(),
    castCertificate: useRef(),
    domicileCertificate: useRef(),
    addDocument: useRef(),
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
    { ref: inputRefs.photo, name: "photo", label: "Passport Size Photo" },
    { ref: inputRefs.aadhaar, name: "aadhaar", label: "Adhaar Card" },
    { ref: inputRefs.pan, name: "pan", label: "Pan Card" },
    { ref: inputRefs.parentAadhar, name: "parentAadhar", label: "Parents Adhaar" },
    { ref: inputRefs.birthCertificate, name: "birthCertificate", label: "Birth Certificate" },
    { ref: inputRefs.validity, name: "validity", label: "Validity" },
    { ref: inputRefs.migrationCertificate, name: "migrationCertificate", label: "Migration Certificate" },
    { ref: inputRefs.tc, name: "tc", label: "TC" },
    { ref: inputRefs.residentialCertificate, name: "residentialCertificate", label: "Residential Certificate" },
    { ref: inputRefs.castCertificate, name: "castCertificate", label: "Cast Certificate" },
    { ref: inputRefs.domicileCertificate, name: "domicileCertificate", label: "Domicile Certificate" },
    { ref: inputRefs.addDocument, name: "addDocument", label: "Add Document" },
  ]

  return (
    <form className="overflow-y-auto h-[400px] min-w-[400px] lg:h-auto">
      <div className="grid gap-4 w-full grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center h-[400px] overflow-scroll scrollbarnone object-contain">
        {documentTypes.map(({ ref, name, label }) => (
          <div key={name} className="w-full h-full border-[1px] rounded-3xl flex items-center flex-col gap-3 p-3 justify-between max-w-60 object-contain">
            <div
              className="relative w-full h-36 border-[1px] rounded-2xl shadow-primary flex items-center justify-center max-w-56 cursor-pointer object-contain"
              onClick={() => ref.current.click()}
              onDragOver={handleDragOver}
              onDrop={(event) => handleDrop(event, name)}
              onDragLeave={() => handleDragLeave(name)}
            >
              {fileImages[name] && (
                <div className="object-contain w-56 h-40">
                  <img src={fileImages[name]} alt={name} className="absoulute inset-0 w-full h-full object-cover" />
                  <button
                    className="absolute top-1 right-1 bg-red-600 text-white rounded-full p-2  cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      uploadFileHandler(name, "");
                    }}
                  >
                    <IoMdClose className="w-4 h-4" />
                  </button>
                </div>
              )}
              <input
                ref={ref}
                accept="image/*"
                type="file"
                className="hidden"
                onChange={(event) => handleFileChange(event, name)}
              />
              {!fileImages[name] && (
                <span>
                  <IoIosAdd style={{ fontSize: "3.646vw", color: " #A6A6A6" }} />
                </span>
              )}
            </div>
            <p className="text-lg text-center w-full">{label}</p>
          </div>
        ))}
      </div>
    </form>
  );
}
