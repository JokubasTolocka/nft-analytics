import { useAuth } from '../../contexts/Auth/useAuth';
import SidebarLink from './SidebarLink';
import { ReactComponent as Home } from '../../assets/icons/Home.svg';
import { ReactComponent as Star } from '../../assets/icons/Star.svg';
import { ReactComponent as User } from '../../assets/icons/User.svg';
import { ReactComponent as ExitDoor } from '../../assets/icons/ExitDoor.svg';
import useLogout from '../../hooks/useLogout';

const Sidebar = () => {
  const { myUser } = useAuth();
  const handleDisconnect = useLogout();

  return (
    <div className="h-full border-r border-dark-40 w-[260px] pt-8 px-8 pb-10 flex flex-col">
      <div className="flex flex-col space-y-2 text-base mb-8">
        <span className="text-dark-40">My account</span>
        <span className="truncate text-white text-xl">{myUser?.walletAddress}</span>
      </div>
      <div className="flex flex-col h-full justify-between">
        <div className="flex flex-col space-y-3">
          <SidebarLink to="/" icon={Home}>
            Home
          </SidebarLink>
          <SidebarLink to="/favourites" icon={Star}>
            Favourites
          </SidebarLink>
          <SidebarLink to="/profile" icon={User}>
            Profile
          </SidebarLink>
        </div>
        <div>
          <SidebarLink onClick={handleDisconnect} isButton icon={ExitDoor} className="hover:!bg-alert-100">
            Sign Out
          </SidebarLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
