import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import RelatedBlogCard from "../components/RelatedBlogCard/RelatedBlogCard";
import { fetchBlog } from "../features/blog/blogSlice";
import { likeBlogUpdate } from "../features/likeBlog/likeBlogsSlice";
import { fetchRelatedBlogs } from "../features/relatedBlogs/relatedBlogsSlice";
import { saveBlogUpdate } from "../features/saveBlog/saveBlogsSlice";

const Blog = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { blog } = useSelector((state) => state.blog);
  const { relatedBlogs } = useSelector((state) => state.relatedBlogs);
  // const { save } = useSelector((state) => state.saveBlog);

  const { title, image, tags, description, likes, isSaved } = blog;
  const [save, setSave] = useState(isSaved);
  const [blogLikes, setBlogLikes] = useState(likes);

  useEffect(() => {
    dispatch(fetchBlog(id));
  }, [dispatch, id, save, blogLikes]);

  useEffect(() => {
    dispatch(fetchRelatedBlogs({ id, tags }));
  }, [dispatch, id, tags]);

  const handleSave = (id, isSaved) => {
    setSave(!isSaved);
    dispatch(saveBlogUpdate({ id, isSaved }));
  };

  const handleLike = (id, likes) => {
    setBlogLikes(likes + 1);
    dispatch(likeBlogUpdate({ id, likes }));
  };
  return (
    <>
      <div className="container mt-8">
        <Link
          to={"/"}
          className="inline-block text-gray-600 home-btn"
          id="lws-goHome"
        >
          <i className="mr-2 fa-solid fa-house"></i>Go Home
        </Link>
      </div>
      <section className="post-page-container">
        {/* <!-- detailed post  --> */}
        <main className="post">
          <img
            src={image}
            alt="githum"
            className="w-full rounded-md"
            id="lws-megaThumb"
          />
          <div>
            <h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
              {title}
            </h1>
            <div className="tags" id="lws-singleTags">
              {tags?.map((tag, i) =>
                i < tags.length - 1 ? (
                  <span key={i}>#{tag}, </span>
                ) : (
                  <span key={i}>#{tag}</span>
                )
              )}
            </div>
            <div className="btn-group">
              {/* <!-- handle like on button click --> */}
              <button
                className="like-btn"
                id="lws-singleLinks"
                onClick={() => handleLike(id, likes)}
              >
                <i className="fa-regular fa-thumbs-up"></i> {likes}
              </button>
              {/* <!-- handle save on button click --> */}
              {/* <!-- use ".active" class and "Saved" text  if a post is saved, other wise "Save" --> */}
              <button
                className={`${save && "active"} save-btn`}
                id="lws-singleSavedBtn"
                onClick={() => handleSave(id, isSaved)}
              >
                <i className="fa-regular fa-bookmark"></i> Saved
              </button>
            </div>
            <div className="mt-6">
              <p>{description}</p>
            </div>
          </div>
        </main>

        {/* <!-- related posts --> */}
        <aside>
          <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">
            Related Posts
          </h4>
          <div className="space-y-4 related-post-container">
            {/* <!-- related post  --> */}

            {relatedBlogs?.map((relatedBlog) => (
              <RelatedBlogCard key={relatedBlog.id} blog={relatedBlog} />
            ))}

            {/* <!-- related post ends --> */}
          </div>
        </aside>
        {/* <!-- related posts ends --> */}
      </section>
    </>
  );
};

export default Blog;
