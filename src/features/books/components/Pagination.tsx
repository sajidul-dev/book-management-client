import { PaginationProps } from "../types/book";

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const getVisiblePages = () => {
    const pages = [];
    const maxButtons = 5;
    const start = Math.max(
      Math.min(
        currentPage - Math.floor(maxButtons / 2),
        totalPages - maxButtons + 1
      ),
      1
    );
    const end = Math.min(start + maxButtons - 1, totalPages);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  const visiblePages = getVisiblePages();
  return (
    <div className="pagination">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>

      {visiblePages[0] > 1 && (
        <>
          <button onClick={() => onPageChange(1)}>1</button>
          {visiblePages[0] > 2 && <span>...</span>}
        </>
      )}

      {visiblePages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={currentPage === page ? "active" : ""}
        >
          {page}
        </button>
      ))}

      {visiblePages[visiblePages.length - 1] < totalPages && (
        <>
          {visiblePages[visiblePages.length - 1] < totalPages - 1 && (
            <span>...</span>
          )}
          <button onClick={() => onPageChange(totalPages)}>{totalPages}</button>
        </>
      )}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>

      <div className="flex items-center gap-5">
        <select
          className="px-[5px] py-[10px] border border-gray-300 rounded-md"
          id=""
          defaultValue={currentPage}
          onChange={(e) => {
            const page = Number(e.target.value);
            if (page >= 1 && page <= totalPages) {
              onPageChange(page);
            }
          }}
        >
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <option
              className="px-[5px] py-[10px] border border-gray-300 rounded-md"
              key={page}
              value={page}
            >
              {page}
            </option>
          ))}
        </select>
        <p>
          {currentPage} of {totalPages}
        </p>
      </div>
    </div>
  );
};

export default Pagination;
