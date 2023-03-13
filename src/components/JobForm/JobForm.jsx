import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { filterByType } from "../../features/filter/filterSlice";
import { createJob, updateJob } from "../../features/jobs/jobsSlice";

const JobForm = ({ title = "", editData = {} }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialForm = {
    title: "select-job",
    type: "select-jobtype",
    salary: "",
    deadline: "",
    id: "",
  };

  const [data, setData] = useState(title === "edit" ? editData : initialForm);

  const handleChange = (e) => {
    const inputData = {};
    inputData[e.target.name] = e.target.value;
    setData({ ...data, ...inputData });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "new") {
      dispatch(createJob(data));
    } else {
      dispatch(updateJob({ id: data.id, data }));
      dispatch(filterByType("all"));
    }
    navigate("/");
  };

  return (
    <div className="lg:pl-[14rem] mt-[5.8125rem]">
      <main className="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
        <h1 className="mb-10 text-center lws-section-title">
          {title === "new" ? "Add New Job" : "Edit Job"}
        </h1>

        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="fieldContainer">
              <label
                htmlFor="lws-JobTitle"
                className="text-sm font-medium text-slate-300"
              >
                Job Title
              </label>
              <select
                onChange={handleChange}
                id="lws-JobTitle"
                name="title"
                required
                defaultValue={data.title}
              >
                <option value="select-job" hidden>
                  Select Job
                </option>
                <option>Software Engineer</option>
                <option>Software Developer</option>
                <option>Full Stack Developer</option>
                <option>MERN Stack Developer</option>
                <option>DevOps Engineer</option>
                <option>QA Engineer</option>
                <option>Product Manager</option>
                <option>Social Media Manager</option>
                <option>Senior Executive</option>
                <option>Junior Executive</option>
                <option>Android App Developer</option>
                <option>IOS App Developer</option>
                <option>Frontend Developer</option>
                <option>Frontend Engineer</option>
              </select>
            </div>

            <div className="fieldContainer">
              <label htmlFor="lws-JobType">Job Type</label>
              <select
                onChange={handleChange}
                id="lws-JobType"
                name="type"
                required
                defaultValue={data.type}
              >
                <option value="select-jobtype" hidden>
                  Select Job Type
                </option>
                <option>Full Time</option>
                <option>Internship</option>
                <option>Remote</option>
              </select>
            </div>

            <div className="fieldContainer">
              <label htmlFor="lws-JobSalary">Salary</label>
              <div className="flex border rounded-md shadow-sm border-slate-600">
                <span className="input-tag">BDT</span>
                <input
                  onChange={handleChange}
                  type="number"
                  name="salary"
                  id="lws-JobSalary"
                  required
                  className="!rounded-l-none !border-0"
                  placeholder="20,00,000"
                  value={data.salary}
                />
              </div>
            </div>

            <div className="fieldContainer">
              <label htmlFor="lws-JobDeadline">Deadline</label>
              <input
                onChange={handleChange}
                type="date"
                name="deadline"
                id="lws-JobDeadline"
                required
                value={data.deadline}
              />
            </div>

            <div className="text-right">
              <button
                type="submit"
                id="lws-submit"
                className="cursor-pointer btn btn-primary w-fit"
              >
                {title === "new" ? "Add" : "Edit"}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default JobForm;
