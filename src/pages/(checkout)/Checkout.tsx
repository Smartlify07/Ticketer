import { TbCurrencyNaira } from 'react-icons/tb';
import CustomerInformation from '../../components/(checkout)/CustomerInformation';
// import PaymentOptions from '../../components/(checkout)/PaymentOptions';
import OrderSummary from '../../components/(checkout)/OrderSummary';
import { FaAngleRight } from 'react-icons/fa';
import { IoIosLock } from 'react-icons/io';
import useCheckout from '../../hooks/useCheckout';
import { useProfile } from '../../hooks/useProfile';
import CheckoutSkeleton from '../../components/(skeletons)/CheckoutSkeleton';
import { flutterwaveConfig } from '../../flutterwave.config';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';

const Checkout = () => {
  const { event, loading, handleUpdatePayment } = useCheckout();
  const { profile } = useProfile();

  const handleInitiatePayment = useFlutterwave(
    flutterwaveConfig(
      profile?.email ?? '',
      '',
      profile?.name ?? '',
      event?.ticketFee ?? 0,
      event?.title ?? ''
    )
  );

  return (
    <main className="text-black py-6 self-start w-full flex flex-col-reverse gap-10 md:gap-0 md:flex-row items-stretch font-poppins md:gap-10 md:py-12">
      {!loading ? (
        <>
          <aside className="md:w-7/12 flex flex-col pb-10 gap-6">
            <CustomerInformation {...profile!} />
            {/* <PaymentOptions /> */}

            <button
              onClick={() => {
                handleInitiatePayment({
                  callback: (response) => {
                    handleUpdatePayment({
                      ...response,
                      user_id: profile?.id ?? '',
                      event_id: event?.id ?? '',
                    });
                    closePaymentModal();
                  },
                  onClose: () => {},
                });
              }}
              className="rounded-md bg-primary text-white flex items-center gap-2 py-4 px-4 text-center justify-center text-sm font-medium mt-auto justify-self-end"
            >
              Make Payment <FaAngleRight size={20} />
            </button>
          </aside>

          <aside className="w-full py-10 px-6 flex flex-col gap-6 rounded-xl bg-blue-900 bg-opacity-5  md:w-5/12">
            <header className="flex flex-col gap-6 py-10">
              <h3 className="text-base tracking-tight self-center text-center text-neutral-400">
                Total amount
              </h3>

              <h1 className="text-4xl font-semibold text-center flex items-center self-center text-primary">
                <TbCurrencyNaira size={32} className="inline" />{' '}
                {event?.ticketFee.toLocaleString()}{' '}
                <span className="text-opacity-50 text-primary">.00</span>
              </h1>

              <h3 className="text-neutral-500 text-xs  self-center flex items-center  gap-1 tracking-tight">
                <IoIosLock size={20} className="text-green-700" /> Secured by{' '}
                <span className="italic inline"> Flutterwave</span>
              </h3>
              <hr className="border border-neutral-300" />
            </header>

            <OrderSummary
              title={event?.title ?? ''}
              cover_image={event?.cover_image ?? ''}
              ticketFee={event?.ticketFee ?? 0}
            />
          </aside>
        </>
      ) : (
        <CheckoutSkeleton />
      )}
    </main>
  );
};

export default Checkout;
