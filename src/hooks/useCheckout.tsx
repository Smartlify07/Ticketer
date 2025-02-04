import { useContext } from 'react';
import {
  CheckoutContext,
  CheckoutContextType,
} from '../context/CheckoutContext';

const useCheckout = () => {
  const values = useContext(CheckoutContext) as CheckoutContextType;
  if (!values) {
    throw Error('The checkout context must be used in a provider');
  }
  return values;
};

export default useCheckout;
