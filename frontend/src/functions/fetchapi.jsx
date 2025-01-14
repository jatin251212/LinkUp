

const authUser = async (user) => {

  console.log("authenticating user" , user);
  const response = await fetch(`http://localhost:8000/auth/auth`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
    credentials: "include",
  });
  
  const result = await response.json();

  if (response.ok) {

    let _result = result.user;
    
    if (JSON.stringify(user) === JSON.stringify(_result)) {
      console.log("user same string");
      return false
    }
    else {
      return _result;
    }
    return _result;
  } else {
    console.log("error while feaching user");
    return false;
  }
};

const handleLogout = async () => {
  console.log("logout");
  try {
    const response = await fetch(
      `http://localhost:8000/auth/logout`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
      }
    );

    if (response.ok) {
      console.log("logout successfully");
      // window.location.reload()
      authUser();
    } else {
      console.error("Logout failed");
    }
  } catch (error) {
    console.error("Error while log out", error);
  }
};

const handleAddPost = async (text, images) => {
  console.log("adding post");
  console.log(text);
  console.log(images);
  try {
    const response = await fetch(
      `http://localhost:8000/post/addnewpost`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ text, images }),
      }
    );

    if (response.ok) {
      console.log("post added successfully");
      // authUser();
    } else {
      console.error("post failed");
    }
  } catch (error) {
    console.log("Error while adding post", error);
  }
};


const handleDeletePost = async (postId) => {
  try {
    const response = await fetch(
      `http://localhost:8000/post/deletepost/${postId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );

    if (response.ok) {
      console.log("post deleted successfully");
      // authUser();
    } else {
      console.error("post delete failed");
    }
  } catch (error) {
    console.log("Error while deleting post", error);
  }
};

const handleLikePost = async (postId) => {
  try {
    const response = await fetch(
      `http://localhost:8000/post/likepost/${postId}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
      }
    );

    if (response.ok) {
      console.log("post liked successfully");
      // authUser();
    } else {
      console.error("post like failed");
    }
  } catch (error) {
    console.log("Error while liking post", error);
  }
};

const handleDislikePost = async (postId) => {
  try {
    const response = await fetch(
      `http://localhost:8000/post/dislikepost/${postId}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
      }
    );

    if (response.ok) {
      console.log("post disliked successfully");
      // authUser();
    } else {
      console.error("post dislike failed");
    }
  } catch (error) {
    console.log("Error while disliking post", error);
  }
};

const handleCommentPost = async (postId, comment) => {
  try {
    const response = await fetch(
      `http://localhost:8000/post/commentpost/${postId}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ comment }),
      }
    );

    if (response.ok) {
      console.log("post commented successfully");
      // authUser();
    } else {
      console.error("post comment failed");
    }
  } catch (error) {
    console.log("Error while commenting post", error);
  }
};

const handleDeleteComment = async (postId, commentId) => {
  try {
    const response = await fetch(
      `http://localhost:8000/post/deletecomment/${postId}/${commentId}`,
      {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
      }
    );

    if (response.ok) {
      console.log("comment deleted successfully");
      // authUser();
    } else {
      console.error("comment delete failed");
    }
  } catch (error) {
    console.log("Error while deleting comment", error);
  }
};

const handleFollow = async (followId) => {
  console.log(followId);
  try {
    const res = await fetch(
      `http://localhost:8000/user/follow/${followId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  } catch (error) {
    console.log("Error while following user", error);
  }
};

const handleUnfollow = async (userId) => {

  try {

    const res = await fetch(`http://localhost:8000/user/unfollow/${userId}`, {

      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }
  catch (error) {
    console.log("Error while unfollowing user", error);
  }


}

const addCoverImg = async ( images) => {
  console.log(images);
  try {
    const response = await fetch(
      `http://localhost:8000/account/addcoverimg`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ images }),
      }
    );

    if (response.ok) {
      console.log("post added successfully");
    } else {
      console.error("post failed");
    }
  } catch (error) {
    console.log("Error while adding post", error);
  }
};
const addProfileImg = async ( images) => {
  console.log(images , 'this');
  try {
    const response = await fetch(
      `http://localhost:8000/account/addprofileimg`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ images }),
      }
    );

    if (response.ok) {
      console.log("post added successfully");
    } else {
      console.error("post failed");
    }
  } catch (error) {
    console.log("Error while adding post", error);
  }
};


export {
  authUser,
  handleLogout,
  handleAddPost,
  handleDeletePost,
  handleLikePost,
  handleDislikePost,
  handleCommentPost,
  handleDeleteComment,
  handleFollow,
  handleUnfollow,
  addCoverImg,
  addProfileImg
};
