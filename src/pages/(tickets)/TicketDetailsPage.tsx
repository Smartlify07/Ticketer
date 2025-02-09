import { useParams } from 'react-router';
import TicketDetails from '../../components/(tickets)/TicketDetails';
import { useCallback, useEffect, useState } from 'react';
import { Ticket } from '../../types/types';
import useTickets from '../../hooks/useTickets';
import TicketDetailsSkeleton from '../../components/(skeletons)/TicketDetailsSkeleton';
import { BiRefresh } from 'react-icons/bi';
import { TfiAngleLeft } from 'react-icons/tfi';

const TicketDetailsPage = () => {
  const { ticketId } = useParams();
  const [ticket, setTicket] = useState<Ticket | null>(null);
  const { getTicketById, loading, error } = useTickets();
  const fetchTicket = useCallback(async () => {
    const ticket = await getTicketById(ticketId!);
    setTicket(ticket!);
  }, [ticketId, getTicketById]);

  const refetch = () => {
    fetchTicket();
  };
  useEffect(() => {
    fetchTicket();
  }, [getTicketById, ticketId, fetchTicket]);
  return (
    <main className="flex flex-col font-poppins min-h-screen gap-5 items-center py-10 justify-center">
      <header className="flex items-center relative justify-center self-center gap-5 border min-w-[320px] md:min-w-[450px]">
        <button className="text-primary absolute  left-0 h-10 w-10 rounded-full bg-primary/5 flex items-center justify-center border mr-auto text-sm  gap-1">
          <TfiAngleLeft size={16} />
        </button>
        <h1 className="text-3xl font-medium justify-self-center text-neutral-800">
          Your ticket
        </h1>
      </header>
      {loading && <TicketDetailsSkeleton />}
      {!loading && !error && ticket && (
        <TicketDetails id={ticket!.id} event={ticket!.events} />
      )}
      {!loading && error && (
        <div className="min-h-[400px] flex items-center justify-center">
          <h1 className="text-3xl md:text-4xl font-medium font-montserrat">
            {error}
          </h1>

          <button
            onClick={refetch}
            className="border rounded-md self-center py-2 px-3 text-neutral-900 flex items-center gap-2 font-medium "
          >
            Try again <BiRefresh />
          </button>
        </div>
      )}
    </main>
  );
};

export default TicketDetailsPage;
