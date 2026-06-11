import axios from "axios";

const API = `${import.meta.env.VITE_API_URL}/auth`;

const register = async (data) => {
  const response = await axios.post(`${API}/register`, data);
  return response.data;
};

const login = async (data) => {
  const response = await axios.post(`${API}/login`, data);
  if (response.data.token) {
    localStorage.setItem("token", response.data.token);
  }
  return response.data;
};

const logout = () => {
  localStorage.removeItem("token");
};

const getToken = () => {
  return localStorage.getItem("token");
};

const isAuthenticated = () => {
  return !!localStorage.getItem("token");
};

export default {
  register,
  login,
  logout,
  getToken,
  isAuthenticated,
};
