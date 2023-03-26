import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { projectFilter } from "../../features/filter/filterSlice";

const Project = ({ project }) => {
  const { id, colorClass, projectName } = project || {};
  const [isChecked, setIsChecked] = useState(true);
  const dispatch = useDispatch();

  const handleChecked = (projectName, check) => {
    dispatch(projectFilter({ projectName, check }));
    setIsChecked(check);
  };

  return (
    <div key={id} className="checkbox-container">
      <input
        type="checkbox"
        className={colorClass}
        checked={isChecked}
        onChange={(e) => handleChecked(projectName, e.target.checked)}
      />
      <p className="label">{projectName}</p>
    </div>
  );
};

export default Project;
