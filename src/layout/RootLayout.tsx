import { Navigate, Outlet, useNavigate } from 'react-router';
import { useAuthContext } from '../context/AuthContext';
import { BiUser } from 'react-icons/bi';
import { useState } from 'react';
import ProfileDropdown from '../components/(profile)/ProfileDropdown';
import { AnimatePresence } from 'motion/react';

const RootLayout = () => {
  const { user, error, logout } = useAuthContext();
  const navigate = useNavigate();
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  const toggleDropdown = () => setShowProfileDropdown((prev) => !prev);
  const closeDropdown = () => setShowProfileDropdown(false);
  return (
    <>
      {error && !user && <Navigate to="/signin" />}
      <main className="flex flex-col  items-center font-poppins min-h-screen bg-opacity-5 md:px-10">
        <div className="flex flex-col w-full max-w-[1440px]">
          <nav className="rounded-2xl px-4 flex items-center justify-between py-6">
            <header className="flex items-center gap-2">
              <svg
                fill="none"
                height="48"
                viewBox="0 0 44 48"
                width="44"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="#7839ee">
                  <path d="m16 8 5.0912 10.9088 10.9088 5.0912-10.9088 5.0912-5.0912 10.9088-5.0912-10.9088-10.9088-5.0912 10.9088-5.0912z" />
                  <path
                    d="m20.0469 31.3286 6.3539-1.0932 3.6 9.7646 3.6-9.7646 10.2565 1.7646-6.6564-8 6.6564-8-10.2565 1.7646-3.6-9.7646-3.6 9.7646-6.3539-1.0932 1.0442 2.2374 10.9088 5.0912-10.9088 5.0912z"
                    opacity=".5"
                  />
                </g>
              </svg>
              <h1 className="text-primary text-2xl font-medium">Eventify</h1>
            </header>

            {!user && (
              <div className="flex items-center gap-4">
                <button
                  onClick={() => {
                    navigate('/signin');
                  }}
                  className="rounded-md py-3 px-4  w-[110px] text-sm border border-primary text-neutral-900"
                >
                  Sign in
                </button>
                <button
                  onClick={() => {
                    navigate('/signup');
                  }}
                  className="bg-primary rounded-md w-[110px] font-medium text-white border-2 border-blue-900 px-4 py-3 text-sm"
                >
                  Sign Up
                </button>
              </div>
            )}

            {user && (
              <div className="flex items-center relative gap-4">
                <button
                  onClick={toggleDropdown}
                  className="rounded-full w-10 text-lg font-medium h-10 flex items-center justify-center bg-primary/5 text-primary"
                >
                  <BiUser />
                </button>
                <AnimatePresence mode="popLayout">
                  {showProfileDropdown && (
                    <ProfileDropdown
                      closeDropdown={closeDropdown}
                      logout={logout}
                      userName={user?.user_metadata.name}
                      email={user?.email ?? ''}
                    />
                  )}
                </AnimatePresence>
              </div>
            )}
          </nav>

          <Outlet />
        </div>
      </main>
    </>
  );
};

export default RootLayout;
