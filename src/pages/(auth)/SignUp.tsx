import { ErrorMessage, Field, Form, Formik } from 'formik';
import { BiEnvelope } from 'react-icons/bi';
import { FaRegUser } from 'react-icons/fa';
import { GiPadlock } from 'react-icons/gi';
import * as Yup from 'yup';
import { useAuthContext } from '../../context/AuthContext';
import { FcGoogle } from 'react-icons/fc';
const SignUp = () => {
  const inputClassName =
    'border rounded-md py-2 text-sm relative w-full placeholder:text-sm px-4 focus:outline-none focus:shadow-sm focus:border-1.5 focus:border-primary';

  const { handleSignUp, handleSignUpWithGoogle } = useAuthContext();

  const validationSchema = Yup.object({
    name: Yup.string().required('Your name is required'),

    email: Yup.string().email().required('Your email address is required'),
    password: Yup.string()
      .required('Please Enter your password')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
        'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
      ),
  });

  return (
    <aside className="flex flex-col gap-6 px-10 md:px-0  self-center min-w-[400px] md:max-w-[400px]">
      <header className="flex flex-col gap-2">
        <h1 className="text-black font-medium text-2xl">Sign up</h1>
        <p className="text-neutral-400 text-sm">
          Enter your details below to get started
        </p>
      </header>

      <button
        onClick={handleSignUpWithGoogle}
        className="border text-sm font-medium rounded-md py-2 w-full px-4 flex items-center justify-center gap-4"
      >
        <FcGoogle />
        Sign in with Google
      </button>

      <div className="flex items-center gap-2">
        <hr className="border w-full" />
        <p className="text-neutral-400 text-xs">OR</p>
        <hr className="border w-full" />
      </div>
      <Formik
        initialValues={{
          name: '',
          email: '',
          matricNumber: '',
          password: '',
        }}
        onSubmit={(values) => {
          handleSignUp(values);
        }}
        validationSchema={validationSchema}
      >
        <Form className="flex flex-col w-full gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-black text-sm font-normal">
              Name
            </label>
            <div className="relative w-full">
              <FaRegUser
                size={20}
                className="text-neutral-400 absolute z-20 right-2 top-2.5"
              />
              <Field
                name="name"
                placeholder="e.g John Doe"
                className={inputClassName}
              />
              <ErrorMessage
                name="name"
                className="text-xs font-medium text-red-600"
                component="span"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-black text-sm font-normal">
              Email
            </label>
            <div className="relative w-full">
              <BiEnvelope
                size={20}
                className="text-neutral-400 absolute z-20 right-2 top-2.5"
              />
              <Field
                type="email"
                name="email"
                placeholder="e.g johndoe@email.com"
                className={inputClassName}
              />
              <ErrorMessage
                name="email"
                className="text-xs font-medium text-red-600"
                component="span"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-black text-sm font-normal">
              Password
            </label>
            <div className="relative w-full">
              <GiPadlock
                size={20}
                className="text-neutral-400 absolute z-20 right-2 top-2.5"
              />
              <Field
                type="password"
                name="password"
                placeholder="password"
                className={inputClassName}
              />
              <ErrorMessage
                name="password"
                className="text-xs font-medium text-red-600"
                component="span"
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-primary text-white text-sm font-medium mt-6 py-3 border-primary rounded-md shadow-sm"
          >
            Sign up
          </button>
        </Form>
      </Formik>
    </aside>
  );
};

export default SignUp;
