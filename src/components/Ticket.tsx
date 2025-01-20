import ticketImage from '../assets/teen titans.png';
const generateTicketNumber = () => {
  const number = Math.floor(Math.random() * 1000);
  const lastNumber = Math.floor(Math.random() * 100);
  return `TKT-2025-${number}-A${String(lastNumber).padStart(3, '0')}`;
};

const Ticket = () => {
  return (
    <div className="w-[320px] font-poppins  relative overflow-hidden   rounded-3xl  border-red-700 bg-transparent">
      <img
        src={ticketImage}
        alt="teen titans go image"
        className="rounded-t-3xl object-cover h-[300px]  w-full"
      />

      <div className="absolute bg-[#fff] w-10 h-10 rounded-full top-[60%] -left-5 z-10"></div>
      <div className="absolute bg-[#fff] w-10 h-10 rounded-full top-[60%] -right-5 z-10"></div>

      <div className="flex items-center gap-1 overflow-hidden">
        {Array.from({ length: 22 }).map((_, i) => (
          <div key={i} className="w-10 rounded-full h-0.5 bg-[#1DB3FF]"></div>
        ))}
      </div>

      <div className="rounded-b-3xl w-full font-poppins px-6 shadow-2xl bg-[#0D0D0D] py-6 flex flex-col items-center gap-4">
        <div className="flex flex-col items-center">
          <h1 className="text-white font-medium text-xl">Teen titans Go</h1>
          <p className="text-white text-sm">31st Mar, 3:00pm</p>
        </div>

        <div className="flex items-center gap-1">
          <h1 className="text-[#fafafa] text-opacity-70 text-sm">Where: </h1>
          <h1 className="text-[#fff] text-sm">Board room</h1>
        </div>

        <div className="flex items-center gap-1">
          <h1 className="text-[#fafafa] text-opacity-70 text-sm">
            Ticket no:{' '}
          </h1>
          <h1 className="text-base text-white font-medium uppercase">
            {generateTicketNumber()}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
