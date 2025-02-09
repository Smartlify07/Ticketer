import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { Ticket } from '../types/types';
import { supabase } from '../supabase/config';
import { toast } from 'react-toastify';
import { useAuthContext } from './AuthContext';

export type TicketContextType = {
  loading: boolean;
  tickets: Ticket[];
  error: string | null;
  refetch: () => void;
  getTicketById: (ticketId: string) => Promise<Ticket | undefined>;
};
export const TicketsContext = createContext<TicketContextType | null>(null);

const TicketsProvider = ({ children }: { children: ReactNode }) => {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuthContext();
  const fetchTickets = useCallback(async () => {
    if (!user) return;

    setLoading(true);
    const { data: tickets, error } = await supabase
      .from('tickets')
      .select('*, events(*)')
      .eq('user_id', user?.id);

    if (error) {
      console.error(error);
      toast.error(
        error instanceof Error
          ? error.message
          : 'An error occured trying to fetch tickets'
      );
      setError(
        error instanceof Error
          ? error.message
          : 'An error occured trying to fetch tickets'
      );
    } else {
      setTickets(tickets as Ticket[]);
    }
    setLoading(false);
  }, [user]);

  const getTicketById = useCallback(async (ticketId: string) => {
    setLoading(true);
    const { data: ticket, error } = await supabase
      .from('tickets')
      .select('*, events(*)')
      .eq('id', ticketId)
      .single();

    if (error) {
      console.error(error);
      toast.error(
        error instanceof Error
          ? error.message
          : 'An error occured trying to fetch that ticket'
      );
      setError(
        error instanceof Error
          ? error.message
          : 'An error occured trying to fetch that ticket'
      );
    } else {
      return ticket as Ticket;
    }
    setLoading(true);
  }, []);

  const refetch = () => {
    fetchTickets();
  };

  useEffect(() => {
    fetchTickets();
  }, [user?.id, fetchTickets]);
  return (
    <TicketsContext.Provider
      value={{
        loading,
        tickets,
        error,
        refetch,
        getTicketById,
      }}
    >
      {children}
    </TicketsContext.Provider>
  );
};

export default TicketsProvider;
