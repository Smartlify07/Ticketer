import { CiClock1, CiLocationOn } from 'react-icons/ci';
import { EventType } from '../../types/types';
import OptimizedImage from '../OptimizedImage';
import { TbCurrencyNaira } from 'react-icons/tb';
import { FaMoneyBill1Wave } from 'react-icons/fa6';
import { BiCalendar } from 'react-icons/bi';
import { getDateMonthTime } from '../../utils/utils';

type TicketProps = {
  events: EventType;
};

const Ticket = ({ events }: TicketProps) => {
  const getStatus = () => {
    let className = '';
    let status = '';
    if (events.event_date < new Date().toISOString()) {
      status = 'Expired';
      className = 'text-sm font-medium bg-red-200 text-red-600';
    } else if (events.event_date > new Date().toISOString()) {
      status = 'Upcoming';
      className = 'text-sm font-medium bg-orange-200 text-orange-600';
    } else {
      status = 'Ongoing';
      className = 'text-sm font-medium bg-neutral-200 text-neutral-700';
    }
    return { status, className };
  };
  return (
    <div className="flex flex-col gap-0 rounded-3xl">
      <OptimizedImage
        src={events?.cover_image ?? ''}
        alt={'Ticket for ' + events.title}
        className="h-[180px] w-full object-cover rounded-t-3xl"
      />
      <div className="shadow-sm bg-white py-6 px-4 rounded-b-3xl flex flex-col gap-4  w-full">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-medium text-neutral-800">
            {events.title}
          </h1>

          <h3 className={`${getStatus().className} py-2 px-5 rounded-md`}>
            {getStatus().status}
          </h3>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <CiLocationOn className="text-sm text-neutral-600" size={24} />
            <h3 className="text-base text-neutral-600">{events.location}</h3>
          </div>
          <div className="flex items-center gap-2">
            <FaMoneyBill1Wave className="text-sm text-neutral-600" size={24} />
            <h3 className="text-base flex items-center gap-1 text-neutral-600">
              <TbCurrencyNaira className="inline" size={20} />
              {events.ticketFee.toLocaleString()}
            </h3>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <BiCalendar className="text-sm text-neutral-600" size={24} />
              <h3 className="text-base flex items-center gap-1 text-neutral-600">
                {getDateMonthTime(events.event_date).date}{' '}
                {getDateMonthTime(events.event_date).month}{' '}
                {getDateMonthTime(events.event_date).year}
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <CiClock1 className="text-sm text-neutral-600" size={24} />
              <h3 className="text-base text-neutral-600">
                {getDateMonthTime(events.event_date).time}
              </h3>
            </div>
          </div>
        </div>

        <div className="flex items-center w-full justify-end gap-4">
          <button className="flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-blue-900 text-white shadow hover:bg-blue-900/90 px-4 py-3 border border-blue-900 active:translate-y-[1px] active:border-blue-900 active:shadow-inner">
            Download Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
