import React from "react";
import { useSelector } from "react-redux";
import { useGetTasksQuery } from "../../features/task/taskApi";
import SingleTask from "./SingleTask";

const TaskList = () => {
  const { data: tasks, isLoading, isError } = useGetTasksQuery();
  const { searchTerm, projects } = useSelector((state) => state.filter);

  const filteredTasksByProjects = tasks?.filter((task) =>
    projects.includes(task.project.projectName)
  );

  const filteredTasksBySearch = filteredTasksByProjects?.filter((task) =>
    task.taskName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  let content = null;

  if (isLoading) {
    content = <h1>Loading...</h1>;
  }

  if (!isLoading && isError) {
    content = (
      <h3 className="text-center font-medium text-xl">
        Failed To Load The Tasks!!
      </h3>
    );
  }

  if (!isLoading && !isError && filteredTasksBySearch.length === 0) {
    content = (
      <h3 className="text-center font-medium text-xl">No Tasks Found!!</h3>
    );
  }

  if (!isLoading && !isError && filteredTasksBySearch.length > 0) {
    content = filteredTasksBySearch?.map((task) => (
      <SingleTask key={task?.id} task={task} />
    ));
  }

  return <div className="lws-task-list">{content}</div>;
};

export default TaskList;
