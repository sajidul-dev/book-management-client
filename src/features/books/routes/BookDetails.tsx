import { useLocation, useNavigate } from "react-router-dom";
import { useBookDetails } from "../api/getBookDeatils";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useDeleteBookMutation } from "../api/deleteBook";
import { Spinner } from "@/components/Elements/Spinner/Spinner";

export const BookDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const deleteBookMutation = useDeleteBookMutation();

  const bookDetailsQuery = useBookDetails(
    location.pathname.split("/")[location.pathname.split("/").length - 1]
  );
  if (bookDetailsQuery.isLoading || deleteBookMutation.isPending) {
    return <Spinner />;
  }
  if (deleteBookMutation.isError) {
    return <div>Error:{deleteBookMutation.error.message}</div>;
  }
  console.log(bookDetailsQuery.data);
  if (!bookDetailsQuery.data) {
    return <div>No data</div>;
  }
  const book = bookDetailsQuery.data;

  const handleDeleteBook = (id: string) => {
    deleteBookMutation.mutate(id);
    navigate("/books");
  };

  return (
    <div className="flex justify-start gap-8">
      <div className="w-[400px] flex justify-center">
        <img src={book?.image_url} alt={book.title} />
      </div>
      <div className="flex-grow">
        <p className="text-3xl font-semibold text-gray-600">{book?.title}</p>
        <p>
          by <span className="text-blue-400">{book.brand}</span> (Author)
        </p>
        <div className="h-[1px] w-full bg-gray-300 my-6"></div>
        <p>{book.description}</p>
      </div>
      <div className="border-2 border-gray-400 rounded-lg shadow-lg w-[350px] p-4">
        <p className="text-xs">{book.delivery[0]}</p>
        <p>${book.price}</p>
        <div className="flex gap-4">
          <button className="px-2 py-1 bg-green-400 rounded-lg" type="button">
            Edit
          </button>
          <button
            onClick={() =>
              handleDeleteBook(
                location.pathname.split("/")[
                  location.pathname.split("/").length - 1
                ]
              )
            }
            className="px-2 py-1 bg-red-400 rounded-lg text-white flex gap-2 justify-start items-center"
            type="button"
          >
            <MdOutlineDeleteOutline className="text-black" />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

BookDetails.displayName = "BooKDetails";
