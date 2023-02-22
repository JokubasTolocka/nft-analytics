import React, { PropsWithChildren } from 'react';
import cx from 'classnames';

interface ContainerProps {
  title: string;
  className?: string;
}

const Container = ({ title, children, className }: PropsWithChildren<ContainerProps>) => {
  return (
    <div
      className={cx(
        'border border-dark-40 text-white rounded-[20px] py-10 px-8 max-w-[410px] w-full flex flex-col space-y-6',
        className
      )}>
      <span className="text-[32px]">{title}</span>
      <div className="h-[1px] bg-dark-40" />
      {children}
      <span className="!mt-8 text-center text-dark-20">
        If you don’t have a wallet, create one using one of the providers above
      </span>
    </div>
  );
};

export default Container;
