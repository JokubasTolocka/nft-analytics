import React, { PropsWithChildren } from 'react';
import cx from 'classnames';

interface ContainerProps {
  title: string;
  description?: string;
  footerText?: string;
  className?: string;
}

const Container = ({ title, description, footerText, children, className }: PropsWithChildren<ContainerProps>) => {
  return (
    <div
      className={cx(
        'border border-dark-40 text-white rounded-[20px] py-10 px-8 max-w-[410px] w-full flex flex-col space-y-6',
        className
      )}>
      <div className="flex flex-col">
        <span className="text-[32px]">{title}</span>
        {!!description && <span className="text-sm mt-3 text-dark-20">{description}</span>}
      </div>
      <div className="h-[1px] bg-dark-40" />
      {children}
      {!!footerText && <span className="!mt-8 text-center text-dark-20">{footerText}</span>}
    </div>
  );
};

export default Container;
