import { ID } from 'appwrite';
import { account } from '../appwrite';

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
      console.error(error);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      return await account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const getUser = async () => {
    const user = await account.get();
    return user;
  };

  return { signUp, login, getUser };
};
