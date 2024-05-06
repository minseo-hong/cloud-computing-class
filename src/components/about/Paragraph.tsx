import clsx from 'clsx';

interface ParagraphProps {
  className?: string;
  children: React.ReactNode;
}

const Paragraph = ({ className, children }: ParagraphProps) => {
  return (
    <p className={clsx('text-sm font-extralight leading-6', className)}>
      {children}
    </p>
  );
};

export default Paragraph;
