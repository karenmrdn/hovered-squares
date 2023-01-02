import axios, { AxiosError } from "axios";
import { DifficultyLevel } from "models";
import { toast } from "react-toastify";

const apiClient = axios.create({
  baseURL: "https://demo7919674.mockable.io",
});

apiClient.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    toast.error((error as AxiosError)?.message ?? "Oops... Unexpected error :(");
  }
);

export const getDifficultyLevels = (): Promise<DifficultyLevel[]> => {
  return apiClient.get("/");
};
