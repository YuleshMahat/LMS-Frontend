import { apiProcessor, apiUrl } from "../../services/apiProcessor.js";

export const addNewBook = (obj) => {
  return apiProcessor({
    method: "post",
    url: `${apiUrl}/book/`,
    data: obj,
    isPrivate: true,
  });
};
