import MainHeading from '@/components/ui/MainHeading';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const partnerList = [
    {
      name: 'KUSITMS',
      src: '/images/partners/kusitms.svg',
      alt: '큐시즘 로고',
      link: 'https://kusitms.com',
      width: 90,
    },
    {
      name: 'SANGSANGUNIV',
      src: '/images/partners/sangsanguniv.svg',
      alt: '상상유니브 로고',
      width: 80,
    },
    {
      name: 'ASAN-NANUM',
      src: '/images/partners/asan-nanum.svg',
      alt: '아산나눔재단 로고',
      width: 80,
    },
    {
      name: 'D-CAMP',
      src: '/images/partners/d-camp.svg',
      alt: '디캠프 로고',
      width: 70,
    },
    {
      name: 'CODEIT',
      src: '/images/partners/codeit.svg',
      alt: '코드잇 로고',
      width: 65,
    },
  ];

  return (
    <div className="px-6">
      <main className="relative mx-auto flex max-w-5xl flex-col items-center justify-between pb-8 desktop:min-h-[750px] desktop:items-start lg:min-h-[calc(100vh-4rem)]">
        <div>
          <MainHeading />
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
        <div className="-ml-4 mt-8 flex w-[calc(100vw-(100vw-100%)+24px)] desktop:absolute desktop:right-0 desktop:top-36 desktop:mt-0 desktop:w-auto min-[850px]:top-16">
          <div className="relative right-0 z-[-1] w-[900px]">
            <div className="h-[441px]" />
            <Image
              src="/images/circle-designs/circle-design.svg"
              alt="원형 디자인"
              width={900}
              height={441}
              className="object-fit absolute right-0 top-0 w-[900px] max-w-[900px] object-right desktop:w-[1100px] desktop:max-w-[1100px]"
            />
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center">
          <div className="flex flex-col items-center gap-4 desktop:flex-row desktop:gap-6">
            <div className="flex items-end gap-6">
              {partnerList.slice(0, 3).map((partner, index) =>
                partner.link ? (
                  <Link
                    key={index}
                    href={partner.link}
                    style={{
                      width: partner.width,
                    }}
                  >
                    <Image
                      src={partner.src}
                      alt={partner.alt}
                      width={120}
                      height={18}
                    />
                  </Link>
                ) : (
                  <div
                    key={index}
                    style={{
                      width: partner.width,
                    }}
                  >
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
              {partnerList.slice(3, 5).map((partner, index) => (
                <div
                  key={index}
                  style={{
                    width: partner.width,
                  }}
                >
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
