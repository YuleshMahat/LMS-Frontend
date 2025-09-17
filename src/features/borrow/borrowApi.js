import { apiUrl, apiProcessor } from "../../services/apiProcessor.js";

export const borrowBookApi = async (borrowArr) => {
  const result = await apiProcessor({
    method: "post",
    url: `${apiUrl}/borrow`,
    isPrivate: true,
    data: { borrowArr },
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

export const updateBorrowBookApi = async (updateObj) => {
  const result = await apiProcessor({
    method: "patch",
    url: `${apiUrl}/borrow/`,
    isPrivate: true,
    data: updateObj,
  });
  return result;
};
