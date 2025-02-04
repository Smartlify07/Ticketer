import { Outlet, useNavigate } from 'react-router';
import { useAuthContext } from '../context/AuthContext';
import { BiUser } from 'react-icons/bi';

const RootLayout = () => {
  const { user } = useAuthContext();
  const navigate = useNavigate();
  return (
    <main className="flex flex-col px-6 items-center font-poppins min-h-screen bg-blue-50 bg-opacity-5 md:px-10">
      <div className="flex flex-col w-full max-w-[1440px]">
        <nav className="rounded-2xl flex items-center justify-between py-6">
          <h1 className="text-blue-900 text-2xl font-medium">Eventify</h1>

          {!user && (
            <div className="flex items-center gap-4">
              <button
                onClick={() => {
                  navigate('/signin');
                }}
                className="rounded-md py-3 px-4  w-[110px] text-sm border border-blue-900 text-neutral-900"
              >
                Sign in
              </button>
              <button
                onClick={() => {
                  navigate('/signup');
                }}
                className="bg-blue-900 rounded-md w-[110px] font-medium text-white border-2 border-blue-900 px-4 py-3 text-sm"
              >
                Sign Up
              </button>
            </div>
          )}

          {user && (
            <div className="flex items-center gap-4">
              <button className="rounded-full w-10 h-10 flex items-center justify-center bg-blue-900 text-white">
                <BiUser size={24} />
              </button>
            </div>
          )}
        </nav>

        <Outlet />
      </div>
    </main>
  );
};

export default RootLayout;
