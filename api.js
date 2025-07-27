import axios from "axios";

const API_BASE = "http://localhost:5000/api";

export const fetchProductDetails = async (id = 1) => {
  const res = await axios.get(`${API_BASE}/product/${id}`);
  return res.data;
};
