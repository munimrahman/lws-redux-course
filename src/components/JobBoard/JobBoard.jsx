import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterBySalary } from "../../features/filter/filterSlice";
import { getJobs } from "../../features/jobs/jobsSlice";
import SingleJobCard from "./SingleJobCard";

const JobBoard = () => {
  const dispatch = useDispatch();
  const { jobs } = useSelector((state) => state.jobs);
  const { typeFilter, salaryFilter } = useSelector((state) => state.filter);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    dispatch(getJobs({ typeFilter, salaryFilter }));
  }, [dispatch, typeFilter, salaryFilter]);

  let title;
  if (typeFilter === "all") {
    title = "All Available Jobs";
  } else if (typeFilter === "intern") {
    title = "All Internship Jobs";
  } else if (typeFilter === "full") {
    title = "All Full Time Jobs";
  } else if (typeFilter === "remote") {
    title = "All remote Jobs";
  }

  return (
    <div className="lg:pl-[14rem]  mt-[5.8125rem]">
      <main className="max-w-3xl rounded-lg  mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
        <div className="md:flex space-y-2 md:space-y-0 justify-between mb-10 ">
          <h1 className="lws-section-title">{title}</h1>
          <div className="flex gap-4">
            <div className="search-field group flex-1">
              <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
              <input
                type="text"
                placeholder="Search Job"
                className="search-input"
                id="lws-searchJob"
                onChange={(e) => setSearchText(e.target.value)}
              />
            </div>
            <select
              id="lws-sort"
              name="sort"
              autoComplete="sort"
              className="flex-1"
              onChange={(e) => dispatch(filterBySalary(e.target.value))}
            >
              <option selected value={""}>
                Default
              </option>
              <option value={"low-high"}>Salary (Low to High)</option>
              <option value={"high-low"}>Salary (High to Low)</option>
            </select>
          </div>
        </div>

        <div className="jobs-list">
          {/* <!-- Single Job 1--> */}
          {jobs.map((job) => (
            <SingleJobCard key={job.id} job={job} />
          ))}

          {/* <!-- Single Job 1--> */}
        </div>
      </main>
    </div>
  );
};

export default JobBoard;
