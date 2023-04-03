import React, { useState } from "react";
import extractVideoId from "../../utils/extractVideoId";
import extractDuration from "../../utils/extractDuration";
import { useAddVideoMutation } from "../../features/videos/videosApi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const AddVideo = () => {
  const [addVideo, { isLoading, isError }] = useAddVideoMutation();
  const navigate = useNavigate();
  // video details
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [views, setViews] = useState("");
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");
  const [createdAt, setCreatedAt] = useState("");

  const handleURLChange = (e) => {
    const url = e.target.value;
    setUrl(url);
    const videoId = extractVideoId(url);
    const apiKey = "AIzaSyDUU17DXeSit23rpu0FOohYC3X5jHPANF8";
    fetch(
      `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apiKey}&part=snippet,statistics,contentDetails`
    )
      .then((res) => res.json())
      .then((data) => {
        const video = data?.items[0];
        const title = video?.snippet?.title;
        const description = video?.snippet?.description.split("\n\n")[0];
        const views = video?.statistics?.viewCount;
        const duration = video?.contentDetails?.duration;
        const uploaded = video?.snippet?.publishedAt;
        setTitle(title);
        setDescription(description);
        setViews(views);
        setDuration(extractDuration(duration));
        setCreatedAt(uploaded);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const video = { title, description, url, views, duration, createdAt };
    addVideo(video);
    if (!isLoading && !isError) {
      alert("Video added successfully");
      navigate("/admin/videos");
    }
  };
  return (
    <main className="relative z-20 max-w-3xl mx-auto rounded-lg xl:max-w-none">
      <h1 className="my-4 text-3xl font-bold text-center text-white">
        Add New Video
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
              onChange={handleURLChange}
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
              value={title}
              onChange={(e) => setTitle(e.target.value)}
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
                value={views}
                onChange={(e) => setViews(e.target.value)}
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
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
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
              value={description}
              onChange={(e) => setDescription(e.target.value)}
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

export default AddVideo;
