import React from "react";
import { useSelector } from "react-redux";
import { useGetTasksQuery } from "../../features/task/taskApi";
import SingleTask from "./SingleTask";

const TaskList = () => {
  const { data: tasks } = useGetTasksQuery();
  const { searchTerm, projects } = useSelector((state) => state.filter);

  const filteredTasksByProjects = tasks?.filter((task) =>
    projects.includes(task.project.projectName)
  );

  const filteredTasksBySearch = filteredTasksByProjects?.filter((task) =>
    task.taskName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="lws-task-list">
      {filteredTasksBySearch?.map((task) => (
        <SingleTask key={task?.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
