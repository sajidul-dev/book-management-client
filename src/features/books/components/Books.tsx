/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useBooks } from "../api/getBooks";
import { Spinner } from "@/components/Elements/Spinner/Spinner";
import { useColumnName } from "@/hooks/useColumnName";
import Table from "@/components/Elements/Table/Table";
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
  if (booksQuery.isLoading)
    return (
      <div>
        <Spinner />
      </div>
    );
  const columns = useColumnName(booksQuery.data?.data[0]);
  if (booksQuery.isError) return <div>Error: {booksQuery.error.message}</div>;
  return (
    <div className="grid grid-cols-10 gap-6 flex-grow">
      <div className="col-span-10">
        <Table
          columns={columns as any}
          data={booksQuery.data ? booksQuery.data?.data : []}
        />
      </div>
      {booksQuery && booksQuery.data?.data.length === 0 && (
        <p className="text-center text-nowrap w-full col-span-10">
          No books found
        </p>
      )}
    </div>
  );
};

export default Books;
