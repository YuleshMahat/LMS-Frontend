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

export const updateReviewApi = async (updateObj) => {
  const result = await apiProcessor({
    method: "patch",
    url: `${apiUrl}/review`,
    isPrivate: true,
    data: updateObj,
  });
  return result;
};

export const getApprovedReviewsApi = async (bookId) => {
  const result = await apiProcessor({
    method: "get",
    url: `${apiUrl}/review/${bookId}`,
    isPrivate: true,
  });
  return result;
};
