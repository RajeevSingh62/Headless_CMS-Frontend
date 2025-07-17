import { createSlice } from "@reduxjs/toolkit";
import {fetchAllBlogs} from "../blogs/blogThunk"


const blogSlice=createSlice({
name:"blogs",
initialState:{
    blogs:[],
    loading:false,
    error:null,

},
reducers:{

},
extraReducers:(builder)=>{
    builder
    .addCase(fetchAllBlogs.pending,(state)=>{
        state.loading=true;
        state.error=null;

        
    })
    .addCase(fetchAllBlogs.fulfilled, (state, action) => {
        state.loading = false;
        state.blogs = action.payload;
      })
       .addCase(fetchAllBlogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
}

})


export default blogSlice.reducer