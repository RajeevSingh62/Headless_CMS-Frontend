import React from "react";
import BlogCard from "./BlogCard";

const ExploreLatest = ({ blogs }) => (
  <section className="container mx-auto m-4">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-bold">Explore Latest Places</h2>
      <button className="text-red-500 text-sm font-semibold">View All →</button>
    </div>
    <div className="grid md:grid-cols-3 gap-6">
      {blogs.map(blog => <BlogCard key={blog.id} blog={blog} />)}
    </div>
  </section>
);

export default ExploreLatest;
