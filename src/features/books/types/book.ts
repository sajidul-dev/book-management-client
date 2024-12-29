export type Book = {
  _id?: string;
  isbn: string[];
  author_name: string[];
  category: string[];
  title: string;
  createdAt?: string;
  updatedAt?: string;
};

export type BookResponse = {
  data: Book[];
  meta: {
    page: number;
    limit: number;
    total: number;
  };
};

export interface FormData {
  _id?: string | undefined;
  isbn: string;
  author_name: string;
  category: string;
  title: string;
}

export type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
};
