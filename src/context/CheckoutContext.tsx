import { createContext, ReactNode, useEffect, useState } from 'react';
import { EventType, Payment } from '../types/types';
import { useNavigate, useParams } from 'react-router';
import { useEvents } from '../hooks/useEvents';
import { supabase } from '../supabase/config';
import { useAuthContext } from './AuthContext';
import { toast } from 'react-toastify';

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
  const { fetchEventById } = useEvents();
  const { user } = useAuthContext();

  const [payment, setPayment] = useState<Payment | null>(null);

  const handleUpdatePayment = async (payment: Payment) => {
    setPayment(payment);

    if (payment.status === 'successful' || payment.status === 'completed') {
      const { error: paymentError } = await supabase.from('payments').insert({
        user_id: user?.id,
        event_id: event?.id,
        amount: payment.amount,
        status: payment.status,
        tx_ref: payment.tx_ref,
        flw_ref: payment.flw_ref,
        transaction_id: payment.transaction_id,
      });

      if (paymentError) {
        console.error(paymentError);
        toast.error(paymentError.message);
        return;
      }
      const { error: ticketError } = await supabase.from('tickets').insert({
        tx_ref: payment.tx_ref,
        event_id: event?.id,
        user_id: user?.id,
      });

      if (ticketError) {
        console.error(ticketError);
        toast.error(ticketError.message);
      } else {
        navigate('/mytickets');
      }
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
