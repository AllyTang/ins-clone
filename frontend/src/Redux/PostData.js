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
  },
});

export const { savePostData } = postDataSlice.actions;
export default postDataSlice.reducer;
