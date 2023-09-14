import { Link } from 'react-router-dom';
import { IBook } from '../../types/globalTypes';

interface IProps {
  book: IBook;
}

export default function BookCard({ book }: IProps) {
  const { title, author, genre, publicationDate } = book;
  return (
    <div className="bg-gray-200 rounded-lg shadow-lg p-6">
      <Link to={`/book/${book._id}`} className="text-xl font-semibold mb-2">
        {title}
      </Link>
      <p className="text-gray-600 mb-2">Author: {author}</p>
      <p className="text-gray-600 mb-2">Genre: {genre}</p>
      <p className="text-gray-600">Publication Date: {publicationDate}</p>
    </div>
  );
}
