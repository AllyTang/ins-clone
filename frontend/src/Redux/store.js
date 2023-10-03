import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./UserData";
import userProfileSlice from "./ProfileData";
import postDataSlice from "./PostData";
export default configureStore({
  reducer: {
    user: userSlice,
    profile: userProfileSlice,
    post: postDataSlice,
  },
});
