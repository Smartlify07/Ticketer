import { BsExclamationCircle } from 'react-icons/bs';
import { GiCheckMark } from 'react-icons/gi';

type ToastErrorType = {
  message: string;
  type: 'success' | 'error';
};
const ToastMessage = ({ message, type }: ToastErrorType) => {
  if (type === 'error') return <ErrorMessage message={message} />;
  else if (type === 'success') return <SuccessMessage message={message} />;
};

const ErrorMessage = ({ message }: { message: string }) => {
  return (
    <div className="rounded-md  bg-red-500/30 bg-opacity-20 border-red-500 py-5 px-4 min-w-[375px] flex items-center justify-center gap-3">
      <BsExclamationCircle className="text-red-500 text-2xl" />
      <h2 className="font-medium text-neutral-800 text-sm">{message}</h2>
    </div>
  );
};

const SuccessMessage = ({ message }: { message: string }) => {
  return (
    <div className="rounded-md  bg-green-500/30 bg-opacity-20 border-green-500 py-5 px-4 min-w-[300px] flex items-center justify-center gap-3">
      <div className="bg-green-500 rounded-full w-8 h-8 flex justify-center items-center text-white">
        <GiCheckMark size={20} className="text-white text-2xl" />
      </div>
      <h2 className="font-medium text-neutral-800 text-sm">{message}</h2>
    </div>
  );
};

export default ToastMessage;
