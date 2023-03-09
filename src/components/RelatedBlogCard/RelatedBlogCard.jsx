import React from "react";
import { Link } from "react-router-dom";
import blogImg from "../../assets/images/ai.jpg";

const RelatedBlogCard = () => {
  return (
    <div className="card">
      <Link to={"/something"}>
        <img src={blogImg} className="card-image" alt="" />
      </Link>
      <div className="p-4">
        <Link
          to={"/something"}
          className="text-lg post-title lws-RelatedPostTitle"
        >
          Top Github Alternatives
        </Link>
        <div className="mb-0 tags">
          <span>#python,</span> <span>#tech,</span> <span>#git</span>
        </div>
        <p>2010-03-27</p>
      </div>
    </div>
  );
};

export default RelatedBlogCard;
