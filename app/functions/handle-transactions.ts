import { parseCookies } from "nookies";
import axiosApi from "../service/api";
import { revalidatePath } from "next/cache";

export async function deleteTransatcion(transactionId: number) {
  const cookies = parseCookies();
  const token = cookies["zini_finances"];
  try {
    axiosApi.defaults.headers.common.Authorization = `Bearer ${token}`;
    await axiosApi.delete(`/transactions/${transactionId}`);
    return true;
  } catch (error) {
    console.log(error);
    return null;
  }
}
