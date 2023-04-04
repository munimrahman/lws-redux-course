import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  useEditVideoMutation,
  useGetVideoQuery,
} from "../../features/videos/videosApi";

const EditVideo = () => {
  const { id } = useParams();
  const { data: video = {} } = useGetVideoQuery(id);
  const { url, title, description, views, duration } = video || {};
  const [editVideo, { isLoading, isError }] = useEditVideoMutation();
  const navigate = useNavigate();

  // video details
  const [editUrl, setEditUrl] = useState(url);
  const [editTitle, setEditTitle] = useState(title);
  const [editViews, setEditViews] = useState(views);
  const [editDuration, setEditDuration] = useState(duration);
  const [editDescription, setEditDescription] = useState(description);

  useEffect(() => {
    setEditUrl(url);
    setEditTitle(title);
    setEditViews(views);
    setEditDuration(duration);
    setEditDescription(description);
  }, [url, title, description, views, duration]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const video = {
      title: editTitle,
      description: editDescription,
      url: editUrl,
      views: editViews,
      duration: editDuration,
    };
    editVideo({ id, data: video });
    if (!isLoading && !isError) {
      alert("Video successfully updated.");
      navigate("/admin/videos");
    }
  };
  return (
    <main className="relative z-20 max-w-3xl mx-auto rounded-lg xl:max-w-none">
      <h1 className="my-4 text-3xl font-bold text-center text-white">
        Edit Video
      </h1>
      <div className="justify-center mb-10 space-y-2 md:flex md:space-y-0">
        <form onSubmit={handleSubmit} className="px-5 md:w-4/12">
          <div>
            <label htmlFor="name" className="text-sm">
              Video URL
            </label>
            <br />
            <input
              type="text"
              className="mb-2 w-full rounded p-2 text-black focus:outline-none text-[15px]"
              placeholder="https://www.youtube.com/embed/dD9O8DnIBj4"
              value={editUrl}
              onChange={(e) => setEditUrl(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="name" className="text-sm">
              Title
            </label>
            <br />
            <input
              type="text"
              placeholder="Video Title"
              className="mb-2 w-full rounded p-2 text-black focus:outline-none text-[15px]"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              required
            />
          </div>
          <div className="md:flex md:space-x-3">
            <div>
              <label htmlFor="name" className="text-sm">
                Views
              </label>
              <br />
              <input
                type="text"
                placeholder="1000"
                className="mb-2 w-full rounded p-2 text-black focus:outline-none text-[15px]"
                value={editViews}
                onChange={(e) => setEditViews(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="name" className="text-sm">
                Duration
              </label>
              <br />
              <input
                type="text"
                placeholder="00.00"
                className="mb-2 w-full rounded p-2 text-black focus:outline-none text-[15px]"
                value={editDuration}
                onChange={(e) => setEditDuration(e.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="name" className="text-sm">
              Description
            </label>
            <br />
            <textarea
              type="text"
              placeholder="Video Description . . . "
              className="w-full h-36 mb-2 rounded p-3 text-black focus:outline-none text-[15px]"
              value={editDescription}
              onChange={(e) => setEditDescription(e.target.value)}
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              disabled={isLoading}
              className="bg-sky-500 py-2 px-4 rounded text-white"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default EditVideo;
