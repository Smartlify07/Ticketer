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
  profile_completed: boolean;
  department: string;
  id: string;
  email: string;
};

export type Payment = FlutterWaveResponse & {};
