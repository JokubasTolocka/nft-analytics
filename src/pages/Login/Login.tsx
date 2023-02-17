import useLogin from './useLogin';

const Login = () => {
  const handleAuth = useLogin();

  return (
    <div className="flex">
      <span>Welcome</span>
      <button onClick={handleAuth}>Authenticate with MetaMask</button>
    </div>
  );
};

export default Login;
