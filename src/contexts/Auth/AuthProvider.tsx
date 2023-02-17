import { ApolloError } from '@apollo/client';
import { createContext, PropsWithChildren, useState } from 'react';
import { useMyUserQuery } from '../../graphql/generated/hooks';
import { User } from '../../graphql/generated/types';
import useCookies from '../../hooks/useCookies';
import useLogout from '../../hooks/useLogout';
import { Constants } from '../../utils/constants';

export interface AuthState {
  error?: ApolloError;
  myUser?: User;
}

export const AuthContext = createContext<AuthState | null>(null);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [myUser, setMyUser] = useState<User>();
  const handleDisconnect = useLogout();
  const [isLoggedIn] = useCookies(Constants.IS_LOGGED_IN, false);

  const { loading } = useMyUserQuery({
    skip: !isLoggedIn,
    onCompleted: ({ myUser }) => setMyUser(myUser as User),
    onError: () => {
      handleDisconnect();
    }
  });

  if (loading) {
    return <div className="flex h-full w-full items-center justify-center">Authenticating...</div>;
  }

  return <AuthContext.Provider value={{ myUser }}>{children}</AuthContext.Provider>;
};
