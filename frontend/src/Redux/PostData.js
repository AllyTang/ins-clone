import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  postData: [],
};

export const postDataSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    savePostData: (state, action) => {
      state.postData = action.payload;
    },
    handleLikeSingleClick: (state, action) => {
      const updatedPost = action.payload;
      const postIndex = state.postData.findIndex(
        (post) => post.postID === updatedPost.postID
      );
      console.log("updatedPost,postIndex", updatedPost, postIndex);
      if (postIndex !== -1) {
        state.postData[postIndex] = updatedPost;
      }
    },
    handleLikeDoubleClick: (state, action) => {
      const updatedPost = action.payload;
      const postID = updatedPost.postID;
      let icon = document.querySelector(`.like-post-${postID}`);
      icon.classList.add("active");
      const postIndex = state.postData.findIndex(
        (post) => post.postID === postID
      );
      if (postIndex !== -1) {
        state.postData[postIndex] = updatedPost;
      }
      setTimeout(() => {
        icon.classList.remove("active");
      }, 700);
    },
  },
});

export const { savePostData, handleLikeSingleClick, handleLikeDoubleClick } =
  postDataSlice.actions;
export default postDataSlice.reducer;
