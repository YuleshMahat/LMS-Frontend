import { apiProcessor, apiUrl } from "../../services/apiProcessor.js";

export const submitReviewApi = async (borrowObj) => {
  const result = await apiProcessor({
    method: "post",
    url: `${apiUrl}/review`,
    isPrivate: true,
    data: borrowObj,
  });
  return result;
};

export const getReviewApi = async () => {
  const result = await apiProcessor({
    method: "get",
    url: `${apiUrl}/review`,
    isPrivate: true,
  });
  return result;
};
