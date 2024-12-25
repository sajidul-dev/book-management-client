import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { API_URL } from "../../../config";
import { Book } from "../types/book";

export const getBookDeatils = async (id: string): Promise<Book> => {
  const response = await axios.get(`${API_URL}/api/v1/books/${id}`);
  return response.data;
};

export const useBookDetails = (id: string) => {
  return useQuery({
    queryKey: ["book", id],
    queryFn: () => getBookDeatils(id),
    refetchOnWindowFocus: true,
  });
};
