import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllBlogsApis } from "../../../api/endpoints";


export const fetchAllBlogs=createAsyncThunk(
    'blogs/fetchAllBlogs',
    async(__,thunkApi)=>{
        try {
            const response=await getAllBlogsApis();
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(error.response?.data?.message ||'failed to fetch blogs')
        }
    }
)