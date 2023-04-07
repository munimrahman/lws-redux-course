/* eslint-disable eqeqeq */
import React from "react";
import SingleQuiz from "./SingleQuiz";
import { useNavigate, useParams } from "react-router-dom";
import { useGetQuizzesQuery } from "../../features/quiz/quizApi";
import { useSelector } from "react-redux";
import { useGetVideoQuery } from "../../features/videos/videosApi";
import { useAddQuizMarkMutation } from "../../features/marksApi/marksApi";

const Quiz = () => {
  const { id } = useParams();

  const { data: quizzes = [] } = useGetQuizzesQuery();
  const { data: video = {} } = useGetVideoQuery(id);

  const quiz = quizzes.filter((q) => q.video_id == id);

  const { quizAns } = useSelector((state) => state.quiz);

  const [addQuizMark, { isLoading, isError }] = useAddQuizMarkMutation();
  const navigate = useNavigate();

  const handleSubmit = () => {
    const totalQuiz = quiz?.length;
    const totalMark = totalQuiz * 5;
    const mark = quizAns.reduce((p, c) => c.mark + p, 0);
    const totalCorrect = totalMark / 5;
    const totalWrong = quiz?.length - totalCorrect;

    const quizMark = {
      student_id: 1,
      student_name: "Munim Rahman",
      video_id: id,
      video_title: video.title,
      totalQuiz,
      totalCorrect,
      totalWrong,
      totalMark,
      mark,
    };

    addQuizMark(quizMark);
    if (!isLoading && !isError) {
      navigate("/leaderboard");
    }
  };

  return (
    <section className="py-6 bg-primary">
      <div className="mx-auto max-w-7xl px-5 lg:px-0">
        <div className="mb-8">
          <h1 className="text-2xl font-bold">
            Quizzes for "Debounce Function in JavaScript - JavaScript Job
            Interview question"
          </h1>
          <p className="text-sm text-slate-200">
            Each question contains 5 Mark
          </p>
        </div>

        <div className="space-y-8">
          {quiz?.map((q, i) => (
            <SingleQuiz key={q.id} quiz={q} index={i} />
          ))}
        </div>

        <button
          onClick={handleSubmit}
          className="px-4 py-2 rounded-full bg-cyan block ml-auto mt-8 hover:opacity-90 active:opacity-100 active:scale-95"
        >
          Submit
        </button>
      </div>
    </section>
  );
};

export default Quiz;
