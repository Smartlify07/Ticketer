import { useNavigate } from 'react-router';
import useTickets from '../../hooks/useTickets';
import Ticket from '../../components/(tickets)/Ticket';
import TicketsPageSkeleton from '../../components/(skeletons)/TicketsPageSkeleton';

const TicketsPage = () => {
  const { tickets, loading } = useTickets();
  const navigate = useNavigate();
  return (
    <main className="flex flex-col  justify-center px-4 md:px-0 py-10">
      <header className="flex flex-col gap-2">
        <h1 className="text-2xl font-medium text-neutral-800">My Tickets</h1>
        <p className="text-neutral-500 text-sm">
          View your tickets and upcoming events
        </p>
      </header>
      <div className="w-full items-center justify-center max-w-[1440px] flex flex-col">
        {!loading && tickets.length === 0 && (
          <div className="flex flex-col justify-center min-h-[500px] gap-6">
            <div className="flex gap-2 items-center flex-col">
              <h1 className="self-center justify-self-center md:text-2xl  font-medium text-neutral-900">
                You haven't bought any tickets yet
              </h1>
              <p className="text-neutral-500 text-center text-sm">
                You can view events and buy tickets from the explore page
              </p>
            </div>

            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => navigate('/explore')}
                className="bg-blue-900 text-sm text-white font-medium py-3 px-8 rounded-md hover:bg-blue-800 transition-all"
              >
                View Events
              </button>
            </div>
          </div>
        )}
        {loading && <TicketsPageSkeleton />}

        {tickets.length > 0 && (
          <section className="flex flex-col self-start w-full py-10 gap-8">
            <div className="grid gap-5 md:grid-cols-3 md:gap-8">
              {tickets.map((ticket) => (
                <Ticket {...ticket} key={ticket.id} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
};

export default TicketsPage;
