import { useConnect, useSignMessage } from 'wagmi';
import Cookies from 'js-cookie';
import { InjectedConnector } from 'wagmi/connectors/injected';
import {
  useCheckIfUserExistsMutation,
  useAuthenticateMutation,
  useMyUserLazyQuery
} from '../../../graphql/generated/hooks';
import { Constants } from '../../../utils/constants';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/Auth/useAuth';
import { User } from '../../../graphql/generated/types';
import useLogout from '../../../hooks/useLogout';

const useLogin = () => {
  const navigate = useNavigate();
  const { connectAsync } = useConnect();
  const { signMessageAsync } = useSignMessage();
  const { setMyUser } = useAuth();
  const handleDisconnect = useLogout();

  const [checkIfUserExists] = useCheckIfUserExistsMutation();
  const [authenticateUser] = useAuthenticateMutation();

  const [getMyUser] = useMyUserLazyQuery();

  const getWalletAddress = async (): Promise<string> =>
    await connectAsync({
      connector: new InjectedConnector()
    })
      .then(({ account }) => {
        return account;
      })
      .catch(async () => {
        handleDisconnect(false);
        return await getWalletAddress();
      });

  const handleAuth = async () => {
    const walletAddress = await getWalletAddress();

    if (!walletAddress) return;

    checkIfUserExists({
      variables: { walletAddress },
      onCompleted: async ({ checkIfUserExists: { walletAddress, nonce, hasSkippedEmail } }) => {
        // // signing the received message via metamask
        const formattedMessage = `Nonce for this message: ${nonce}`;
        const signature = await signMessageAsync({ message: formattedMessage });

        const authParams = {
          signature,
          walletAddress
        };

        authenticateUser({
          variables: { authenticateInput: authParams },
          onCompleted: () => {
            Cookies.set(Constants.IS_LOGGED_IN, JSON.stringify(true));

            getMyUser({
              onCompleted: ({ myUser }) => {
                setMyUser(myUser as User);

                // If the user has never been asked for the email, give them the option to provide
                if (!hasSkippedEmail) return navigate('/verify');

                // Refresh page to get new cookies and show home page
                navigate(0);
              }
            });
          }
        });
      }
    });
  };

  return handleAuth;
};

export default useLogin;
