import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./UserData";
import userProfileSlice from "./ProfileData";
export default configureStore({
  reducer: {
    user: userSlice,
    profile: userProfileSlice,
  },
});
