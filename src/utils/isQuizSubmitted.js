/* eslint-disable eqeqeq */

const checkQuizSubmission = (videoId, studentId, data) => {
  let isSubmitted = false;

  let quizzes = data.filter((q) => q.video_id == videoId);

  let submission = quizzes.find((q) => q.student_id == studentId);

  if (submission) {
    isSubmitted = true;
  }

  return isSubmitted;
};

export default checkQuizSubmission;
