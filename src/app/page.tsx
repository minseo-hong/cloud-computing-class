import MainHeading from '@/components/ui/MainHeading';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="mb-8 px-6">
      <MainHeading />
      <p className="mt-10 text-center text-sm">
        2024.06.08.SAT 10:00AM-19:00PM
      </p>
      <p className="mt-6 text-center text-sm">
        DIMENSION GALLERY
        <br />
        58, HANGANG-DAERO,YONGSAN-GU, SEOUL
      </p>
      <div className="-ml-4 mt-8 flex w-[calc(100vw-(100vw-100%)+24px)]">
        <div className="relative right-0 z-[-1] w-[900px]">
          <div className="h-[441px]" />
          <Image
            src="/images/circle-designs/circle-design.svg"
            alt="원형 디자인"
            width={900}
            height={441}
            className="object-fit absolute right-0 top-0 w-[900px] max-w-[900px] object-right"
          />
        </div>
      </div>
      <div className="mt-12 flex flex-col items-center">
        <div className="flex items-center gap-6">
          <div className="w-[80px]">
            <Image
              src="/images/partners/kusitms.svg"
              alt="큐시즘 로고"
              width={80}
              height={18}
            />
          </div>
          <div>
            <Image
              src="/images/partners/sangsanguniv.svg"
              alt="상상유니브 로고"
              width={80}
              height={20}
              className="-mt-2"
            />
          </div>
          <div className="w-[80px]">
            <Image
              src="/images/partners/asan-nanum.svg"
              alt="아산나눔재단 로고"
              width={80}
              height={16}
            />
          </div>
        </div>
        <div className="mt-6 flex items-center gap-6">
          <div className="w-[60px]">
            <Image
              src="/images/partners/d-camp.svg"
              alt="디캠프 로고"
              width={80}
              height={13}
            />
          </div>
          <div className="-mt-1 w-[50px]">
            <Image
              src="/images/partners/codeit.svg"
              alt="코드잇 로고"
              width={80}
              height={13}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
