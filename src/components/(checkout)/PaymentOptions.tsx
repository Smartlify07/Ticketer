import { BiCreditCard } from 'react-icons/bi';
import { BsBank } from 'react-icons/bs';

const PaymentOptions = () => {
  return (
    <section className="flex flex-col gap-4">
      <header>
        <h1 className="text-base text-neutral-800">Payment Options</h1>
      </header>
      <div className="flex flex-col gap-5 md:justify-between md:flex-row">
        <button className="rounded-md border-[1.5px] flex justify-center items-center gap-3 text-sm text-neutral-500  font-medium w-full py-4 px-4">
          Pay with your Card <BiCreditCard size={24} />
        </button>
        <button className="rounded-md border-[1.5px] flex justify-center items-center gap-3 text-sm text-neutral-500 font-medium w-full py-4 px-4">
          Bank Transfer <BsBank size={24} />
        </button>
      </div>
    </section>
  );
};

export default PaymentOptions;
