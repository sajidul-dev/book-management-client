/* eslint-disable @typescript-eslint/no-explicit-any */
import { API_URL } from "@/config";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const deleteBook = async (id: string): Promise<any> => {
  const response = await axios.delete(`${API_URL}/api/v1/books/${id}`);
  return response.data;
};

export const useDeleteBookMutation = () => {
  return useMutation({
    mutationFn: (id: string) => deleteBook(id),
    onSuccess: () => {
      console.log("Book deleted successfully");
    },
    onError: (error) => {
      console.error("Error deleting book:", error);
    },
  });
};
