import axios from "../../utils/axios";

export const getBlogs = async () => {
  const res = await axios.get(`/blogs`);
  return res.data;
};
