import axios from "../../utils/axios";

export const getBlog = async (id) => {
  const res = await axios.get(`/blogs/${id}`);
  return res.data;
};

export const likeBlog = async (id, likes) => {
  const res = await axios.patch(
    `/blogs/${id}`,
    { likes: likes + 1 },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return res.data;
};

export const saveBlog = async (id, isSave) => {
  const res = await axios.patch(
    `/blogs/${id}`,
    { isSaved: !isSave },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return res.data;
};
