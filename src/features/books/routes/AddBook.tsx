import { SubmitHandler, useForm } from "react-hook-form";
import { FormData } from "../types/book";
import { useAddBookMutation } from "../api/addBook";

export const AddBook = () => {
  const addBookMutation = useAddBookMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const transformedData = {
      ...data,
      author_name: data.author_name.split(",").map((item) => item.trim()),
      category: data.category.split(",").map((item) => item.trim()),
      isbn: data.isbn.split(",").map((item) => item.trim()),
    };
    addBookMutation.mutate(transformedData);
    console.log(transformedData);
    if (addBookMutation.status === "success") {
      reset();
    }
  };
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Update Book Details</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full">
        <div className="flex w-full justify-center gap-6">
          <div className="w-full">
            <div>
              <label className="block text-sm font-medium">ISBN</label>
              <input
                {...register("isbn", { required: "ISBN is required" })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
              {errors.isbn && (
                <p className="text-red-500 text-sm">{errors.isbn.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium">Brand</label>
              <input
                {...register("author_name", { required: "Brand is required" })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
              {errors.author_name && (
                <p className="text-red-500 text-sm">
                  {errors.author_name.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium">Title</label>
              <input
                {...register("title", { required: "Title is required" })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
              {errors.title && (
                <p className="text-red-500 text-sm">{errors.title.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium">Categories</label>
              <input
                {...register("category", {
                  required: "Categories are required",
                })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
              {errors.category && (
                <p className="text-red-500 text-sm">
                  {errors.category.message}
                </p>
              )}
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={addBookMutation.isPending}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Add Book
        </button>
      </form>
    </div>
  );
};
AddBook.displayName = "AddBook";
