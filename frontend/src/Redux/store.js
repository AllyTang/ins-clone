import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./UserData";

export default configureStore({
  reducer: {
    user: userSlice,
  },
});
