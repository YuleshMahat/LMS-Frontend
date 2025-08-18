import { apiUrl, apiProcessor } from "../../services/apiProcessor.js";

export const fetchUserDetails = async () => {
  const result = await apiProcessor({
    method: "get",
    url: `${apiUrl}/user/detail`,
    isPrivate: true,
  });
  return result;
};

export const regenerateAccessToken = async () => {
  console.log("Refresh token API triggered on frontend");
  return await apiProcessor({
    method: "get",
    url: `${apiUrl}/auth/refreshToken`,
    isPrivate: true,
    isRefresh: true,
  });
};
