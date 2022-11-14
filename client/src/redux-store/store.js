import { configureStore } from "@reduxjs/toolkit";

//slices
import userReducer from "./features/userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export { store };
