import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { API_URL } from "../../../config";

interface Category {
  categories: string[];
}

export const getCategories = async (): Promise<Category> => {
  const response = await axios.get(`${API_URL}/api/v1/categories`);
  return response.data;
};

export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: () => getCategories(),

    refetchOnWindowFocus: false,
  });
};
