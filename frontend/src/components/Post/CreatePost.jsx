import React, { Fragment, useState } from "react";
import {
  FormContainer,
  FormLabel,
  FormInput,
  FormButton,
} from "../Profile/Profile.styles";
import { axiosInstance } from "../../apiConfig";
import Navbar from "../Navbar/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { savePostData } from "../../Redux/PostData";
import { useNavigate } from "react-router-dom";
const min = 1;
const max = 1000;
const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
export default function CreatePost() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userID = useSelector((state) => state.user.userID);
  const allPosts = useSelector((state) => state.post.postData);
  console.log("allPosts", allPosts);
  const [isPostCreated, setIsPostCreated] = useState(false);
  const [formData, setFormData] = useState({
    profilePic:
      "https://energies2050.org/wp-content/uploads/2017/01/beweship-contact-placeholder.jpg",
    userID: userID,
    location: "",
    caption: "",
    postLink: "",
    likes: randomNumber,
    isLiked: false,
    comments: [],
    postID: allPosts.length,
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, postLink: file });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("formData", formData);
    const formDataToSubmit = new FormData();
    formDataToSubmit.append("profilePic", formData.profilePic);
    formDataToSubmit.append("userID", formData.userID);
    formDataToSubmit.append("location", formData.location);
    formDataToSubmit.append("caption", formData.caption);
    formDataToSubmit.append(
      "postLink",
      formData.postLink,
      formData.postLink.name
    );
    formDataToSubmit.append("likes", formData.likes);
    formDataToSubmit.append("isLiked", formData.isLiked);
    formDataToSubmit.append("comments", formData.comments);
    formDataToSubmit.append("postID", formData.postID);
    try {
      await axiosInstance.post("/api/posts", formDataToSubmit, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const updatedPosts = await axiosInstance.get("/api/posts");
      console.log("updatedPosts", updatedPosts);
      dispatch(savePostData(updatedPosts.data));
      setIsPostCreated(true);
      navigate("/home");
    } catch (error) {
      console.error("Error uploading post:", error);
    }
  };
  return (
    <Fragment>
      <Navbar />
      {isPostCreated ? (
        "Post is created!"
      ) : (
        <FormContainer>
          <h2>Create Your Post</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <FormLabel htmlFor="postLink">Post Picture</FormLabel>
              <FormInput
                type="file"
                id="postLink"
                name="postLink"
                onChange={handleImageChange}
              />
            </div>
            <div>
              <FormLabel htmlFor="caption">Caption</FormLabel>
              <FormInput
                type="text"
                id="caption"
                name="caption"
                value={formData.caption}
                onChange={handleChange}
              />
            </div>
            <div>
              <FormLabel htmlFor="location">Location</FormLabel>
              <FormInput
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
              />
            </div>
            <div>
              <FormButton type="submit">Create Post</FormButton>
            </div>
          </form>
        </FormContainer>
      )}
    </Fragment>
  );
}
