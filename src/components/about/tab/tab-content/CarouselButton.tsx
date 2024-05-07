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
          'desktop:left-8 left-0': direction === 'prev',
          'desktop:left-8 right-0': direction === 'next',
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
