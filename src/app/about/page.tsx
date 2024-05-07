import Image from 'next/image';

import Paragraph from '@/components/ui/Paragraph';
import TabSection from '@/components/about/tab/TabSection';
import MainHeading from '@/components/ui/MainHeading';

const About = () => {
  const placeMapList: {
    floor: string;
    image: {
      src: string;
      alt: string;
      width: number;
      height: number;
    };
  }[] = [
    {
      floor: '1F',
      image: {
        src: '/images/place-maps/1f-place-map.svg',
        alt: '1층 장소 지도',
        width: 224,
        height: 300,
      },
    },
    {
      floor: 'B1',
      image: {
        src: '/images/place-maps/b1f-place-map.svg',
        alt: '지하 1층 장소 지도',
        width: 326,
        height: 166,
      },
    },
  ];

  return (
    <div className="px-6 pb-16">
      <main className="mx-auto max-w-5xl">
        <MainHeading />
        <div className="mx-auto max-w-3xl">
          <section className="desktop:flex-row desktop:items-end mt-8 flex flex-col gap-6">
            <Paragraph>
              큐시즘에서는 기획, 개발, 디자인 세 파트가 각자의 역량을 발휘하며
              새로운 서비스를 제작합니다. 이는 서로 맞물리며 에너지를 형성하는
              톱니바퀴의 모습과 닮았습니다. 우리는 구조화된 규칙 속에서
              맞물리며, 새로운 에너지를 만들어냅니다. 큐시즘은 이러한 세 파트를
              존중하며 더 나은 미래를 위한 서비스 제작을 위해 나아가고 있습니다.
            </Paragraph>
            <Paragraph>
              세 파트는 각자의 위치에 존재하며 서로 다른 모습으로 역할합니다.
              기획자는 현상을 다각도로 바라보고 새로운 질문을 던지며 서비스를
              제안합니다. 디자이너는 사용자를 고려해 보다 편리한 흐름으로
              실제하는 형태를 만듭니다. 개발자는 서비스가 작동하고 사용자에게
              전달될 수 있도록 구현합니다. 새로운 에너지를 만들어갈 큐밀리들을
              응원하며, engage your energy.
            </Paragraph>
          </section>
          <section className="mt-12">
            <h2 className="font-clash-display text-xl font-semibold">
              VISITOR GUIDE
            </h2>
            <Paragraph className="mt-4">
              큐시즘 1회 전시는 서울특별시 용산구 디멘션갤러리에서 개최됩니다.
            </Paragraph>
            <div className="desktop:flex-row desktop:justify-between desktop:gap-12 desktop:mt-10 mx-auto mt-6 flex max-w-2xl flex-col gap-8">
              {placeMapList.map((placeMap, index) => (
                <div key={index}>
                  <h3 className="font-medium">{placeMap.floor}</h3>
                  <div className="mt-4">
                    <Image
                      src={placeMap.image.src}
                      alt={placeMap.image.alt}
                      width={placeMap.image.width}
                      height={placeMap.image.height}
                      className="mx-auto"
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
          <TabSection />
        </div>
      </main>
    </div>
  );
};

export default About;
