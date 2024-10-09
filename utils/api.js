import axios from "axios";

const API_URL = "https://localhost:7168/api/Siswa";

export const getSiswa = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const getSiswaById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const addSiswa = async (siswa) => {
  const response = await axios.post(API_URL, siswa);
  return response.data;
};

export const updateSiswa = async (id, siswa) => {
  const response = await axios.put(`${API_URL}/${id}`, siswa);
  return response.data;
};

export const deleteSiswa = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
