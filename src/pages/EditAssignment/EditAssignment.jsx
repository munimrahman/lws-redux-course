import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  useEditAssignmentMutation,
  useGetAssignmentQuery,
} from "../../features/assignments/assignmentsApi";
import { useGetVideosQuery } from "../../features/videos/videosApi";

const EditAssignment = () => {
  const { id } = useParams();
  const { data: assignment } = useGetAssignmentQuery(id);
  const [editAssignment, { isLoading, isError }] = useEditAssignmentMutation();
  const navigate = useNavigate();

  // assignment form data
  const [editTitle, setEditTitle] = useState("");
  const [mark, setEditMark] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const assignment = {
      title: editTitle,
      totalMark: mark,
    };
    editAssignment({ id, data: assignment });
    if (!isLoading && !isError) {
      alert("Asssignment updated successfully");
      navigate("/admin/assignments");
    }
  };
  return (
    <main className="relative z-20 max-w-3xl mx-auto rounded-lg xl:max-w-none">
      <h1 className="my-4 text-3xl font-bold text-center text-white">
        Add New Assignment
      </h1>
      <div className="justify-center mb-10 space-y-2 md:flex md:space-y-0">
        <form onSubmit={handleSubmit} className="px-5 md:w-4/12">
          <div>
            <label htmlFor="name" className="text-sm">
              Assignment Title
            </label>
            <br />
            <input
              type="text"
              className="mb-2 w-full rounded p-2 text-black focus:outline-none text-[15px]"
              placeholder="Assignment Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="name" className="text-sm">
              Assignment Related Video
            </label>
            <br />

            <select
              name="video_id"
              id=""
              className="mb-2 w-full rounded p-2 text-black focus:outline-none text-[15px]"
              required
              onChange={(e) => setVideoId(e.target.value)}
            >
              <option value="" selected hidden disabled>
                Select Video
              </option>
              {videos?.map((video) => (
                <option key={video?.id} value={video?.id}>
                  {video?.title.slice(0, 60)}...
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="name" className="text-sm">
              Assignment Mark
            </label>
            <br />
            <input
              type="text"
              placeholder="100"
              className="mb-2 w-full rounded p-2 text-black focus:outline-none text-[15px]"
              value={mark}
              onChange={(e) => setMark(e.target.value)}
              required
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={false}
              className="bg-sky-500 py-2 mt-5 px-4 rounded text-white"
            >
              Add Assignment
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default EditAssignment;
