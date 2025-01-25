import Event from '../components/(events)/Event';
import { schoolEvents } from '../dummyData';

const Explore = () => {
  return (
    <main className="flex flex-col gap-10 py-10 justify-center">
      <header className="flex flex-col gap-2">
        <h1 className="text-neutral-800 text-3xl w-full md:w-6/12">
          Here are events happening around you in Lagos
        </h1>
      </header>

      <div className="grid grid-cols-1 gap-6 md:gap-10 md:grid-cols-3 lg:grid-cols-3">
        {schoolEvents.map((event) => (
          <Event {...event} key={event.id} />
        ))}
      </div>
    </main>
  );
};

export default Explore;
