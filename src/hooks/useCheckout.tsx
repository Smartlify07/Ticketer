import { useQuery } from '@tanstack/react-query';
import { fetchEventById } from '../api/events';
import { useAuthContext } from '../context/AuthContext';
import { Payment } from '../types/types';
import { supabase } from '../supabase/config';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';

const useCheckout = (id: string) => {
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const {
    data: event,
    error,
    isPending: loading,
  } = useQuery({
    queryKey: ['events', id],
    queryFn: () => fetchEventById(id!),
    staleTime: 12 * 100,
  });

  const handleUpdatePayment = async (payment: Payment) => {
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
  return { event, loading, error, handleUpdatePayment };
};

export default useCheckout;
