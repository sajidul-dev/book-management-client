/* eslint-disable @typescript-eslint/no-explicit-any */
import { SubmitHandler, useForm } from "react-hook-form";
import { Book, FormData } from "../types/book";
import { useUpdateBookMutation } from "../api/updateBook";

type Props = {
  book: Book;
  refetch: any;
};
const EditBook = ({ book, refetch }: Props) => {
  const updatebookMutation = useUpdateBookMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    if (book._id) {
      console.log("data", data);
      const transformedData = {
        ...data,
        author_name: data.author_name.split(",").map((item) => item.trim()),
        category: data.category.split(",").map((item) => item.trim()),
        isbn: data.isbn.split(",").map((item) => item.trim()),
      };
      console.log(transformedData);
      updatebookMutation.mutate({ id: book._id, data: transformedData });
      if (updatebookMutation.status === "success") {
        refetch();
      }
    }
  };
  return (
    <div className="w-full mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Update Book Details</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">ISBN</label>
          <input
            {...register("isbn")}
            defaultValue={book.isbn}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.isbn && (
            <p className="text-red-500 text-sm">{errors.isbn.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">Author Name</label>
          <input
            {...register("author_name")}
            defaultValue={book.author_name}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.author_name && (
            <p className="text-red-500 text-sm">{errors.author_name.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">Title</label>
          <input
            {...register("title")}
            defaultValue={book.title}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium">Title</label>
          <input
            {...register("category")}
            defaultValue={book.category}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.category && (
            <p className="text-red-500 text-sm">{errors.category.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default EditBook;
