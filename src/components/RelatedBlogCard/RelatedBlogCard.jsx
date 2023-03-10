import React from "react";
import { Link } from "react-router-dom";

const RelatedBlogCard = ({ blog }) => {
  const { id, title, image, tags, createdAt } = blog;

  return (
    <div className="card">
      <Link to={`/${id}`}>
        <img src={image} className="card-image" alt="" />
      </Link>
      <div className="p-4">
        <Link
          to={"/something"}
          className="text-lg post-title lws-RelatedPostTitle"
        >
          {title}
        </Link>
        <div className="mb-0 tags">
          {tags?.map((tag, i) =>
            i < tags.length - 1 ? (
              <span key={i}>#{tag}, </span>
            ) : (
              <span key={i}>#{tag}</span>
            )
          )}
        </div>
        <p>{createdAt}</p>
      </div>
    </div>
  );
};

export default RelatedBlogCard;
