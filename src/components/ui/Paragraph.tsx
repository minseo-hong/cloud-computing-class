import clsx from 'clsx';

interface ParagraphProps {
  className?: string;
  children: React.ReactNode;
}

const Paragraph = ({ className, children }: ParagraphProps) => {
  return (
    <p
      className={clsx(
        'whitespace-pre-wrap text-sm font-extralight leading-6',
        className,
      )}
    >
      {children}
    </p>
  );
};

export default Paragraph;
