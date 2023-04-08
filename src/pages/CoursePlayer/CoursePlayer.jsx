/* eslint-disable eqeqeq */
import React from "react";
import { useParams } from "react-router-dom";
import { useGetVideoQuery } from "../../features/videos/videosApi";
import Description from "./Description";
import Player from "./Player";
import { useGetAssignmentsQuery } from "../../features/assignments/assignmentsApi";
import { useGetQuizzesQuery } from "../../features/quiz/quizApi";
import PlayerSkeleton from "../../components/PlayerSkeleton/PlayerSkeleton";
import useTitle from "../../hooks/useTitle";

const CoursePlayer = () => {
  const { id } = useParams();
  const { data: video, isLoading } = useGetVideoQuery(id);
  const { data: assignments = [] } = useGetAssignmentsQuery();
  const { data: quizzes = [] } = useGetQuizzesQuery();
  useTitle("CoursePlayer");
  const { id: videoId, title, url } = video || {};
  const assignment = assignments.find(
    (assignment) => assignment.video_id == videoId
  );
  const quiz = quizzes.filter((q) => q.video_id == videoId);
  let content = null;
  if (isLoading) {
    content = <PlayerSkeleton />;
  } else {
    content = (
      <>
        <Player url={url} title={title} />
        <Description video={video} assignment={assignment} quiz={quiz} />
      </>
    );
  }
  return (
    <div className="col-span-full w-full space-y-8 lg:col-span-2">
      {content}
    </div>
  );
};

export default CoursePlayer;
