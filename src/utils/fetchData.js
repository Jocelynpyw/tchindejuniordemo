import axios from "axios";

export const getDataAPI = async (url, token) => {
  const res = await axios.get(`/api/${url}`, {
    headers: { Authorization: token },
  });
  return res;
};

export const postDataAPI = async (url, post, token) => {
  //   const res = await axios.post("http://localhost:5000/api/register", post, {
  const res = await axios.post(
    `https://pren-social-app-backend.onrender.com/api/${url}`,
    post,
    {
      headers: { Authorization: token },
    }
  );
  return res;
};

export const putDataAPI = async (url, post, token) => {
  const res = await axios.put(
    `https://pren-social-app-backend.onrender.com/api/${url}`,
    post,
    {
      headers: { Authorization: token },
    }
  );
  return res;
};

export const patchDataAPI = async (url, post, token) => {
  const res = await axios.patch(
    `https://pren-social-app-backend.onrender.com/api/${url}`,
    post,
    {
      headers: { Authorization: token },
    }
  );
  return res;
};

export const deleteDataAPI = async (url, token) => {
  const res = await axios.delete(
    `https://pren-social-app-backend.onrender.com/api/${url}`,
    {
      headers: { Authorization: token },
    }
  );
  return res;
};
