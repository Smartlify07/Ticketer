import { CiClock1, CiLocationOn } from 'react-icons/ci';
import { EventType } from '../../types/types';
import OptimizedImage from '../OptimizedImage';
import { TbCurrencyNaira } from 'react-icons/tb';
import { FaMoneyBill1Wave } from 'react-icons/fa6';
import { getDateMonthTime } from '../../utils/utils';
import { useNavigate } from 'react-router';

type TicketProps = {
  events: EventType;
  id: string;
};

const Ticket = ({ events: event, id }: TicketProps) => {
  const getStatus = () => {
    let className = '';
    let status = '';
    if (event.event_date < new Date().toISOString()) {
      status = 'Expired';
      className = 'text-sm font-medium bg-red-200 text-red-600';
    } else if (event.event_date > new Date().toISOString()) {
      status = 'Upcoming';
      className = 'text-sm font-medium bg-orange-200 text-orange-600';
    } else {
      status = 'Ongoing';
      className = 'text-sm font-medium bg-neutral-200 text-neutral-700';
    }
    return { status, className };
  };

  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate('/mytickets/' + id);
      }}
      className="rounded-2xl bg-white transition-all hover:shadow-sm cursor-pointer hover:cursor-pointer flex flex-col gap-4 border py-4"
    >
      <div className="flex items-center gap-2 px-5">
        <OptimizedImage
          src={event.cover_image ?? ''}
          alt={event.title}
          className="rounded-full w-10 h-10"
        />

        <div className="flex flex-col gap-0.5">
          <h1 className="text-base text-neutral-800 font-medium">
            {event.title}
          </h1>
          <p className="text-xs text-neutral-600 font-normal">
            {getDateMonthTime(event.event_date).date}{' '}
            {getDateMonthTime(event.event_date).month}{' '}
            {getDateMonthTime(event.event_date).year}
          </p>
        </div>
      </div>

      <div className="w-full border border-dashed"></div>
      <div className="flex flex-col px-5 gap-4 w-full">
        <div className="flex flex-col gap-2">
          <div className="text-sm text-neutral-600 flex gap-3 items-center font-normal">
            <CiLocationOn className="text-base text-neutral-600" size={24} />
            <p>{event.location}</p>
          </div>
          <div className="text-sm text-neutral-600 gap-3 flex items-center font-normal">
            <FaMoneyBill1Wave className="text-sm text-neutral-600" size={24} />
            <p className="flex items-center">
              <TbCurrencyNaira className="inline" size={20} />
              {event.ticketFee.toLocaleString()}
            </p>
          </div>
          <div className="text-sm text-neutral-600 flex gap-3 items-center font-normal">
            <CiClock1 className="text-base text-neutral-600" size={24} />
            <p>{getDateMonthTime(event.event_date).time}</p>
          </div>

          <h3
            className={`${
              getStatus().className
            } py-1 self-end  px-5 text-xs rounded-md`}
          >
            {getStatus().status}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
