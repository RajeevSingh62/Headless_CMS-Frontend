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

const App = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-blue-600">Tailwind is working!</h1>

    </div>
  )
}

export default App
