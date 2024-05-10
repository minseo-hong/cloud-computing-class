import clsx from 'clsx';

interface TabItemLabelProps {
  className?: string;
  label: string;
  lineEnter?: boolean;
  active?: boolean;
}

const TabItemLabel = ({
  className,
  label,
  lineEnter = false,
  active = true,
}: TabItemLabelProps) => {
  return (
    <span
      className={clsx('font-clash-display text-xl font-semibold', className, {
        'text-red': active,
        'text-gray': !active,
        'whitespace-pre-wrap text-center': lineEnter,
      })}
    >
      {label}
    </span>
  );
};

export default TabItemLabel;
