const calculateLeaderBoard = (assignmentMark, quizMark) => {
  let leaderBoard = {};

  for (let i = 0; i < assignmentMark.length; i++) {
    let id = assignmentMark[i].student_id;
    let student = assignmentMark[i].student_name;
    let mark = parseInt(assignmentMark[i].mark);

    if (!leaderBoard[student]) {
      leaderBoard[student] = {
        id,
        name: student,
        assignmentMark: mark,
        quizMark: 0,
        totalMark: mark,
      };
    } else {
      leaderBoard[student].assignmentMark += mark;
      leaderBoard[student].totalMark += mark;
    }
  }

  for (let i = 0; i < quizMark.length; i++) {
    let id = quizMark[i].student_id;
    let student = quizMark[i].student_name;
    let mark = parseInt(quizMark[i].mark);

    if (!leaderBoard[student]) {
      leaderBoard[student] = {
        id,
        name: student,
        assignmentMark: 0,
        quizMark: mark,
        totalMark: mark,
      };
    } else {
      leaderBoard[student].quizMark += mark;
      leaderBoard[student].totalMark += mark;
    }
  }

  let leaderBoardArray = Object.values(leaderBoard);

  leaderBoardArray.sort((a, b) => b.totalMark - a.totalMark);

  const result = final(leaderBoardArray);
  return result;
};

const final = (sortedLeaderBoard) => {
  let rank = 1;
  let prevMark = sortedLeaderBoard[0]?.totalMark;

  const finalLeaderBoard = [];

  for (let i = 0; i < sortedLeaderBoard.length; i++) {
    if (sortedLeaderBoard[i].totalMark < prevMark) {
      rank++;
      prevMark = sortedLeaderBoard[i].totalMark;
    }
    if (rank === 21) break;
    const markObject = {
      id: sortedLeaderBoard[i].id,
      name: sortedLeaderBoard[i].name,
      assignmentMark: sortedLeaderBoard[i]?.assignmentMark,
      quizMark: sortedLeaderBoard[i]?.quizMark,
      totalMark: sortedLeaderBoard[i].totalMark,
      rank,
    };
    finalLeaderBoard.push(markObject);
  }

  return finalLeaderBoard;
};

export default calculateLeaderBoard;
