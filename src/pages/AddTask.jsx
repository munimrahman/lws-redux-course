import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  projectsApi,
  useGetProjectsQuery,
} from "../features/projects/projectsApi";
import { useAddTaskMutation } from "../features/task/taskApi";
import {
  teamMembersApi,
  useGetTeamMembersQuery,
} from "../features/teamMembers/teamMembers";

const AddTask = () => {
  const { data: members } = useGetTeamMembersQuery();
  const { data: projects } = useGetProjectsQuery();
  const [addTask, { isLoading, isError }] = useAddTaskMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // form data
  const [taskName, setTaskName] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [projectName, setProjectName] = useState("");
  const [deadline, setDeadline] = useState("");

  const [selectedProjectInfo, setSelectedProjectInfo] = useState(undefined);
  const [selectedMemberInfo, setSelectedMemberInfo] = useState(undefined);

  useEffect(() => {
    if (projectName) {
      dispatch(projectsApi.endpoints.getProject.initiate(projectName))
        .unwrap()
        .then((data) => setSelectedProjectInfo(data));
    }
  }, [projectName, dispatch]);

  useEffect(() => {
    if (assignedTo) {
      dispatch(teamMembersApi.endpoints.getTeamMember.initiate(assignedTo))
        .unwrap()
        .then((data) => setSelectedMemberInfo(data));
    }
  }, [assignedTo, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({
      taskName,
      teamMember: selectedMemberInfo[0],
      project: selectedProjectInfo[0],
      deadline,
      status: "pending",
    });
    if (!isLoading && !isError) {
      navigate("/");
    }
  };
  return (
    <div className="container relative">
      <main className="relative z-20 max-w-3xl mx-auto rounded-lg xl:max-w-none">
        <h1 className="mt-4 mb-8 text-3xl font-bold text-center text-gray-800">
          Create Task for Your Team
        </h1>

        <div className="justify-center mb-10 space-y-2 md:flex md:space-y-0">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="fieldContainer">
              <label htmlFor="lws-taskName">Task Name</label>
              <input
                type="text"
                name="taskName"
                id="lws-taskName"
                required
                placeholder="Implement RTK Query"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
              />
            </div>

            <div className="fieldContainer">
              <label>Assign To</label>
              <select
                onChange={(e) => setAssignedTo(e.target.value)}
                name="teamMember"
                id="lws-teamMember"
                required
              >
                <option value="" hidden selected>
                  Select Member
                </option>
                {members?.map((member) => (
                  <option key={member.id}>{member.name}</option>
                ))}
              </select>
            </div>
            <div className="fieldContainer">
              <label htmlFor="lws-projectName">Project Name</label>
              <select
                onChange={(e) => setProjectName(e.target.value)}
                id="lws-projectName"
                name="projectName"
                required
              >
                <option value="" hidden selected>
                  Select Project
                </option>
                {projects?.map((project) => (
                  <option key={project.id}>{project.projectName}</option>
                ))}
              </select>
            </div>

            <div className="fieldContainer">
              <label htmlFor="lws-deadline">Deadline</label>
              <input
                type="date"
                name="deadline"
                id="lws-deadline"
                required
                onChange={(e) => setDeadline(e.target.value)}
              />
            </div>

            <div className="text-right">
              <button type="submit" className="lws-submit">
                Save
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default AddTask;
