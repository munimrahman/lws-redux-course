import React, { useState } from "react";

const VideoForm = () => {
  const [videoData, setVideoData] = useState("");

  const handleURLChange = (e) => {
    const videoId = e.target.value;
    const apiKey = "AIzaSyDUU17DXeSit23rpu0FOohYC3X5jHPANF8a";
    fetch(
      `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apiKey}&part=snippet,statistics`
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const handleSubmit = (e) => {};

  return (
    <div className="justify-center mb-10 space-y-2 md:flex md:space-y-0">
      <form className="px-5 md:w-4/12">
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
          />
        </div>
        <div className="text-center">
          <input
            type="submit"
            value="Submit"
            className="bg-sky-500 py-2 px-3 rounded-md"
          />
        </div>
      </form>
    </div>
  );
};

export default VideoForm;
