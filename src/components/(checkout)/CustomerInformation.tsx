import { Field, Form, Formik } from 'formik';
import { FaAngleRight } from 'react-icons/fa';
import { type InitializeFlutterwavePayment } from 'flutterwave-react-v3/dist/types';
import useCheckout from '../../hooks/useCheckout';

type CustomerInformationProps = {
  name: string;
  email: string;
  matricNumber: string;
  handleInitiatePayment: ({
    callback,
    onClose,
  }: InitializeFlutterwavePayment) => void;
};

const CustomerInformation = ({
  name,
  email,
  matricNumber,
  handleInitiatePayment,
}: CustomerInformationProps) => {
  const { handleUpdatePayment } = useCheckout();

  const inputClassName =
    'rounded-md border py-3 px-4 text-sm focus:border-blue-900 focus:border-2 focus:outline-none placeholder:text-sm font-normal text-neutral-800 disabled:bg-neutral-50 disabled:placeholder:text-neutral-500';
  return (
    <section className="flex flex-col z-20 left-0 py-8 px-4 bg-white absolute top-56 rounded-3xl md:px-0 md:rounded-none md:bg-transparent md:relative md:top-0 md:bottom-0 md:py-0 gap-2 w-full">
      <header className="flex items-center justify-between">
        <h1 className="text-neutral-800 text-base">Customer Information</h1>
      </header>
      <Formik
        initialValues={{ name, email, matricNumber: '', phone: '' }}
        onSubmit={() => {}}
      >
        <Form className="rounded-md  py-4  w-full  flex flex-col gap-4">
          <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
            <div className="flex flex-col gap-1 w-full md:w-6/12">
              <label htmlFor="name" className="text-neutral-500 text-sm">
                Name
              </label>
              <Field
                placeholder="e.g John Doe"
                className={inputClassName}
                name="name"
              />
            </div>
            <div className="flex flex-col gap-1 w-full md:w-6/12">
              <label htmlFor="name" className="text-neutral-500 text-sm">
                Email
              </label>
              <Field
                type="email"
                placeholder="e.g johndoe@gmail.com"
                className={inputClassName}
                name="email"
              />
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
            <div className="flex flex-col gap-1 w-full md:w-6/12">
              <label htmlFor="name" className="text-neutral-500 text-sm">
                Phone Number
              </label>
              <Field
                placeholder={matricNumber}
                className={inputClassName}
                name="phone"
              />
            </div>

            <div className="flex flex-col gap-1 w-full md:w-6/12">
              <label htmlFor="name" className="text-neutral-500 text-sm">
                Matric Number
              </label>
              <Field
                placeholder={'e.g L/CBA/CSC/23/0000'}
                className={inputClassName}
                name="phone"
                disabled
              />
            </div>
          </div>

          <button
            onClick={() => {
              handleInitiatePayment({
                callback: (response) => {
                  handleUpdatePayment({
                    ...response,
                    user_id: matricNumber,
                    event_id: '',
                  });
                },
                onClose: () => {},
              });
            }}
            className="rounded-md z-40 mt-5  flex bg-primary w-full self-center md:w-full text-white items-center gap-2 py-4 px-4 text-center justify-center text-sm font-medium md:hidden justify-self-end"
          >
            Make Payment <FaAngleRight size={20} />
          </button>
        </Form>
      </Formik>
    </section>
  );
};

export default CustomerInformation;
