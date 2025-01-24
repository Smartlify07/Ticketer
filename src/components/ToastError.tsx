import { ToastContentProps } from 'react-toastify';

type ToastErrorType = ToastContentProps & {
  message: string;
};
const ToastError = ({ message }: ToastErrorType) => {
  return (
    <div className="rounded-md  bg-red-700 bg-opacity-20 text-neutral-900 flex justify-center">
      <h2>{message}</h2>
    </div>
  );
};

export default ToastError;
