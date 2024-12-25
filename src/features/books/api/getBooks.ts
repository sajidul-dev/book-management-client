import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { API_URL } from "../../../config";
import { BookResponse } from "../types/book";

export const getBooks = async (): Promise<BookResponse> => {
  const response = await axios.get(`${API_URL}/api/v1/books`);
  return response.data;
};

export const useBooks = () => {
  return useQuery({
    queryKey: ["books"],
    queryFn: () => getBooks(),
    refetchOnWindowFocus: false,
  });
};
