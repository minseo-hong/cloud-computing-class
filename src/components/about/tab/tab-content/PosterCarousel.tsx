'use client';

import { useState } from 'react';
import Image from 'next/image';

import CarouselButton from './CarouselButton';
import clsx from 'clsx';

const PosterCarousel = () => {
  const [currentPoster, setCurrentPoster] = useState(0);

  const posterList = [
    {
      src: 'https://cloud-computing-class-s3.s3.ap-northeast-2.amazonaws.com/images/posters/all-poster.png',
      alt: '전체 포스터 이미지',
    },
    {
      src: 'https://cloud-computing-class-s3.s3.ap-northeast-2.amazonaws.com/images/posters/plan-poster.png',
      alt: '기획 포스터 이미지',
    },
    {
      src: 'https://cloud-computing-class-s3.s3.ap-northeast-2.amazonaws.com/images/posters/design-poster.png',
      alt: '디자인 포스터 이미지',
    },
    {
      src: 'https://cloud-computing-class-s3.s3.ap-northeast-2.amazonaws.com/images/posters/develop-poster.png',
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
        {posterList.map((poster, index) => (
          <Image
            key={index}
            src={poster.src}
            alt={poster.alt}
            width={2481}
            height={3508}
            className={clsx({
              hidden: currentPoster !== index,
            })}
          />
        ))}
      </div>
      <CarouselButton direction="next" onClick={handleNextClick} />
    </div>
  );
};

export default PosterCarousel;
