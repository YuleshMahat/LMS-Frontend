import { loginUser } from "../../services/apiProcessor.js";
import { revokeToken, storeToken } from "../../services/storageFunctions.js";
import { clearUserData, setUserData } from "../../features/auth/authSlice.js";
import { fetchUserDetails } from "../users/userAPI.js";
import { toast } from "react-toastify";

export const getUserDetails = () => async (dispatch) => {
  let data = await fetchUserDetails();
  if (data?.status) {
    dispatch(setUserData(data.user));
  }
  return { status: data.status, message: data.message };
};

export const loginUserAction = (form) => async (dispatch) => {
  const data = await loginUser(form);
  if (data.status) {
    storeToken(data.accessToken, "access");
    storeToken(data.refreshToken, "refresh");
    await dispatch(getUserDetails());
  }

  return { status: data.status, message: data.message };
};

export const logoutAction = () => async (dispatch) => {
  dispatch(clearUserData());
  revokeToken();
  toast.success("Logout successful");
};
