import axios from "axios";
import { CART_ENDPOINT } from "./Endpoints";

const encodedToken = localStorage.getItem("encodedToken");
const headers = {
  headers: {
    authorization: encodedToken,
  },
};
export const postCart = async (requestBody) => {
  const response = await axios.post(CART_ENDPOINT, requestBody, headers);
  return response;
};

export const fetchCart = async () => {
  const response = await axios.get(CART_ENDPOINT, headers);
  return response;
};
