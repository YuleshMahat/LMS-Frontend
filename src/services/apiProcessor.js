import axios from "axios";
import { getToken, storeToken } from "./storageFunctions.js";
export const apiUrl = import.meta.env.VITE_APP_API_URL + "/api/v1";
import { regenerateAccessToken } from "../features/users/userAPI.js";

export const apiProcessor = async ({
  method,
  data,
  url,
  isPrivate,
  isRefresh = false,
}) => {
  try {
    let response = await axios({
      method: method,
      url: url,
      data: data,
      headers: isPrivate
        ? {
            Authorization: isRefresh ? getToken("refresh") : getToken("access"),
          }
        : {},
    });

    return response.data;
  } catch (err) {
    console.log("catch block of api processor.");
    console.log(err.response.data.message);
    if (err?.response?.data?.message.trim().includes("Expired access token")) {
      console.log("Inside if block of catch");
      const data = await regenerateAccessToken();

      if (data?.accessToken) {
        console.log("After regenerating token new token ", data.accessToken);
        console.log("refresh token", getToken("refresh"));
        storeToken(data.accessToken, "access");
        return apiProcessor({
          method,
          data,
          url,
          isPrivate,
          isRefresh,
        });
      }
    }

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
