import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_APP_RECIPE_API}`,
  headers: {
    "X-RapidAPI-Key": `${import.meta.env.VITE_APP_X_RAPIDAPI_KEY}`,
    "X-RapidAPI-Host": `${import.meta.env.VITE_APP_X_RAPIDAPI_HOST}`,
  },
});

export default AxiosInstance;
