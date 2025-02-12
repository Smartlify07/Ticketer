import { useQuery } from '@tanstack/react-query';
import { fetchTickets } from '../api/tickets';
import { useAuthContext } from '../context/AuthContext';

const useTickets = () => {
  const { user } = useAuthContext();
  const {
    data: tickets,
    error,
    isPending: loading,
  } = useQuery({
    queryKey: ['tickets'],
    queryFn: () => fetchTickets(user),
    staleTime: 12 * 100,
  });
  return { tickets, error, loading };
};

export default useTickets;
