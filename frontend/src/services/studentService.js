import axios from "axios";
import authService from "./authService";

const API = `${import.meta.env.VITE_API_URL}/students`;

const getProfile = async () => {
  const token = authService.getToken();
  const response = await axios.get(`${API}/profile`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

const updateProfile = async (data) => {
  const token = authService.getToken();
  const response = await axios.put(`${API}/profile`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export default {
  getProfile,
  updateProfile,
};
