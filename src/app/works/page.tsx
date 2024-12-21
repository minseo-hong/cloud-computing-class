'use client';

import { useEffect, useState } from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

import MainHeading from '@/components/ui/MainHeading';
import { getWorkList } from '@/api/work';
import { Work } from '@/types/work.type';

const Works = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [screenWidth, setScreenWidth] = useState(1024);
  const [workList, setWorkList] = useState<Work[]>([]);

  const pageLength = workList.length / 5 + 1;

  const newWorkList =
    screenWidth < 600
      ? workList.slice((currentPage - 1) * 5, currentPage * 5)
      : workList;

  useEffect(() => {
    const fetchWorkList = async () => {
      const workList: Work[] = await getWorkList();
      setWorkList(workList);
    };
    fetchWorkList();
  }, []);

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
    <div className="pb-16 md:px-6">
      <MainHeading className="hidden md:block" />
      <main className="px-0 md:px-10">
        {screenWidth < 768 && workList.length !== 0 && (
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
        <div className="grid grid-cols-1 md:mt-6 md:grid-cols-3 md:gap-x-2 md:gap-y-6 lg:grid-cols-4">
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
                  className="object-cover"
                />
              </Link>
              <div className="px-12 pb-8 pt-4 md:px-0 md:pb-0">
                <h1 className="text-lg md:text-base">{work.name}</h1>
                <p className="mt-0.5 text-sm font-extralight text-light-gray md:text-sm">
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
