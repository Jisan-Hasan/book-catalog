import { FormEvent, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useAddBookMutation } from '../redux/features/books/bookApi';

export default function AddNewBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [publicationDate, setPublicationDate] = useState('');

  const [addBook, { isSuccess }] = useAddBookMutation();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addBook({ title, author, genre, publicationDate, createdAt: new Date() });

    // Reset the form fields
    setTitle('');
    setAuthor('');
    setGenre('');
    setPublicationDate('');
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success('Book Added Successfully!');
    }
  }, [isSuccess]);

  return (
    <div className="mx-auto bg-white rounded-lg shadow-lg p-6 mt-10  sm:w-full  md:w-2/3 lg:w-1/2">
      <h2 className="text-2xl font-semibold mb-4 text-center">Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block font-semibold mb-1">
            Title:
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="author" className="block font-semibold mb-1">
            Author:
          </label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="genre" className="block font-semibold mb-1">
            Genre:
          </label>
          <input
            type="text"
            id="genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="publicationDate" className="block font-semibold mb-1">
            Publication Date:
          </label>
          <input
            type="text"
            id="publicationDate"
            value={publicationDate}
            onChange={(e) => setPublicationDate(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            required
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none"
          >
            Add Book
          </button>
        </div>
      </form>
    </div>
  );
}
