import { FaAngleRight } from 'react-icons/fa';
import { EventType } from '../../types/types';
import { getDateMonthTime } from '../../utils/utils';
import { BiCalendar } from 'react-icons/bi';
import { BsClock } from 'react-icons/bs';
import { Link, useLocation } from 'react-router';
import OptimizedImage from '../OptimizedImage';

const Event = ({ title, cover_image, event_date, id }: EventType) => {
  const pathname = useLocation().pathname;
  return (
    <div className="flex flex-col w-full gap-4 border hover:shadow-sm transition-all rounded-xl px-4 py-4">
      {cover_image ? (
        <OptimizedImage
          alt={title}
          src={cover_image!}
          containerClassName="w-full h-[250px] rounded-xl"
          className="w-full rounded-xl h-[250px]"
        />
      ) : (
        <div className="w-full h-[200px] rounded-xl bg-neutral-100 animate-pulse"></div>
      )}

      <div className="flex flex-col gap-2">
        <h1 className="text-neutral-800 font-medium text-lg">{title}</h1>
        <div className="flex items-center justify-between">
          <h3 className="text-sm text-neutral-500 flex items-center gap-2">
            <BiCalendar className="inline" size={20} />
            {`${getDateMonthTime(event_date).month} ${
              getDateMonthTime(event_date).date
            } ${getDateMonthTime(event_date).year}`}
          </h3>

          <h3 className="text-sm text-neutral-500 flex items-center gap-2">
            <BsClock /> {getDateMonthTime(event_date).time}
          </h3>
        </div>
        <Link
          to={pathname.replace(/\/$/, '') + `/${id}`}
          className="rounded-md text-blue-900 text-center mt-5 text-sm  font-medium"
        >
          View Details <FaAngleRight size={20} className="inline" />
        </Link>
      </div>
    </div>
  );
};

export default Event;
