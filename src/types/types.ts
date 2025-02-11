import { User } from '@supabase/supabase-js';
import { FlutterWaveResponse } from 'flutterwave-react-v3/dist/types';

export type SignUpFormValues = {
  name: string;
  email: string;
  password: string;
  matricNumber: string;
};

export type SignInFormValues = {
  email: string;
  password: string;
};

export type UserType = User | null;

export type AttendeeType = {
  id: string;
  name: string;
};

export type EventType = {
  id: string;
  description: string;
  event_date: string;
  ticketFee: number;
  title: string;
  open_to_all: boolean;
  cover_image?: string;
  location: string;
};

export type Profile = {
  user_id: string;
  name: string;
  matricNumber: string;
  phone: string;
  department: string;
  id?: string;
  email: string;
};

export type Payment = FlutterWaveResponse & {
  user_id: string;
  event_id: string;
};
export type Ticket = {
  id: string;
  created_at: string;
  user_id: string;
  event_id: string;
  tx_ref: string;
  events: EventType;
};
