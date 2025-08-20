import { apiProcessor, apiUrl } from "../../services/apiProcessor.js";

export const addNewBook = (obj) => {
  return apiProcessor({
    method: "post",
    url: `${apiUrl}/book/`,
    data: obj,
    isPrivate: true,
  });
};

export const getBooks = (filterObj) => {
  return apiProcessor({
    method: "get",
    url: `${apiUrl}/book`,
    isPrivate: true,
    data: filterObj,
  });
};
