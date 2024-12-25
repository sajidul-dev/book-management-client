import { useLocation, useNavigate } from "react-router-dom";
import { useBookDetails } from "../api/getBookDeatils";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useDeleteBookMutation } from "../api/deleteBook";
import { Spinner } from "@/components/Elements/Spinner/Spinner";
import { AiFillEdit } from "react-icons/ai";
import { useState } from "react";
import EditBook from "../components/EditBook";

export const BookDetails = () => {
  const [open, setOpen] = useState(false);
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
  if (!bookDetailsQuery.data) {
    return <div>No data</div>;
  }
  const book = bookDetailsQuery.data;

  const handleDeleteBook = (id: string) => {
    deleteBookMutation.mutate(id);
    navigate("/books");
  };

  return (
    <div
      className={`${
        open && "h-[calc(100vh-148px)]"
      } relative flex justify-start gap-8 overflow-hidden`}
    >
      <div className="w-[400px] flex justify-center h-fit">
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
        <p className="text-base">Delivery Options</p>
        {book.delivery.map((deliveryOption: string, index: number) => (
          <div className="my-2" key={index}>
            <p key={index} className="text-xs">
              {deliveryOption}
            </p>
            {index !== book.delivery.length - 1 && <hr />}
          </div>
        ))}
        <p className="text-lg font-bold my-2">${book.price}</p>
        <div className="flex gap-4">
          <button
            onClick={() => setOpen(true)}
            className="px-2 py-1 bg-green-400 rounded-lg flex gap-2 justify-start items-center"
            type="button"
          >
            <AiFillEdit />
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
      <div
        className={`${
          open ? "right-0" : "-right-[500px]"
        } absolute w-[500px] transition-all duration-500 ease-in-out h-full bg-slate-400 border rounded-l-lg shadow-lg overflow-y-auto flex items-start `}
      >
        <EditBook book={book} refetch={bookDetailsQuery.refetch} />
        <button type="button" onClick={() => setOpen(false)} className="p-4">
          X
        </button>
      </div>
    </div>
  );
};

BookDetails.displayName = "BooKDetails";
