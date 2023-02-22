import { PropsWithChildren } from 'react';
import { Link, useLocation } from 'react-router-dom';
import cx from 'classnames';

interface SidebarLinkProps {
  to?: string;
  icon: string;
  className?: string;
  isButton?: boolean;
  onClick?: () => void;
}

const SidebarLink = ({
  children,
  to = '/missing',
  icon,
  className,
  isButton = false,
  onClick
}: PropsWithChildren<SidebarLinkProps>) => {
  const location = useLocation();

  const isCurrentRoute = location.pathname === to;

  const componentClass = cx(
    'rounded-[16px] px-4 py-3 flex items-center justify-start text-white hover:bg-dark-90 w-full',
    isCurrentRoute && 'bg-white text-dark-100 hover:!bg-dark-20',
    className
  );

  if (isButton) {
    return (
      <button className={componentClass} onClick={onClick}>
        <img src={icon} alt="icon" className="mr-3" />
        {children}
      </button>
    );
  }

  return (
    <Link to={to} className={componentClass}>
      <img src={icon} alt="icon" className="mr-3" />
      {children}
    </Link>
  );
};

export default SidebarLink;
