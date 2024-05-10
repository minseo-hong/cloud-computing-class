'use client';

import { useState } from 'react';
import Image from 'next/image';

import CarouselButton from './CarouselButton';

const PosterCarousel = () => {
  const [currentPoster, setCurrentPoster] = useState(0);

  const posterList = [
    {
      src: '/images/posters/all-poster.png',
      alt: '전체 포스터 이미지',
    },
    {
      src: '/images/posters/plan-poster.png',
      alt: '기획 포스터 이미지',
    },
    {
      src: '/images/posters/design-poster.png',
      alt: '디자인 포스터 이미지',
    },
    {
      src: '/images/posters/develop-poster.png',
      alt: '개발 포스터 이미지',
    },
  ];

  const handleNextClick = () => {
    setCurrentPoster((currentPoster + 1) % posterList.length);
  };

  const handlePrevClick = () => {
    setCurrentPoster(
      (currentPoster - 1 + posterList.length) % posterList.length,
    );
  };

  return (
    <div className="relative w-full">
      <CarouselButton direction="prev" onClick={handlePrevClick} />
      <div className="mx-auto mt-12 max-w-[20rem]">
        <Image
          src={posterList[currentPoster].src}
          alt={posterList[currentPoster].alt}
          width={2481}
          height={3508}
        />
      </div>
      <CarouselButton direction="next" onClick={handleNextClick} />
    </div>
  );
};

export default PosterCarousel;
