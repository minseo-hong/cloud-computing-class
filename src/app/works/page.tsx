'use client';

import { useEffect, useState } from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

import { workList } from '@/data/works';
import MainHeading from '@/components/ui/MainHeading';

const Works = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [screenWidth, setScreenWidth] = useState(1024);

  const pageLength = workList.length / 5 + 1;

  const newWorkList =
    screenWidth < 600
      ? workList.slice((currentPage - 1) * 5, currentPage * 5)
      : workList;

  useEffect(() => {
    setScreenWidth(window.innerWidth);

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="pb-16 desktop:px-6">
      <MainHeading className="hidden desktop:block" />
      <main className="px-0 desktop:px-10">
        {screenWidth < 600 && (
          <nav className="mb-6 mt-4">
            <ul className="flex items-center justify-center gap-6">
              {Array.from({ length: pageLength }, (_, index) => index + 1).map(
                (page) => (
                  <li key={page}>
                    <div
                      className={clsx(
                        'flex h-[1.5rem] w-[1.5rem] cursor-pointer items-center justify-center rounded-full text-sm',
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
        <div className="grid grid-cols-1 desktop:mt-6 desktop:grid-cols-3 desktop:gap-x-2 desktop:gap-y-6 lg:grid-cols-4">
          {newWorkList.map((work) => (
            <article key={work.slug}>
              <Link
                href={`/works/${work.slug}`}
                className="relative block aspect-video w-full overflow-hidden"
              >
                <Image
                  src={work.image.src}
                  alt={work.koName}
                  fill
                  objectFit="cover"
                />
              </Link>
              <div className="px-12 pb-8 pt-4 desktop:px-0 desktop:pb-0">
                <h1 className="text-lg desktop:text-base">{work.name}</h1>
                <p className="mt-0.5 text-sm font-extralight text-light-gray desktop:text-sm">
                  Team {work.koName}
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
