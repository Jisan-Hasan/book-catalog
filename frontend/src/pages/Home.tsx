import BookCard from '../components/ui/BookCard';
import { useGetSortedBooksQuery } from '../redux/features/books/bookApi';
import { IBook } from '../types/globalTypes';

export default function Home() {
  const { data, isLoading } = useGetSortedBooksQuery(undefined);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  const sortedBooks = data.data;

  return (
    <main className="container mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4">Recently Added Books</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sortedBooks &&
          sortedBooks.map((book: IBook) => (
            <BookCard key={book._id} book={book} />
          ))}
      </div>
    </main>
  );
}
