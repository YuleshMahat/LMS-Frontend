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
  contentType = "application/json",
}) => {
  try {
    let response = await axios({
      method: method,
      url: url,
      data: data,
      headers: isPrivate
        ? {
            Authorization: isRefresh ? getToken("refresh") : getToken("access"),
            "Content-Type": contentType,
          }
        : {},
    });

    return response.data;
  } catch (err) {
    if (err?.response?.data?.message?.includes("Expired access token")) {
      const refreshResult = await regenerateAccessToken();

      if (refreshResult?.accessToken) {
        storeToken(refreshResult.accessToken, "access");
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
      message: err?.response?.data?.message,
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
