import clsx from 'clsx';

import TextLogo from './TextLogo';

interface MainHeadingProps {
  className?: string;
}

const MainHeading = ({ className }: MainHeadingProps) => {
  return (
    <>
      <header
        className={clsx(
          'z-50 mt-12 w-full md:fixed md:mt-0 md:bg-black md:pb-2 md:pt-2',
          className,
        )}
      >
        <h1 className="flex flex-col items-center md:items-start">
          <span className="text-base xs:text-lg md:hidden">
            KUSITMS 1st EXHIBITION
          </span>
          <div className="w-[300px] xs:w-[350px] md:w-[439px]">
            <TextLogo />
          </div>
          {/* <strong className="font-clash-display text-3xl xs:text-4xl desktop:text-5xl">
            ENGAGE ENERGY
          </strong> */}
        </h1>
      </header>
      <div className="md:h-[4rem]" />
    </>
  );
};

export default MainHeading;
