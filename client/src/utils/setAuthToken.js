import axios from "axios";

const setAuthToken = (token) => {
  if (token) {
    // Apply to every request
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    // Delete auth header
    delete axios.defaults.headers.common["Authorization"];
  }
};

export const getAuthToken = () => {
  const token = localStorage.getItem("TOKEN_VALUE");

  return token;
};

export default setAuthToken;