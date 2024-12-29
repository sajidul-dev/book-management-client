import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { API_URL } from "../../../config";
import { BookResponse } from "../types/book";

export const getApiBooks = async (): Promise<BookResponse> => {
  const response = await axios.get(`${API_URL}/api/v1/retrieve-books`);
  return response.data;
};

export const useApiBooks = () => {
  return useQuery({
    queryKey: ["apibooks"],
    queryFn: () => getApiBooks(),

    refetchOnWindowFocus: false,
  });
};
