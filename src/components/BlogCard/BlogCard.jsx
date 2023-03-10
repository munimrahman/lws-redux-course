import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const { id, title, image, tags, likes, isSaved, createdAt } = blog;

  return (
    <div className="lws-card">
      <Link to={`/${id}`}>
        <img src={image} className="lws-card-image" alt="" />
      </Link>
      <div className="p-4">
        <div className="lws-card-header">
          <p className="lws-publishedDate">{createdAt}</p>
          <p className="lws-likeCount">
            <i className="fa-regular fa-thumbs-up"></i>
            {likes}
          </p>
        </div>
        <Link to={`/${id}`} className="lws-postTitle">
          {title}
        </Link>
        <div className="lws-tags">
          {tags.map((tag, i) =>
            i < tags.length - 1 ? (
              <span key={i}>#{tag},</span>
            ) : (
              <span key={i}>#{tag}</span>
            )
          )}
        </div>
        {/* <!-- Show this element if post is saved --> */}
        {isSaved && (
          <div className="flex gap-2 mt-4">
            <span className="lws-badge"> Saved </span>
          </div>
        )}
        {/* <!-- Show this element if post is saved Ends --> */}
      </div>
    </div>
  );
};

export default BlogCard;
