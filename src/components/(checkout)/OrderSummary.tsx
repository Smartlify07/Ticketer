import { TbCurrencyNaira } from 'react-icons/tb';
import OptimizedImage from '../OptimizedImage';

type OrderSummaryProps = {
  cover_image: string;
  title: string;
  ticketFee: number;
};
const OrderSummary = ({ cover_image, title, ticketFee }: OrderSummaryProps) => {
  return (
    <section className="flex flex-col w-full font-poppins gap-8">
      <header>
        <h1 className="text-sm text-neutral-500 font-medium">Order Summary</h1>
      </header>

      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-3">
          <OptimizedImage
            src={cover_image}
            alt={title}
            className="w-12 h-10 rounded-md"
          />
          <h2 className="text-neutral-900 font-medium text-sm tracking-tight">
            {title}
          </h2>
        </div>

        <h3 className="flex items-center text-neutral-800 text-sm font-medium justify-center gap-0.5">
          <TbCurrencyNaira size={24} />
          {ticketFee.toLocaleString()}{' '}
        </h3>
      </div>

      <hr className="border border-neutral-300" />
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between w-full">
          <h1 className="text-neutral-500 font-normal text-sm">Subtotal</h1>

          <h3 className="text-neutral-800 font-medium text-sm flex items-center gap-1">
            <TbCurrencyNaira size={24} />
            {ticketFee.toLocaleString()}.00
          </h3>
        </div>

        <div className="flex items-center justify-between w-full">
          <h1 className="text-neutral-500 font-normal text-sm">Payment Fee</h1>

          <h3 className="text-neutral-800 font-medium text-sm flex items-center gap-1">
            <TbCurrencyNaira size={24} />
            200.00
          </h3>
        </div>
      </div>

      <hr className="border border-neutral-300" />

      <div className="w-full flex items-center justify-between">
        <h1 className="text-base font-medium text-neutral-800">Total</h1>
        <h3 className="text-primary font-semibold text-base flex items-center gap-1">
          <TbCurrencyNaira size={24} />
          {ticketFee.toLocaleString()}.00
        </h3>
      </div>
    </section>
  );
};

export default OrderSummary;
