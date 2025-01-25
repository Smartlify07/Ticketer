import { TiTicket } from 'react-icons/ti';
import { useNavigate } from 'react-router';

const Home = () => {
  const navigate = useNavigate();
  return (
    <main className="flex flex-col gap-10 md:py-10 ">
      <section className="flex flex-col items-center gap-10 justify-center w-full px-5 md:px-0 h-hero-sm  md:h-hero relative">
        <header className="flex flex-col items-center gap-4">
          <h1 className="text-4xl md:text-6xl  text-center font-medium md:w-10/12">
            Find Events Happening at Glorious Vision University
          </h1>
          <p className="text-neutral-600 text-center text-lg md:text-xl">
            Find events, get tickets <TiTicket className="inline" /> seamlessly.
          </p>
        </header>

        <button
          onClick={() => navigate('/explore')}
          className="rounded-md py-3 px-4 w-[230px] font-medium text-white bg-blue-900"
        >
          Explore events
        </button>
      </section>
    </main>
  );
};

export default Home;
