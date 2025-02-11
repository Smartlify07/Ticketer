import { Field, Formik, Form } from 'formik';

type PersonalInformationProps = {
  name: string;
  matricNumber: string;
  phone: string;
  email: string;
  updateProfile: (
    name: string,
    email: string,
    matricNumber: string,
    phone: string,
    department: string
  ) => Promise<void>;
};
const PersonalInformation = ({
  name,
  // matricNumber,
  email,
  phone,
  updateProfile,
}: PersonalInformationProps) => {
  const inputClassName =
    'rounded-md border py-3 px-4 text-sm focus:border-primary focus:border-2 focus:outline-none placeholder:text-sm font-normal text-neutral-800 disabled:bg-neutral-50 disabled:placeholder:text-neutral-500';
  return (
    <section className="py-4 flex flex-col w-full md:mt-6 gap-4">
      <header>
        <h1 className="text-neutral-800">Personal Information</h1>
      </header>

      <Formik
        initialValues={{ name, email, matricNumber: '', department: '', phone }}
        onSubmit={(values) => {
          updateProfile(
            values.name,
            values.email,
            values.matricNumber,
            values.phone,
            values.department
          );
        }}
      >
        <Form className="rounded-md self-start w-full  flex flex-col gap-4">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex flex-col gap-1 w-full md:w-6/12 ">
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

          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex flex-col gap-1 w-full md:w-6/12">
              <label htmlFor="name" className="text-neutral-500 text-sm">
                Phone Number
              </label>
              <Field
                placeholder={'e.g +123-43-(5)-002'}
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
                name="matricNumber"
                disabled
              />
            </div>
          </div>

          <button
            type="submit"
            className="rounded-md bg-primary shadow-sm text-white font-medium text-sm py-2.5 mt-10 px-4"
          >
            Save Changes
          </button>
        </Form>
      </Formik>
    </section>
  );
};

export default PersonalInformation;
