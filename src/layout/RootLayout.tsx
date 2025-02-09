import { Outlet, useNavigate } from 'react-router';
import { useAuthContext } from '../context/AuthContext';
import { BiUser } from 'react-icons/bi';

const RootLayout = () => {
  const { user } = useAuthContext();
  const navigate = useNavigate();

  return (
    <main className="flex flex-col px-4 items-center font-poppins min-h-screen bg-[] bg-opacity-5 md:px-10">
      <div className="flex flex-col w-full max-w-[1440px]">
        <nav className="rounded-2xl flex items-center justify-between py-6">
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
            <div className="flex items-center gap-4">
              <button className="rounded-full w-10 text-lg font-medium h-10 flex items-center justify-center bg-primary/5 text-primary">
                <BiUser />
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
