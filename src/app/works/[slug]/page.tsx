import Image from 'next/image';
import Link from 'next/link';

import { workList } from '@/data/works';
import Paragraph from '@/components/ui/Paragraph';

const WorkDetail = ({ params }: { params: { slug: string } }) => {
  const work = workList.find((work) => work.slug === params.slug);

  if (!work) {
    return <main>작품을 찾을 수 없습니다.</main>;
  }

  return (
    <div className="pb-16 pt-6 md:px-6">
      <main className="mx-auto max-w-5xl">
        <header className="px-6 md:px-0">
          <h1 className="text-xl font-medium">{work.name}</h1>
          <Paragraph>{work.description.simple}</Paragraph>
        </header>
        <div className="flex flex-col md:flex-row md:gap-8">
          <section className="md:flex-[3]">
            <div className="relative mt-4 aspect-video w-full overflow-hidden">
              <Image
                src={work.image.src}
                alt={work.koName}
                fill
                className="z-[-1]"
                objectFit="cover"
              />
            </div>
          </section>
          <section className="mt-6 flex flex-col gap-10 px-6 md:flex-[2] md:px-0">
            <div className="flex flex-col gap-2">
              {work.description.detail.split('\n').map((line, index) => (
                <Paragraph key={index}>{line}</Paragraph>
              ))}
            </div>
            {work.link && (
              <div>
                <h2 className="font-clash-display font-medium">Contact</h2>
                <div className="mt-1 flex w-[20rem] flex-col gap-1">
                  {work.link.web && (
                    <div className="flex items-center text-sm font-extralight">
                      <strong className="w-[4.5rem] text-xs font-medium">
                        Web Link
                      </strong>
                      <Link
                        href={work.link.web}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="min-w-0 flex-1 overflow-hidden text-ellipsis whitespace-nowrap underline"
                      >
                        {work.link.web}
                      </Link>
                    </div>
                  )}
                  {work.link.android && (
                    <div className="flex items-center text-sm font-extralight">
                      <strong className="w-[4.5rem] text-xs font-medium">
                        Android
                      </strong>
                      <Link
                        href={work.link.android}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="min-w-0 flex-1 overflow-hidden text-ellipsis whitespace-nowrap underline"
                      >
                        {work.link.android}
                      </Link>
                    </div>
                  )}
                  {work.link.ios && (
                    <div className="flex items-center text-sm font-extralight">
                      <strong className="w-[4.5rem] text-xs font-medium">
                        iOS
                      </strong>
                      <Link
                        href={work.link.ios}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="min-w-0 flex-1 overflow-hidden text-ellipsis whitespace-nowrap underline"
                      >
                        {work.link.ios}
                      </Link>
                    </div>
                  )}
                  {work.link.instagram && (
                    <div className="flex items-center text-sm font-extralight">
                      <strong className="w-[4.5rem] text-xs font-medium">
                        Instagram
                      </strong>
                      <Link
                        href={`https://www.instagram.com/${work.link.instagram}`}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="min-w-0 flex-1 overflow-hidden text-ellipsis whitespace-nowrap underline"
                      >
                        @{work.link.instagram}
                      </Link>
                    </div>
                  )}
                  {work.link.blog && (
                    <div className="flex items-center text-sm font-extralight">
                      <strong className="w-[4.5rem] text-xs font-medium">
                        Blog
                      </strong>
                      <Link
                        href={work.link.blog}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="min-w-0 flex-1 overflow-hidden text-ellipsis whitespace-nowrap underline"
                      >
                        {work.link.blog}
                      </Link>
                    </div>
                  )}
                  {work.link.github && (
                    <div className="flex items-center text-sm font-extralight">
                      <strong className="w-[4.5rem] text-xs font-medium">
                        Github
                      </strong>
                      <Link
                        href={work.link.github}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="min-w-0 flex-1 overflow-hidden text-ellipsis whitespace-nowrap underline"
                      >
                        {work.link.github}
                      </Link>
                    </div>
                  )}
                  {work.link.recruit && (
                    <div className="flex items-center text-sm font-extralight">
                      <strong className="w-[4.5rem] text-xs font-medium">
                        Recruit
                      </strong>
                      <Link
                        href={work.link.recruit}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="min-w-0 flex-1 overflow-hidden text-ellipsis whitespace-nowrap underline"
                      >
                        {work.link.recruit}
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            )}
            <div>
              <h2 className="font-medium">Team {work.teamName}</h2>
              <div className="mt-2 text-sm font-extralight leading-6">
                <ul>
                  {work.memberPartList.map((memberPart) => (
                    <li key={memberPart}>{memberPart}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default WorkDetail;
