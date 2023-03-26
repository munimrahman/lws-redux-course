import React from "react";
import { useGetProjectsQuery } from "../../features/projects/projectsApi";
import { useGetTeamMembersQuery } from "../../features/teamMembers/teamMembers";
import Project from "./Project";

const Sidebar = () => {
  const { data: projects } = useGetProjectsQuery();
  const { data: members } = useGetTeamMembersQuery();

  // const { filter } = useSelector((state) => state.filter);

  return (
    <div className="sidebar">
      <div>
        <h3 className="text-xl font-bold">Projects</h3>
        <div className="mt-3 space-y-4">
          {projects?.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-bold">Team Members</h3>
        <div className="mt-3 space-y-4">
          {members?.map((member) => (
            <div key={member.id} className="checkbox-container">
              <img src={member.avatar} className="team-avater" alt="" />
              <p className="label">{member.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
