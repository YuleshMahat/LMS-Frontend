export const storeToken = (token, type) => {
  if (type === "access") {
    sessionStorage.setItem("accessToken", token);
  }
  if (type === "refresh") {
    localStorage.setItem("refreshToken", token);
  }
};

export const getToken = (type) => {
  if (type === "access") return sessionStorage.getItem("accessToken");
  if (type === "refresh") return localStorage.getItem("refreshToken");
};

export const revokeToken = () => {
  sessionStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
};
