import BookCard from '../components/ui/BookCard';
import {
  useGetBooksQuery,
  useGetGenresQuery,
  useGetYearsQuery,
} from '../redux/features/books/bookApi';
import {
  setGenre,
  setSearchTerm,
  setYear,
} from '../redux/features/books/bookSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { IBook } from '../types/globalTypes';

export default function AllBooks() {
  const dispatch = useAppDispatch();
  const { searchTerm, genre, year } = useAppSelector((state) => state.book);
  const { data } = useGetBooksQuery(undefined);
  const { data: genres } = useGetGenresQuery(undefined);
  const { data: years } = useGetYearsQuery(undefined);

  let filteredBooks = null;

  if (searchTerm === '' && genre === '' && year === '') {
    filteredBooks = data?.data;
  } else {
    filteredBooks = data?.data?.filter((book: any) => {
      const isMatchingSearchTerm =
        searchTerm === '' ||
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase());

      const isMatchingGenre = genre === '' || book.genre === genre;
      const isMatchingYear = year === '' || book.publicationDate.includes(year);

      return isMatchingSearchTerm && isMatchingGenre && isMatchingYear;
    });
  }

  return (
    <div className="mx-2 md:mx-8 lg:mx-16 ">
      <div className="flex justify-center my-5">
        <div className="flex flex-col md:flex-row items-center">
          <form
            //  onSubmit={handleSearchSubmit}
            className="mb-4 md:mr-4 md:mb-0"
          >
            <input
              type="text"
              placeholder="Search by title, author, or genre"
              value={searchTerm}
              onChange={(e) => dispatch(setSearchTerm(e.target.value))}
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            />
          </form>
          <form>
            <div className="flex items-center">
              <select
                value={genre}
                onChange={(e) => dispatch(setGenre(e.target.value))}
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500 mr-2"
              >
                <option selected value="">
                  All Genres
                </option>
                {genres &&
                  genres.map((g: string, i: number) => (
                    <option key={i}>{g}</option>
                  ))}
              </select>
              <select
                value={year}
                onChange={(e) => dispatch(setYear(e.target.value))}
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
              >
                <option selected value="">
                  All Years
                </option>
                {years &&
                  years.map((g: string, i: number) => (
                    <option key={i}>{g}</option>
                  ))}
              </select>
            </div>
          </form>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4 text-center">All Books</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredBooks &&
          filteredBooks.map((book: IBook) => (
            <BookCard key={book._id} book={book} />
          ))}
      </div>
    </div>
  );
}
