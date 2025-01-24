import { ID } from 'appwrite';
import { account } from '../appwrite';
import { toast } from 'react-toastify';

export const useAuthService = () => {
  const signUp = async (
    email: string,
    password: string,
    name: string,
    matricNumber: string
  ) => {
    try {
      const user = await account.create(ID.unique(), email, password, name);

      await account.createEmailPasswordSession(email, password);

      await account.updatePrefs({
        matricNumber,
      });

      return user;
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
        toast.error(error.message, {
          hideProgressBar: true,
          style: {
            width: '300px',
          },
        });
      } else {
        console.error(error);
        toast.error(String(error), { hideProgressBar: true });
      }
    }
  };

  const login = async (email: string, password: string) => {
    try {
      return await account.createEmailPasswordSession(email, password);
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
        toast.error(error.message, {
          hideProgressBar: true,
          style: {
            width: '300px',
          },
        });
      } else {
        console.error(error);
        toast.error(String(error), { hideProgressBar: true });
      }
      return null;
    }
  };

  const getUser = async () => {
    const user = await account.get();
    return user;
  };

  return { signUp, login, getUser };
};
