import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profileData: [],
};

const userProfileSlice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {
    saveProfileData: (state, action) => {
      state.profileData = action.payload;
    },
  },
});
export const { saveProfileData } = userProfileSlice.actions;
export default userProfileSlice.reducer;
