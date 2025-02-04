import { useContext } from 'react';
import { EventsContext, EventsContextType } from '../context/EventsContext';

export const useEvents = () => {
  const values = useContext(EventsContext) as EventsContextType;
  if (!values) {
    throw new Error('useEvents must be used within an EventsProvider');
  }
  return values;
};
