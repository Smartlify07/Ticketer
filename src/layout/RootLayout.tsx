import { Navigate, Outlet } from 'react-router';
import { useAuthContext } from '../context/AuthContext';

import Navbar from '../components/Navbar';

const RootLayout = () => {
  const { user, error, logout } = useAuthContext();

  return (
    <>
      {error && !user && <Navigate to="/signin" />}
      <main className="flex flex-col  items-center font-poppins min-h-screen bg-opacity-5 md:px-10">
        <div className="flex flex-col w-full max-w-[1440px]">
          <Navbar user={user} logout={logout} />
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default RootLayout;
