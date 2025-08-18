import { loginUser } from "../../services/apiProcessor.js";
import { storeToken } from "../../services/storageFunctions.js";
import { setUserData } from "../../features/auth/authSlice.js";
import { fetchUserDetails } from "../users/userAPI.js";

export const getUserDetails = () => async (dispatch) => {
  console.log("GetUserDetails function triggered. this is a private route");
  let data = await fetchUserDetails();
  if (data?.status) {
    dispatch(setUserData(data.user));
  }
  return { status: data.status, message: data.message };
};

export const loginUserAction = (form) => async (dispatch) => {
  let data = await loginUser(form);
  if (data.status) {
    console.log(data.accessToken, data.refreshToken);
    storeToken(data.accessToken, "access");
    storeToken(data.refreshToken, "refresh");
    await dispatch(getUserDetails());
  }

  return { status: data.status, message: data.message };
};
