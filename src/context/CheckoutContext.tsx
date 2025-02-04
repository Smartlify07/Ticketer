import { createContext, ReactNode, useEffect, useState } from 'react';
import { EventType, Payment } from '../types/types';
import { useLocation, useNavigate, useParams } from 'react-router';
import { useEvents } from '../hooks/useEvents';
// import { EventType } from '../types/types';

export type CheckoutContextType = {
  event: EventType | null;
  loading: boolean;
  payment: Payment | null;
  handleUpdatePayment: (payment: Payment) => void;
};
export const CheckoutContext = createContext<CheckoutContextType | null>(null);

const CheckoutProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const [event, setEvent] = useState<EventType | null>(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const pathname = useLocation().pathname;
  const { fetchEventById } = useEvents();
  const [payment, setPayment] = useState<Payment | null>(null);
  const handleUpdatePayment = async (payment: Payment) => {
    setPayment(payment);
    if (payment.status === 'successful' || payment.status === 'completed') {
      navigate(pathname + '/ticket');
    }
  };

  useEffect(() => {
    (async () => {
      const event = await fetchEventById(id!);
      setEvent(event!);
      setLoading(false);
    })();
  }, [id]);

  return (
    <CheckoutContext.Provider
      value={{ payment, handleUpdatePayment, loading, event }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};

export default CheckoutProvider;
