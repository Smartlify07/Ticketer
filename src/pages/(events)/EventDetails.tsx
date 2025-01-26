import { useNavigate, useParams } from 'react-router';
import { schoolEvents } from '../../dummyData';
import { CiLocationOn } from 'react-icons/ci';
import { BsArrowLeft, BsClock } from 'react-icons/bs';
import { getDateMonthTime } from '../../utils/getDate';
import { IoTicketOutline } from 'react-icons/io5';
import { BiCalendar } from 'react-icons/bi';

const EventDetails = () => {
  const title = useParams().title;
  const id = title?.split('-')[0];

  const event = schoolEvents.find((event) => event.id === id);
  const navigate = useNavigate();
  const handleGoback = () => {
    navigate(-1);
  };
  return (
    <main className="text-black py-6 flex flex-col items-center font-poppins gap-0 md:py-12">
      <button
        onClick={handleGoback}
        className="text-neutral-800 mb-6 flex items-center gap-3 self-start text-sm"
      >
        <BsArrowLeft size={20} /> Back
      </button>
      <div className="flex flex-col md:flex-row md:gap-10 xl:max-w-[1440px]">
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
            <h1 className="text-2xl text-neutral-800 font-medium md:text-2xl lg:text-4xl">
              {event?.title}
            </h1>
          </div>

          <div className="flex items-center gap-x-6 gap-y-2 flex-wrap md:flex-nowrap">
            <h3 className="text-neutral-600 flex items-center gap-2 text-sm">
              <CiLocationOn size={24} /> {event?.location}
            </h3>

            <h3 className="text-neutral-600 flex items-center gap-2 text-sm">
              <BsClock size={24} />{' '}
              {getDateMonthTime(event?.startDate || '').time}
            </h3>

            <h3 className="text-neutral-600 flex items-center gap-2 text-sm">
              <BiCalendar size={24} />{' '}
              {`${getDateMonthTime(event?.startDate || '').date} ${
                getDateMonthTime(event?.startDate || '').month
              }, ${getDateMonthTime(event?.startDate || '').year}`}
            </h3>
          </div>

          <div className="flex flex-col gap-4 mt-6 md:gap-2">
            <h3 className="text-neutral-900 text-lg font-medium md:text-xl">
              About this Event:
            </h3>
            <p className="text-neutral-500 md:w-11/12">{event?.description}</p>
          </div>

          <p className="text-neutral-900 text-lg font-medium">
            Price:{' '}
            <span className="text-neutral-500">
              ₦{event?.ticketPrice.toLocaleString()}
            </span>
          </p>

          <button className="bg-blue-900 text-white font-medium text-sm flex  justify-center items-center gap-4 self-center w-full py-3 px-4 rounded-md mt-10 md:mt-auto">
            Get Tickets <IoTicketOutline size={24} />
          </button>
        </section>
      </div>
    </main>
  );
};

export default EventDetails;
