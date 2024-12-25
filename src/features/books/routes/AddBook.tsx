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
    addBookMutation.mutate(data);
    console.log(addBookMutation.isSuccess);
    if (!addBookMutation.isSuccess) {
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
                {...register("ISBN", { required: "ISBN is required" })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
              {errors.ISBN && (
                <p className="text-red-500 text-sm">{errors.ISBN.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium">Availability</label>
              <input
                {...register("availability", {
                  required: "Availability is required",
                })}
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
                {...register("brand", { required: "Brand is required" })}
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
                  required: "Delivery options are required",
                  setValueAs: (value) => value.split(","),
                })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
              {errors.delivery && (
                <p className="text-red-500 text-sm">
                  {errors.delivery.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium">Description</label>
              <textarea
                {...register("description", {
                  required: "Description is required",
                })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
              {errors.description && (
                <p className="text-red-500 text-sm">
                  {errors.description.message}
                </p>
              )}
            </div>
          </div>

          <div className="w-full">
            <div>
              <label className="block text-sm font-medium">Image URL</label>
              <input
                type="text"
                {...register("image_url", {
                  required: "Image URL is required",
                })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
              {errors.image_url && (
                <p className="text-red-500 text-sm">
                  {errors.image_url.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium">Rating</label>
              <input
                {...register("rating", { required: "Rating is required" })}
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
                step="0.01"
                {...register("reviews_count", {
                  required: "Reviews count is required",
                })}
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
                {...register("categories", {
                  required: "Categories are required",
                })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
              {errors.categories && (
                <p className="text-red-500 text-sm">
                  {errors.categories.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium">Price</label>
              <input
                type="number"
                step="0.01"
                {...register("price", { required: "Price is required" })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
              {errors.price && (
                <p className="text-red-500 text-sm">{errors.price.message}</p>
              )}
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Add Book
        </button>
      </form>
    </div>
  );
};
AddBook.displayName = "AddBook";
