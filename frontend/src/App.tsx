import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './components/ui/Footer';
import Navbar from './components/ui/Navbar';
import { useAppDispatch } from './redux/hooks';
import { setLoading, setUser } from './redux/features/user/userSlice';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './lib/firebase';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setLoading(true));
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        dispatch(setUser(user.email!));
        dispatch(setLoading(false));
      } else {
        // user signed out
        dispatch(setLoading(false));
      }
    });
  }, [dispatch]);
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <Outlet />

      <Footer />
    </div>
  );
}

export default App;
