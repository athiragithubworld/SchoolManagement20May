import { useRef } from "react";
import { IoIosAdd } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

///Made by Abhishek kumar

// PROPS COMING FROM STUDENTDETAIL PAGE
export default function UploadStudentDocuments({ fileImages, setFileImages }) {
  const photoInputRef = useRef();
  const aadhaarInputRef = useRef();
  const panInputRef = useRef();
  const parentAadharInputRef = useRef();
  const birthCertificateInputRef = useRef();
  const validityInputRef = useRef();
  const migrationCertificateInputRef = useRef();
  const tcInputRef = useRef();
  const residentialCertificateInputRef = useRef();
  const castCertificateInputRef = useRef();
  const domicileCertificateInputRef = useRef();
  const addDocumentInputRef = useRef();

  function handleFileChange(event, currFileName) { 
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setFileImages((prevState) => ({
        ...prevState,
        [currFileName]: reader.result,
      }));
    };
    reader.readAsDataURL(file);
  }

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event, currFileName) => {   //ondrop functionality
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setFileImages((prevState) => ({
        ...prevState,
        [currFileName]: reader.result,
      }));
    };
    reader.readAsDataURL(file);
  };

  // Handle image removal
  const handleRemoveImage = (currFileName) => {
    setFileImages((prevState) => ({
      ...prevState,
      [currFileName]: null,
    }));
  };

  const documentTypes = [
    { ref: photoInputRef, name: "photo", label: "Passport Size Photo" },
    { ref: aadhaarInputRef, name: "aadhar", label: "Aadhar Card" },
    { ref: panInputRef, name: "pan", label: "Pan Card" },
    { ref: parentAadharInputRef, name: "parentAadhar", label: "Parents Aadhar" },
    { ref: birthCertificateInputRef, name: "birthCertificate", label: "Birth Certificate" },
    { ref: validityInputRef, name: "validity", label: "Validity" },
    { ref: migrationCertificateInputRef, name: "migrationCertificate", label: "Migration Certificate" },
    { ref: tcInputRef, name: "tc", label: "TC" },
    { ref: residentialCertificateInputRef, name: "residentialCertificate", label: "Residential Certificate" },
    { ref: castCertificateInputRef, name: "castCertificate", label: "Cast Certificate" },
    { ref: domicileCertificateInputRef, name: "domicileCertificate", label: "Domicile Certificate" },
    { ref: addDocumentInputRef, name: "addDocument", label: "Add Document" },
  ]

  return (
    <form className='w-full rounded-2xl border-[1px] flex h-fit p-4 flex-col gap-6 shadow-containerShadow'>
      <div className='flex place-items-start'>
        <p className='text-lg font-bold'>Documentation</p>
      </div>

      <div className='grid gap-4 w-full grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center'>
        {documentTypes.map(({ ref, name, label }) => (
          <div key={name} className="w-full h-full border-[1px] rounded-3xl flex items-center flex-col gap-3 p-3 justify-between max-w-60 cursor-pointer">
            <div
              className="w-full h-36 border-[1px] rounded-2xl shadow-xl flex items-center justify-center max-w-56 relative"
              onClick={() => ref.current.click()}
                onDragOver={handleDragOver}
              onDrop={(event) => handleDrop(event, name)}
              
            >
              {fileImages[name] ? (
                <div className="relative w-full h-full">
                  <img src={fileImages[name]} alt={name} className="object-cover w-full h-full" />
                  <button
                    type="button"
                    className="absolute top-1 right-1 bg-red-600 text-white rounded-full p-1"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent click event from propagating to parent div
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
                    accept="image/*"
                    type="file"
                    style={{ display: "none" }}
                    onChange={(event) => handleFileChange(event, name)}
                  />
                  <IoIosAdd style={{ fontSize: "3.646vw", color: " #A6A6A6" }} />
                </>
              )}
            </div>
            <p className="text-lg text-center w-full">{label}</p>
          </div>
        ))}
      </div>
    </form>
  );
}
