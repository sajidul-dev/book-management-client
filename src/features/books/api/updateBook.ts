/* eslint-disable @typescript-eslint/no-explicit-any */
import { API_URL } from "@/config";
import { queryClient } from "@/lib/react-query";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";

const updateBook = async ({
  id,
  data,
}: {
  id: string;
  data: any;
}): Promise<any> => {
  const response = await axios.put(`${API_URL}/api/v1/book/${id}`, data);
  return response.data;
};

export const useUpdateBookMutation = () => {
  return useMutation({
    mutationFn: (params: { id: string; data: any }) => updateBook(params),
    onSuccess: () => {
      queryClient.fetchQuery({ queryKey: ["books"] });
      queryClient.fetchQuery({ queryKey: ["book"] });
      toast.success("Book updated successfully");
    },
    onError: (error) => {
      console.error("Error deleting book:", error);
    },
  });
};
