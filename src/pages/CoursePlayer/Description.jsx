import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../../components/Modal/Modal";
import {
  useGetAssignmentsMarkQuery,
  useGetQuizzesMarkQuery,
} from "../../features/marksApi/marksApi";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/auth/authSelectors";
import checkSubmission from "../../utils/isAssignmentSubmitted";
import SubmittedModal from "../../components/Modal/SubmittedModal";
import checkQuizSubmission from "../../utils/isQuizSubmitted";

const Description = ({ video, assignment, quiz }) => {
  const { id, title, description, createdAt } = video || {};
  const { id: assignmentId } = assignment || {};
  const { id: studentId } = useSelector(selectUser);
  const { data: quizzes = [] } = useGetQuizzesMarkQuery();
  const { data: assignmentsMark = [] } = useGetAssignmentsMarkQuery();
  const { isSubmitted, submission } = checkSubmission(
    assignmentId,
    studentId,
    assignmentsMark
  );
  const isQuizSubmitted = checkQuizSubmission(id, studentId, quizzes);

  console.log("Quiz Submission", isQuizSubmitted);

  const date = new Date(createdAt).getDate();
  const month = new Date(createdAt).toLocaleDateString("en-US", {
    month: "long",
  });
  const year = new Date(createdAt).getFullYear();
  const [opened, setOpened] = useState(false);

  const controlModal = () => {
    setOpened((prevState) => !prevState);
  };

  let assignmentButton = null;
  if (assignment && !isSubmitted) {
    assignmentButton = (
      <button
        onClick={controlModal}
        className="px-3 font-bold py-1 border border-cyan text-cyan rounded-full text-sm hover:bg-cyan hover:text-primary"
      >
        এসাইনমেন্ট
      </button>
    );
  } else if (assignment && isSubmitted) {
    assignmentButton = (
      <div>
        <button className="px-3 font-bold py-1 border border-cyan rounded-full text-sm bg-cyan text-black cursor-auto">
          সর্বমোট নাম্বার - {submission?.totalMark}
        </button>
        <button
          onClick={controlModal}
          className="px-3 ms-3 font-bold py-1 border border-cyan rounded-full text-sm bg-cyan text-black"
        >
          {" "}
          আপনি যা জমা দিয়েছেন
        </button>
      </div>
    );
  } else if (!assignment) {
    assignmentButton = (
      <button className="px-3 font-bold py-1 border border-red-500 text-red-500 rounded-full text-sm cursor-default">
        এই ভিডিওতে এসাইনমেন্ট নেই
      </button>
    );
  }

  let quizButton = null;
  if (quiz?.length > 0 && !isQuizSubmitted) {
    quizButton = (
      <Link
        to={`/quiz/${id}`}
        className="px-3 font-bold py-1 border border-cyan text-cyan rounded-full text-sm hover:bg-cyan hover:text-primary"
      >
        কুইজে অংশগ্রহণ করুন
      </Link>
    );
  } else if (quiz?.length > 0 && isQuizSubmitted) {
    quizButton = (
      <div>
        <button className="px-3 font-bold py-1 border border-cyan rounded-full text-sm bg-cyan text-black">
          কুইজ দেয়া হয়েছে
        </button>
      </div>
    );
  } else if (quiz?.length === 0) {
    quizButton = (
      <button className="px-3 font-bold py-1 border border-red-500 text-red-500 rounded-full text-sm cursor-default">
        এই ভিডিওতে কুইজ নেই
      </button>
    );
  }

  return (
    <div>
      <h1 className="text-lg font-semibold tracking-tight text-slate-100">
        {title}
      </h1>
      <h2 className=" pb-4 text-sm leading-[1.7142857] text-slate-400">
        Uploaded on {date} {month} {year}
      </h2>
      <div className="flex gap-4">
        {assignmentButton}
        {quizButton}

        {!isSubmitted ? (
          <Modal open={opened} control={controlModal} assignment={assignment} />
        ) : (
          <SubmittedModal
            open={opened}
            control={controlModal}
            submission={submission}
          />
        )}
      </div>
      <p className="mt-4 text-sm text-slate-400 leading-6">{description}</p>
    </div>
  );
};

export default Description;
