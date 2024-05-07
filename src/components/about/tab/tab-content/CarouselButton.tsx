import clsx from 'clsx';

import NextIcon from '@/components/ui/icons/NextIcon';
import PrevIcon from '@/components/ui/icons/PrevIcon';

interface CarouselButtonProps {
  direction: 'prev' | 'next';
  onClick?: () => void;
}

const CarouselButton = ({ direction, onClick }: CarouselButtonProps) => {
  return (
    <button
      className={clsx(
        'absolute top-1/2 flex h-[1.5rem] w-[1.5rem] -translate-y-1/2 items-center justify-center rounded-full bg-white text-black',
        {
          'left-0 desktop:left-8': direction === 'prev',
          'right-0 desktop:right-8': direction === 'next',
        },
      )}
      onClick={onClick}
    >
      <span className="text-sm">
        {direction === 'prev' ? (
          <PrevIcon />
        ) : (
          direction === 'next' && <NextIcon />
        )}
      </span>
    </button>
  );
};

export default CarouselButton;
