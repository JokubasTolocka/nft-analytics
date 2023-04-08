import { useConnect, useSignMessage } from 'wagmi';
import Cookies from 'js-cookie';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { useCheckIfUserExistsMutation, useAuthenticateMutation } from '../../../graphql/generated/hooks';
import { Constants } from '../../../utils/constants';
import { useNavigate } from 'react-router-dom';

const useLogin = () => {
  const navigate = useNavigate();
  const { connectAsync } = useConnect();
  const { signMessageAsync } = useSignMessage();

  const [checkIfUserExists] = useCheckIfUserExistsMutation();
  const [authenticateUser] = useAuthenticateMutation();

  const getWalletAddress = async () => {
    const { account } = await connectAsync({
      connector: new InjectedConnector()
    });

    return account;
  };

  const handleAuth = async () => {
    const walletAddress = await getWalletAddress();

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
          onCompleted: ({ authenticate: token }) => {
            Cookies.set(Constants.JWT_AUTH, JSON.stringify(token), { expires: 7 });
            Cookies.set(Constants.IS_LOGGED_IN, JSON.stringify(true));

            // If the user has never been asked for the email, give them the option to provide
            if (!hasSkippedEmail) return navigate('/verify');

            // Refresh page to get new cookies and show home page
            navigate(0);
          }
        });
      }
    });
  };

  return handleAuth;
};

export default useLogin;
