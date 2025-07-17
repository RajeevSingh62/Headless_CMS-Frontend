import { configureStore } from '@reduxjs/toolkit';
import blogReducer from "../redux/features/blogs/blogSlice"

const store = configureStore({
  reducer: {
blogs:blogReducer
  },
});
export default store;