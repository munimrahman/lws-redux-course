import axios from "../../utils/axios";

export const fetchJobs = async (typeFilter, salaryFilter) => {
  // console.log(typeFilter, salaryFilter);
  // http://localhost:9000/blogs?isSaved=false&_sort=createdAt&_order=desc
  let queryString = "";
  if (typeFilter === "all") {
    queryString += "";
  } else if (typeFilter === "intern") {
    queryString += "type=Internship";
  } else if (typeFilter === "full") {
    queryString += "type=Full%20Time";
  } else if (typeFilter === "remote") {
    queryString += "type=Remote";
  }

  if (salaryFilter === "low-high") {
    queryString += "&_sort=salary&_order=asc";
  } else if (salaryFilter === "high-low") {
    queryString += "&_sort=salary&_order=desc";
  }

  console.log(`/jobs?${queryString}`);
  const jobs = await axios.get(`/jobs?${queryString}`);
  return jobs;
};
