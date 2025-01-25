import { useParams } from 'react-router';
import { schoolEvents } from '../../dummyData';
import { CiLocationOn } from 'react-icons/ci';
import { BsClock } from 'react-icons/bs';
import { getDateMonthTime } from '../../utils/getDate';

const EventDetails = () => {
  const title = useParams().title;
  const id = title?.split('-')[0];
  const event = schoolEvents.find((event) => {
    if (event.id === id) {
      return event;
    } else {
      throw Error('Event not found');
    }
  });
  return (
    <main className="text-black px-10 border flex flex-col font-poppins gap-0 py-12 md:flex-row  md:gap-10">
      <section className="flex flex-col relative md:w-7/12">
        <img
          src={event?.coverImage}
          alt={event?.title}
          className="object-cover h-[400px] rounded-2xl"
        />
        <div className="absolute w-full h-full bg-black bg-opacity-50  rounded-2xl"></div>
      </section>

      <section className="flex flex-col w-full gap-4 py-6 md:w-5/12">
        <div className="flex flex-col gap-2">
          <h1 className="text-base text-neutral-800 font-medium md:text-xl lg:text-4xl">
            {event?.title}
          </h1>
        </div>

        <div className="flex items-center gap-6">
          <h3 className="text-neutral-600 flex items-center gap-2 text-base">
            <CiLocationOn size={24} /> {event?.location}
          </h3>

          <h3 className="text-neutral-600 flex items-center gap-2 text-base">
            <BsClock size={24} />{' '}
            {getDateMonthTime(event?.startDate || '').time}
          </h3>
        </div>

        <div className="flex flex-col gap-2 mt-6">
          <h3 className="text-neutral-900 text-base font-medium md:text-xl">
            About this Event:
          </h3>
          <p className="text-neutral-500 md:w-11/12">{event?.description}</p>
        </div>

        <button className="bg-blue-900 text-white font-medium text-sm mt-auto self-center w-full py-3 px-4 rounded-md">
          Get Tickets
        </button>
      </section>
    </main>
  );
};

export default EventDetails;
