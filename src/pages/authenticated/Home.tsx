import { useAuth } from '../../contexts/Auth/useAuth';
import useLogout from '../../hooks/useLogout';

const Home = () => {
  const handleDisconnect = useLogout();
  const { myUser } = useAuth();

  return (
    <div className="flex flex-col">
      <span>Authenticated!</span>
      <span>{myUser?.walletAddress}</span>
      <button onClick={handleDisconnect}>Disconnect</button>
    </div>
  );
};

export default Home;
