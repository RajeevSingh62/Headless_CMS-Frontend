import React from "react";

const BlogCard = ({ blog }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
    <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <span className="text-xs uppercase text-red-600 font-semibold">{blog.category}</span>
      <h3 className="text-lg font-bold mt-2">{blog.title}</h3>
      <p className="text-gray-500 text-sm mt-1">
        By {blog.author} | {blog.date} | {blog.readTime}
      </p>
    </div>
  </div>
);

export default BlogCard;
