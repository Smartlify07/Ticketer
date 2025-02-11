import { useLocation, useNavigate, useParams } from 'react-router';
// import { CiLocationOn } from 'react-icons/ci';
import { BsClock } from 'react-icons/bs';
import { getDateMonthTime } from '../../utils/utils';
import { IoTicketOutline } from 'react-icons/io5';
import { BiCalendar, BiRefresh } from 'react-icons/bi';
import { useEvents } from '../../hooks/useEvents';
import { useEffect, useState } from 'react';
import { EventType } from '../../types/types';
import EventDetailsSkeleton from '../../components/(skeletons)/EventDetailsSkeleton';
import OptimizedImage from '../../components/OptimizedImage';
import { CiLocationOn } from 'react-icons/ci';
import { TbCurrencyNaira } from 'react-icons/tb';

const EventDetails = () => {
  const id = useParams().id;
  const pathname = useLocation().pathname;
  const navigate = useNavigate();
  const { fetchEventById, error, refetch, loading } = useEvents();

  const goToCheckoutPage = () => {
    navigate(pathname.replace(/\/$/, '') + '/checkout');
  };
  const [event, setEvent] = useState<EventType | null>(null);
  useEffect(() => {
    (async () => {
      const event = await fetchEventById(id!);
      setEvent(event!);
    })();
  }, [id]);

  return (
    <main className="text-black py-6 px-4 md:px-0 flex flex-col items-center font-poppins gap-0 md:py-12">
      {!loading && event && (
        <div className="flex flex-col w-full md:flex-row md:gap-10 xl:max-w-[1440px]">
          <section className="flex flex-col  relative md:w-7/12">
            {event?.cover_image ? (
              <div className="relative w-full h-full ">
                <OptimizedImage
                  src={event?.cover_image}
                  alt={event?.title}
                  className="object-cover z-10 w-full rounded-2xl"
                />
                <div className="absolute w-full z-10 top-0 left-0 h-full bg-black bg-opacity-50  rounded-2xl"></div>
              </div>
            ) : (
              <div className="w-full  h-full  md:h-[400px] bg-neutral-50 animate-pulse  rounded-2xl"></div>
            )}
          </section>

          <section className="flex flex-col w-full gap-4 py-6 md:w-5/12">
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl text-neutral-800 font-medium md:text-2xl lg:text-4xl">
                {event?.title}
              </h1>
            </div>

            <div className="flex items-center gap-x-6  gap-y-2 flex-wrap md:flex-wrap">
              <h3 className="text-neutral-600 flex items-center gap-2 text-sm">
                <CiLocationOn size={24} /> {event?.location}
              </h3>

              <h3 className="text-neutral-600 flex items-center gap-2 text-sm">
                <BsClock size={24} />{' '}
                {getDateMonthTime(event?.event_date || '').time}
              </h3>

              <h3 className="text-neutral-600 flex items-center gap-2 text-sm">
                <BiCalendar size={24} />{' '}
                {`${getDateMonthTime(event?.event_date || '').date} ${
                  getDateMonthTime(event?.event_date || '').month
                }, ${getDateMonthTime(event?.event_date || '').year}`}
              </h3>
            </div>

            <div className="flex flex-col gap-4 mt-6 md:gap-2">
              <h3 className="text-neutral-900 text-lg font-medium md:text-xl">
                About this Event:
              </h3>
              <p className="text-neutral-500 md:w-11/12">
                {event?.description}
              </p>
            </div>

            <p className="text-neutral-900 text-lg font-medium">
              Price:{' '}
              <span className="text-neutral-500">
                <TbCurrencyNaira className="inline" />
                {event?.ticketFee.toLocaleString()}
              </span>
            </p>

            <button
              onClick={goToCheckoutPage}
              className="bg-primary text-white font-medium text-sm flex  justify-center items-center gap-4 self-center w-full py-3 px-4 rounded-md mt-10 md:mt-auto"
            >
              Get Tickets <IoTicketOutline size={24} />
            </button>
          </section>
        </div>
      )}

      {loading && <EventDetailsSkeleton />}
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

export default EventDetails;
