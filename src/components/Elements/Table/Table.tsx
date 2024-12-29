import { Book } from "@/features/books/types/book";
import { useState } from "react";
import { ReactNode } from "react";
import { FaAngleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface Column<T> {
  key: keyof T;
  label: string;
}

interface TableProps<T extends Book> {
  data: T[];
  columns: Column<T>[] | undefined;
  tFooter?: ReactNode;
}

const ExpandableCell = ({
  data,
  displayCount = 2,
}: {
  data: string[];
  displayCount?: number;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isExpandable = data.length > displayCount;

  return (
    <>
      {data
        .slice(0, isExpanded ? data.length : displayCount)
        .map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      {isExpandable && (
        <button
          onClick={() => setIsExpanded((prev) => !prev)}
          className="text-blue-500 hover:underline mt-1"
        >
          {isExpanded ? "See Less" : "See More"}
        </button>
      )}
    </>
  );
};

const Table = <T extends Book>({ data, columns, tFooter }: TableProps<T>) => {
  const navigate = useNavigate();

  return (
    <div className="overflow-x-auto">
      <table className="table-auto border-collapse border border-gray-300 w-full">
        <thead className="bg-gray-200">
          <tr>
            {columns?.map((column) => (
              <th
                key={String(column.key)}
                className="border border-gray-300 px-4 py-2 text-left"
              >
                {column.label}
              </th>
            ))}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-100">
              {columns?.map((column) => (
                <td
                  key={String(column.key)}
                  className="border border-gray-300 px-4 py-2"
                >
                  {column.key === "isbn" && Array.isArray(row[column.key]) ? (
                    <ExpandableCell data={row[column.key] as string[]} />
                  ) : column.key === "category" &&
                    Array.isArray(row[column.key]) ? (
                    <ExpandableCell data={row[column.key] as string[]} />
                  ) : (
                    (row[column.key] as ReactNode)
                  )}
                </td>
              ))}
              <td className="border border-gray-300 px-4 py-2">
                <button
                  type="button"
                  className="flex justify-center items-center gap-2"
                  onClick={() => navigate(`/books/${row._id}`)}
                >
                  Details <FaAngleRight />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        {tFooter && <tfoot>{tFooter}</tfoot>}
      </table>
    </div>
  );
};

export default Table;
