import { forwardRef } from 'react';
import { motion } from 'motion/react';
import { BiUser } from 'react-icons/bi';
import { Link } from 'react-router';
import { TiTicket } from 'react-icons/ti';
import { IoIosLogOut } from 'react-icons/io';
import useClickOutside from '../../hooks/useClickOutside';

type ProfileDropdownProps = {
  userName: string;
  email: string;
  logout: () => void;
  closeDropdown: () => void;
};

const ProfileDropdown = forwardRef<HTMLDivElement, ProfileDropdownProps>(
  ({ userName, email, logout, closeDropdown }, ref) => {
    useClickOutside(ref as React.RefObject<HTMLDivElement>, () => {
      closeDropdown();
    });
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: -10, position: 'absolute' }}
        animate={{
          opacity: 1,
          y: 125,
        }}
        exit={{
          opacity: 0,
          y: -10,
        }}
        transition={{
          type: 'tween',
        }}
        className="flex flex-col rounded-xl shadow-lg font-poppins z-40 bg-white border min-w-[320px] px-4 py-4 right-0"
      >
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-full flex items-center justify-center bg-primary/5 text-primary">
            {userName.charAt(0).toUpperCase()}
          </div>

          <div className="flex flex-col">
            <h1 className="text-neutral-800 text-sm font-medium">{userName}</h1>
            <h3 className="text-xs text-neutral-600">{email}</h3>
          </div>
        </div>

        <hr className="w-full mt-4" />

        <div className="flex flex-col mt-1  gap-0 ">
          <Link
            onClick={closeDropdown}
            to={'/profile'}
            className="flex items-center text-sm gap-2 z-20 cursor-pointer py-2 px-2 rounded-md text-neutral-600 hover:text-primary hover:bg-neutral-50 transition-all"
          >
            <BiUser size={20} /> View Profile
          </Link>
          <Link
            onClick={closeDropdown}
            to={'/mytickets'}
            className="flex items-center text-sm gap-2 z-20 cursor-pointer py-2 px-2 rounded-md text-neutral-600 hover:text-primary hover:bg-neutral-50 transition-all"
          >
            <TiTicket size={20} /> My Tickets
          </Link>
        </div>
        <hr className="w-full mt-1 mb-2" />

        <button
          onClick={() => {
            logout();
            closeDropdown();
          }}
          className="flex items-center text-sm gap-2 z-20 cursor-pointer py-2 px-2 rounded-md text-neutral-600 hover:text-primary hover:bg-neutral-50 transition-all"
        >
          <IoIosLogOut size={20} /> Logout
        </button>
      </motion.div>
    );
  }
);

export default ProfileDropdown;
