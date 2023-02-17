import { useAuth } from '../contexts/Auth/useAuth';
import Home from './authenticated/Home';
import Login from './Login/Login';

const Main = () => {
  const { myUser } = useAuth();

  if (myUser) return <Home />;

  return <Login />;
};

export default Main;
