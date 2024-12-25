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
      updatebookMutation.mutate({ id: book._id, data });
      if (!updatebookMutation.isSuccess) {
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
            {...register("ISBN")}
            defaultValue={book.ISBN}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.ISBN && (
            <p className="text-red-500 text-sm">{errors.ISBN.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">Availability</label>
          <input
            {...register("availability")}
            defaultValue={book.availability}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.availability && (
            <p className="text-red-500 text-sm">
              {errors.availability.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">Brand</label>
          <input
            {...register("brand")}
            defaultValue={book.brand}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.brand && (
            <p className="text-red-500 text-sm">{errors.brand.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">
            Delivery Options (comma-separated)
          </label>
          <textarea
            {...register("delivery", {
              setValueAs: (value) => value.split(","),
            })}
            defaultValue={book.delivery}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.delivery && (
            <p className="text-red-500 text-sm">{errors.delivery.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">Description</label>
          <textarea
            {...register("description")}
            defaultValue={book.description}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">Price</label>
          <input
            type="number"
            step="0.01"
            {...register("price")}
            defaultValue={book.price}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.price && (
            <p className="text-red-500 text-sm">{errors.price.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">Image URL</label>
          <input
            type="text"
            {...register("image_url")}
            defaultValue={book.image_url}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.image_url && (
            <p className="text-red-500 text-sm">{errors.image_url.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">Rating</label>
          <input
            {...register("rating")}
            defaultValue={book.rating}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.rating && (
            <p className="text-red-500 text-sm">{errors.rating.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">Reviews Count</label>
          <input
            type="number"
            {...register("reviews_count")}
            defaultValue={book.reviews_count}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.reviews_count && (
            <p className="text-red-500 text-sm">
              {errors.reviews_count.message}
            </p>
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
          <label className="block text-sm font-medium">Categories</label>
          <input
            {...register("categories")}
            defaultValue={book.categories}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.categories && (
            <p className="text-red-500 text-sm">{errors.categories.message}</p>
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
