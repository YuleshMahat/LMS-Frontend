import { apiProcessor, apiUrl } from "../../services/apiProcessor.js";

export const getAdminsApi = () => {
  return apiProcessor({
    method: "get",
    isPrivate: true,
    url: `${apiUrl}/admin`,
  });
};

export const changeAdminStatus = (id) => {
  return apiProcessor({
    method: "post",
    isPrivate: true,
    url: `${apiUrl}/admin`,
    data: { _id: id },
  });
};
