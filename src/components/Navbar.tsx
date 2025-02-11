import { useNavigate } from 'react-router';
import { UserType } from '../types/types';
import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import ProfileDropdown from './(profile)/ProfileDropdown';
import { motion } from 'motion/react';
import MobileNavbar from './MobileNavbar';
type NavbarProps = {
  user: UserType;
  logout: () => void;
};
const Navbar = ({ user, logout }: NavbarProps) => {
  const navigate = useNavigate();
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  const toggleDropdown = () => setShowProfileDropdown((prev) => !prev);
  const closeDropdown = () => setShowProfileDropdown(false);
  const [showNav, setShowNav] = useState(false);
  return (
    <nav className="rounded-2xl relative px-4 flex items-center justify-between py-6">
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
        <>
          <div className="hidden md:flex  items-center gap-4">
            <button
              onClick={() => {
                navigate('/signin');
              }}
              className="rounded-md py-2 px-2  w-[130px] text-sm border border-primary text-neutral-900"
            >
              Sign in
            </button>
            <button
              onClick={() => {
                navigate('/signup');
              }}
              className="bg-primary rounded-md w-[130px] font-medium text-white border-2 border-primary px-4 py-2 text-sm"
            >
              Sign Up
            </button>
          </div>

          <MobileNavbar showNav={showNav} />

          <button
            onClick={() => {
              setShowNav((prev) => !prev);
            }}
            className="rounded-full z-40 md:hidden bg-primary/5 w-10 h-10 flex flex-col gap-1 items-center justify-center"
          >
            <motion.span
              transition={{ type: 'tween' }}
              animate={{ rotate: showNav ? 45 : 0, y: showNav ? 0 : 0 }}
              className={`bg-black rounded-sm w-[25px] h-[2px] `}
            ></motion.span>
            <motion.span
              transition={{ type: 'tween' }}
              initial={{ rotate: 0 }}
              animate={{ rotate: showNav ? -45 : 0, y: showNav ? -4 : 0 }}
              className="rounded-sm block bg-neutral-800 h-[2px] w-[25px]"
            ></motion.span>
          </button>
        </>
      )}

      {user && (
        <div className="flex items-center relative gap-4">
          <button
            onClick={toggleDropdown}
            className="rounded-full w-10 text-lg font-medium h-10 flex items-center justify-center bg-primary/5 text-primary"
          >
            {user?.user_metadata.name.charAt(0).toUpperCase()}
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
  );
};

export default Navbar;
