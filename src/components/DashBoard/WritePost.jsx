// Created bt Athira
// functionality by sravanthi
import { useRef, useState } from "react";
import { MdAttachFile } from "react-icons/md";
import sendIcon from "../../../src/assets/images/sendIcon_img.png";
// Component for writing a post
function WritePost({
  handleNewPost,
  initialContent = "",
  initialImage = "",
  editPost,
  handleEditPost,
  handleAlert,
}) {
  const fileInputRef = useRef();
  const [text, setText] = useState(initialContent);
  const [selectedImageSource, setSelectedImageSource] = useState(initialImage);

  //function to handle the submission of input text
  function submitHandler() {
    const updatedPost = {
      image: selectedImageSource,
      content: text,
    };

    if (editPost) {
      updatedPost.id = editPost.id; // Include the ID property if editPost is defined
      handleEditPost(updatedPost);
    } else {
      if (updatedPost.content === "") {
        handleAlert("fail", "Add New Post!!");
        return;
      }
      handleNewPost(updatedPost);
    }

    setText("");
    setSelectedImageSource("");
  }

  function handleFileClick() {
    fileInputRef.current.click();
  }

  //once the image is selected, below function is executed to get the url and set image src attribute.
  function handleFileChange(event) {
    //get the file from the input
    const file = event.target.files[0];
    if (file instanceof Blob) {
      //read the file using FileReader
      const reader = new FileReader();
      //reading of file is async so below function is executed once file has been read.
      reader.onloadend = () => {
        //setting the src of image based on result of filereader.
        setSelectedImageSource(reader.result);
      };
      //getting the url of file.
      reader.readAsDataURL(file);
    } else {
      alert("Invalid file type");
    }
  }

  return (
    <section className="flex flex-col h-[164px] w-full justify-between p-4 bg-white rounded-3xl shadow-containerShadow sm:max-w-full ">
      <h2 className="text-customtext font-bold leading-6 text-black">
        Write post
      </h2>
      <input
        type="text"
        onChange={(event) => setText(event.target.value)}
        value={text}
        placeholder="Write post"
        className="justify-center p-2 mt-3.5 text-base leading-5 bg-blue-50 rounded-xl shadow-sm text-zinc-400"
      />

      {/* Buttons for attaching files */}
      <div
        className={`flex flex-wrap items-center gap-4 mt-1.5 ${
          selectedImageSource ? "justify-between" : "justify-end"
        }`}
      >
        {selectedImageSource && (
          <img className="w-8 h-8" alt="image" src={selectedImageSource} />
        )}
        <div className="flex jusity-end  shrink-0 gap-4">
          <button className=" rotate-45" onClick={handleFileClick}>
            <MdAttachFile size={25} />
            <input
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              ref={fileInputRef}
              onChange={handleFileChange}
            />
          </button>
          <button
            className={`flex justify-center items-center py-2.5 px-5 bg-customblue rounded-2xl`}
            onClick={submitHandler}
          >
            <img
              src={sendIcon}
              alt="Button icon"
              className="w-full aspect-square"
            />
          </button>
        </div>
      </div>
    </section>
  );
}

export default WritePost;
