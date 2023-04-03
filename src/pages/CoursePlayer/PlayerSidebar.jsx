import React from "react";
import { useGetVideosQuery } from "../../features/videos/videosApi";
import SidebarVideo from "./SidebarVideo";

const PlayerSidebar = () => {
  const { data: videos } = useGetVideosQuery();

  return (
    <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto bg-secondary p-4 rounded-md border border-slate-50/10 divide-y divide-slate-600/30">
      {videos?.map((video) => (
        <SidebarVideo key={video.id} video={video} />
      ))}
    </div>
  );
};

export default PlayerSidebar;
