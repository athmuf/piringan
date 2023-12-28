import AxiosInstance from "../utils/axiosInstance";

export const FetchRecipe = async (query) => {
  let getData = { status: null, message: null, data: null };
  try {
    const response = await AxiosInstance.get(`/?q=${query}`);
    getData.status = "success";
    getData.data = response.data;
  } catch (error) {
    getData.status = "failed";
    getData.data = error;
  }
  return getData;
};
