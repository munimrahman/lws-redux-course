/* eslint-disable eqeqeq */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetVideosQuery } from "../../features/videos/videosApi";
import { useAddQuizMutation } from "../../features/quiz/quizApi";

const AddQuiz = () => {
  const { data: videos = [] } = useGetVideosQuery();
  const [addQuiz, { isLoading, isError }] = useAddQuizMutation();
  const navigate = useNavigate();

  // assignment form data
  const [question, setQuestion] = useState("");
  const [correctOption, setCorrectOption] = useState("");
  const [wrongOptionOne, setWrongOptionOne] = useState("");
  const [wrongOptionTwo, setWrongOptionTwo] = useState("");
  const [wrongOptionThree, setWrongOptionThree] = useState("");
  const [videoId, setVideoId] = useState("");
  const [videoTitle, setVideoTitle] = useState("");

  useEffect(() => {
    const video = videos?.find((video) => video.id == videoId);
    setVideoTitle(video?.title);
  }, [videos, videoId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const quiz = {
      question,
      video_id: videoId,
      video_title: videoTitle,
      options: [
        {
          id: 1,
          option: correctOption,
          isCorrect: true,
        },
        {
          id: 2,
          option: wrongOptionOne,
          isCorrect: false,
        },
        {
          id: 3,
          option: wrongOptionTwo,
          isCorrect: false,
        },
        {
          id: 4,
          option: wrongOptionThree,
          isCorrect: false,
        },
      ],
    };
    addQuiz(quiz);
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
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
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
              <option value="" selected hidden disabled>
                Select Video
              </option>
              {videos?.map((video) => (
                <option key={video?.id} value={video?.id}>
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
              value={correctOption}
              onChange={(e) => setCorrectOption(e.target.value)}
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
              value={wrongOptionOne}
              onChange={(e) => setWrongOptionOne(e.target.value)}
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
              value={wrongOptionTwo}
              onChange={(e) => setWrongOptionTwo(e.target.value)}
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
              value={wrongOptionThree}
              onChange={(e) => setWrongOptionThree(e.target.value)}
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

export default AddQuiz;
