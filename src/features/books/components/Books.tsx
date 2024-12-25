/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useBooks } from "../api/getBooks";
import BookComponent from "./Book";
import { Spinner } from "@/components/Elements/Spinner/Spinner";
interface BooksProps {
  page: number;
  pageSize: number;
  searchTerm: string;
  setTotalPages: (pages: number) => void;
  filter: string | null;
}

const Books = ({
  page,
  pageSize,
  searchTerm,
  setTotalPages,
  filter,
}: BooksProps) => {
  const booksQuery = useBooks(page, pageSize, searchTerm, filter);
  useEffect(() => {
    if (booksQuery?.data?.meta) {
      const meta = booksQuery.data?.meta;
      setTotalPages(Math.ceil(meta.total / meta.limit));
    }
  }, [booksQuery.data]);
  if (booksQuery.isLoading) return <Spinner />;
  if (booksQuery.isError) return <div>Error: {booksQuery.error.message}</div>;

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

export default Books;
