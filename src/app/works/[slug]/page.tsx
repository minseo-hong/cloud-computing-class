import Image from 'next/image';

import { workList } from '@/data/works';
import Paragraph from '@/components/ui/Paragraph';
import Link from 'next/link';

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
            <div className="mt-4 aspect-video w-full">
              <Image
                src={work.image.src}
                alt={work.image.alt}
                width={4096}
                height={2304}
                className="z-[-1]"
              />
            </div>
          </section>
          <section className="mt-6 flex flex-col gap-10 px-6 md:flex-[2] md:px-0">
            <div className="flex flex-col gap-2">
              {work.description.detail.split('\n').map((line, index) => (
                <Paragraph key={index}>{line}</Paragraph>
              ))}
            </div>
            <div>
              <h2 className="font-clash-display font-medium">Contact</h2>
              <div className="mt-1 flex flex-col gap-1">
                <div className="flex items-center text-sm font-extralight">
                  <strong className="w-[4.5rem] text-xs font-medium">
                    Web Link
                  </strong>
                  <Link
                    href="https://www.youtube.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="underline"
                  >
                    https://www.youtube.com
                  </Link>
                </div>
                <div className="flex items-center text-sm font-extralight">
                  <strong className="w-[4.5rem] text-xs font-medium">
                    Instagram
                  </strong>
                  <span>@farmus</span>
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-medium">Team 모던파머</h2>
              <div className="mt-2 text-sm font-extralight leading-6">
                <ul>
                  <li>기획 | 홍길동 홍길동</li>
                  <li>디자인 | 홍길동</li>
                  <li>개발 | 홍길동 홍길동 홍길동 홍길동</li>
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
