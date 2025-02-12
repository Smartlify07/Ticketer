import { supabase } from "../supabase/config";


// Fetch all events
export const fetchEvents = async () => {
  const { data, error } = await supabase.from('events').select('*');
  if (error) throw new Error(error.message);
  return data;
};

// Fetch event by ID
export const fetchEventById = async (eventId:string | number) => {
  const { data, error } = await supabase.from('events').select('*').eq('id', eventId).single();
  if (error) throw new Error(error.message);
  return data;
};