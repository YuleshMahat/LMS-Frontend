import { apiUrl, apiProcessor } from "../../services/apiProcessor.js";

export const sendIntentApi = async (totalPrice) => {
  const result = await apiProcessor({
    method: "post",
    url: `${apiUrl}/checkout`,
    isPrivate: true,
    data: { amount: totalPrice },
  });
  return result;
};
