import axiosApi from "../service/api";

export async function fetchUserInfo(userId: number, userToken: string) {
  try {
    axiosApi.defaults.headers.common.Authorization = `Bearer ${userToken}`;
    const response = await axiosApi.get("/users/profile");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
