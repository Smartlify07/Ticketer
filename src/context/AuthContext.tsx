import { createContext, useContext, useEffect, useState } from 'react';
import { SignInFormValues, SignUpFormValues, UserType } from '../types/types';
import { supabase } from '../supabase/config';
import { toast } from 'react-toastify';

type AuthContextType = {
  user: UserType;
  loading: boolean;
  error: null | string;
  handleSignUp: (values: SignUpFormValues) => void;
  handleSignIn: (values: SignInFormValues) => void;
  handleSignUpWithGoogle: () => void;
  logout: () => void;
};
export const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserType>(null);
  const [loading, setIsLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);

  const handleSignIn = async (values: SignInFormValues) => {
    const { data: user, error } = await supabase.auth.signInWithPassword({
      email: values.email,
      password: values.password,
    });

    if (user?.user) {
      setUser(user.user as UserType);
    } else {
      setUser(null);
    }
    if (error) {
      console.error('Sign in failed:', error.message);
      toast.error('Sign in failed');
      return;
    }
  };

  const handleSignUp = async (values: SignUpFormValues) => {
    const { data: user, error } = await supabase.auth.signUp({
      email: values.email,
      password: values.password,
    });
    if (error) {
      console.error('Sign up failed:', error.message);
      setError(error instanceof Error ? error.message : 'Failed to sign up');
      return;
    }
    setUser(user.user);
  };

  const handleSignUpWithGoogle = async () => {
    const { error: authError } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: import.meta.env.VITE_APP_URL,
      },
    });

    if (authError) {
      console.error('Sign up failed:', authError.message);
      return;
    }
  };

  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Sign out failed:', error.message);
      return;
    }
    setUser(null);
  };

  useEffect(() => {
    (async () => {
      const {
        data: { user },
        error: fetchError,
      } = await supabase.auth.getUser();

      if (user) {
        setUser(user);

        const { data: profile } = await supabase
          .from('profiles')
          .select('*')
          .eq('user_id', user.id)
          .single();

        if (!profile) {
          const { error: insertError } = await supabase
            .from('profiles')
            .insert({
              user_id: user.id,
              email: user.email,
              name: user.user_metadata?.full_name || null,
              matricNumber: null,
              phone: null,
              avatar: null,
            });

          if (insertError) {
            console.error('Insert Error:', insertError);
          }
        }
      }
      if (fetchError) {
        console.error(fetchError);
        setIsLoading(false);
        setError(error);
        throw fetchError;
      }
    })();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        error,
        handleSignUp,
        handleSignIn,
        handleSignUpWithGoogle,
        logout,
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
