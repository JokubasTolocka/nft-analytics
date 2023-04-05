import React, { PropsWithChildren } from 'react';
import { Link, useLocation } from 'react-router-dom';
import cx from 'classnames';

interface SidebarLinkProps {
  to?: string;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>;
  className?: string;
  isButton?: boolean;
  onClick?: () => void;
}

const SidebarLink = ({
  children,
  to = '/missing',
  icon: Icon,
  className,
  isButton = false,
  onClick
}: PropsWithChildren<SidebarLinkProps>) => {
  const location = useLocation();

  const isCurrentRoute = location.pathname === to;

  const componentClass = cx(
    'rounded-[16px] px-4 py-3 flex items-center justify-start text-white hover:bg-dark-90 w-full font-medium',
    isCurrentRoute && 'bg-white text-dark-100 stroke-dark-100 hover:!bg-dark-20',
    className
  );

  if (isButton) {
    return (
      <button className={componentClass} onClick={onClick}>
        <Icon className="mr-3" />
        {children}
      </button>
    );
  }

  return (
    <Link to={to} className={componentClass}>
      <Icon className={cx('mr-3 text-white', isCurrentRoute && 'text-dark-100')} />
      {children}
    </Link>
  );
};

export default SidebarLink;
