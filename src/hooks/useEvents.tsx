import { useQuery } from '@tanstack/react-query';
import { fetchEvents } from '../api/events';

export const useEvents = () => {
  const {
    data: events,
    isPending: loading,
    error,
  } = useQuery({
    queryKey: ['events'],
    queryFn: fetchEvents,
    staleTime: 12 * 100,
  });

  return { events, loading, error };
};
