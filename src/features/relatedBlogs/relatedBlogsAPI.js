import axios from "../../utils/axios";

export const getRelatedBlogs = async (id, tags) => {
  let queryString = "";
  let limit = 5;
  if (tags?.length > 0) {
    queryString +=
      tags.map((tag) => `tags_like=${tag}`).join("&") +
      `&id_ne=${id}&_limit=${limit}`;
  }
  const res = await axios.get(`/blogs/?${queryString}`);

  return res.data;
};
