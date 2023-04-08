import React from "react";
import { useGetAssignmentsMarkQuery } from "../../features/marksApi/marksApi";
import MarkRow from "./MarkRow";
import useTitle from "../../hooks/useTitle";

const AssignmentMark = () => {
  const { data: assignmentMarks = [] } = useGetAssignmentsMarkQuery();
  const total = assignmentMarks?.length;
  const pending = assignmentMarks.filter(
    (assignment) => assignment.status === "pending"
  ).length;
  useTitle("Assignment Marks");
  const sent = total - pending;

  return (
    <section className="py-6 bg-primary">
      <div className="mx-auto max-w-full px-5 lg:px-20">
        <div className="px-3 py-20 bg-opacity-10">
          <ul className="assignment-status">
            <li>
              Total <span>{total}</span>
            </li>
            <li>
              Pending <span>{pending}</span>
            </li>
            <li>
              Mark Sent <span>{sent}</span>
            </li>
          </ul>
          <div className="overflow-x-auto mt-4">
            <table className="divide-y-1 text-base divide-gray-600 w-full">
              <thead>
                <tr>
                  <th className="table-th">Assignment</th>
                  <th className="table-th">Date</th>
                  <th className="table-th">Student Name</th>
                  <th className="table-th">Repo Link</th>
                  <th className="table-th">Mark</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-600/50">
                {assignmentMarks?.map((mark) => (
                  <MarkRow key={mark.id} mark={mark} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssignmentMark;
