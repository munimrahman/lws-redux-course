import axios from "../../utils/axios";

export const getBlog = async (id) => {
  const res = await axios.get(`/blogs/${id}`);
  return res.data;
};
