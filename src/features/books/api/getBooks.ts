import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { API_URL } from "../../../config";
import { BookResponse } from "../types/book";

export const getBooks = async (
  page: number,
  pageSize: number,
  searchTerm: string,
  filter: string | null
): Promise<BookResponse> => {
  const response = await axios.get(`${API_URL}/api/v1/books`, {
    params: { page, page_size: pageSize, search: searchTerm, category: filter },
  });
  return response.data;
};

export const useBooks = (
  page: number,
  pageSize: number,
  searchTerm: string,
  filter: string | null
) => {
  return useQuery({
    queryKey: ["books", page, pageSize, searchTerm, filter],
    queryFn: () => getBooks(page, pageSize, searchTerm, filter),

    refetchOnWindowFocus: false,
  });
};
