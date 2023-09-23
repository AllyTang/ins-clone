import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  userID: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveUserID: (state, action) => {
      state.userID = action.payload;
    },
  },
});

export const { saveUserID } = userSlice.actions;
export default userSlice.reducer;
