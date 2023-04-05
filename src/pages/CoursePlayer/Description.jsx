import React from "react";
import { Link } from "react-router-dom";

const Description = ({ video, assignment, quiz }) => {
  const { id, title, description, createdAt } = video || {};
  const date = new Date(createdAt).getDate();
  const month = new Date(createdAt).toLocaleDateString("en-US", {
    month: "long",
  });
  const year = new Date(createdAt).getFullYear();

  return (
    <div>
      <h1 className="text-lg font-semibold tracking-tight text-slate-100">
        {title}
      </h1>
      <h2 className=" pb-4 text-sm leading-[1.7142857] text-slate-400">
        Uploaded on {date} {month} {year}
      </h2>
      <div className="flex gap-4">
        {assignment && (
          <button className="px-3 font-bold py-1 border border-cyan text-cyan rounded-full text-sm hover:bg-cyan hover:text-primary">
            এসাইনমেন্ট
          </button>
        )}

        {quiz?.length > 0 && (
          <Link
            to={`/quiz/${id}`}
            className="px-3 font-bold py-1 border border-cyan text-cyan rounded-full text-sm hover:bg-cyan hover:text-primary"
          >
            কুইজে অংশগ্রহণ করুন
          </Link>
        )}
      </div>
      <p className="mt-4 text-sm text-slate-400 leading-6">{description}</p>
    </div>
  );
};

export default Description;
