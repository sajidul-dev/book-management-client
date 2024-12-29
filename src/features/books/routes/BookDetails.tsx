import { useLocation, useNavigate } from "react-router-dom";
import { useBookDetails } from "../api/getBookDeatils";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useDeleteBookMutation } from "../api/deleteBook";
import { Spinner } from "@/components/Elements/Spinner/Spinner";
import { AiFillEdit } from "react-icons/ai";
import { useState } from "react";
import EditBook from "../components/EditBook";
import { FaStepBackward } from "react-icons/fa";

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
    <div>
      <button
        className="flex gap-2 items-center rounded-lg bg-gray-400 p-2 hover:bg-gray-500 text-white"
        onClick={() => navigate("/books")}
      >
        <FaStepBackward />
        Back
      </button>
      <div
        className={`${
          open && "h-[calc(100vh-110px)]"
        } relative flex justify-start gap-8 overflow-hidden`}
      >
        <div className="flex-grow">
          <p className="text-3xl font-semibold text-gray-600">{book?.title}</p>
          <p>
            by <span className="text-blue-400">{book.author_name[0]}</span>{" "}
            (Author)
          </p>
          <div className="h-[1px] w-full bg-gray-300 my-6"></div>
        </div>
        <div className="border-2 border-gray-400 rounded-lg shadow-lg w-[350px] h-[100px] p-4">
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
          } absolute w-[500px] transition-all duration-500 ease-in-out bg-slate-400 border rounded-l-lg shadow-lg overflow-y-auto flex items-start `}
        >
          <EditBook book={book} refetch={bookDetailsQuery.refetch} />
          <button type="button" onClick={() => setOpen(false)} className="p-4">
            X
          </button>
        </div>
      </div>
    </div>
  );
};

BookDetails.displayName = "BooKDetails";
