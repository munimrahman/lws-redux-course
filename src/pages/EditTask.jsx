import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetProjectsQuery } from "../features/projects/projectsApi";
import { useGetTaskQuery } from "../features/task/taskApi";
import { useGetTeamMembersQuery } from "../features/teamMembers/teamMembers";

const EditTask = () => {
  const { id } = useParams();
  const { data: members, isLoading: membersLoading } = useGetTeamMembersQuery();
  const { data: projects, isLoading: projectsLoading } = useGetProjectsQuery();
  const { data: task, isLoading } = useGetTaskQuery(id);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    setFormData(task);
  }, [task]);

  const handleChange = (e) => {
    const task = {};
    task[e.target.name] = e.target.value;
    setFormData({ ...formData, ...task });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="container relative">
      {!isLoading && (
        <main className="relative z-20 max-w-3xl mx-auto rounded-lg xl:max-w-none">
          <h1 className="mt-4 mb-8 text-3xl font-bold text-center text-gray-800">
            Edit Task
          </h1>

          <div className="justify-center mb-10 space-y-2 md:flex md:space-y-0">
            <form onClick={handleSubmit} className="space-y-6">
              <div className="fieldContainer">
                <label htmlFor="lws-taskName">Task Name</label>
                <input
                  type="text"
                  name="taskName"
                  id="lws-taskName"
                  required
                  placeholder="Implement RTK Query"
                  value={formData?.taskName}
                  onChange={handleChange}
                />
              </div>

              <div className="fieldContainer">
                <label>Assign To</label>
                <select
                  name="teamMember"
                  id="lws-teamMember"
                  required
                  defaultValue={task.teamMember}
                >
                  <option value="" hidden selected>
                    Select Member
                  </option>
                  {members?.map((member) => (
                    <option key={member.id} value={member}>
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
                  defaultValue={task.project.projectName}
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
                  value={task.deadline}
                  onChange={handleChange}
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
