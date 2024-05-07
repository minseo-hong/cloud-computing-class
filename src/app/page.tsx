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
      <main className="desktop:items-start desktop:min-h-[750px] relative mx-auto flex max-w-5xl flex-col items-center justify-between pb-8 lg:min-h-[calc(100vh-4rem)]">
        <div>
          <MainHeading />
          <div className="desktop:flex-row desktop:w-[533px] desktop:gap-12 desktop:justify-between desktop:mt-4 mt-10 flex flex-col items-center gap-6">
            <p className="desktop:text-left text-center text-sm">
              2024.06.08.SAT
              <br className="desktop:block hidden" />
              10:00AM-19:00PM
            </p>
            <p className="desktop:text-left text-center text-sm">
              DIMENSION GALLERY
              <br />
              58, HANGANG-DAERO,YONGSAN-GU, SEOUL
            </p>
          </div>
        </div>
        <div className="desktop:mt-0 desktop:top-36 desktop:w-auto desktop:right-0 desktop:absolute -ml-4 mt-8 flex w-[calc(100vw-(100vw-100%)+24px)] lg:top-8">
          <div className="relative right-0 z-[-1] w-[900px]">
            <div className="h-[441px]" />
            <Image
              src="/images/circle-designs/circle-design.svg"
              alt="원형 디자인"
              width={900}
              height={441}
              className="object-fit desktop:w-[1100px] desktop:max-w-[1100px] absolute right-0 top-0 w-[900px] max-w-[900px] object-right"
            />
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center">
          <div className="desktop:flex-row desktop:gap-6 flex flex-col items-center gap-4">
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
