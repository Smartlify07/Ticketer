import { Outlet } from 'react-router';

const AuthLayout = () => {
  return (
    <main className="flex items-stretch font-poppins border border-black  gap-0 w-full  h-screen overflow-hidden">
      <aside className="flex-col h-screen hidden relative px-10 md:w-6/12 bg-primary md:flex">
        <h1 className="text-2xl md:text-4xl text-white absolute bottom-14 w-10/12 ">
          Discover amazing events happening at your school
        </h1>
      </aside>

      <aside className="flex items-center h-screen justify-center w-full md:px-0 md:w-6/12">
        <Outlet />
      </aside>
    </main>
  );
};

export default AuthLayout;
