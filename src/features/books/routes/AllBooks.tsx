import { Spinner } from "@/components/Elements/Spinner/Spinner";
import { useState } from "react";
import Pagination from "../components/Pagination";
import Books from "../components/Books";
import { useCategories } from "../api/getCategories";

export const AllBooks = () => {
  const [page, setPage] = useState(1);
  const [pageSize] = useState(5);
  const [totalPages, setTotalPages] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState<string | null>(null);
  const categoriesQuery = useCategories();

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  if (categoriesQuery.isLoading) return <Spinner />;
  if (categoriesQuery.isError)
    return <div>Error: {categoriesQuery.error.message}</div>;

  return (
    <div>
      <div className="w-full flex justify-center my-6">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-2/4 mx-auto p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search books title or author"
        />
        <select
          className="rounded-lg"
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="">Select</option>
          {categoriesQuery &&
            categoriesQuery?.data?.categories?.map((category) => {
              return <option value={category}>{category}</option>;
            })}
        </select>
      </div>
      <Books
        page={page}
        pageSize={pageSize}
        searchTerm={searchTerm}
        setTotalPages={setTotalPages}
        filter={filter}
      />
      <div>
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

AllBooks.displayName = "AllBooks";
