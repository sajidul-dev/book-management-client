/* eslint-disable @typescript-eslint/no-explicit-any */
import { API_URL } from "@/config";
import { queryClient } from "@/lib/react-query";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { FormData } from "../types/book";
import toast from "react-hot-toast";

interface ErrorResponseData {
  detail: string;
}

const addBook = async (data: FormData): Promise<any> => {
  const response = await axios.post(`${API_URL}/api/v1/books`, data);
  return response.data;
};

export const useAddBookMutation = () => {
  return useMutation({
    mutationFn: (data: FormData) => addBook(data),
    onSuccess: () => {
      queryClient.fetchQuery({ queryKey: ["books"] });
      toast.success("Book added successfully");
    },
    onError: (error: AxiosError<ErrorResponseData>) => {
      const errorMessage =
        error.response?.data?.detail || "An unknown error occurred";
      toast.error(`Error adding book: ${errorMessage}`);
    },
  });
};
