import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  useAddQuizMutation,
  useGetQuizQuery,
} from "../../features/quiz/quizApi";
import { useGetVideosQuery } from "../../features/videos/videosApi";

const EditQuiz = () => {
  const { id } = useParams();
  const { data: videos = [] } = useGetVideosQuery();
  const { data: quiz = {} } = useGetQuizQuery(id);
  const { question, video_id, video_title, options = [] } = quiz || {};
  const [addQuiz, { isLoading, isError }] = useAddQuizMutation();
  const navigate = useNavigate();

  // assignment form data
  const [editQuestion, setEditQuestion] = useState("");
  const [editCorrectOption, setEditCorrectOption] = useState("");
  const [editWrongOptionOne, setEditWrongOptionOne] = useState("");
  const [editWrongOptionTwo, setEditWrongOptionTwo] = useState("");
  const [editWrongOptionThree, setEditWrongOptionThree] = useState("");
  const [videoId, setVideoId] = useState("");
  const [videoTitle, setVideoTitle] = useState("");

  useEffect(() => {
    setEditQuestion(question);
    setEditCorrectOption(options[0]?.option);
    setEditWrongOptionOne(options[1]?.option);
    setEditWrongOptionTwo(options[2]?.option);
    setEditWrongOptionThree(options[3]?.option);
    setVideoId(video_id);
    setVideoTitle(video_title);
  }, [question, options, video_id, video_title]);

  useEffect(() => {
    const video = videos?.find((video) => video.id == videoId);
    setVideoTitle(video?.title);
  }, [videos, videoId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const quiz = {
      question: editQuestion,
      video_id: videoId,
      video_title: videoTitle,
      options: [
        {
          id: 1,
          option: editCorrectOption,
          isCorrect: true,
        },
        {
          id: 2,
          option: editWrongOptionOne,
          isCorrect: false,
        },
        {
          id: 3,
          option: editWrongOptionTwo,
          isCorrect: false,
        },
        {
          id: 4,
          option: editWrongOptionThree,
          isCorrect: false,
        },
      ],
    };

    addQuiz({ id, data: quiz });
    if (!isLoading && !isError) {
      navigate("/admin/quizzes");
    }
  };

  return (
    <main className="relative z-20 max-w-3xl mx-auto rounded-lg xl:max-w-none">
      <h1 className="my-4 text-3xl font-bold text-center text-white">
        Add New Quiz
      </h1>
      <div className="justify-center mb-10 space-y-2 md:flex md:space-y-0">
        <form onSubmit={handleSubmit} className="px-5 md:w-4/12">
          <div>
            <label htmlFor="name" className="text-sm">
              Quiz Question
            </label>
            <br />
            <input
              type="text"
              className="mb-2 w-full rounded p-2 text-black focus:outline-none text-[15px]"
              placeholder="What is Node js?"
              value={editQuestion}
              onChange={(e) => setEditQuestion(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="name" className="text-sm">
              Select Related Video
            </label>
            <br />

            <select
              name="video_id"
              id=""
              className="mb-2 w-full rounded p-2 text-black focus:outline-none text-[15px]"
              required
              onChange={(e) => setVideoId(e.target.value)}
            >
              <option value="" hidden disabled>
                Select Video
              </option>
              {videos?.map((video) => (
                <option
                  key={video?.id}
                  value={video?.id}
                  selected={videoId == video.id}
                >
                  {video?.title.slice(0, 60)}...
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="name" className="text-sm">
              Option 1 <span className="text-sky-500">(Correct Answer)</span>
            </label>
            <br />
            <input
              type="text"
              placeholder="Input Correct Option Here"
              className="mb-2 w-full rounded p-2 text-black focus:outline-none text-[15px]"
              value={editCorrectOption}
              onChange={(e) => setEditCorrectOption(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="name" className="text-sm">
              Option 2 <span className="text-red-500">(Wrong Answer)</span>
            </label>
            <br />
            <input
              type="text"
              placeholder="Input Wrong Option Here"
              className="mb-2 w-full rounded p-2 text-black focus:outline-none text-[15px]"
              value={editWrongOptionOne}
              onChange={(e) => setEditWrongOptionOne(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="name" className="text-sm">
              Option 3 <span className="text-red-500">(Wrong Answer)</span>
            </label>
            <br />
            <input
              type="text"
              placeholder="Input Wrong Option Here"
              className="mb-2 w-full rounded p-2 text-black focus:outline-none text-[15px]"
              value={editWrongOptionTwo}
              onChange={(e) => setEditWrongOptionTwo(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="name" className="text-sm">
              Option 3 <span className="text-red-500">(Wrong Answer)</span>
            </label>
            <br />
            <input
              type="text"
              placeholder="Input Wrong Option Here"
              className="mb-2 w-full rounded p-2 text-black focus:outline-none text-[15px]"
              value={editWrongOptionThree}
              onChange={(e) => setEditWrongOptionThree(e.target.value)}
              required
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={false}
              className="bg-sky-500 py-2 mt-5 px-4 rounded text-white"
            >
              Add Quiz
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default EditQuiz;
