import React from "react";
import { useParams } from "react-router-dom";
import { useGetVideoQuery } from "../../features/videos/videosApi";
import AssignmentModal from "./AssignmentModal";
import Description from "./Description";
import Player from "./Player";

const CoursePlayer = () => {
  const { id } = useParams();
  const { data: video } = useGetVideoQuery(id);
  const { title, url } = video || {};
  return (
    <div className="col-span-full w-full space-y-8 lg:col-span-2">
      <Player url={url} title={title} />
      {/* <button className="border">Modal</button> */}
      <Description video={video} />
      {/* <AssignmentModal /> */}
    </div>
  );
};

export default CoursePlayer;
