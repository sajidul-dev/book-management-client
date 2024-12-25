import { Spinner } from "@/components/Elements/Spinner/Spinner";
import { useBooks } from "../api/getBooks";
import BookComponent from "../components/Book";

export const AllBooks = () => {
  const booksQuery = useBooks();
  if (booksQuery.isLoading) return <Spinner />;
  if (booksQuery.isError) return <div>Error: {booksQuery.error.message}</div>;
  console.log(booksQuery?.data?.data);
  return (
    <div className="grid grid-cols-10 gap-6">
      {booksQuery &&
        booksQuery.data?.data.map((book) => {
          return (
            <div key={book._id} className="col-span-2">
              <BookComponent book={book} />
            </div>
          );
        })}
    </div>
  );
};

AllBooks.displayName = "AllBooks";
