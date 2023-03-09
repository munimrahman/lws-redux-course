import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BlogCard from "../components/BlogCard/BlogCard";
import HomeSidebar from "../components/HomeSidebar/HomeSidebar";
import { fetchBlogs } from "../features/blogs/blogsSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { blogs } = useSelector((state) => state.blogs);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  return (
    <section className="wrapper">
      <HomeSidebar />
      {/* <!-- posts container  --> */}
      <main className="post-container" id="lws-postContainer">
        {/* <!-- single post --> */}
        {blogs.map((blog) => (
          <BlogCard key={blog.id} />
        ))}

        {/* <!-- Single Post Ends --> */}
      </main>
    </section>
  );
};

export default Home;
