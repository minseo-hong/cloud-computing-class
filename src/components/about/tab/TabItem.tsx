import clsx from 'clsx';

interface TabItemProps {
  as?: keyof JSX.IntrinsicElements;
  active?: boolean;
  onClick?: () => void;
}

const TabItem = ({ as: Wrapper = 'div', active, onClick }: TabItemProps) => {
  return (
    <Wrapper onClick={onClick}>
      <div
        className={clsx('h-[1.125rem] w-[1.125rem] rounded-full', {
          'bg-red': active,
          'bg-gray': !active,
        })}
      />
    </Wrapper>
  );
};

export default TabItem;
