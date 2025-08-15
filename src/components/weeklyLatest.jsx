const WeeklyBestNews = ({ weeklyBlogs }) => (
  <section>
    <h2>Weekly Best News</h2>
    <div className="grid">
      {weeklyBlogs.map(blog => <BlogCard key={blog.id} blog={blog} />)}
    </div>
  </section>
);
