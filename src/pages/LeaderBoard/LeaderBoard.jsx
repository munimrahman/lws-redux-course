/* eslint-disable eqeqeq */
import React from "react";
import {
  useGetAssignmentsMarkQuery,
  useGetQuizzesMarkQuery,
} from "../../features/marksApi/marksApi";
import LeaderBoardRow from "./LeaderBoardRow";
import calculateLeaderBoard from "../../utils/calculateLeaderBoard";

const LeaderBoard = () => {
  const { data: assignmentMark = [] } = useGetAssignmentsMarkQuery();
  const { data: quizMark = [] } = useGetQuizzesMarkQuery();

  const leaderBoard = calculateLeaderBoard(assignmentMark, quizMark);

  const studentId = 1;
  const studentResult = leaderBoard.find((s) => s.id == studentId);
  const {
    rank,
    name,
    quizMark: quiz,
    assignmentMark: assignment,
    totalMark,
  } = studentResult || {};
  return (
    <section className="py-6 bg-primary">
      <div className="mx-auto max-w-7xl px-5 lg:px-0">
        <div>
          <h3 className="text-lg font-bold">Your Position in Leaderboard</h3>
          <table className="text-base w-full border border-slate-600/50 rounded-md my-4">
            <thead>
              <tr>
                <th className="table-th !text-center">Rank</th>
                <th className="table-th !text-center">Name</th>
                <th className="table-th !text-center">Quiz Mark</th>
                <th className="table-th !text-center">Assignment Mark</th>
                <th className="table-th !text-center">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-2 border-cyan">
                <td className="table-td text-center font-bold">{rank}</td>
                <td className="table-td text-center font-bold">{name}</td>
                <td className="table-td text-center font-bold">{quiz}</td>
                <td className="table-td text-center font-bold">{assignment}</td>
                <td className="table-td text-center font-bold">{totalMark}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="my-8">
          <h3 className="text-lg font-bold">Top 20 Result</h3>
          <table className="text-base w-full border border-slate-600/50 rounded-md my-4">
            <thead>
              <tr className="border-b border-slate-600/50">
                <th className="table-th !text-center">Rank</th>
                <th className="table-th !text-center">Name</th>
                <th className="table-th !text-center">Quiz Mark</th>
                <th className="table-th !text-center">Assignment Mark</th>
                <th className="table-th !text-center">Total</th>
              </tr>
            </thead>

            <tbody>
              {leaderBoard?.map((leaderBoardRow) => (
                <LeaderBoardRow
                  key={leaderBoardRow.id}
                  leaderBoardRow={leaderBoardRow}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default LeaderBoard;
