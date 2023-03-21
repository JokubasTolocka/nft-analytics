import { PropsWithChildren } from 'react';
import cx from 'classnames';

const buttonVariants = {
  default: 'bg-transparent border border-white hover:bg-dark-90',
  defaultFull: 'bg-white border border-white',
  small: 'bg-primary'
};

interface ButtonProps {
  className?: string;
  onClick: () => void;
  isActionLoading?: boolean;
  variant?: keyof typeof buttonVariants;
}

const Button = ({
  children,
  variant = 'default',
  className,
  onClick,
  isActionLoading
}: PropsWithChildren<ButtonProps>) => (
  <button
    className={cx('flex space-x-2 items-center rounded-2xl py-3 px-6 text-lg', buttonVariants[variant], className)}
    onClick={() => !isActionLoading && onClick()}>
    {!isActionLoading ? children : 'Loading...'}
  </button>
);

export default Button;
