// //created by athira
// //Functionality by sravanthi

import React, { useState, useRef } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import abc from "../../assets/images/profile1.png";

export default function ViewPost({ post, onEdit, onDelete }) {
  const [hoveredPostId, setHoveredPostId] = useState(null);

  return (
    <div className="relative flex flex-col h-[164px] w-full px-4 pt-4 font-bold text-black bg-white rounded-[20px] shadow-containerShadow leading-[120%]">
      <div className="text-customtext">View post</div>
      <div className="flex flex-col w-full gap-4 overflow-y-auto scrollbarnone">
        {/* Container for posts */}
        {post.map((post) => (
          <div
            key={post.id}
            className="relative flex gap-2.5 p-2.5 mt-2 text-sm rounded "
            onMouseEnter={() => setHoveredPostId(post.id)}
            onMouseLeave={() => setHoveredPostId(null)}
          >
            {/* Render IconButton for the hovered post */}
            {hoveredPostId === post.id && (
              <div className="absolute top-0 right-0 mt-2 mr-2 ">
                <IconButton
                  onEdit={() => onEdit(post)}
                  onDelete={onDelete}
                  post={post}
                />
              </div>
            )}

            <img
              src={post.image || abc}
              className="flex-shrink-0 w-16 h-16 rounded-full"
              alt="Post author"
            />

            {/* Post content */}
            <div className="my-auto">{post.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function IconButton({ onEdit, onDelete, post }) {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleEditClick = () => {
    setShowDropdown(false);
    onEdit();
  };
  const handleDeleteClick = () => {
    if (post && post.id) {
      onDelete(post.id);
    }
  };

  return (
    <div className="flex flex-col">
      <div
        onClick={() => setShowDropdown((prevState) => !prevState)}
        className="flex justify-center items-center p-2  w-10 h-10 bg-white rounded-2xl border border-solid border-stone-300 cursor-pointer"
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/71951dafcb37cb60651b14b34087ee7264766f4fab0c5ff297e941864f350c14?apiKey=8d87b58e79fa4e2d9738c0aa2c095387&"
          alt=""
          className="w-6 aspect-square"
        />
      </div>
      {showDropdown && (
        <div className="flex flex-col justify-left pl-2 pr-2 text-lg leading-9 whitespace-nowrap bg-white rounded-2xl border border-solid border-stone-300 absolute mt-12 -ml-12">
          <div
            onClick={handleEditClick}
            className="group flex gap-2 justify-between rounded-xl items-center cursor-pointer hover:bg-[#009dfd] hover:text-white hover:pl-2 hover:pr-2 "
          >
            <div>Edit</div>
            <FaRegEdit className="group-hover:text-white h-5 w-[17.1px] text-[#a6a6a6]" />
          </div>
          <div
            onClick={handleDeleteClick}
            className="group flex gap-2 justify-between rounded-xl items-center cursor-pointer hover:bg-[#009dfd] hover:text-white  hover:pl-1 hover:pr-1"
          >
            <div>Delete</div>
            <RiDeleteBin6Line className="group-hover:text-white h-5 w-[17.1px] text-[#a6a6a6]" />
          </div>
        </div>
      )}
    </div>
  );
}
