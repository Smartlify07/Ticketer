import { createContext, useContext, useEffect, useState } from 'react';
import { SignInFormValues, SignUpFormValues, UserType } from '../types/types';
import { useAuthService } from '../services/auth.service';

type AuthContextType = {
  user: UserType | null;
  handleSignUp: (values: SignUpFormValues) => void;
  handleSignIn: (values: SignInFormValues) => void;
};
export const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserType>(null);
  const { signUp, login, getUser } = useAuthService();

  const handleSignUp = async (values: SignUpFormValues) => {
    const registeredUser = await signUp(
      values.email,
      values.password,
      values.name,
      values.matricNumber
    );
    setUser(registeredUser!);
  };

  const handleSignIn = async (values: SignInFormValues) => {
    setUser(await login(values.email, values.password!));
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        handleSignUp,
        handleSignIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const values = useContext(AuthContext) as AuthContextType;
  if (!values) {
    throw new Error('The auth context has to be wrapped in an auth provider');
  }
  return values;
};

export default AuthProvider;
