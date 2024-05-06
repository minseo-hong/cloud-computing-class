import clsx from 'clsx';

interface TabContentLayoutProps {
  className?: string;
  children: React.ReactNode;
}

const TabContentLayout = ({ className, children }: TabContentLayoutProps) => {
  return <div className={clsx('mt-12', className)}>{children}</div>;
};

export default TabContentLayout;
