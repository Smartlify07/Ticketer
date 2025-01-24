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
