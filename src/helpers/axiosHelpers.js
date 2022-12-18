import axios from "axios";
const baseUrl = "http://localhost:8000/api/v1";
const userApi = baseUrl + "/user";
// ====== user api

export const postUser = async (obj) => {
  try {
    const { data } = await axios.post(userApi, obj);
    return data;
  } catch (error) {
    return {
      status: "success",
      message: error.message,
    };
  }
};

//login user
export const loginUser = async (obj) => {
  try {
    const { data } = await axios.post(userApi + "/login", obj);
    return data;
  } catch (error) {
    return {
      status: "success",
      message: error.message,
    };
  }
};
