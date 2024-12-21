import MainHeading from '@/components/ui/MainHeading';
import Image from 'next/image';

const ArchivePage = () => {
  return (
    <main className="flex flex-col gap-6 px-6">
      <MainHeading />
      <div className="flex flex-col items-start justify-center gap-6 md:flex-row md:gap-0">
        <h1 className="w-full text-center font-clash-display text-2xl font-semibold leading-5 md:max-w-[22rem] md:text-start">
          EXHIBITION VIEW
        </h1>
        <div className="flex flex-col gap-4">
          {Array.from({ length: 13 }, (_, index) => index + 1).map((th) => (
            <div
              key={th}
              className="relative aspect-video w-full overflow-hidden md:w-[30rem]"
            >
              <Image
                src={`https://cloud-computing-class-s3.s3.ap-northeast-2.amazonaws.com/images/archive/${th}.png`}
                alt={`${th}번째 이미지`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ArchivePage;
