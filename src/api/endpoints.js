import axios from "./axios";
//auth apis

export const loginApis = () => axios.post();
export const registerApis = () => axios.post();
export const getCurrentUserApis = () => axios.get();



//blogs apis

export const getAllBlogsApis = () => axios.get('posts/allposts');
export const getBlogByIdApis = () => axios.get();
export const createBlogApis = () => axios.post();
export const updateBlogApis = () => axios.put();
export const deleteBlogApis = () => axios.delete();

//dashboard data apis


export const getAdminDashboardData = () => axios.get();

//carousal apis



// header apis



// notification apis


//footer apis 



