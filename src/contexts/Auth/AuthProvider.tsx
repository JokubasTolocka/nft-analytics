import { ApolloError } from '@apollo/client';
import { createContext, Dispatch, PropsWithChildren, SetStateAction, useState } from 'react';
import { useMyUserQuery } from '../../graphql/generated/hooks';
import { User } from '../../graphql/generated/types';
import useCookies from '../../hooks/useCookies';
import useLogout from '../../hooks/useLogout';
import { Constants } from '../../utils/constants';

export interface AuthState {
  error?: ApolloError;
  myUser?: User;
  setMyUser: Dispatch<SetStateAction<User | undefined>>;
}

export const AuthContext = createContext<AuthState | null>(null);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [myUser, setMyUser] = useState<User>();
  const handleDisconnect = useLogout();
  const [isLoggedIn] = useCookies(Constants.IS_LOGGED_IN, false);

  const { loading } = useMyUserQuery({
    skip: !isLoggedIn,
    onCompleted: ({ myUser }) => setMyUser(myUser as User),
    onError: () => handleDisconnect
  });

  if (loading) {
    return (
      <div className="flex bg-dark-100 h-full w-full items-center justify-center">
        <div className="border border-dark-40 text-white rounded-[20px] py-10 px-8">Authenticating...</div>
      </div>
    );
  }

  return <AuthContext.Provider value={{ myUser, setMyUser }}>{children}</AuthContext.Provider>;
};
