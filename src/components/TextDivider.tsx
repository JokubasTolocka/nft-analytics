import cx from 'classnames';

interface TextDividerProps {
  title: string;
  className?: string;
}

const TextDivider = ({ title, className }: TextDividerProps) => (
  <div className={cx('flex flex-col space-y-[14px]', className)}>
    <span className="text-2xl text-dark-40">{title}</span>
    <div className="w-full h-px bg-dark-40" />
  </div>
);

export default TextDivider;
