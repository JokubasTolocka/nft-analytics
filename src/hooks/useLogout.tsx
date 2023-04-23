import Cookies from 'js-cookie';
import { useDisconnect } from 'wagmi';
import { Constants } from '../utils/constants';

const useLogout = () => {
  const { disconnectAsync } = useDisconnect();

  const handleDisconnect = async (withRefresh: boolean = true) => {
    await disconnectAsync();
    Cookies.remove(Constants.JWT_AUTH);
    Cookies.remove(Constants.IS_LOGGED_IN);
    if (withRefresh) window.location.pathname = '/';
  };

  return handleDisconnect;
};

export default useLogout;
