import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_APP_RECIPE_API}`,
});

export default AxiosInstance;
