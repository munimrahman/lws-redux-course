let assignmentMark = [
  {
    id: 1,
    student_id: 1,
    student_name: "Munim Rahman",
    assignment_id: 1,
    title: "Assignment 1 - Implement Debounce Function",
    createdAt: "2021-01-15T15:17:01.727Z",
    totalMark: 100,
    mark: "50",
    repo_link: "https://github.com/Learn-with-Sumit/assignment-1",
    status: "published",
  },
  {
    id: 2,
    student_id: 2,
    student_name: "Saad Hasan",
    assignment_id: 1,
    title: "Assignment 2 - Implement Best Practices",
    createdAt: "2021-01-15T15:17:01.727Z",
    totalMark: 100,
    mark: "90",
    repo_link: "https://github.com/Learn-with-Sumit/assignment-1",
    status: "published",
  },
  {
    id: 3,
    student_id: 2,
    student_name: "Saad Hasan",
    assignment_id: 1,
    title: "Assignment 2 - Implement Best Practices",
    createdAt: "2021-01-15T15:17:01.727Z",
    totalMark: 100,
    mark: "100",
    repo_link: "https://github.com/Learn-with-Sumit/assignment-1",
    status: "published",
  },
];

let quizMark = [
  {
    id: 1,
    student_id: 2,
    student_name: "Saad Hasan",
    video_id: 1,
    video_title:
      "Debounce Function in JavaScript - JavaScript Job Interview question",
    totalQuiz: 2,
    totalCorrect: 1,
    totalWrong: 1,
    totalMark: 10,
    mark: 5,
  },
  {
    student_id: 1,
    student_name: "Munim Rahman",
    video_id: "5",
    video_title:
      "Node.js Installation - VS Code Editor Setup - Node.js Tutorial Bangla",
    totalQuiz: 2,
    totalCorrect: 2,
    totalWrong: 0,
    totalMark: 10,
    mark: 5,
    id: 2,
  },
];

let leaderboard = {};

for (let i = 0; i < assignmentMark.length; i++) {
  let id = assignmentMark[i].student_id;
  let student = assignmentMark[i].student_name;
  let mark = parseInt(assignmentMark[i].mark);

  if (!leaderboard[student]) {
    leaderboard[student] = {
      id,
      name: student,
      assignmentMark: mark,
      quizMark: 0,
      totalMark: mark,
    };
  } else {
    leaderboard[student].assignmentMark += mark;
    leaderboard[student].totalMark += mark;
  }
}

for (let i = 0; i < quizMark.length; i++) {
  let id = quizMark[i].student_id;
  let student = quizMark[i].student_name;
  let mark = parseInt(quizMark[i].mark);

  if (!leaderboard[student]) {
    leaderboard[student] = {
      id,
      name: student,
      assignmentMark: 0,
      quizMark: mark,
      totalMark: mark,
    };
  } else {
    leaderboard[student].quizMark += mark;
    leaderboard[student].totalMark += mark;
  }
}

let leaderboardArray = Object.values(leaderboard);

leaderboardArray.sort((a, b) => b.totalMark - a.totalMark);

// console.log(leaderboardArray);

let d = [
  { id: 1, name: "Munim", mark: 50 },
  { id: 2, name: "Sakib", mark: 50 },
  { id: 3, name: "Tamim", mark: 60 },
  { id: 4, name: "Rakib", mark: 40 },
  { id: 5, name: "Makin", mark: 30 },
];

const sorted = d.sort((a, b) => b.mark - a.mark);

let rank = 1;
let prevMark = sorted[0].mark;

for (let i = 0; i < sorted.length; i++) {
  if (sorted[i].mark < prevMark) {
    rank++;
    prevMark = sorted[i].mark;
  }
  if (rank === 4) break;
  console.log(`${rank}. ${sorted[i].name} ${sorted[i].mark}`);
}

// output
//   1. Tamim 60
//   2. Munim 50
//   2. Sakib 50
//   3. Rakib 40
//   4. Makin 30
