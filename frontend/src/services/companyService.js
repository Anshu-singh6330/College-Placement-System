import axios from "axios";
import authService from "./authService";

const API = "http://localhost:5000/api/companies";

const getCompanies = async () => {
  const token = authService.getToken();
  const response = await axios.get(API, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

const addCompany = async (data) => {
  const token = authService.getToken();
  const response = await axios.post(API, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export default {
  getCompanies,
  addCompany,
};