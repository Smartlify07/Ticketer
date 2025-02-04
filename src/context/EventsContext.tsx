import { createContext, type ReactNode, useEffect, useState } from 'react';
import { EventType } from '../types/types';
import { supabase } from '../supabase/config';
import { toast } from 'react-toastify';

export type EventsContextType = {
  events: EventType[];
  loading: boolean;
  error: null | string;
  refetch: () => void;
  fetchEventById: (id: string) => Promise<EventType | null | undefined>;
};
export const EventsContext = createContext<EventsContextType | null>(null);

const EventsProvider = ({ children }: { children: ReactNode }) => {
  const [events, setEvents] = useState<EventType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const refetch = () => {
    fetchEvents();
  };

  const fetchEvents = async () => {
    try {
      const { data: events } = await supabase.from('events').select('*');
      setEvents(events!);
    } catch (error) {
      console.error(error);
      toast.error(
        error instanceof Error ? error.message : 'Failed to fetch events'
      );
      setError(
        error instanceof Error ? error.message : 'Failed to fetch events'
      );
    } finally {
      setLoading(false);
    }
  };

  const fetchEventById = async (id: string) => {
    try {
      setLoading(true);
      const { data: event } = await supabase
        .from('events')
        .select('*')
        .eq('id', id)
        .single();
      if (event) {
        return event as EventType;
      } else {
        return null;
      }
    } catch (error) {
      console.error(error);
      toast.error(
        error instanceof Error ? error.message : 'Failed to fetch event'
      );
      setError(
        error instanceof Error ? error.message : 'Failed to fetch event'
      );
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <EventsContext.Provider
      value={{ loading, error, events, refetch, fetchEventById }}
    >
      {children}
    </EventsContext.Provider>
  );
};

export default EventsProvider;
