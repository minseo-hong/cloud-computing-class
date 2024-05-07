'use client';

import { useEffect, useState } from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

import { workList } from '@/data/works';
import MainHeading from '@/components/ui/MainHeading';

const Works = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const pageLength = workList.length / 5 + 1;

  const newWorkList =
    screenWidth < 600
      ? workList.slice((currentPage - 1) * 5, currentPage * 5)
      : workList;

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="desktop:px-6">
      <main className="mx-auto max-w-5xl">
        {screenWidth < 600 && (
          <nav className="mb-6 mt-4">
            <ul className="flex items-center justify-center gap-6">
              {Array.from({ length: pageLength }, (_, index) => index + 1).map(
                (page) => (
                  <li key={page}>
                    <div
                      className={clsx(
                        'flex h-[1.5rem] w-[1.5rem] items-center justify-center rounded-full text-sm',
                        {
                          'bg-white text-black': page === currentPage,
                          'bg-gray text-black': page !== currentPage,
                        },
                      )}
                      onClick={() => setCurrentPage(page)}
                    >
                      {page}
                    </div>
                  </li>
                ),
              )}
            </ul>
          </nav>
        )}
        <MainHeading className="hidden desktop:block" />
        <div className="grid grid-cols-1 desktop:mt-6 desktop:grid-cols-3 desktop:gap-x-3 desktop:gap-y-6 md:grid-cols-4 lg:grid-cols-5">
          {newWorkList.map((work) => (
            <article key={work.slug}>
              <Link
                href={`/works/${work.slug}`}
                className="w-full overflow-hidden"
              >
                <Image
                  src={work.image.src}
                  alt={work.image.alt}
                  width={1800}
                  height={1029}
                  objectFit="cover"
                />
              </Link>
              <div className="px-12 pb-8 pt-4 desktop:px-0 desktop:pb-0">
                <h1 className="text-lg desktop:text-base">{work.name}</h1>
                <p className="mt-0.5 text-sm font-extralight text-light-gray desktop:text-sm">
                  Team {work.teamName}
                </p>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Works;
