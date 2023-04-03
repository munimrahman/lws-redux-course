import React from "react";
import { Link } from "react-router-dom";
import { useGetVideosQuery } from "../../features/videos/videosApi";
import VideoRow from "./VideoRow";

const Videos = () => {
  const { data: videos } = useGetVideosQuery();

  return (
    <section className="py-6 bg-primary">
      <div className="mx-auto max-w-full px-5 lg:px-20">
        <div className="px-3 py-20 bg-opacity-10">
          <div className="w-full flex">
            <Link to={"/admin/add-video"} className="btn ml-auto">
              Add Video
            </Link>
          </div>
          <div className="overflow-x-auto mt-4">
            <table className="divide-y-1 text-base divide-gray-600 w-full">
              <thead>
                <tr>
                  <th className="table-th">Video Title</th>
                  <th className="table-th">Description</th>
                  <th className="table-th">Action</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-600/50">
                {videos?.map((video) => (
                  <VideoRow key={video.id} video={video} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Videos;
