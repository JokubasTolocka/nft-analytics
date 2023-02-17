import Cookies from 'js-cookie';
import { useDisconnect } from 'wagmi';
import { Constants } from '../utils/constants';

const useLogout = () => {
  const { disconnectAsync } = useDisconnect();

  const handleDisconnect = async () => {
    await disconnectAsync();
    Cookies.remove(Constants.JWT_AUTH);
    Cookies.remove(Constants.IS_LOGGED_IN);
    window.location.pathname = '/';
  };

  return handleDisconnect;
};

export default useLogout;
