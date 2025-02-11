import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
const MobileNavbar = ({ showNav }: { showNav: boolean }) => {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{
        opacity: 0,
        top: -80,
        right: 0,
        display: 'none',
      }}
      animate={{
        opacity: showNav ? 1 : 0,
        top: showNav ? 80 : -80,
      }}
      className="flex flex-col w-full shadow-md px-6 py-4 bg-white z-20 min-h-[200px] items-center justify-center absolute right-0 top-20  md:hidden gap-4"
    >
      <button
        onClick={() => {
          navigate('/signin');
        }}
        className="rounded-md py-3 px-4  w-full text-sm border border-primary text-neutral-900"
      >
        Sign in
      </button>
      <button
        onClick={() => {
          navigate('/signup');
        }}
        className="bg-primary rounded-md w-full font-medium text-white border-2 border-primary px-4 py-3 text-sm"
      >
        Sign Up
      </button>
    </motion.div>
  );
};

export default MobileNavbar;
