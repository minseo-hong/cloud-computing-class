import DDay from '@/components/work/DDay';

const ComingSoonPage = () => {
  return (
    <main className="flex h-[calc(100vh-4rem)] items-center justify-center">
      <div className="relative flex w-full justify-center overflow-hidden">
        <div className="flex flex-col gap-4">
          {Array.from({ length: 3 }, (_, index) => (
            <div key={index} className="flex gap-4">
              {Array.from({ length: 4 }, (_, index) => (
                <div
                  key={index}
                  className="aspect-video w-[15rem] bg-[#181818] blur-sm"
                />
              ))}
            </div>
          ))}
        </div>
        <div className="absolute top-1/2 -translate-y-full">
          <DDay year={2024} month={5} day={25} />
          <p className="font-medium">
            프로젝트는 전시 오픈 후 아카이빙 될 예정입니다.
          </p>
        </div>
      </div>
    </main>
  );
};

export default ComingSoonPage;
