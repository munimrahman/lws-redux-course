import React from "react";

const LeaderBoardRow = ({ leaderBoardRow }) => {
  const { rank, name, assignmentMark, quizMark, totalMark } =
    leaderBoardRow || {};
  return (
    <tr className="border-b border-slate-600/50">
      <td className="table-td text-center">{rank}</td>
      <td className="table-td text-center">{name}</td>
      <td className="table-td text-center">{quizMark}</td>
      <td className="table-td text-center">{assignmentMark}</td>
      <td className="table-td text-center">{totalMark}</td>
    </tr>
  );
};

export default LeaderBoardRow;
