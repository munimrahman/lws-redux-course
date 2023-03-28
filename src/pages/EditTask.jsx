import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  projectsApi,
  useGetProjectsQuery,
} from "../features/projects/projectsApi";
import { useEditTaskMutation, useGetTaskQuery } from "../features/task/taskApi";
import {
  teamMembersApi,
  useGetTeamMembersQuery,
} from "../features/teamMembers/teamMembers";

const EditTask = () => {
  const { id } = useParams();
  const { data: projects, isLoading: projectsLoading } = useGetProjectsQuery();
  const { data: members, isLoading: membersLoading } = useGetTeamMembersQuery();
  const { data: task } = useGetTaskQuery(id);
  const [editTask, { isLoading, isError, isSuccess }] = useEditTaskMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { taskName, teamMember, project, deadline } = task || {};

  // form data
  const [editTaskName, setEditTaskName] = useState("");
  const [editAssignedTo, setEditAssignedTo] = useState("");
  const [editProjectName, setEditProjectName] = useState("");
  const [editDeadline, setEditDeadline] = useState("");

  const [selectedProjectInfo, setSelectedProjectInfo] = useState(undefined);
  const [selectedMemberInfo, setSelectedMemberInfo] = useState(undefined);

  useEffect(() => {
    setEditTaskName(task?.taskName);
    setEditAssignedTo(task?.teamMember.name);
    setEditProjectName(task?.project.projectName);
    setEditDeadline(task?.deadline);
  }, [task]);

  useEffect(() => {
    if (editProjectName) {
      dispatch(projectsApi.endpoints.getProject.initiate(editProjectName))
        .unwrap()
        .then((data) => setSelectedProjectInfo(data));
    }
  }, [editProjectName, dispatch]);

  useEffect(() => {
    if (editAssignedTo) {
      dispatch(teamMembersApi.endpoints.getTeamMember.initiate(editAssignedTo))
        .unwrap()
        .then((data) => setSelectedMemberInfo(data));
    }
  }, [editAssignedTo, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    editTask({
      id,
      data: {
        taskName: editTaskName,
        teamMember: selectedMemberInfo[0],
        project: selectedProjectInfo[0],
        deadline: editDeadline,
      },
    });
    if (!isLoading && !isError) {
      navigate("/");
    }
  };

  return (
    <div className="container relative">
      {!isLoading && (
        <main className="relative z-20 max-w-3xl mx-auto rounded-lg xl:max-w-none">
          <h1 className="mt-4 mb-8 text-3xl font-bold text-center text-gray-800">
            Edit Task
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
                  value={editTaskName}
                  onChange={(e) => setEditTaskName(e.target.value)}
                />
              </div>

              <div className="fieldContainer">
                <label>Assign To</label>
                <select
                  name="teamMember"
                  id="lws-teamMember"
                  required
                  value={editAssignedTo}
                  onChange={(e) => setEditAssignedTo(e.target.value)}
                >
                  <option value="" hidden selected>
                    Select Member
                  </option>
                  {members?.map((member) => (
                    <option key={member.id} value={member.name}>
                      {member.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="fieldContainer">
                <label htmlFor="lws-projectName">Project Name</label>
                <select
                  id="lws-projectName"
                  name="projectName"
                  required
                  value={editProjectName}
                  onChange={(e) => setEditProjectName(e.target.value)}
                >
                  <option value="" hidden selected>
                    Select Project
                  </option>
                  {projects?.map((project) => (
                    <option>{project.projectName}</option>
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
                  value={editDeadline}
                  onChange={(e) => setEditDeadline(e.target.value)}
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
      )}
    </div>
  );
};

export default EditTask;
