import MainHeading from '@/components/ui/MainHeading';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const partnerList: {
    name: string;
    src: string;
    alt: string;
    link?: string;
    widthStyle: string;
  }[] = [
    {
      name: 'KUSITMS',
      src: '/images/partners/kusitms.svg',
      alt: '큐시즘 로고',
      link: 'https://kusitms.com',
      widthStyle: 'w-[80px] desktop:w-[90px]',
    },
    {
      name: 'ASAN-NANUM',
      src: '/images/partners/asan-nanum.svg',
      alt: '아산나눔재단 로고',
      widthStyle: 'w-[70px] desktop:w-[80px]',
    },
    {
      name: 'D-CAMP',
      src: '/images/partners/d-camp.svg',
      alt: '디캠프 로고',
      widthStyle: 'w-[60px] desktop:w-[70px]',
    },
    {
      name: 'CODEIT',
      src: '/images/partners/codeit.svg',
      alt: '코드잇 로고',
      widthStyle: 'w-[55px] desktop:w-[65px]',
    },
  ];

  return (
    <div className="px-6">
      <MainHeading />
      <main className="relative flex flex-col items-center justify-between pb-8 desktop:min-h-[calc(100vh-5rem)] desktop:items-start min-[800px]:min-h-[calc(100vh-7rem)]">
        <div>
          <div className="mt-10 flex flex-col items-center gap-6 desktop:mt-0 desktop:w-[533px] desktop:flex-row desktop:justify-between desktop:gap-12">
            <p className="text-center text-sm desktop:text-left">
              2024.06.08.SAT
              <br className="hidden desktop:block" />
              10:00AM-19:00PM
            </p>
            <p className="text-center text-sm desktop:text-left">
              DIMENSION GALLERY
              <br />
              58, HANGANG-DAERO,YONGSAN-GU, SEOUL
            </p>
          </div>
        </div>
        <div className="-ml-4 mt-8 flex w-[calc(100vw-(100vw-100%)+24px)] desktop:absolute desktop:right-0 desktop:w-auto sm:top-24 sm:-mt-8 lg:top-0">
          <div className="relative right-0 z-[-1] w-[1920px] overflow-hidden desktop:overflow-visible">
            <div className="h-[450px]" />
            <Image
              src="/images/circle-designs/circle-design.svg"
              alt="원형 디자인"
              width={1920}
              height={450}
              className="object-fit absolute -right-10 top-0 w-[900px] max-w-[900px] object-right desktop:right-0 desktop:w-[1100px] desktop:max-w-[1100px]"
            />
            <div className="absolute -left-[1066px] top-[289px] h-[0.476px] w-full bg-white bg-opacity-50" />
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center">
          <div className="flex items-center gap-4 desktop:gap-6">
            <div className="flex items-end gap-6">
              {partnerList.slice(0, 2).map((partner, index) =>
                partner.link ? (
                  <Link
                    key={index}
                    href={partner.link}
                    className={clsx(partner.widthStyle)}
                  >
                    <Image
                      src={partner.src}
                      alt={partner.alt}
                      width={120}
                      height={18}
                    />
                  </Link>
                ) : (
                  <div key={index} className={clsx(partner.widthStyle)}>
                    <Image
                      src={partner.src}
                      alt={partner.alt}
                      width={120}
                      height={18}
                    />
                  </div>
                ),
              )}
            </div>
            <div className="flex items-end gap-6">
              {partnerList.slice(2, 4).map((partner, index) => (
                <div key={index} className={clsx(partner.widthStyle)}>
                  <Image
                    src={partner.src}
                    alt={partner.alt}
                    width={120}
                    height={18}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
