import AxiosInstance from "./axiosInstance";

export const get = async (url, config = {}) => {
  let getData = { status: null, message: null, data: null };

  try {
    const response = await AxiosInstance.get(url, config);
    getData.status = "success";
    getData.data = response.data;
  } catch (error) {
    getData.status = "failed";
    getData.data = error;
  }

  return getData;
};
