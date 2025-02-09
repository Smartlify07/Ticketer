import { FiDownload } from 'react-icons/fi';
import { EventType } from '../../types/types';
import { getDateMonthTime } from '../../utils/utils';
import OptimizedImage from '../OptimizedImage';
import QRCode from 'react-qr-code';
import { BiUpload } from 'react-icons/bi';
import { TbCurrencyNaira } from 'react-icons/tb';
type TicketDetailsProps = {
  event: EventType;
  id: string;
};
const TicketDetails = ({ event, id }: TicketDetailsProps) => {
  const getStatus = () => {
    let className = '';
    let status = '';
    if (event.event_date < new Date().toISOString()) {
      status = 'Expired';
      className = 'text-xs text-center font-medium bg-red-200 text-red-600';
    } else if (event.event_date > new Date().toISOString()) {
      status = 'Upcoming';
      className =
        'text-xs text-center font-medium bg-orange-200 text-orange-600';
    } else {
      status = 'Ongoing';
      className =
        'text-xs text-center font-medium bg-neutral-200 text-neutral-700';
    }
    return { status, className };
  };
  return (
    <div className="flex flex-col gap-8 w-[320px] md:w-[450px]">
      <div className="rounded-3xl border flex flex-col gap-6 py-7 w-full relative">
        <div className="flex items-center justify-between px-6 w-full">
          <div className="flex flex-col gap-1">
            <h3 className="text-neutral-400 text-xs">Ticket Number</h3>
            <h1 className="text-neutral-800 font-medium">
              {id.substring(0, 10)}
            </h1>

            <span className={`py-1 rounded-md px-5 ${getStatus().className}`}>
              {getStatus().status}
            </span>
          </div>

          <OptimizedImage
            src={event.cover_image ?? ''}
            className="rounded-full w-10 h-10"
            alt={event.title}
          />
        </div>
        <div className="px-6 flex flex-col w-full gap-6">
          <h1 className="text-3xl font-medium text-neutral-800 self-center text-center">
            {event.title}
          </h1>
          <hr className="w-full" />

          <div className="flex items-center gap-6 w-full justify-center">
            <div className="flex flex-col items-center gap-0.5">
              <h4 className="text-neutral-400 text-sm">Date</h4>
              <h3 className="text-neutral-800 font-medium">
                {getDateMonthTime(event.event_date).date}{' '}
                {getDateMonthTime(event.event_date).month.substring(0, 3)}
              </h3>
            </div>
            <div className="flex flex-col items-center gap-0.5">
              <h4 className="text-neutral-400 text-sm">Time</h4>
              <h3 className="text-neutral-800 font-medium">
                {getDateMonthTime(event.event_date).time}
              </h3>
            </div>

            <div className="flex flex-col items-center gap-0.5">
              <h4 className="text-neutral-400 text-sm">Price</h4>

              <h3 className="text-neutral-800 flex items-center font-medium">
                <TbCurrencyNaira size={16} />
                {event.ticketFee.toLocaleString()}
              </h3>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="bg-white border-r border-neutral-700 rounded-full absolute top-0 -left-5 w-10 h-10"></div>
          <div className="bg-white border-l border-neutral-700 rounded-full absolute top-0 -right-5 w-10 h-10"></div>

          <div className="flex items-center mt-5 gap-1">
            {[
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
              20,
            ].map((num) => (
              <span
                key={num}
                className="w-[40px] h-[1px] bg-neutral-500"
              ></span>
            ))}
          </div>
        </div>

        <div className="flex   items-start justify-center mt-4 w-full gap-1 ">
          <QRCode fgColor="#262626" size={256} value={id} />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="text-white flex justify-center items-center gap-2 bg-primary w-full font-medium text-sm rounded-md py-3 px-5">
          <FiDownload size={20} /> Download
        </button>
        <button className="text-neutral-600 flex justify-center items-center gap-2 border border-neutral-400 w-full font-medium text-sm rounded-md py-3 px-5">
          <BiUpload size={20} /> Share
        </button>
      </div>
    </div>
  );
};

export default TicketDetails;
