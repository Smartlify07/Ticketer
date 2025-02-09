import { BiRefresh } from 'react-icons/bi';
import Event from '../components/(events)/Event';
import { useEvents } from '../hooks/useEvents';
import EventSkeleton from '../components/(skeletons)/EventSkeleton';

const Explore = () => {
  const { events, loading, error, refetch } = useEvents();
  return (
    <main className="flex flex-col gap-10 py-10 justify-center">
      <header className="flex flex-col gap-2">
        <h1 className="text-neutral-800 text-2xl w-10/12 md:text-3xl  md:w-6/12">
          Here are events happening on campus
        </h1>
      </header>

      {loading && (
        <div className="grid grid-cols-1 gap-6 md:gap-10 md:grid-cols-3 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <EventSkeleton key={i} />
          ))}
        </div>
      )}

      {!loading && events && (
        <div className="grid grid-cols-1 gap-6 md:gap-10 md:grid-cols-3 lg:grid-cols-3">
          {events.map((event) => (
            <Event {...event} key={event.id} />
          ))}
        </div>
      )}

      {!loading && events && events.length === 0 && (
        <section className="flex flex-col gap-4">
          <h1 className="text-3xl md:text-4xl font-medium font-montserrat">
            No events found
          </h1>
        </section>
      )}

      {!loading && !events && (
        <section className="flex flex-col gap-4">
          <h1 className="text-3xl md:text-4xl font-medium font-montserrat">
            No events found
          </h1>
        </section>
      )}

      {error && (
        <section className="flex flex-col gap-4">
          <h1 className="text-3xl md:text-4xl font-medium font-montserrat">
            {error}
          </h1>

          <button
            onClick={refetch}
            className="border rounded-md self-center py-2 px-3 text-neutral-900 flex items-center gap-2 font-medium "
          >
            Try again <BiRefresh />
          </button>
        </section>
      )}
    </main>
  );
};

export default Explore;
