import axios from "axios";
const apiUrl = import.meta.env.VITE_APP_API_URL + "/api/v1";
console.log(apiUrl);
export const apiProcessor = async ({ method, data, url, isPrivate }) => {
  try {
    let response = await axios({
      method: method,
      url: url,
      data: data,
      headers: isPrivate
        ? { Authorization: localStorage.getItem("accessToken") }
        : {},
    });

    return response.data;
  } catch (err) {
    return {
      status: false,
      message: "Error processing the api request",
    };
  }
};

export const createUser = async (obj) => {
  return apiProcessor({
    method: "post",
    url: `${apiUrl}/auth/register`,
    data: obj,
  });
};

export const loginUser = async (obj) => {
  return apiProcessor({
    method: "post",
    url: `${apiUrl}/auth/login`,
    data: obj,
  });
};

export const verifyEmail = async (obj) => {
  return apiProcessor({
    method: "get",
    url: `${apiUrl}/auth/verifyEmail?t=${obj.t}&email=${obj.email}`,
  });
};
