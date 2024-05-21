import React, { useState, useEffect } from "react";
import ViewPost from "../../components/DashBoard/ViewPost";
import WritePost from "../../components/DashBoard/WritePost";
import TodaysBirthday from "../../components/DashBoard/TodaysBirthday";
import NoticeBoard from "../../components/DashBoard/NoticeBoard";
import FacultyOnLeave from "../../components/DashBoard/FacultyOnLeave";
import DashboardAttendanceSummary from "../../components/DashBoard/DashboardAttendanceSummary";
import PerformanceAnalytics from "../../components/DashBoard/PerformanceAnalytics";
import college from "../../assets/images/collegeimage.png";
import profile1 from "../../assets/images/profile1.png";
import Notification from "../../ui/Notification";

const DashboardPage = () => {
  const [posts, setPosts] = useState([]);
  const [editPost, setEditPost] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/viewPost");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setPosts(jsonData.reverse());
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  const handleAlert = (status, message) => {
    setShowAlert(true);
    setStatus(status);
    setMessage(message);
  };

  const handleNewPost = async (post) => {
    try {
      const response = await fetch("http://localhost:4000/viewPost", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
      });
      if (!response.ok) {
        throw new Error("Failed to add new post");
      }
      const newData = await response.json();
      setPosts([newData, ...posts]);
      // alert('Post added successfully');
      handleAlert("success", "Post added successfully");
    } catch (error) {
      console.error("Error adding new post:", error);
    }
  };
  // const handleEditPost = (updatedPost) => {
  //   // Update the post and move it to the top of the list
  //   const updatedPosts = posts.map((post) => (post.id === updatedPost.id ? updatedPost : post));
  //   const index = updatedPosts.findIndex(post => post.id === updatedPost.id);
  //   if (index !== -1) {
  //     const postToMove = updatedPosts.splice(index, 1)[0];
  //     updatedPosts.unshift(postToMove);
  //   }
  //   setPosts(updatedPosts);
  //   setEditPost(null);
  // };

  // const handleDelete = (postId) => {
  //   // Filter out the post with the given id
  //   const updatedPosts = posts.filter(post => post.id !== postId);
  //   setPosts(updatedPosts);
  // };

  // const handleEditPost = async (updatedPost) => {
  //   try {
  //     const response = await fetch(`http://localhost:4000/viewPost/${updatedPost.id}`, {
  //       method: 'PUT',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(updatedPost),
  //     });
  //     if (!response.ok) {
  //       throw new Error('Failed to edit post');
  //     }
  //     // const updatedData = await response.json();
  //     // const updatedPosts = posts.filter(post =>
  //     //   post.id === updatedPost.id
  //     // );
  //     setPosts(prevposts=>[...prevposts,updatedPost]);
  //   } catch (error) {
  //     console.error('Error editing post:',error);
  //   }
  // };

  const handleEditPost = async (updatedPost) => {
    try {
      const response = await fetch(
        `http://localhost:4000/viewPost/${updatedPost.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedPost),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to edit post");
      }
      const responseData = await response.json();
      console.log("Updated Post Data:", responseData);

      // Find the index of the post with the same ID in the array
      const index = posts.findIndex((post) => post.id === responseData.id);
      if (index !== -1) {
        // If the post exists, update it directly in the array
        posts[index] = responseData;
        setPosts([...posts]); // Triggering a state update by spreading the updated array
      }

      // Optionally, you can clear the editPost state if needed
      setEditPost(null);
      // alert("Post edited successfully");
      handleAlert("success", "Post edited successfully");
    } catch (error) {
      console.error("Error editing post:", error);
    }
  };

  const handleDelete = async (postId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this post?"
    );
    if (!confirmDelete) {
      return; // Cancel the delete operation if the user cancels the confirmation
    }

    try {
      const response = await fetch(`http://localhost:4000/viewPost/${postId}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete post");
      }
      setPosts(posts.filter((post) => post.id !== postId));
      // alert("Post deleted successfully");
      handleAlert("success", "Post deleted successfully");
    } catch (error) {
      console.error("Error deleting post:", error);
      // alert("Failed to delete post");
      handleAlert("fail", "Error deleting post");
    }
  };

  // const handleDelete = async (postId) => {
  //   try {
  //     const response = await fetch(`http://localhost:4000/viewPost/${postId}`, {
  //       method: 'DELETE',
  //     });
  //     if (!response.ok) {
  //       throw new Error('Failed to delete post');
  //     }
  //     setPosts(posts.filter(post => post.id !== postId));
  //     alert('Post deleted successfully');
  //   } catch (error) {
  //     console.error('Error deleting post:', error);
  //   }
  // };

  return (
    <>
      <div className="overflow-y-scroll w-full scrollbarnone">
        <div className="grid grid-cols-[5fr 2fr] gap-4 grid-flow-col h-fit max-[1280px]:grid-flow-row">
          <div className="col-span-6 grid grid-cols-2 gap-4 h-full">
            <ViewPost
              post={posts}
              onEdit={setEditPost}
              onDelete={handleDelete}
            />
            {editPost && (
              <WritePost
                initialContent={editPost.content}
                initialImage={editPost.image}
                handleEditPost={handleEditPost}
                editPost={editPost}
                handleAlert={handleAlert}
              />
            )}
            {!editPost && <WritePost handleNewPost={handleNewPost} />}
            <FacultyOnLeave />
            <DashboardAttendanceSummary />
            <PerformanceAnalytics />
          </div>
          <div className="col-span-6 grid grid-cols-2 gap-4 h-full">
            <div className="xl:col-span-2 sm:col-span-6 h-fit">
              <NoticeBoard />
            </div>
            <div className="xl:col-span-2 sm:col-span-6 h-fit xl:h-full">
              <TodaysBirthday />
            </div>
          </div>
        </div>
      </div>
      <Notification
        showAlert={showAlert}
        setShowAlert={setShowAlert}
        status={status}
        message={message}
        style=" ml-[calc(100vw-60rem)]"
      />
    </>
  );
};

export default DashboardPage;
