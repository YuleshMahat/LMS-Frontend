import { apiUrl, apiProcessor } from "../../services/apiProcessor.js";

export const borrowBookApi = async (borrowObj) => {
  const result = await apiProcessor({
    method: "post",
    url: `${apiUrl}/borrow`,
    isPrivate: true,
    data: borrowObj,
  });
  return result;
};

export const getBorrowedBookApi = async () => {
  const result = await apiProcessor({
    method: "get",
    url: `${apiUrl}/borrow`,
    isPrivate: true,
  });
  return result;
};

export const returnBookApi = async (borrowId) => {
  const result = await apiProcessor({
    method: "post",
    url: `${apiUrl}/borrow/${borrowId}`,
    isPrivate: true,
  });
  return result;
};
