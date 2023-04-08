import React from "react";
import { Link } from "react-router-dom";
import { useGetAssignmentsQuery } from "../../features/assignments/assignmentsApi";
import AssignmentRow from "./AssignmentRow";
import useTitle from "../../hooks/useTitle";

const Assignment = () => {
  const { data: assignments = [] } = useGetAssignmentsQuery();
  useTitle("Assignments List");
  return (
    <section className="py-6 bg-primary">
      <div className="mx-auto max-w-full px-5 lg:px-20">
        <div className="px-3 py-20 bg-opacity-10">
          <div className="w-full flex">
            <Link to={"/admin/add-assignment"} className="btn ml-auto">
              Add New Assignment
            </Link>
          </div>
          <div className="overflow-x-auto mt-4">
            <table className="divide-y-1 text-base divide-gray-600 w-full">
              <thead>
                <tr>
                  <th className="table-th">Title</th>
                  <th className="table-th">Video Title</th>
                  <th className="table-th">Mark</th>
                  <th className="table-th">Action</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-600/50">
                {assignments?.map((assignment) => (
                  <AssignmentRow key={assignment.id} assignment={assignment} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Assignment;
