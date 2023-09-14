import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';

export default function DeleteConfirmation({ onDelete }: any) {
  const { user } = useAppSelector((state) => state.user);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleDelete = () => {
    if (!user.email) {
      toast.error('login first');
      navigate('/login');
      setIsOpen(false);
      return;
    }
    onDelete();
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={handleOpen}
        className="bg-red-500 text-white py-2 px-4 rounded-lg focus:outline-none"
      >
        Delete
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-4">Confirm Deletion</h2>
            <p>Are you sure you want to delete this book?</p>
            <div className="flex justify-end mt-4">
              <button onClick={handleClose} className="mr-2 text-gray-600">
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="bg-red-500 text-white py-2 px-4 rounded-lg focus:outline-none"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
