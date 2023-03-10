import axios from "../../utils/axios";

export const getBlogs = async (sort, filter) => {
  console.log("From API: ", sort, filter);
  // http://localhost:9000/blogs?isSaved=false&_sort=createdAt&_order=desc
  let queryString = "";
  if (sort === "newest") {
    queryString += "_sort=createdAt&_order=desc";
  } else if (sort === "most_liked") {
    queryString += "_sort=likes&_order=desc";
  }
  if (filter === "saved") {
    queryString += "&isSaved=true";
  }
  const res = await axios.get(`/blogs?${queryString}`);
  console.log(`/blogs?${queryString}`);
  return res.data;
};
