import clsx from 'clsx';

interface MainHeadingProps {
  className?: string;
}

const MainHeading = ({ className }: MainHeadingProps) => {
  return (
    <header className={clsx('desktop:mt-2 mt-12', className)}>
      <h1 className="desktop:items-start flex flex-col items-center">
        <span className="desktop:hidden xs:text-lg text-base">
          KUSITMS 1st EXHIBITION
        </span>
        <strong className="desktop:text-5xl xs:text-4xl font-clash-display text-3xl">
          ENGAGE ENERGY
        </strong>
      </h1>
    </header>
  );
};

export default MainHeading;
