import { Models } from 'appwrite';

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

export type UserType = Models.User<Models.Preferences> | Models.Session | null;

export type AttendeeType = {
  id: string;
  name: string;
};
export type EventType = {
  id: string;
  attendees: AttendeeType[];
  title: string;
  description: string;
  coverImage: string;
  type: string;
  location: string;
  startDate: string;
  endDate?: string;
  ticketPrice: number;
};
