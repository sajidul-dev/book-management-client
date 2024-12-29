import { Link } from "react-router-dom";
import { Book } from "../types/book";
// import RatingStars from "./RatingStars";

type Props = {
  book: Book;
};

const BookComponent = ({ book }: Props) => {
  return (
    <div className="bg-[#ebeef1] p-3 rounded-lg shadow-lg h-[400px] flex flex-col justify-between">
      <div>
        {/* <div className="flex justify-center mb-4">
          <img
            className="w-[200px] h-[200px] object-cover"
            src={book.image_url}
            alt={book.title}
          />
        </div> */}
        <p className="text-center font-semibold">
          {book.title.slice(0, 50)}...
        </p>
        {/* <div className="flex flex-col justify-center items-center">
          <RatingStars rating={Number(book.rating.split(" ")[0])} />
          <p className="text-center">{book.rating}</p>
        </div>
        <p className="text-center">{book.reviews_count} Reviews</p> */}
      </div>
      <div className="flex justify-center">
        <Link
          to={`/books/${book._id}`}
          className="px-2 py-1 bg-green-500 text-white"
          type="button"
        >
          Details
        </Link>
      </div>
    </div>
  );
};

export default BookComponent;
