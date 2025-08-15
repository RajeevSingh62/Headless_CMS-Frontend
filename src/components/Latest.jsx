import BlogCard from './BlogCard';

const LatestPlaces = ({ blogs }) => (
  <section>
    <h2>Explore Latest Places</h2>
    <div className="grid">
      {blogs.map(blog => <BlogCard key={blog.id} blog={blog} />)}
    </div>
    <button>View All</button>
  </section>
);
