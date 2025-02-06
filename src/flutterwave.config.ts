import { type FlutterwaveConfig } from 'flutterwave-react-v3/dist/types';

export const flutterwaveConfig = (
  email: string,
  phone_number: string,
  name: string,
  amount: number,
  eventTitle: string
): FlutterwaveConfig => ({
  public_key: import.meta.env.VITE_FLUTTERWAVE_PUBLIC_KEY,
  tx_ref: Date.now().toString(),
  amount,
  currency: 'NGN',
  payment_options: 'card,mobilemoney,ussd',
  // redirect_url: 'http://localhost:5173',
  customer: {
    email,
    phone_number,
    name,
  },
  customizations: {
    title: eventTitle,
    description: `Payment for ${eventTitle}`,
    logo: '',
  },
});
