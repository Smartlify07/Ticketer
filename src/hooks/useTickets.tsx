import { useContext } from 'react';
import { TicketsContext } from '../context/TicketContext';

const useTickets = () => {
  const values = useContext(TicketsContext);
  if (!values) {
    throw new Error('useTickets must be used within a TicketsProvider');
  }
  return values;
};

export default useTickets;
