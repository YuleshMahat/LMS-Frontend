import { apiProcessor, apiUrl } from "../../services/apiProcessor.js";

export const addNewBook = (obj) => {
  return apiProcessor({
    method: "post",
    url: `${apiUrl}/book/`,
    data: obj,
    isPrivate: true,
    contentType: "multipart/form-data",
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

export const editBook = (formData) => {
  return apiProcessor({
    method: "put",
    url: `${apiUrl}/book`,
    isPrivate: true,
    data: formData,
  });
};

export const deleteBook = (id) => {
  return apiProcessor({
    method: "delete",
    url: `${apiUrl}/book`,
    isPrivate: true,
    data: { id },
  });
};

export const getAllBooks = () => {
  return apiProcessor({
    method: "get",
    url: `${apiUrl}/book/pub-books`,
  });
};
