import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import cover from '../assets/teen titans.png';
import { IoTicketOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router';
import { allowedNumbers } from '../constants/allowedNumbers';
type FormValues = {
  matricNumber: string;
  name: string;
  email: string;
};
const RegisterPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (values: FormValues) => {
    if (allowedNumbers.find((item) => item === values.matricNumber))
      navigate('/ticket');
    else {
      navigate('/ticket-notallowed');
    }
  };

  const validationSchema = yup.object({
    name: yup.string().required('Your name is required'),
    email: yup
      .string()
      .email('Invalid email address')
      .required('Your email address is required'),
    matricNumber: yup
      .string()
      .required('Your matriculation number is required')
      .max(17, 'Your matriculation number cannot be more than 17 characters')
      .min(17, 'Your matriculation number cannot be less than 17 characters'),
  });

  return (
    <div className="flex gap-4 w-screen h-screen font-poppins">
      <div className="rounded-br-xl relative hidden md:block rounded-tr-xl h-screen  md:w-5/12">
        <div className="absolute h-full z-20 bg-black bg-opacity-45 w-full"></div>
        <img src={cover} alt="" className="w-full h-full object-cover " />
      </div>

      <div className="flex flex-col justify-center items-center w-full md:w-7/12">
        <div className="md:w-7/12 flex flex-col gap-10">
          <h1 className="text-black text-4xl font-medium flex items-center gap-4">
            Get your ticket <IoTicketOutline size={32} />
          </h1>

          <Formik
            validationSchema={validationSchema}
            initialValues={{
              name: '',
              matricNumber: '',
              email: '',
            }}
            onSubmit={handleSubmit}
          >
            <Form className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label
                  className="text-sm font-normal text-neutral-700"
                  htmlFor="name"
                >
                  Name
                </label>
                <Field
                  name="name"
                  placeholder="E.g John Doe"
                  className="rounded-md py-2 px-4 text-neutral-800 border placeholder:text-sm"
                />
                <ErrorMessage
                  name="name"
                  component={'p'}
                  className="text-red-500 text-xs"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  className="text-sm font-normal text-neutral-700"
                  htmlFor="email"
                >
                  Email
                </label>
                <Field
                  type="email"
                  name="email"
                  placeholder="E.g johndoe@example.com"
                  className="rounded-md py-2 px-4 text-neutral-800 border placeholder:text-sm"
                />
                <ErrorMessage
                  name="email"
                  component={'p'}
                  className="text-red-500 text-xs"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  className="text-sm font-normal text-neutral-700"
                  htmlFor="matricNumber"
                >
                  Matric number
                </label>
                <Field
                  name="matricNumber"
                  placeholder="E.g L/CBA/CSC/23/0000"
                  className="rounded-md py-2 px-4 text-neutral-800 border placeholder:text-sm"
                />
                <ErrorMessage
                  name="matricNumber"
                  component={'p'}
                  className="text-red-500 text-xs"
                />
              </div>

              <button className="bg-black py-2.5 px-4 rounded-md mt-6 text-white">
                Get ticket
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
