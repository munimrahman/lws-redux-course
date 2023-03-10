import axios from "../../utils/axios";

export const saveBlog = async (id, isSaved) => {
  const res = await axios.patch(
    `/blogs/${id}`,
    { isSaved: !isSaved },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return res.data;
};
