import { apiUrl, apiProcessor } from "../../services/apiProcessor.js";

export const fetchUserDetails = async () => {
  const result = await apiProcessor({
    method: "get",
    url: `${apiUrl}/user/detail`,
    isPrivate: true,
  });
  return result;
};
