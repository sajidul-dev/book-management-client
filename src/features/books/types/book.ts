export type Book = {
  _id?: string;
  ISBN: string;
  availability: string;
  brand: string;
  delivery: string[];
  description: string;
  price: number;
  image_url: string;
  rating: string;
  reviews_count: number;
  title: string;
  categories: string;
  createdAt: string;
  updatedAt: string;
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
  id?: string | undefined;
  ISBN: string;
  availability: string;
  brand: string;
  delivery: string[];
  description: string;
  price: number;
  image_url: string;
  rating: string;
  reviews_count: number;
  title: string;
  categories: string;
}

export type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
};
