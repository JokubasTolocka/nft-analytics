import Container from '../../components/Container';
import useLogin from './useLogin';
import metamask from '../../assets/images/metamask.png';

const Login = () => {
  const handleAuth = useLogin();

  return (
    <div className="flex h-full justify-center items-center">
      <div className="pb-20">
        <Container title="Welcome">
          <>
            <button
              onClick={handleAuth}
              className="bg-dark-90 border-dark-60 hover:bg-primary hover:border-primary border rounded-xl px-5 py-4 flex items-center space-x-4 w-full">
              <img src={metamask} alt="metamask" />
              <span className="text-lg">MetaMask</span>
            </button>
            <div className="bg-dark-90 border-dark-60 border rounded-xl px-5 py-4 flex flex-col items-center space-y-1 w-full">
              <span className="text-lg">More authentication methods</span>
              <span className="text-sm text-dark-60">Coming soon</span>
            </div>
          </>
        </Container>
      </div>
    </div>
  );
};

export default Login;
