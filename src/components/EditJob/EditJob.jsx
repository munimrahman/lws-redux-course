import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import JobForm from "../JobForm/JobForm";

const EditJob = () => {
  const { id } = useParams();
  const { jobs } = useSelector((state) => state.jobs);

  const editJob = jobs.find((job) => job.id === Number(id));

  return (
    <div>
      <JobForm title="edit" editData={editJob} />
    </div>
  );
};

export default EditJob;
