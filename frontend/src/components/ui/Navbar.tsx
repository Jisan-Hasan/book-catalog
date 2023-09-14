import { signOut } from 'firebase/auth';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { auth } from '../../lib/firebase';
import { setUser } from '../../redux/features/user/userSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

export default function Navbar() {
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        dispatch(setUser(null));
        toast.success('Signout successfully!');
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <header className="bg-gray-900 text-white py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-semibold">
          Book Catalog
        </Link>
        <ul className="space-x-4 flex">
          <li>
            <Link to="/all-books" className="text-gray-200 hover:text-gray-100">
              All Books
            </Link>
          </li>
          {user.email && (
            <li>
              <Link to="/add-new" className="text-gray-200 hover:text-gray-100">
                Add New Book
              </Link>
            </li>
          )}
          <li>
            {!user.email ? (
              <Link to="/login" className="text-gray-200 hover:text-gray-100">
                Sign In
              </Link>
            ) : (
              <button
                className="text-gray-200 hover:text-gray-100"
                onClick={handleLogout}
              >
                Logout
              </button>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}
