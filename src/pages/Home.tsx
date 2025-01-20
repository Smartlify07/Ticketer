import { useNavigate } from 'react-router';
import CoverImage from '../assets/teen titans.png';
import { IoTicketOutline } from 'react-icons/io5';
const Home = () => {
  const navigate = useNavigate();

  return (
    <main className="flex items-center relative h-screen  ">
      <div className="h-screen w-screen absolute z-40 bg-black bg-opacity-60 "></div>
      <img
        src={CoverImage}
        alt=""
        className="w-full  h-screen object-cover absolute top-0 left-0 z-20"
      />

      <div className=" flex flex-col gap-4 z-40 w-full  px-10 py-4">
        <h1 className="text-white text-5xl tracking-tight font-bold font-montserrat">
          Teen titans go
        </h1>
        <p className="text-white text-opacity-90 w-5/12 font-poppins">
          Teen Titans Go! is a comedic animated series about the hilarious
          everyday antics of teenage superheroes.
        </p>

        <button
          onClick={() => navigate('/register')}
          className="bg-black rounded-full flex items-center gap-2 justify-center font-poppins  py-3 px-3 text-white w-[200px] font-medium text-sm"
        >
          Get tickets <IoTicketOutline size={24} />
        </button>
      </div>

      <div className="absolute right-10 bottom-10 z-40 flex justify-between items-center">
        <p className="text-white text-xs w-7/12 font-poppins ">
          Free tickets available for{' '}
          <span className="italic">computer science</span> students
        </p>

        <div className="rounded-full w-1 h-1 bg-white"></div>

        <p className="text-white font-light text-xs font-poppins italic">
          Limited Tickets available
        </p>
      </div>
    </main>
  );
};

export default Home;
