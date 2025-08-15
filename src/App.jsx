// import { useDispatch, useSelector } from "react-redux";
// import { fetchAllBlogs } from "./redux/features/blogs/blogThunk";
// import { useEffect } from "react";

// function App() {
//    const dispatch = useDispatch();
//   const { blogs } = useSelector((state) => state.blogs);
//    console.log("data",blogs)
//   useEffect(() => {
//     dispatch(fetchAllBlogs());
//   }, [dispatch]);
//   return (
//     <div >
//       <h3 >Hello </h3>
//     </div>
//   );
// }

// export default App;
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import HeaderTop from './components/HeaderTop'
import Header from './pages/Header'
import Footer from './pages/Footer'
import Main from './pages/Body'

const App = () => {
  return (
    <div>
   <Header/>
   <Main/>
<Footer/>
    </div>
  )
}

export default App
