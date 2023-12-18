import { parseCookies } from "nookies";
import axiosApi from "../service/api";

export async function deleteTransatcion(transactionId: number) {
  const cookies = parseCookies();
  const token = cookies["zini_finances"];
  try {
    axiosApi.defaults.headers.common.Authorization = `Bearer ${token}`;
    const response = await axiosApi.delete(`/transactions/${transactionId}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
