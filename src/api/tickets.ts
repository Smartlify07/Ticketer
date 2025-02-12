import { toast } from "react-toastify";
import { Ticket, UserType } from "../types/types";
import { supabase } from "../supabase/config";

 export const fetchTickets = async (user:UserType) => {
    if (!user) return;

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
     
         } 
return tickets
}

export const getTicketById = async (ticketId: string) => {
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
     
    } else {
      return ticket as Ticket;
    }
  }