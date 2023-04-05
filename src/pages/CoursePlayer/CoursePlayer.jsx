/* eslint-disable eqeqeq */
import React from "react";
import { useParams } from "react-router-dom";
import { useGetVideoQuery } from "../../features/videos/videosApi";
import Description from "./Description";
import Player from "./Player";
import { useGetAssignmentsQuery } from "../../features/assignments/assignmentsApi";
import { useGetQuizzesQuery } from "../../features/quiz/quizApi";

const CoursePlayer = () => {
  const { id } = useParams();
  const { data: video } = useGetVideoQuery(id);
  const { data: assignments = [] } = useGetAssignmentsQuery();
  const { data: quizzes = [] } = useGetQuizzesQuery();

  const { id: videoId, title, url } = video || {};

  const assignment = assignments.find(
    (assignment) => assignment.video_id == videoId
  );

  const quiz = quizzes.filter((q) => q.video_id == videoId);

  return (
    <div className="col-span-full w-full space-y-8 lg:col-span-2">
      <Player url={url} title={title} />
      <Description video={video} assignment={assignment} quiz={quiz} />
    </div>
  );
};

export default CoursePlayer;
