import React, { useState } from "react";
import { useSubmitAssignmentMutation } from "../../features/assignments/assignmentsApi";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/auth/authSelectors";

const Modal = ({ open, control, assignment }) => {
  const [submitAssignment, { isLoading, isError }] =
    useSubmitAssignmentMutation();
  const user = useSelector(selectUser);
  const { id, title, totalMark } = assignment || {};
  const [repoLink, setRepoLink] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const assignment = {
      student_id: user?.id,
      student_name: user?.name,
      assignment_id: id,
      title,
      createdAt: Date.now(),
      totalMark,
      mark: 0,
      repo_link: repoLink,
      status: "pending",
    };
    submitAssignment(assignment);
    if (!isLoading && !isError) {
      control();
    }
  };

  return (
    open && (
      <>
        <div
          onClick={control}
          className="fixed w-full h-full inset-0 z-10 bg-[#0A1121]/60 cursor-pointer"
        ></div>
        <div className="border rounded-md w-[400px] lg:w-[600px] space-y-8 bg-[#0A1121] p-10 absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
          <h2 className="text-center text-3xl font-extrabold text-white">
            এসাইনমেন্ট জমা দিন
          </h2>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="to" className="text-white">
                  গিটহাব রিপোসিটরি লিঙ্ক{" "}
                </label>
                <input
                  id="repo"
                  name="repo_link"
                  type="text"
                  required
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-sky-500 focus:border-sky-500 focus:z-10 sm:text-sm mt-2"
                  placeholder="https://github.com/exaple"
                  onChange={(e) => setRepoLink(e.target.value)}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-sky-500 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </>
    )
  );
};

export default Modal;
