import { FaAngleRight } from 'react-icons/fa';
import { EventType } from '../../types/types';
import { getDateMonthTime } from '../../utils/getDate';
import { BiCalendar } from 'react-icons/bi';
import { BsClock } from 'react-icons/bs';
import { Link, useLocation } from 'react-router';

const Event = ({ title, coverImage, startDate, id }: EventType) => {
  const pathname = useLocation().pathname;
  return (
    <div className="flex flex-col w-full gap-4 border rounded-xl px-4 py-4">
      <img
        src={coverImage}
        className="rounded-xl object-cover w-full h-[200px] shadow-xl"
        alt={title}
      />

      <div className="flex flex-col gap-2">
        <h1 className="text-neutral-800 font-medium text-lg">{title}</h1>
        <div className="flex items-center justify-between">
          <h3 className="text-sm text-neutral-500 flex items-center gap-2">
            <BiCalendar className="inline" size={20} />
            {`${getDateMonthTime(startDate).month} ${
              getDateMonthTime(startDate).date
            } ${getDateMonthTime(startDate).year}`}
          </h3>

          <h3 className="text-sm text-neutral-500 flex items-center gap-2">
            <BsClock /> {getDateMonthTime(startDate).time}
          </h3>
        </div>
        <Link
          to={
            pathname.replace(/\/$/, '') + `/${id}-${title.replace(/\s+/g, '-')}`
          }
          className="rounded-md text-blue-900 text-center mt-5 text-sm  font-medium"
        >
          View Details <FaAngleRight size={20} className="inline" />
        </Link>
      </div>
    </div>
  );
};

export default Event;
