import Container from '../../../components/Container';
import useLogin from './useLogin';
import metamask from '../../../assets/images/metamask.png';
import { useConnect } from 'wagmi';

const Login = () => {
  const handleAuth = useLogin();
  const { connectors } = useConnect();

  const isMetamaskEnabled = connectors.some((connector) => connector.name === 'MetaMask');

  return (
    <div className="bg-dark-100 h-full w-full flex flex-col">
      <div className="flex h-full justify-center items-center">
        <div className="pb-20">
          <Container
            title="Welcome"
            footerText="If you don’t have a wallet, create one using one of the providers above">
            <>
              {isMetamaskEnabled ? (
                <button
                  onClick={handleAuth}
                  className="bg-dark-90 border-dark-60 hover:bg-primary hover:border-primary border rounded-xl px-5 py-4 flex items-center space-x-4 w-full">
                  <img src={metamask} alt="metamask" />
                  <span className="text-lg">MetaMask</span>
                </button>
              ) : (
                <div className="rounded-xl px-5 py-4 flex items-center justify-center w-full border bg-alert-100 border-alert-50">
                  Metamask extension not found
                </div>
              )}
              <div className="bg-dark-90 border-dark-60 border rounded-xl px-5 py-4 flex flex-col items-center space-y-1 w-full">
                <span className="text-lg">More authentication methods</span>
                <span className="text-sm text-dark-60">Coming soon</span>
              </div>
            </>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Login;
