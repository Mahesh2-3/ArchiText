// Gets the authentication token from cookies
export const getAuthToken = () => {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp("(^| )token=([^;]+)"));
  if (match) return match[2];
  return null;
};

// Generates authorization headers with token for requests
export const getAuthHeaders = (extraHeaders = {}) => {
  const token = getAuthToken();
  const headers = { ...extraHeaders };
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }
  return headers;
};

