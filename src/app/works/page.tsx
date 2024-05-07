'use client';

import { useState } from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

import { workList } from '@/data/works';

const Works = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const pageLength = workList.length / 5 + 1;

  const newWorkList = workList.slice((currentPage - 1) * 5, currentPage * 5);

  return (
    <main>
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
      <div>
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
            <div className="px-12 pb-8 pt-4">
              <h1 className="text-lg">{work.name}</h1>
              <p className="mt-0.5 text-sm font-extralight">
                {work.description.simple}
              </p>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
};

export default Works;
