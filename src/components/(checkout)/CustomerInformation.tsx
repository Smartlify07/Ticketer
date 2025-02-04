import { Field, Form, Formik } from 'formik';

type CustomerInformationProps = {
  name: string;
  email: string;
  matricNumber: string;
};
const CustomerInformation = ({
  name,
  email,
  matricNumber,
}: CustomerInformationProps) => {
  const inputClassName =
    'rounded-md border py-3 px-4 text-sm focus:border-blue-900 focus:border-2 focus:outline-none placeholder:text-sm font-normal text-neutral-800 disabled:bg-gray-100 disabled:placeholder:text-neutral-500';
  return (
    <section className="flex flex-col gap-2 w-full">
      <header>
        <h1 className="text-neutral-800 text-base">Customer Information</h1>
      </header>
      <Formik
        initialValues={{ name, email, matricNumber, phone: '' }}
        onSubmit={() => {}}
      >
        <Form className="rounded-md  py-4  w-full  flex flex-col gap-4">
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="name" className="text-neutral-500 text-sm">
              Name
            </label>
            <Field
              placeholder="e.g John Doe"
              className={inputClassName}
              name="name"
            />
          </div>

          <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
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

            <div className="flex flex-col gap-1 w-full md:w-6/12">
              <label htmlFor="name" className="text-neutral-500 text-sm">
                Matric Number
              </label>
              <Field
                disabled={true}
                placeholder={matricNumber}
                className={inputClassName}
                name="matricNumber"
              />
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
            <div className="flex flex-col gap-1 md:w-6/12">
              <label htmlFor="name" className="text-neutral-500 text-sm">
                Phone Number
              </label>
              <Field
                placeholder={matricNumber}
                className={inputClassName}
                name="phone"
              />
            </div>
          </div>
        </Form>
      </Formik>
    </section>
  );
};

export default CustomerInformation;
