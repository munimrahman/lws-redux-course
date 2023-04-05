import React, { useState } from "react";
import { useAddAssignmentMarkMutation } from "../../features/marksApi/marksApi";

const MarkRow = ({ mark }) => {
  const [addAssignmentMark, { isLoading, isError }] =
    useAddAssignmentMarkMutation();

  const {
    id,
    title,
    student_name,
    createdAt,
    repo_link,
    status,
    mark: assignmentMark,
  } = mark || {};

  const [givenMark, setGivenMark] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addAssignmentMark({
      id,
      data: {
        mark: givenMark,
        status: "published",
      },
    });
  };

  return (
    <tr>
      <td className="table-td">{title}</td>
      <td className="table-td">{createdAt}</td>
      {/* <td className="table-td">10 Mar 2023 10:58:13 PM</td> */}
      <td className="table-td">{student_name}</td>
      <td className="table-td">{repo_link}</td>
      {status === "pending" ? (
        <td className="table-td input-mark">
          <form
            onSubmit={handleSubmit}
            className="flex justify-center items-center"
          >
            <input
              type="number"
              max="100"
              value={givenMark}
              onChange={(e) => setGivenMark(e.target.value)}
              required
            />
            <button type="submit" className="ps-1">
              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6 text-green-500 cursor-pointer hover:text-green-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </button>
          </form>
        </td>
      ) : (
        <td className="table-td">{assignmentMark}</td>
      )}
    </tr>
  );
};

export default MarkRow;
