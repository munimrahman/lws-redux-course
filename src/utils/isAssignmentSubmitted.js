/* eslint-disable eqeqeq */
// check assignment submitted or not

// const checkSubmission = (assignmentId, studentId, assignments) => {
//   const id = assignmentId;
//   const sId = studentId;
//   const data = [...assignments];
//   const result = doubleCheckSubmission(assignmentId, sId, data);
//   return result;
// };

const checkSubmission = (assignmentId, studentId, data) => {
  let isSubmitted = false;

  let submissions = data.filter((d) => d.student_id == studentId);

  if (submissions.length > 0) {
    let submission = submissions.find((s) => s.assignment_id == assignmentId);
    if (submission) {
      isSubmitted = true;
      return { isSubmitted, submission };
    }
  }
  return { isSubmitted };
};

export default checkSubmission;
