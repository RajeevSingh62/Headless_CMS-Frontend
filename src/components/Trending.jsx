import React from "react";
import BlogCard from "./BlogCard";

const TrendingPlaces = ({ blogs }) => (
  <section className=" m-4">
    <div className="container mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Trending Places</h2>
        <button className="text-red-500 text-sm font-semibold">View All →</button>
      </div>
      <div className="grid md:grid-cols-4 gap-6">
        {blogs.map(blog => <BlogCard key={blog.id} blog={blog} />)}
      </div>
    </div>
  </section>
);

export default TrendingPlaces;
