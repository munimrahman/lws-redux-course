import axios from "../../utils/axios";

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
